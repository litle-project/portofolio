<script setup>
  import Banner from '@/components/Banner.vue'
  import Project from '@/components/Project.vue'
  import Company from '@/components/Company.vue'
  import Footer from '@/components/Footer.vue'
  import Skill from '@/components/Skill.vue'
  import projectCollections from '/public/assets/collections/projects.json'
  import companyCollections from '/public/assets/collections/companies.json'
</script>

<template>
  <Banner />
  <Project :projects="projectCollections" />
  <Company :companies="companyCollections" />
  <Skill />
  <Footer />
</template>