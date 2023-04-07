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
        NEXTJS: 'nextjs.svg'
      };

      const stackColor = {
        PHP: 'bg-sky-700',
        MYSQL: 'bg-sky-300',
        NGINX: 'nginx.svg',
        CODEIGNETER: 'codeigniter.svg',
        NODEJS: 'nodejs.svg',
        DOCKER: 'docker.svg',
        POSTGRESQL: 'postgresql.svg',
        JQUERY: 'jquery.svg',
        JAVASCRIPT: 'bg-yellow-400',
        TAILWIND: 'tailwind.svg',
        BOOTSTRAP: 'bootstrap.svg',
        MATERIALUI: 'materialui.svg',
        REACTJS: 'reactjs.svg',
        REDUX: 'redux.svg',
        VUEJS: 'vuejs.svg',
        LARAVEL: 'laravel.svg',
        MARIADB: 'mariadb.svg',
        CSS: 'bg-cyan-500',
        MONGODB: 'mongodb.svg',
        NEXTJS: 'nextjs.svg'
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
    class="flex flex-col py-3"
  >
    <div class="flex flex-row gap-2">
      <img
        :alt="stack.type"
        class="self-center p-2"
        style="width: 10%; aspect-ratio: 3/2; object-fit: contain;"
        :src="`/assets/images/stack/${type[stack.type]}`"
      />
      <div :class="`${stackColor[stack.type]} w-[${stack.percentage}%] h-4 my-auto rounded-lg`" />
      <div class="text-sm font-semibold my-auto">{{ stack.percentage }}%</div>
    </div>
  </div>
</template>