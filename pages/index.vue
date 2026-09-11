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

    <section class="border border-gray-200 dark:border-gray-600 rounded-sm p-4 mb-8">
      <p class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">
        Currently building
      </p>
      <h2 class="font-semibold mb-1">
        <a
          href="https://mrnednick.github.io/VibeOS"
          target="_blank"
          class="hover:underline"
          >VibeOS</a
        >
        — a personal life OS
      </h2>
      <p class="text-sm text-gray-600 dark:text-gray-400">
        Habits, tasks, goals, training and finance in one app, where checking
        off a habit can advance a linked goal on its own. 146 Vue components,
        665 tests, offline-first sync.
      </p>
    </section>

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
