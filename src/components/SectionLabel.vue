<script setup>
defineProps({ number: String, text: String });
</script>
<template>
  <p class="section-label">
    <span class="section-label-dot" aria-hidden="true"></span>{{ text
    }}<span class="section-index">({{ number }})</span>
  </p>
</template>
