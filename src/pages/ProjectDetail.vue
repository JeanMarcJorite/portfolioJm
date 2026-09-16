<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { projects } from "../data";
import { mediaUrl, projectNumber } from "../utils/media";
import { imageSize } from "../utils/imageSizes";
import { useScrollReveal } from "../composables/useScrollReveal";
import ProjectVisual from "../components/ProjectVisual.vue";
import ProjectDescription from "../components/ProjectDescription.vue";
import ImageLightbox from "../components/ImageLightbox.vue";
import ContactSection from "../components/ContactSection.vue";
import FooterSection from "../components/FooterSection.vue";
import { shouldAnimateEntrance } from "../utils/motion";
const animateEntrance = shouldAnimateEntrance();
const route = useRoute();
const page = ref(null);
const selectedScreenshot = ref(null);
const videoErrors = ref({});
const project = computed(() =>
  projects.find((item) => item.slug === route.params.slug),
);
const index = computed(() =>
  projects.findIndex((item) => item.slug === route.params.slug),
);
const detailLists = computed(() =>
  project.value
    ? [
        { title: "Fonctionnalités", items: project.value.features },
        { title: "Défis rencontrés", items: project.value.challenges },
        {
          title: "Améliorations futures",
          items: project.value.futureImprovements,
        },
      ].filter((group) => group.items?.length)
    : [],
);
useScrollReveal(page);
onMounted(() => {
  document.title =
    (project.value?.title || "Projet introuvable") + " — Jean-Marc Jorite";
});
</script>
<template>
  <div ref="page" class="detail-page" :class="{ 'has-entrance': animateEntrance }">
    <main id="main-content" tabindex="-1">
      <template v-if="project">
        <section class="detail-hero section-dark">
          <div class="container">
            <router-link
              :to="{ name: 'accueil', hash: '#projets' }"
              class="text-link back-link"
              >← Retour aux projets</router-link
            >
            <div class="detail-kicker">
              <span class="eyebrow"
                >{{ projectNumber(index) }} / {{ project.category }}</span
              ><span class="eyebrow">{{ project.date }}</span>
            </div>
            <h1>{{ project.title }}</h1>
            <p class="detail-summary">{{ project.description }}</p>
            <dl class="detail-meta">
              <div
                v-for="(value, label) in {
                  Date: project.date,
                  Durée: project.duration,
                  Équipe: project.team,
                  Rôle: project.role,
                }"
                :key="label"
              >
                <dt>{{ label }}</dt>
                <dd>{{ value }}</dd>
              </div>
            </dl>
            <ul class="tags">
              <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
            </ul>
          </div>
        </section>
        <div class="detail-cover">
          <ProjectVisual :project="project" :index="index" />
        </div>
        <section class="section section-light">
          <div class="container detail-story">
            <h2 class="eyebrow">Description du projet</h2>
            <ProjectDescription :text="project.longDescription" />
          </div>
          <div class="container detail-lists">
            <article
              v-for="(group, i) in detailLists"
              :key="group.title"
              data-reveal
            >
              <div>
                <span class="eyebrow">0{{ i + 1 }}</span>
                <h2>{{ group.title }}</h2>
              </div>
              <ul>
                <li v-for="item in group.items" :key="item">{{ item }}</li>
              </ul>
            </article>
            <article data-reveal>
              <div>
                <span class="eyebrow">0{{ detailLists.length + 1 }}</span>
                <h2>Technologies</h2>
              </div>
              <ul class="technology-list">
                <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
              </ul>
            </article>
          </div>
        </section>
        <section
          v-if="project.screenshots?.length"
          class="section section-light gallery-section"
        >
          <div class="container">
            <div class="section-heading">
              <h2 class="display-title">Le projet <em>en images.</em></h2>
              <span class="eyebrow"
                >Captures d’écran / {{ project.screenshots.length }}</span
              >
            </div>
            <div
              class="screenshot-gallery"
              :class="{
                'mobile-gallery': project.slug === 'app-planification-repas',
              }"
            >
              <figure
                v-for="(shot, i) in project.screenshots"
                :key="shot.src"
                data-reveal
              >
                <button
                  type="button"
                  @click="selectedScreenshot = shot"
                  class="screenshot-button"
                  :aria-label="'Agrandir : ' + shot.title"
                >
                  <img
                    :src="mediaUrl(shot.src)"
                    :alt="shot.alt"
                    v-bind="imageSize(shot.src)"
                    loading="lazy"
                  /><span class="image-expand" aria-hidden="true">↗</span>
                </button>
                <figcaption>
                  <span>{{ projectNumber(i) }} — {{ shot.title }}</span>
                  <p class="muted">{{ shot.description }}</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section v-if="project.videos?.length" class="section section-dark">
          <div class="container">
            <div class="section-heading">
              <h2 class="display-title">En <em>mouvement.</em></h2>
              <span class="eyebrow">Vidéos de démonstration</span>
            </div>
            <div class="video-grid">
              <figure v-for="(video, i) in project.videos" :key="video.src">
                <video
                  v-if="!videoErrors[video.src]"
                  controls
                  preload="metadata"
                  playsinline
                  :aria-label="video.title"
                  @error="videoErrors[video.src] = true"
                >
                  <source :src="mediaUrl(video.src)" type="video/mp4" />
                </video>
                <p v-else>Lecture impossible dans ce navigateur.</p>
                <figcaption>
                  <h3>{{ projectNumber(i) }} — {{ video.title }}</h3>
                  <p class="muted">{{ video.description }}</p>
                  <a
                    :href="mediaUrl(video.src)"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-link"
                    >Ouvrir / télécharger la vidéo ↗</a
                  >
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section class="section section-light">
          <div class="container">
            <div class="section-heading">
              <h2 class="display-title">Autres <em>projets.</em></h2>
              <router-link
                :to="{ name: 'accueil', hash: '#projets' }"
                class="text-link"
                >Tous les projets ↗</router-link
              >
            </div>
            <div class="other-projects">
              <router-link
                v-for="other in projects.filter(
                  (item) => item.slug !== project.slug,
                )"
                :key="other.slug"
                :to="{ name: 'projet', params: { slug: other.slug } }"
                ><span class="eyebrow">{{
                  projectNumber(projects.indexOf(other))
                }}</span>
                <div>
                  <h3>{{ other.title }}</h3>
                  <p class="muted">{{ other.category }}</p>
                </div>
                <span aria-hidden="true">↗</span></router-link
              >
            </div>
          </div>
        </section>
        <ContactSection />
      </template>
      <section v-else class="section not-found">
        <div class="container">
          <p class="eyebrow">404</p>
          <h1 class="display-title">Projet introuvable</h1>
          <p>Ce projet n'existe pas ou a été supprimé.</p>
          <router-link
            :to="{ name: 'accueil', hash: '#projets' }"
            class="text-link"
            >Retour aux projets ↗</router-link
          >
        </div>
      </section>
    </main>
    <ImageLightbox
      :image="selectedScreenshot"
      @close="selectedScreenshot = null"
    /><FooterSection />
  </div>
</template>
