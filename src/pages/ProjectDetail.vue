<script setup>
  import projectCollections from '/public/assets/collections/projects.json'
</script>

<script>
  export default {
    methods: {
      handleTab(params) {
        this.tab = {
          active: true,
          id: params
        }
      },

      handleWeb() {
        window.open(`//${this.project.web}`)
      }
    },

    data() {
      const { id } = this.$route.params
      const selectedCompany = projectCollections.find((item) => item.name.toLowerCase() === id.toLowerCase())
      const tabs = [
        'Overview',
        'Objective',
        'Timeline',
        'Stack Used',
        'The Code',
        'Sample Result',
        'Try Something'
      ]
      
      return {
        project: selectedCompany,
        tabs,
        tab: {
          active: true,
          id: 'Overview'
        }
      }
    }
  }
</script>

<template>
  <div class="w-11/12 mx-auto pt-10 flex flex-row gap-10">
    <div class="bg-black/10 p-10 w-5/12 h-[400px] flex flex-col justify-center">
      <img class="self-center w-1/2 p-2 sm:p-3" :src="`/assets/images/logo/${project.image}`" :alt="project.name" />
    </div>
    <div class="flex flex-col flex-1 gap-5">
      <div class="flex flex-row justify-between">
        <div class="text-4xl font-bold font-slate-500">{{ project.name }}</div>
        <div>
          <button class="bg-yellow-400 font-semibold py-2 px-4 rounded-md text-slate-700" @click="this.$router.go(-1)">
            Back
          </button>
        </div>
      </div>
      <div class="flex text-sm gap-2 border-b-2 border-t-2 border-neutral-100 md:gap-10 text-slate-500 font-semibold">
        <div
          v-for="(item, index) in tabs"
          :key="index.toString()"
          class="cursor-pointer py-3"
          :class="{ 'border-b-2 md:border-b-2 border-yellow-400': tab.active && (tab.id === item) }"
          @click="handleTab(item)"
        >
          {{ item }}
        </div>
      </div>
      <div class="flex flex-col text-sm">
        <div class="flex flex-row gap-5">
          <div class="text-slate-500">Worked as :</div>
          <div>{{ project.type }} Engineer</div>
        </div>
        <div class="flex flex-row gap-5 py-1">
          <div class="text-slate-500">Main Website :</div>
          <div class="cursor-pointer text-blue-400" @click="handleWeb">{{ project.web }}</div>
        </div>
        <div class="text-sm pt-4">
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Aut necessitatibus numquam eaque illum asperiores reprehenderit provident minus delectus recusandae exercitationem.
          Consectetur odio illo sed ullam soluta ratione aut dolores sunt.
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Aut necessitatibus numquam eaque illum asperiores reprehenderit provident minus delectus recusandae exercitationem.
          Consectetur odio illo sed ullam soluta ratione aut dolores sunt.
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Aut necessitatibus numquam eaque illum asperiores reprehenderit provident minus delectus recusandae exercitationem.
          Consectetur odio illo sed ullam soluta ratione aut dolores sunt.
        </div>
      </div>
    </div>
  </div>
</template>