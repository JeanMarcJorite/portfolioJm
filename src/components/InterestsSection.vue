<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import { interests } from '../data'

const section = ref(null)
useScrollReveal(section)
</script>

<template>
  <section id="interets" ref="section" class="py-24 transition-colors duration-300 relative">
    <div class="absolute -left-10 top-20 text-[18rem] font-black text-slate-900 dark:text-white opacity-[0.03] dark:opacity-[0.05] select-none pointer-events-none leading-none font-mono">
      05
    </div>

    <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
      <div data-reveal="left" class="mb-16">
        <div class="section-num mb-4"><span>05 — Centres d’intérêt</span></div>
        <h2 class="text-3xl md:text-4xl font-black tracking-tight uppercase text-slate-900 dark:text-white transition-colors">
          Ce qui m’anime
        </h2>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <article
          v-for="(item, i) in interests"
          :key="item.title"
          data-reveal="up"
          :data-reveal-delay="200 + i * 100"
          class="p-6 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 hover:border-stone-400 dark:hover:border-stone-600 transition-all"
        >
          <h3 class="text-lg font-bold text-stone-900 dark:text-white mb-2">{{ item.title }}</h3>
          <p class="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{{ item.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
