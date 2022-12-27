<template>

  <div class="flex items-end justify-between mb-8">

    <div>

      <!-- Name -->
      <h1 class="font-semibold my-5 text-xl md:text-2xl lg:text-4xl">{{ intro.name }}</h1>

      <!-- Social Icons -->
      <div class="flex flex-wrap">
        <a
          v-for="(social) in intro.socials"
          class="social-btn"
          :href="social.url" target="_blank"
          :title="social.text || social.url"
          rel="noopener noreferrer"
        >

          <i :class="social.icon" class="text-md"></i>

          <span v-if="social.text" v-text="social.text" class="text-sm font-semibold"></span>

        </a>
      </div>

    </div>

    <!-- Photo -->
    <div class="photo-frame">
      <img class="rounded w-24" :src="intro.photo">
    </div>

  </div>

</template>

<script>

export default {
  name: "Introduction",

  props: ["intro"]
}

</script>

<style scoped>

.social-btn {
  @apply flex items-center rounded bg-gray-200 dark:bg-gray-700 px-4 h-9 mr-1 mt-1 cursor-pointer;
  transition: background-color 200ms ease-in-out;
}

.social-btn:hover {
  @apply bg-gray-400 dark:bg-gray-600;
}

.photo-frame {
  @apply p-1 border rounded shadow-[inset_0_0_40px_0_rgba(0,0,0,0.1)] bg-gray-50 dark:bg-gray-800;
  border-color: var(--vp-c-divider);
}

</style>
