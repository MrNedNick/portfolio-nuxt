<template>
  <div>
    Hello from the main page
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Main Page',
  description: 'This is Main Page',
  ogTitle: 'Main Page',
  ogDescription: 'Main Page',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: '[twitter:title]',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})
</script>