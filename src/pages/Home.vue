<script setup>
  import Banner from '@/components/Banner.vue'
  import Project from '@/components/Project.vue'
  import projectCollections from '/public/assets/collections/projects.json'
</script>

<template>
  <Banner />
  <Project :projects="projectCollections" />
</template>

<style>
</style>
