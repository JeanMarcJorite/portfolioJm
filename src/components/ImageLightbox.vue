<script setup>
import { ref, watch } from "vue";
import { useModalDialog } from "../composables/useModalDialog";
import { mediaUrl } from "../utils/media";
const props = defineProps({ image: { type: Object, default: null } });
const emit = defineEmits(["close"]);
const dialog = ref(null);
const displayedImage = ref(props.image);
watch(() => props.image, (image) => { if (image) displayedImage.value = image; });
useModalDialog(dialog, () => Boolean(props.image));
function close() {
  emit("close");
}
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
      <div v-if="displayedImage" class="lightbox-content">
        <button
          type="button"
          class="icon-button lightbox-close"
          aria-label="Fermer l’image"
          autofocus
          @click="close"
        >
          ×
        </button>
        <img :src="mediaUrl(displayedImage.src)" :alt="displayedImage.alt" />
        <div class="lightbox-caption">
          <p id="lightbox-title">{{ displayedImage.title }}</p>
          <p v-if="displayedImage.description" class="muted">{{ displayedImage.description }}</p>
          <a
            :href="mediaUrl(displayedImage.src)"
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
