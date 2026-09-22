---
title: "Offline-first sync: tombstones and convergent merges"
description: "Why a delete has to become a record instead of disappearing, and how two offline copies of the same data find their way back to one answer."
date: "2026-09-15"
---

# Offline-first sync: tombstones and convergent merges

_Draft — code walkthrough and diagram to follow._

An offline-first app makes a promise that sounds simple and isn't: everything
works with no connection, and once the connection comes back, every device
ends up agreeing on the same data. localStorage (or IndexedDB) is the source
of truth for the UI, a backend row is a second copy of the same truth, and
the two only talk occasionally. In between, either side can change. Sync is
the piece that reconciles them without a user ever noticing it happened.

The two mistakes that break this promise both look harmless in isolation.

## Mistake one: deleting means deleting

The obvious way to remove an item is to remove it — filter it out of the
array, drop the row. It works right up until two devices are involved. Delete
a habit on your phone while offline, and the laptop — which never heard about
the delete — still has it. The next sync pulls the laptop's copy back down,
and the habit you deleted reappears. Not because sync is broken, but because
nothing ever recorded that a delete *happened*; there is no way to tell "this
was removed" apart from "this was never there."

The fix is to stop deleting and start marking. A delete becomes a normal
mutation that sets a `deletedAt` timestamp on the record, same as an edit
would set `updatedAt`. The record still exists — as a tombstone — so it can
travel through the same merge path as anything else, and "removed" is a
fact that syncs the same way any other field does. The UI filters tombstoned
records out when it renders a list, but sync never has to special-case a
delete: it is just another timestamped write, and the merge picks the newest
one like it would for a title edit.

Left alone forever, tombstones accumulate — an offline-first app can't just
purge them the moment it sees one, since another device might not have
caught up to the delete yet and would resurrect it right back. The practical
answer is a grace period: keep a tombstone long enough that every device
plausibly reachable has had a chance to sync (a background sweep after some
number of days is enough), then drop it for good.

## Mistake two: assuming every record has an id

Merge logic usually keys on `id`. That works until it meets a shape of data
that was never given one — a budget-per-category record, say, where the
category name already *is* the identity and adding a synthetic id would just
be a second name for the same thing. The fix isn't to force an id onto
everything; it's to let the merge key be whatever actually identifies the
record for its own type, id or not. The rest of the merge logic doesn't care
which one it got — it only needs *some* stable key to compare two versions
of "the same thing" against each other.

## Deciding which copy wins

Once every record — normal or tombstoned — carries a timestamp, the merge
rule is last-write-wins: for a given key, keep whichever copy has the later
timestamp. The subtlety is that "the timestamp" isn't always the same field.
A server-touched row has one stamp, a client-only edit has another, and a
delete has a third. Picking a winner means comparing all the timestamps a
record could plausibly carry and using the latest one as that record's
*effective* time — not just trusting a single field and hoping every code
path remembered to set it.

That last clause is the one worth dwelling on. The moment a store gets a new
field, a new action, or a new record type, someone has to remember to stamp
it — and "someone has to remember" is exactly the kind of rule that survives
right up until the first store that forgets. A record with no stamp at all
has to fall back to something (local-wins is the least surprising default),
but the real fix is structural: bake the stamping into the same shared write
path every mutation already goes through, so a new field can't opt out of it
by accident.

## Where this stops being enough

Last-write-wins is a compromise, not a correctness proof. It is exactly
right for "the user edited this field on two devices" — one of the edits is
newer, and picking it is the correct outcome, not just a convenient one. It
is the wrong tool for the case where an app models a value as a whole object
when it is actually made of independent fields that should each keep their
own timestamp — a full-record merge in that shape will silently discard a
real edit that happened to sync alongside a slightly newer one on a field
nobody meant to touch. The honest fix there is narrower merges, not a
cleverer resolution rule.

The other thing a naive implementation gets wrong is treating sync as
one-directional: push local changes, forget the remote ones exist until the
next full pull. Two tabs of the same app open at once will find this
immediately, because a real-time update arriving on a background tab can
turn into a fresh outbound write of the very state it just received — a
silent loop that never surfaces as a bug report, just as data that never
settles. Guarding against it takes the same shape as everything above: don't
special-case sync, make the write path notice when nothing has actually
changed and skip the round trip.

None of this is exotic — it's the standard shape of CRDT-adjacent,
convergent replication, minus the parts a small localStorage-backed app
doesn't need. The interesting part isn't the theory; it's how many of the
usual sync bugs — a resurrected delete, a budget merge that silently drops
the wrong row, a background tab arguing with the tab you're looking at —
trace back to one of the two mistakes above and disappear once the tombstone
and the merge key are treated as first-class data instead of an
afterthought.

Next: the actual merge function, what an effective-timestamp comparison
looks like in code, and a diagram of a delete travelling from one device to
another without ever coming back to life.
