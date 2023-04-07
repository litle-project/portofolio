<script>
  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide, Navigation } from 'vue3-carousel'

  export default {
    components: {
      Carousel,
      Slide,
      Navigation,
    },

    props: {
      companies: {
        type: Array,
        required: true,
      },
    },

    methods: {
      handleClick: (url) => {
        window.open(url)
      }
    },

    mounted() {
      const companyProps = this.companies;
      this.localCompanies = companyProps.reverse();
    },

    data() {
      return {
        localCompanies: [],
      }
    }
  }
</script>

<style>
  .carousel__prev,
  .carousel__next {
    position: unset !important;
    background-color: whitesmoke !important;
    border-radius: 50%;
    padding: 5px;
  }
</style>

<template>
  <div class="bg-black/10 mt-24 mb-24">
    <div class="py-10 text-dark font-bold uppercase flex-col items-center text-xl flex justify-center">
      <div class="bg-yellow-400 w-40 md:w-60 h-2 md:h-4 relative"></div>
      <div class="absolute mb-2 md:mb-4 md:text-lg text-sm">Has Participated With</div>
    </div>
    <div class="pb-5 max-w-full sm:max-w-screen-sm lg:max-w-screen-lg md:max-w-screen-md mx-auto cursor-pointer">
      <Carousel :transition="500" :autoplay="2000" :itemsToShow="4" wrapAround :settings="{ snapAlign: 'center' }">
        <Slide v-for="(company, index) in localCompanies" :key="index.toString()" class="mb-10 flex flex-col">
          <div class="flex justify-center md:w-48 w-full" @click="handleClick(company.web)">
            <img class="self-center w-full" :src="`/assets/images/companies/${company.image}`" :alt="company.name" />
          </div>
        </Slide>
        <template #addons>
          <div class="flex flex-row justify-center">
            <Navigation />
          </div>
        </template>
      </Carousel>
    </div>
  </div>
</template>