<script setup>
import { projects } from "../data";
import { projectNumber } from "../utils/media";
import SectionLabel from "./SectionLabel.vue";
import ProjectVisual from "./ProjectVisual.vue";
</script>
<template>
  <section id="projets" class="section section-light">
    <div class="container">
      <SectionLabel number="04" text="Projets" />
      <div class="section-heading" data-reveal>
        <h2 class="display-title">
          Des idées.<br /><em>Des réalisations.</em>
        </h2>
        <span class="project-count"
          >{{ String(projects.length).padStart(2, "0")
          }}<span class="eyebrow">projets à découvrir</span></span
        >
      </div>
      <div class="project-list">
        <article
          v-for="(project, i) in projects"
          :key="project.slug"
          class="project-entry"
          data-reveal
        >
          <router-link
            :to="{ name: 'projet', params: { slug: project.slug } }"
            class="project-link"
            :aria-label="'Voir le projet : ' + project.title"
          >
            <div class="project-art">
              <ProjectVisual :project="project" :index="i" /><span
                class="circle-button project-open"
                ><span>Voir le<br />projet</span
                ><span aria-hidden="true">↗</span></span
              >
            </div>
            <div class="project-meta">
              <span class="eyebrow"
                >{{ projectNumber(i) }} — {{ project.category }}</span
              ><span class="eyebrow">{{ project.date }}</span>
            </div>
            <div class="project-copy">
              <h3>{{ project.title }}</h3>
              <div>
                <p>{{ project.description }}</p>
                <ul class="tags">
                  <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
                </ul>
                <p class="project-team muted">
                  {{ project.team }} · {{ project.duration }}
                </p>
              </div>
            </div>
          </router-link>
        </article>
      </div>
    </div>
  </section>
</template>
