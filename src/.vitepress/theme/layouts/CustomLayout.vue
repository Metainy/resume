<template>
  <Layout>

    <!-- Introduction Card -->
    <template #doc-before>
      <Introduction v-if="fm.introduction" :intro="fm.introduction"></Introduction>
    </template>

    <!-- Custom Nav Title -->
    <template #nav-bar-title-after>
      <i class="blink p-2 ">_</i>
    </template>

  </Layout>
</template>

<script>

// Imports
import { useData } from "vitepress";
import DefaultTheme from "vitepress/theme";

// Components
import Introduction from "../components/Introduction.vue";

const { Layout } = DefaultTheme;

export default {
  name: "CustomLayout",

  components: { Layout, Introduction },

  setup() {

    const { frontmatter: fm } = useData();
    return { fm };
  }
}

</script>

<style scoped>

</style>
