<script setup>
import { RouterLink } from 'vue-router'
</script>

<script>
  export default {
    data() {
      const menus = [
        { id: 1, text: 'Home', url: '/', active: false },
        { id: 2, text: 'Article', url: '/article', active: false },
        { id: 3, text: 'Project', url: '/project', active: false },
        { id: 4, text: 'Skill', url: '/skill', active: false },
        { id: 5, text: 'Contact', url: '/contact', active: false },
      ];

      return {
        menus,
      }
    },
  }
</script>

<template>
  <nav class="bg-white border-neutral-100 border-b-2 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 z-20 absolute sticky top-0">
    <div class="container flex flex-wrap items-center justify-between px-10 mx-auto">
      <a href="/" class="flex items-center">
          <img src="/assets/images/site/logo.svg" class="h-6 mr-3 sm:h-9" alt="Portofolio Logo" />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Personal Portofolio</span>
      </a>
      <button
        type="button"
        aria-expanded="false"
        aria-controls="navbar-default"
        data-collapse-toggle="navbar-default"
        class="
          inline-flex items-center p-2 ml-3 text-sm
          text-gray-500 rounded-lg md:hidden
          hover:bg-gray-100 focus:outline-none
          focus:ring-2 focus:ring-gray-200
          dark:text-gray-400 dark:hover:bg-gray-700
          dark:focus:ring-gray-600
        ">
        <span class="sr-only">Open main menu</span>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="md:bg-white dark:bg-gray-800 md:dark:bg-gray-900
            rounded-lg bg-gray-50 md:flex-row md:space-x-8
            md:mt-0 md:text-sm md:font-medium md:border-0
            flex flex-col p-4 mt-4 border border-gray-100
            dark:border-gray-700"
        >
          <li v-for="(menu, index) in menus" :key="index.toString()">
            <RouterLink
              :to="menu.url"
              class="{{ menu.active ? 'text-yellow-400' : 'text-gray-700' }}
                rounded hover:bg-gray-100
                block py-2 pl-3 pr-4 cursor-pointer
                md:hover:bg-transparent md:border-0
                md:hover:text-yellow-400 md:p-0 dark:text-gray-400
                md:dark:hover:text-white
                dark:hover:bg-gray-700 dark:hover:text-white
                md:dark:hover:bg-transparent"
            >
              {{ menu.text }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>