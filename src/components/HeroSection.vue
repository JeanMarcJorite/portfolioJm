<script setup>
import { projects } from "../data";
import { profile } from "../profile";
import { mediaUrl } from "../utils/media";
const budget = projects.find((project) => project.slug === "welabbudget");
const mobile = projects.find(
  (project) => project.slug === "app-planification-repas",
);
</script>
<template>
  <section id="accueil" class="hero">
    <div class="hero-grain" aria-hidden="true"></div>
    <div class="hero-top container">
      <div class="hero-intro">
        <p class="eyebrow">Portfolio personnel / {{ profile.location }}</p>
        <p class="hero-role">
          {{ profile.role }}<br /><span>Licence MIAGE — Orléans</span>
        </p>
        <p class="hero-availability">
          <span class="status-dot" aria-hidden="true"></span>{{ profile.status
          }}<br />Master MIAGE · Septembre 2026
        </p>
      </div>
      <div class="hero-collage" aria-hidden="true">
        <div class="hero-orbit"></div>
        <img
          class="hero-desktop"
          :src="mediaUrl(budget.screenshots[1].src)"
          alt=""
          fetchpriority="high"
          width="812"
          height="582"
        />
        <img
          class="hero-mobile"
          :src="mediaUrl(mobile.screenshots[0].src)"
          alt=""
          width="1080"
          height="2280"
        />
        <span class="collage-cross">✳</span
        ><span class="collage-caption">Du web au mobile.</span>
      </div>
      <router-link
        :to="{ name: 'accueil', hash: '#projets' }"
        class="circle-button hero-cta"
        ><span>Voir mes<br />projets</span
        ><span aria-hidden="true">↗</span></router-link
      >
    </div>
    <div class="hero-bottom container">
      <h1 class="hero-name">
        <span>JEAN-MARC</span
        ><span class="hero-surname">JORITE<span class="name-dot">.</span></span>
      </h1>
      <p class="hero-brief">{{ profile.introduction }}</p>
      <div class="hero-baseline">
        <span>Concevoir. Développer. Apprendre.</span
        ><a
          :href="profile.socials[0].href"
          target="_blank"
          rel="noopener noreferrer"
          class="text-link"
          >GitHub ↗</a
        ><router-link
          :to="{ name: 'accueil', hash: '#apropos' }"
          class="text-link"
          >Défiler pour découvrir ↓</router-link
        >
      </div>
    </div>
  </section>
</template>
