<script setup>
import { profile } from "../profile";
const year = new Date().getFullYear();
</script>
<template>
  <footer class="site-footer section-dark">
    <div class="container footer-top">
      <div>
        <p class="eyebrow">Merci de votre visite</p>
        <p>Créons quelque chose de mémorable.</p>
      </div>
      <router-link :to="{ name: 'accueil' }" class="text-link"
        >Retour à l’accueil</router-link
      >
    </div>
    <div class="container footer-bottom">
      <span>{{ profile.name }} — {{ year }}</span>
      <div>
        <a
          v-for="social in profile.socials"
          :key="social.label"
          :href="social.href"
          target="_blank"
          rel="noopener noreferrer"
          >{{ social.label }}</a
        ><a :href="'mailto:' + profile.email">E-mail</a>
      </div>
      <span class="footer-monogram" aria-hidden="true">JMJ.</span>
    </div>
  </footer>
</template>
