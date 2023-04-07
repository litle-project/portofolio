<script>
  import { VueHorizontalTimeline } from "vue-horizontal-timeline";

  export default {
    props: {
      timelines: {
        type: Array,
        required: false
      }
    },
    components: {
      VueHorizontalTimeline
    },
  };
</script>

<style>
  .vue-horizontal-timeline .title {
    font-size: 15px !important;
  }

  .vue-horizontal-timeline .content {
    font-size: 13px !important;
  }

  .vue-horizontal-timeline {
    box-shadow: none !important;
  }

  .vue-horizontal-timeline .timeline ol li.add-step[data-v-c7fa1b17]:not(:last-child)::after {
    background: '#3f51b5' !important;
  }

  .vue-horizontal-timeline {
    width: 850px !important;
    overflow-x: scroll;
  }
</style>

<template>
  <div v-if="this?.timelines?.length > 0">
    <VueHorizontalTimeline
      :items="this?.timelines"
      timeline-background="#f5f5f5"
      line-color="#e91e63"
    />
  </div>
</template>