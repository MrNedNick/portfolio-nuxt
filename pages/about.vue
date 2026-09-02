<template>
  <label class="block max-w-sm">
    <span class="text-sm text-gray-500">Search</span>
    <input
      type="text"
      v-model="searchInputValue"
      class="mt-1 block w-full rounded border border-gray-300 px-3 py-2 focus:border-gray-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800"
    />
  </label>
</template>

<script setup>
import { ref } from "vue";

const searchInputValue = ref("");
</script>