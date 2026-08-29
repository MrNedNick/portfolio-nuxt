<template>
  <div class="container mx-auto max-w-2xl">
    <header class="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3 px-2 sm:flex-nowrap">
      <NuxtLink
        to="/"
        class="whitespace-nowrap p-2 text-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600"
      >
        Nikita Nedyalkov
      </NuxtLink>
      <div class="order-3 w-full sm:order-none sm:w-auto">
        <Menu />
      </div>
      <div class="ml-auto">
        <ClientOnly>
          <ColorModeSelector />
        </ClientOnly>
      </div>
    </header>
    <main class="p-2 mt-10">
      <slot />
    </main>
  </div>
</template>

<script setup>
useHead({
  titleTemplate: "%s - Nikita Nedyalkov",
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
      crossorigin: "",
    },
  ],
});
</script>

<style>
body {
  font-family: "Roboto";
}
body {
  @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300;
}
</style>
