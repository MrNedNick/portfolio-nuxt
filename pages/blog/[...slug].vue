<template>
  <ContentDoc v-slot="{ doc }">
    <article class="blog-article prose max-w-none dark:prose-invert">
      <header class="not-prose mb-10 border-b border-gray-200 pb-8 dark:border-gray-700">
        <p class="mb-3 text-sm font-medium text-gray-500 dark:text-gray-400">
          <time v-if="doc.date" :datetime="doc.date">{{ formatDate(doc.date) }}</time>
          <span v-if="doc.date" aria-hidden="true"> · </span>
          <span>{{ readingTime(doc.body) }}</span>
        </p>
        <h1 class="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          {{ doc.title }}
        </h1>
        <p v-if="doc.description" class="mt-4 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
          {{ doc.description }}
        </p>
      </header>
      <ContentRenderer :value="doc" />
    </article>
  </ContentDoc>
</template>

<script setup>
const route = useRoute();
console.log(route.params.slug);

function formatDate(value) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(value));
}

function plainText(node) {
  if (!node) return "";
  if (typeof node.value === "string") return node.value;
  if (Array.isArray(node.children)) return node.children.map(plainText).join(" ");
  return "";
}

function readingTime(body) {
  const words = plainText(body).trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 220))} min read`;
}
</script>

<style>
.blog-article pre.shiki {
  @apply overflow-x-auto rounded-xl border border-gray-200 p-4 text-sm shadow-sm dark:border-gray-700;
}

.blog-article .shiki {
  background-color: #f6f8fa !important;
}

.blog-article .shiki span {
  color: var(--shiki-default) !important;
}

.dark .blog-article .shiki {
  background-color: #0d1117 !important;
}

.dark .blog-article .shiki span {
  color: var(--shiki-dark) !important;
}
</style>
