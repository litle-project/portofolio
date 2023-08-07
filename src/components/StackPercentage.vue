<script>
  export default {
    props: {
      stacks: {
        type: Array,
        required: true
      },
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
        REACT_QUERY: 'react-query.png',
        TYPESCRIPT: 'typescript.svg',
        RAILS: 'rails.svg'
      };

      const stackColor = {
        PHP: 'bg-indigo-400',
        MYSQL: 'bg-sky-300',
        NGINX: 'bg-green-500',
        CODEIGNETER: 'bg-red-500',
        NODEJS: 'bg-green-600',
        DOCKER: 'bg-cyan-700',
        POSTGRESQL: 'bg-cyan-600',
        JQUERY: 'bg-sky-600',
        JAVASCRIPT: 'bg-yellow-400',
        TAILWIND: 'bg-cyan-600',
        BOOTSTRAP: 'bg-indigo-600',
        MATERIALUI: 'bg-sky-500',
        REACTJS: 'bg-sky-300',
        REDUX: 'bg-indigo-400',
        VUEJS: 'bg-emerald-500',
        LARAVEL: 'bg-red-500',
        MARIADB: 'bg-blue-800',
        CSS: 'bg-cyan-500',
        MONGODB: 'bg-emerald-600',
        NEXTJS: 'bg-neutral-800',
        REACT_QUERY: 'bg-red-500',
        TYPESCRIPT: 'bg-sky-600',
        RAILS: 'bg-red-800'
      }

      return {
        type: type,
        stackColor: stackColor
      }
    }
  }
</script>

<template>
  <div
    v-for="(stack, index) in stacks"
    :key="index.toString()"
    class="flex flex-col py-3 border-b-2 border-neutral-100"
  >
    <div class="flex flex-row gap-4">
      <div class="w-12 h-12 px-auto flex flex-row justify-center">
        <img
          :alt="stack.type"
          class="self-center px-auto py-auto"
          :src="`/assets/images/stack/${type[stack.type]}`"
        />
      </div>
      <div class="bg-gray-300 w-full h-5 my-auto mx-auto rounded-lg text-sm lowercase text-center text-white truncate relative">
        <div :style="`width: ${stack.percentage}%`" :class="`${stackColor[stack.type]} h-5 absolute transition-1 left-0 duration-1000`">
          {{ stack.type }}
        </div>
      </div>
      <div class="text-sm font-semibold my-auto">{{ stack.percentage }}%</div>
    </div>
  </div>
</template>