<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 py-2 gap-2">

    <a
      v-for="project in projects"
      class="project-container"
      :title="project.name"
      :href="project.url"
      target="_blank"
      rel="noopener noreferrer"
    >

      <div class="flex-auto">

        <!-- Project Head -->
        <div class="flex items-center text-normal space-x-2 items-center">

          <!-- Title -->
          <span class="mr-1" v-text="project.name"></span>

          <!-- Stack Icons -->
          <iconify-icon v-for="icon of project.tech" :icon="icon" class="text-xl"></iconify-icon>

        </div>

        <!-- Description -->
        <div class="text-sm opacity-80 dark:opacity-50 font-normal mt-2" v-text="project.desc"></div>
      </div>

      <!-- Project Icon -->
      <div class="self-center pt-2 text-3xl opacity-50">
        <span v-if="project.icon" :class="project.icon"></span>
      </div>

    </a>

  </div>
</template>

<script>

export default {
  name: "Projects",

  props: ["projects"]
}

</script>

<style scoped>

.project-container {

  @apply flex items-stretch relative rounded p-4 no-underline space-x-6 text-inherit hover:text-inherit
  border border-gray-300 dark:border-gray-600 hover:border-transparent
  hover:bg-gray-100 dark:hover:bg-gray-700;
}

</style>
