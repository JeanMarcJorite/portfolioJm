<script setup>
import { computed } from "vue";
import { mediaUrl, projectNumber } from "../utils/media";
import { imageSize } from "../utils/imageSizes";
const props = defineProps({
  project: { type: Object, required: true },
  index: { type: Number, default: 0 },
});
const mainImage = computed(
  () =>
    props.project.screenshots?.[props.project.slug === "welabbudget" ? 1 : 0],
);
</script>
<template>
  <div class="project-visual" :class="'visual-' + project.slug">
    <span class="visual-index" aria-hidden="true"
      >{{ projectNumber(index) }} / {{ project.category }}</span
    >
    <template v-if="mainImage">
      <div class="project-image-frame">
        <img
          :src="mediaUrl(mainImage.src)"
          :alt="mainImage.alt"
          v-bind="imageSize(mainImage.src)"
          loading="lazy"
        />
      </div>
      <span class="visual-word" aria-hidden="true">{{
        project.slug === "welabbudget" ? "WeLabBudget" : "Nutrigram."
      }}</span>
    </template>
    <div v-else class="typographic-cover" aria-hidden="true">
      <p>
        {{
          project.slug === "stage-edf-power-bi"
            ? "EDF"
            : project.slug === "projet-musics"
              ? "Musics"
              : "Ensemble."
        }}
      </p>
      <span>{{
        project.slug === "stage-edf-power-bi"
          ? "Migration Power BI"
          : project.title
      }}</span>
      <span class="cover-tech">{{ project.tags.join(" / ") }}</span>
    </div>
  </div>
</template>
