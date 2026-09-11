<template>
  <div>
    <p class="mb-10 text-gray-600 dark:text-gray-400">
      Selected work — the problem, what shipped, and where to see it.
    </p>
    <ul class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </ul>
  </div>
</template>

<script setup>
import { projects } from "~/data/projects";
</script>
