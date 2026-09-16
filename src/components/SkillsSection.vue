<script setup>
import { skills } from "../data";
import SectionLabel from "./SectionLabel.vue";
const categories = [
  { title: "Langages", items: skills.langages },
  { title: "Frameworks", items: skills.frameworks },
  { title: "Bases de données", items: skills.databases },
  { title: "Outils & méthodes", items: skills.tools },
];
</script>
<template>
  <section id="competences" class="section section-dark">
    <div class="container">
      <SectionLabel number="03" text="Compétences" />
      <div class="section-heading" data-reveal>
        <h2 class="display-title">
          La technique.<br /><em>Au service des idées.</em>
        </h2>
        <p class="eyebrow">Stack technique</p>
      </div>
      <div class="skills-list">
        <article
          v-for="(category, i) in categories"
          :key="category.title"
          class="skill-row"
          data-reveal
        >
          <div class="skill-heading">
            <span class="eyebrow">0{{ i + 1 }}</span>
            <h3>{{ category.title }}</h3>
            <span class="muted">({{ category.items.length }})</span>
          </div>
          <ul class="skill-items">
            <li v-for="item in category.items" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
