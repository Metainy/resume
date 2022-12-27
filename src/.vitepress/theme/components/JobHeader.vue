<template>
  <div class="mt-10">

    <div v-text="job.date" class="text-sm opacity-80"></div>
    <div v-text="job.title" class="text-xl font-semibold my-0.5"></div>
    <div v-text="job.company" class="font-medium"></div>

  </div>
</template>

<script>

export default {
  name: "JobHeader",

  props: ["job"]
}

</script>

<style scoped>

</style>
