<script setup>
import { profile } from "../profile";
import SectionLabel from "./SectionLabel.vue";
</script>
<template>
  <section id="contact" class="section section-dark contact-section">
    <div class="container">
      <SectionLabel number="07" text="Contact" />
      <h2 class="contact-title" data-reveal>
        Travaillons<br /><em>— ensemble.</em
        ><span class="contact-star" aria-hidden="true">✳</span>
      </h2>
      <div class="contact-body">
        <p class="intro-copy">{{ profile.contactText }}</p>
        <div class="contact-facts">
          <p>{{ profile.location }}</p>
          <p>{{ profile.formation }}</p>
          <p>
            <span class="status-dot" aria-hidden="true"></span>Disponible ·
            Stage / Alternance
          </p>
        </div>
      </div>
      <a class="contact-email" :href="'mailto:' + profile.email"
        >{{ profile.email }}<span aria-hidden="true">↗</span></a
      >
      <div class="contact-links">
        <a :href="profile.phoneHref" class="text-link">{{ profile.phone }} ↗</a
        ><a
          v-for="social in profile.socials"
          :key="social.label"
          :href="social.href"
          target="_blank"
          rel="noopener noreferrer"
          class="text-link"
          :aria-label="social.label + ' — ' + social.username"
          >{{ social.label }} ↗</a
        >
      </div>
    </div>
  </section>
</template>
