<script setup>
import { ref } from "vue";
import { alternanceSection } from "../data";
import { profile } from "../profile";
import { mediaUrl } from "../utils/media";
import { imageSize } from "../utils/imageSizes";
import SectionLabel from "./SectionLabel.vue";
import ImageLightbox from "./ImageLightbox.vue";
const selectedImage = ref(null);
</script>
<template>
  <section id="alternance" class="section alternance-section">
    <div class="container">
      <SectionLabel number="06" text="Alternance" />
      <div class="alternance-intro" data-reveal>
        <div>
          <p class="eyebrow">
            <span class="status-dot" aria-hidden="true"></span>Recherche active
            · Septembre 2026
          </p>
          <h2 class="display-title">Alternance<br /><em>MIAGE.</em></h2>
          <p class="intro-copy">{{ alternanceSection.description }}</p>
        </div>
        <a :href="'mailto:' + profile.email" class="circle-button"
          ><span>Échangeons</span><span aria-hidden="true">↗</span></a
        >
      </div>
      <div class="calendar-grid">
        <figure
          v-for="calendar in alternanceSection.calendars"
          :key="calendar.src"
          data-reveal
        >
          <button
            type="button"
            class="calendar-button"
            @click="selectedImage = calendar"
            :aria-label="'Agrandir : ' + calendar.title"
          >
            <img
              :src="mediaUrl(calendar.src)"
              :alt="calendar.alt"
              v-bind="imageSize(calendar.src)"
              loading="lazy"
            /><span aria-hidden="true" class="image-expand">↗</span>
          </button>
          <figcaption>
            {{ calendar.title }}<span class="muted">Cliquer pour agrandir</span>
          </figcaption>
        </figure>
      </div>
    </div>
    <ImageLightbox :image="selectedImage" @close="selectedImage = null" />
  </section>
</template>
