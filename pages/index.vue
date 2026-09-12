<template>
  <div class="max-w-xl">
    <p class="font-mono text-sm text-gray-500 dark:text-gray-400 mb-2">
      Frontend developer — Vue 3 · React · TypeScript · 6+ years
    </p>
    <h1 class="text-2xl font-semibold mb-4">
      I build products that stay fast and readable as they grow.
    </h1>
    <p class="mb-8 text-gray-600 dark:text-gray-400">
      Strict TypeScript, a real design system, tests that actually run in
      CI — and no CSS framework doing the thinking for me.
    </p>

    <div class="flex gap-4 font-mono text-sm">
      <NuxtLink to="/projects" class="link">View projects →</NuxtLink>
      <NuxtLink to="/blog" class="link">Read the blog →</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.link {
  @apply p-1 hover:bg-gray-200 dark:hover:bg-gray-700;
}
</style>
