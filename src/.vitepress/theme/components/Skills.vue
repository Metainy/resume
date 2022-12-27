<template>
  <div class="skills-container">

    <div v-for="skill in skills" class="skill-pill" :class="styleFor(skill.type)">

      <i v-if="skill.icon" :class="skill.icon" class="text-sm mr-2"></i>
      <div v-text="skill.text"></div>

    </div>

  </div>
</template>

<script>
export default {
  name: "Skills",

  props: ["skills"],

  methods: {

    /**
     * Style the skill's pill based on its type.
     *
     * @param {String} type
     * @returns {string}
     */
    styleFor(type) {

      switch (type) {
        case "category":
          return "category"
        case "featured":
          return "featured"
        default:
          return ""
      }
    }
  }
}
</script>

<style scoped>

.skills-container {
  @apply flex flex-wrap;
}

.skill-pill {
  @apply flex items-center border py-0.5 px-3 mr-3 mb-3 rounded-lg shadow-inner shadow-sm dark:shadow-gray-900/40
  border-gray-300 dark:border-gray-600 text-sm;
}

.skill-pill.featured {
  @apply border-0 bg-gradient-to-r from-teal-300 to-cyan-400 dark:bg-gradient-to-r dark:from-teal-600 dark:to-cyan-600;
}

.skill-pill.category {
  @apply border-0 uppercase font-medium bg-gray-300 dark:bg-gray-900;
}

</style>
