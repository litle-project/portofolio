<script>
  export default {
    props: {
      projects: {
        type: Array,
        required: true,
      }
    },

    methods: {
      handleTab(params) {
        this.tab = {
          active: true,
          id: params
        }
      },

      handleLabel(params) {
        this.label = {
          active: true,
          id: params
        }
      },

      handleDetail(params) {
        this.$router.push(`/project/${params?.replace(/[' ']*/g, '')?.toLowerCase()}`)
      }
    },

    watch: {
      tab(updated) {
        this.localProjects = this.projects
        
        if (updated.id.toLowerCase() !== 'all') {
          this.localProjects = this.localProjects.filter((item) => item.type.toLowerCase() === updated.id.toLowerCase())
        }
      },
    },

    mounted() {
      
    },

    data() {
      const type = {
        PHP: 'php.svg',
        MYSQL: 'mysql.svg',
        NGINX: 'nginx.svg',
        CODEIGNETER: 'codeigniter.svg',
        NODEJS: 'nodejs.svg',
        DOCKER: 'docker.svg',
        POSTGRESQL: 'postgresql.svg',
        JQUERY: 'jquery.svg',
        JAVASCRIPT: 'javascript.svg',
        TAILWIND: 'tailwind.svg',
        BOOTSTRAP: 'bootstrap.svg',
        MATERIALUI: 'materialui.svg',
        REACTJS: 'reactjs.svg',
        REDUX: 'redux.svg',
        VUEJS: 'vuejs.svg',
        LARAVEL: 'laravel.svg',
        MARIADB: 'mariadb.svg',
        CSS: 'css.png',
        MONGODB: 'mongodb.svg',
        NEXTJS: 'nextjs.svg',
        REACT_QUERY: 'react-query.png'
      };

      const tabs = [
        'All',
        'Frontend',
        'Backend',
        'Fullstack'
      ];

      const projectProps = this.projects;

      return {
        type,
        tabs,
        page: 1,
        localProjects: projectProps.sort((a, b) => b.id - a.id),
        label: {
          active: false,
          id: '',
        },
        tab: {
          active: true,
          id: 'All'
        }
      }
    },  
  };
</script>

<template>
  <div class="pt-10 pb-5 text-dark font-bold uppercase flex-col items-center text-xl flex justify-center">
    <div class="bg-yellow-400 w-40 md:w-60 h-2 md:h-4 relative"></div>
    <div class="absolute mb-2 md:mb-4 md:text-lg text-sm">Project Histories</div>
  </div>
  <div class="projects flex flex-col gap-5 md:gap-7 mb-5">
    <div class="flex justify-center gap-5 md:gap-10 py-3 md:py-5 text-slate-500 font-semibold" id="tab-nav">
      <div
        v-for="(item, index) in tabs"
        :key="index.toString()"
        class="cursor-pointer"
        :class="{ 'border-b-2 md:border-b-4 border-yellow-400': tab.active && (tab.id === item) }"
        @click="handleTab(item)"
      >
        {{ item }}
      </div>
    </div>
    <div class="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-7">
      <div
        v-for="(project, index) in localProjects"
        :key="index.toString()"
        v-on:mouseover="handleLabel(project.name)"
        v-on:mouseleave="handleLabel('')"
        @click="handleDetail(project.name)"
        class="shadow-lg w-full sm:w-80 md:w-60 flex flex-col rounded-xl pb-3 gap-2 border-t-2 border-neutral-100 h-[300px] md:h-[350px] filter grayscale hover:filter-none cursor-pointer"
      >
        <div class="card-image flex relative flex-1 p-1 border-b-2 md:border-b-4 border-neutral-100">
          <img class="self-center w-full p-1 sm:p-3" :src="`/assets/images/logo/${project.image}`" :alt="project.name" />
        </div>
        <div
          v-if="label.active && label.id === project.name"
          class="bg-yellow-300 text-sm px-3 py-1 font-medium rounded-md absolute mt-2 md:mt-3 ml-[-6px] md:ml-[-8px]"
        >
          {{ project.name }}
        </div>
        <div class="py-0 w-full sm:w-80 md:w-60 overflow-auto">
          <div class="px-2 sm:px-4 flex flex-row gap-2 sm:gap-3 items-center">
            <img
              v-for="(tech, idx) in project.tech"
              :alt="tech"
              :width="30"
              :key="idx.toString()"
              :src="`/assets/images/stack/${type[tech]}`"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
