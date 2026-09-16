<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useScrollReveal } from "../composables/useScrollReveal";
import HeroSection from "../components/HeroSection.vue";
import AboutSection from "../components/AboutSection.vue";
import SkillsSection from "../components/SkillsSection.vue";
import ProjectsSection from "../components/ProjectsSection.vue";
import InterestsSection from "../components/InterestsSection.vue";
import AlternanceSection from "../components/AlternanceSection.vue";
import ContactSection from "../components/ContactSection.vue";
import FooterSection from "../components/FooterSection.vue";
const page = ref(null);
const scrollProgress = ref(0);
useScrollReveal(page);
let frame = 0;
function updateProgress() {
  if (frame) return;
  frame = requestAnimationFrame(() => {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    scrollProgress.value = height > 0 ? window.scrollY / height : 0;
    frame = 0;
  });
}
onMounted(() => {
  document.title = "Jean-Marc Jorite — Développeur";
  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });
});
onUnmounted(() => {
  cancelAnimationFrame(frame);
  window.removeEventListener("scroll", updateProgress);
});
</script>
<template>
  <div ref="page">
    <div
      class="scroll-progress"
      :style="{ transform: 'scaleX(' + scrollProgress + ')' }"
      aria-hidden="true"
    ></div>
    <main id="main-content" tabindex="-1">
      <HeroSection /><AboutSection /><SkillsSection /><ProjectsSection /><InterestsSection /><AlternanceSection /><ContactSection />
    </main>
    <FooterSection />
  </div>
</template>
