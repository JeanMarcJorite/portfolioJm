<script setup>
import { education, experiences } from "../data";
import { profile } from "../profile";
import SectionLabel from "./SectionLabel.vue";
</script>
<template>
  <section id="apropos" class="section section-light">
    <div class="container">
      <SectionLabel number="02" text="À propos" />
      <div class="about-intro" data-reveal>
        <span class="asterisk" aria-hidden="true">✳</span>
        <div>
          <h2 class="statement">{{ profile.approach }}</h2>
          <p class="intro-copy">{{ profile.introduction }}</p>
        </div>
      </div>
      <div class="section-heading" data-reveal>
        <h2 class="display-title">Parcours <em>& expérience.</em></h2>
        <span class="eyebrow">Apprendre, puis faire.</span>
      </div>
      <div class="timeline-grid">
        <div>
          <h3 class="eyebrow column-title">Formation</h3>
          <article
            v-for="item in education"
            :key="item.title"
            class="timeline-row"
            :class="{ 'is-highlight': item.active }"
            data-reveal
          >
            <div class="timeline-date">
              {{ item.period
              }}<span v-if="item.active" class="current-label">En cours</span>
            </div>
            <h4>{{ item.title }}</h4>
            <p class="muted">{{ item.school }}</p>
          </article>
        </div>
        <div>
          <h3 class="eyebrow column-title">Expériences professionnelles</h3>
          <article
            v-for="(item, index) in experiences"
            :key="item.title"
            class="timeline-row"
            :class="{ 'is-highlight': index === 0 }"
            data-reveal
          >
            <p class="timeline-date">{{ item.period }}</p>
            <h4>{{ item.title }}</h4>
            <p class="experience-location">{{ item.location }}</p>
            <p class="muted">{{ item.description }}</p>
            <ul class="tags">
              <li v-for="tag in item.tags" :key="tag">{{ tag }}</li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
