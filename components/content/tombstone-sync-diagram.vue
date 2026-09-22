<template>
  <figure class="not-prose my-8">
    <svg
      viewBox="0 0 720 312"
      role="img"
      aria-labelledby="tombstone-sync-title tombstone-sync-desc"
      class="w-full h-auto text-gray-800 dark:text-gray-200"
    >
      <title id="tombstone-sync-title">A delete syncing between two devices as a tombstone</title>
      <desc id="tombstone-sync-desc">
        The phone deletes a habit by stamping deletedAt and pushes it to the cloud store. The
        laptop, which was offline and still has the habit, pulls the row, compares timestamps,
        and applies the tombstone — the habit stays deleted instead of reappearing.
      </desc>

      <!-- columns -->
      <g font-family="inherit" font-size="13">
        <!-- Phone -->
        <rect x="16" y="16" width="180" height="72" rx="8"
          class="fill-gray-50 dark:fill-gray-800 stroke-gray-300 dark:stroke-gray-600" stroke-width="1.5" />
        <text x="106" y="40" text-anchor="middle" font-weight="600">Phone</text>
        <text x="106" y="60" text-anchor="middle" class="fill-current">deletes "Morning run"</text>
        <text x="106" y="76" text-anchor="middle" font-family="ui-monospace, monospace" font-size="11" class="fill-current opacity-70">
          deletedAt: t1
        </text>

        <!-- Cloud -->
        <rect x="270" y="114" width="180" height="72" rx="8"
          class="fill-gray-50 dark:fill-gray-800 stroke-gray-300 dark:stroke-gray-600" stroke-width="1.5" />
        <text x="360" y="138" text-anchor="middle" font-weight="600">user_store row</text>
        <text x="360" y="158" text-anchor="middle" font-family="ui-monospace, monospace" font-size="11" class="fill-current opacity-70">
          effectiveTs = t1
        </text>
        <text x="360" y="174" text-anchor="middle" class="fill-current opacity-70" font-size="11">
          (tombstoned)
        </text>

        <!-- Laptop, still holding the pre-delete copy -->
        <rect x="524" y="16" width="180" height="72" rx="8"
          class="fill-gray-50 dark:fill-gray-800 stroke-gray-300 dark:stroke-gray-600" stroke-width="1.5" />
        <text x="614" y="40" text-anchor="middle" font-weight="600">Laptop</text>
        <text x="614" y="60" text-anchor="middle" class="fill-current">was offline —</text>
        <text x="614" y="76" text-anchor="middle" class="fill-current">still has the habit</text>

        <!-- Laptop after merge -->
        <rect x="524" y="212" width="180" height="88" rx="8"
          class="fill-gray-50 dark:fill-gray-800 stroke-emerald-500 dark:stroke-emerald-400" stroke-width="1.5" />
        <text x="614" y="234" text-anchor="middle" font-weight="600">Laptop, after pullAll()</text>
        <text x="614" y="252" text-anchor="middle" class="fill-current">habit stays deleted</text>
        <text x="614" y="268" text-anchor="middle" font-family="ui-monospace, monospace" font-size="10" class="fill-current opacity-70">
          effectiveTs(remote)
        </text>
        <text x="614" y="282" text-anchor="middle" font-family="ui-monospace, monospace" font-size="10" class="fill-current opacity-70">
          &gt; effectiveTs(local)
        </text>
      </g>

      <!-- arrows -->
      <g class="stroke-current" stroke-width="1.5" fill="none" marker-end="url(#arrow)">
        <path d="M106 88 L106 100 Q106 114 130 114 L270 148" />
        <path d="M614 88 L614 130 Q614 148 590 148 L450 148" stroke-dasharray="4 4" />
        <path d="M360 186 L360 212 Q360 232 400 232 L524 250" />
      </g>

      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" class="fill-current" />
        </marker>
      </defs>

      <text x="200" y="112" font-size="11" class="fill-current opacity-60">pushKey()</text>
      <text x="460" y="140" font-size="11" class="fill-current opacity-60">GET (pullAll)</text>
      <text x="392" y="228" font-size="11" class="fill-current opacity-60">mergeRecords()</text>
    </svg>
    <figcaption class="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
      The habit is never removed from either array — it is marked, synced, and merged like any
      other write. The laptop keeps it deleted because the tombstone's timestamp wins, not
      because sync special-cased a delete.
    </figcaption>
  </figure>
</template>
