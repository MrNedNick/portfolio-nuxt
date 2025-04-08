<template>
  <v-text-field label="Search" v-model="search" @input="onInput" />
</template>

<script setup>
import { ref } from "vue";

const search = ref("");

function fakeFetch(query) {
  console.log("Fetching for:", query);
}

function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const debouncedFetch = debounce(fakeFetch, 500);

function onInput() {
  return debouncedFetch(search.value);
}
</script>
