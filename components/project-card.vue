<template>
  <li class="border border-gray-200 dark:border-gray-600 rounded-sm overflow-hidden">
    <div
      class="aspect-video bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
    >
      <img
        v-if="project.screenshot"
        :src="project.screenshot"
        :alt="`${project.name} screenshot`"
        class="w-full h-full object-cover"
      />
      <span v-else class="font-mono text-xs text-gray-400 dark:text-gray-500">
        Screenshot coming soon
      </span>
    </div>

    <div class="p-4">
      <h3 class="font-semibold mb-1">{{ project.name }}</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
        {{ project.oneLiner }}
      </p>

      <dl class="text-sm space-y-2 mb-3">
        <div>
          <dt class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Task
          </dt>
          <dd>{{ project.task }}</dd>
        </div>
        <div>
          <dt class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Result
          </dt>
          <dd>{{ project.result }}</dd>
        </div>
      </dl>

      <ul v-if="project.stats?.length" class="flex flex-wrap gap-1.5 font-mono text-xs mb-3">
        <li
          v-for="stat in project.stats"
          :key="stat.label"
          class="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300"
        >
          {{ stat.value }} {{ stat.label }}
        </li>
      </ul>

      <ul class="flex flex-wrap gap-1.5 font-mono text-xs mb-4">
        <li
          v-for="tech in project.stack"
          :key="tech"
          class="px-2 py-0.5 border border-gray-200 dark:border-gray-600 rounded-full text-gray-600 dark:text-gray-400"
        >
          {{ tech }}
        </li>
      </ul>

      <div class="flex gap-4 font-mono text-sm">
        <a
          v-if="project.links?.demo"
          :href="project.links.demo"
          target="_blank"
          class="link"
          >Demo →</a
        >
        <a :href="project.links.source" target="_blank" class="link">Code →</a>
      </div>
    </div>
  </li>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.link {
  @apply hover:underline;
}
</style>
