<script setup>
import { ref, watch, nextTick, onBeforeUnmount } from "vue";
import { mediaUrl } from "../utils/media";
const props = defineProps({ image: { type: Object, default: null } });
const emit = defineEmits(["close"]);
const dialog = ref(null);
let previousOverflow = "";
let opener = null;
watch(
  () => props.image,
  async (image) => {
    await nextTick();
    if (image && !dialog.value.open) {
      opener = document.activeElement;
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      dialog.value.showModal();
    } else if (!image && dialog.value.open) {
      dialog.value.close();
      document.body.style.overflow = previousOverflow;
      opener?.focus();
    }
  },
);
function close() {
  emit("close");
}
onBeforeUnmount(() => {
  if (dialog.value?.open) document.body.style.overflow = previousOverflow;
});
</script>
<template>
  <Teleport to="body">
    <dialog
      ref="dialog"
      class="lightbox"
      aria-labelledby="lightbox-title"
      @cancel.prevent="close"
      @click="
        (event) => {
          if (event.target === dialog) close();
        }
      "
    >
      <div v-if="image" class="lightbox-content">
        <button
          type="button"
          class="icon-button lightbox-close"
          aria-label="Fermer l’image"
          autofocus
          @click="close"
        >
          ×
        </button>
        <img :src="mediaUrl(image.src)" :alt="image.alt" />
        <div class="lightbox-caption">
          <p id="lightbox-title">{{ image.title }}</p>
          <p v-if="image.description" class="muted">{{ image.description }}</p>
          <a
            :href="mediaUrl(image.src)"
            target="_blank"
            rel="noopener noreferrer"
            class="text-link"
            >Ouvrir l’image originale ↗</a
          >
        </div>
      </div>
    </dialog>
  </Teleport>
</template>
