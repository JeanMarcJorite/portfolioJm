<script setup>
import { interests } from "../data";
import SectionLabel from "./SectionLabel.vue";
</script>
<template>
  <section id="interets" class="section section-light interests-section">
    <div class="container">
      <SectionLabel number="05" text="Centres d’intérêt" />
      <div class="section-heading" data-reveal>
        <h2 class="display-title">Ce qui <em>m’anime.</em></h2>
        <span class="asterisk small" aria-hidden="true">✳</span>
      </div>
      <div class="interests-list">
        <article v-for="(item, i) in interests" :key="item.title" data-reveal>
          <span class="eyebrow">0{{ i + 1 }}</span>
          <h3>{{ item.title }}</h3>
          <p class="muted">{{ item.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
