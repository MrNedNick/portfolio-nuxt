<template>
  <div>
    <h1 class="text-2xl font-semibold mb-6">Blog</h1>

    <label class="block max-w-sm mb-8">
      <span class="text-sm text-gray-500">Search posts</span>
      <input
        type="text"
        v-model="query"
        placeholder="Search by title or content…"
        class="mt-1 block w-full rounded border border-gray-300 px-3 py-2 focus:border-gray-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800"
      />
    </label>

    <section v-if="pending">Loading...</section>
    <section v-else-if="error">Something went wrong... Try again!</section>
    <section v-else-if="filteredPosts.length === 0" class="text-gray-500">
      <p>No posts match &ldquo;{{ query }}&rdquo;.</p>
      <button type="button" class="mt-2 underline" @click="query = ''">
        Clear search
      </button>
    </section>
    <ul v-else class="grid grid-cols-1 gap-4">
      <li
        v-for="post in filteredPosts"
        :key="post._path"
        class="border border-gray-200 rounded-sm p-4 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800"
      >
        <NuxtLink :to="post._path">
          <h2 class="font-semibold" v-html="highlight(post.title || post._path)" />
          <p
            v-if="post.description"
            class="text-sm text-gray-500"
            v-html="highlight(post.description)"
          />
          <p
            v-if="bodyExcerpt(post)"
            class="text-sm text-gray-500 mt-1"
            v-html="highlight(bodyExcerpt(post))"
          />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { data: posts, pending, error } = await useAsyncData("blog-posts", () =>
  queryContent("/blog").find()
);

const query = ref("");

function plainText(node) {
  if (!node) return "";
  if (typeof node.value === "string") return node.value;
  if (Array.isArray(node.children)) {
    return node.children.map(plainText).join(" ");
  }
  return "";
}

const postsWithText = computed(() =>
  (posts.value || []).map((post) => {
    const text = plainText(post.body);
    return { ...post, _text: text, _textLower: text.toLowerCase() };
  })
);

const filteredPosts = computed(() => {
  const q = query.value.trim().toLowerCase();
  if (!q) return postsWithText.value;
  return postsWithText.value.filter((post) => {
    return (
      (post.title || "").toLowerCase().includes(q) ||
      (post.description || "").toLowerCase().includes(q) ||
      post._textLower.includes(q)
    );
  });
});

function bodyExcerpt(post) {
  const q = query.value.trim().toLowerCase();
  if (!q) return "";
  const idx = post._textLower.indexOf(q);
  if (idx === -1) return "";
  const start = Math.max(0, idx - 40);
  const end = Math.min(post._text.length, idx + q.length + 40);
  const prefix = start > 0 ? "…" : "";
  const suffix = end < post._text.length ? "…" : "";
  return `${prefix}${post._text.slice(start, end).trim()}${suffix}`;
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function highlight(text) {
  const safe = escapeHtml(text || "");
  const q = query.value.trim();
  if (!q) return safe;
  const escapedQuery = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`(${escapedQuery})`, "ig");
  return safe.replace(re, '<mark class="bg-yellow-200 dark:bg-yellow-600">$1</mark>');
}
</script>
