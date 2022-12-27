<template>
  <div class="skills-container">

    <div v-for="skill in skills" class="skill-pill">
      <div v-text="skill.text"></div>
    </div>

  </div>
</template>

<script>

export default {
  name: "SoftSkills",

  props: ["skills"]
}

</script>

<style scoped>

.skills-container {
  @apply flex flex-wrap;
}

.skill-pill {
  @apply flex items-center border py-0.5 px-3 mr-3 mb-3 rounded-lg shadow-inner shadow-sm dark:shadow-gray-900/40
  border-gray-300 dark:border-gray-600;
}

</style>
