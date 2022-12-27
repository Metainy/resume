// Vitepress default theme
import DefaultTheme from "vitepress/theme";

// Styles and icons
import "./styles/master.css";
import "./lib/iconify-icon.min";
import "bootstrap-icons/font/bootstrap-icons.css";

// Layout
import CustomLayout from "./layouts/CustomLayout.vue";

// Components
import Skills from "./components/Skills.vue";
import SoftSkills from "./components/SoftSkills.vue";
import Projects from "./components/Projects.vue";
import JobHeader from "./components/JobHeader.vue";

/**
 * Extend the default theme.
 */
export default {
    ...DefaultTheme,

    // Root component to wrap every page
    Layout: CustomLayout,

    enhanceApp(context) {

        // Extend default theme custom behaviour
        DefaultTheme.enhanceApp(context);

        // Register components
        context.app.component("Skills", Skills);
        context.app.component("SoftSkills", SoftSkills);
        context.app.component("Projects", Projects);
        context.app.component("JobHeader", JobHeader);
    }
};
