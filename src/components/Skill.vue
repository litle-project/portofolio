<script>
  import StackPercentage from '@/components/StackPercentage.vue';
  
  export default {
    components: {
      StackPercentage,
    },

    data() {
      this.stackLefts = [
        {  type: "NEXTJS", percentage: "90" },
        {  type: "REACTJS", percentage: "90" },
        {  type: "REACT_QUERY", percentage: "30" },
        {  type: "VUEJS", percentage: "60" },
        {  type: "NODEJS", percentage: "90" },
        {  type: "LARAVEL", percentage: "90" },
        {  type: "RAILS", percentage: "20" },
        {  type: "NGINX", percentage: "70" },
        {  type: "DOCKER", percentage: "50" },
        {  type: "MATERIALUI", percentage: "70" },
        {  type: "TAILWIND", percentage: "70" },
      ];

      this.stackRights = [
        {  type: "JAVASCRIPT", percentage: "90" },
        {  type: "TYPESCRIPT", percentage: "60" },
        {  type: "PHP", percentage: "80" },
        {  type: "MONGODB", percentage: "70" },
        {  type: "POSTGRESQL", percentage: "80" },
        {  type: "MYSQL", percentage: "90" },
        {  type: "CSS", percentage: "80" },
        {  type: "BOOTSTRAP", percentage: "70" },
        {  type: "JQUERY", percentage: "80" },
        {  type: "REDUX", percentage: "85" },
      ];
    }
  }
</script>

<template>
  <div class="py-10 text-dark font-bold uppercase flex-col items-center text-xl flex justify-center" id="skill">
    <div class="bg-yellow-400 w-40 md:w-60 h-2 md:h-4 relative"></div>
    <div class="absolute mb-2 md:mb-4 md:text-lg text-sm">Skill & Tech Stack</div>
  </div>
  <div class="bg-white flex md:flex-row flex-col md:px-80 px-6 md:gap-x-36 gap-x-10 pb-10">
    <div class="w-full">
      <StackPercentage :stacks="this.stackLefts" />
    </div>
    <div class="w-full">
      <StackPercentage :stacks="this.stackRights" />
    </div>
  </div>
</template>