<script setup>
import { ref, computed } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import { skills } from '../data'

const section = ref(null)
useScrollReveal(section)

const categories = [
  { title: 'Langages', items: skills.langages, icon: '{ }', accent: 'amber' },
  { title: 'Frameworks', items: skills.frameworks, icon: '< />', accent: 'violet' },
  { title: 'Bases de Données', items: skills.databases, icon: 'DB', accent: 'emerald' },
  { title: 'Outils & Méthodes', items: skills.tools, icon: '$ _', accent: 'rose' },
]

// Flatten all skills for the marquee
const allSkills = computed(() => {
  return [...skills.langages, ...skills.frameworks, ...skills.databases, ...skills.tools]
})
</script>

<template>
  <section id="competences" ref="section" class="py-24 transition-colors duration-300 relative overflow-hidden">
    <!-- Large faded number -->
    <div class="absolute -right-10 top-10 text-[18rem] font-black text-slate-900 dark:text-white opacity-[0.03] dark:opacity-[0.05] select-none pointer-events-none leading-none font-mono">
      03
    </div>

    <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
      <div data-reveal="left" class="mb-16">
        <div class="section-num mb-4"><span>03 — Compétences</span></div>
        <h2 class="text-3xl md:text-4xl font-black tracking-tight uppercase text-slate-900 dark:text-white transition-colors">
          Stack technique
        </h2>
      </div>

      <!-- Bento grid -->
      <div class="bento-grid">
        <div
          v-for="(cat, idx) in categories"
          :key="cat.title"
          data-reveal="up"
          :data-reveal-delay="200 + idx * 100"
          class="group p-6 md:p-8 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/50 hover:border-stone-400 dark:hover:border-stone-600 transition-all duration-300 cursor-default relative overflow-hidden"
        >
          <!-- Glow on hover -->
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            :class="{
              'bg-gradient-to-br from-amber-500/5 to-transparent': cat.accent === 'amber',
              'bg-gradient-to-br from-violet-500/5 to-transparent': cat.accent === 'violet',
              'bg-gradient-to-br from-emerald-500/5 to-transparent': cat.accent === 'emerald',
              'bg-gradient-to-br from-rose-500/5 to-transparent': cat.accent === 'rose',
            }"></div>

          <div class="relative z-10">
            <!-- Icon badge -->
            <div class="inline-flex items-center justify-center w-10 h-10 rounded-lg mb-4 font-mono text-sm font-bold"
              :class="{
                'bg-amber-500/10 text-amber-600 dark:text-amber-400': cat.accent === 'amber',
                'bg-violet-500/10 text-violet-600 dark:text-violet-400': cat.accent === 'violet',
                'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400': cat.accent === 'emerald',
                'bg-rose-500/10 text-rose-600 dark:text-rose-400': cat.accent === 'rose',
              }">
              {{ cat.icon }}
            </div>

            <div class="flex items-baseline gap-3 mb-4">
              <h3 class="font-bold text-stone-900 dark:text-white text-lg transition-colors">{{ cat.title }}</h3>
              <span class="font-mono text-xs text-stone-400 dark:text-stone-500">{{ cat.items.length }}</span>
            </div>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="item in cat.items"
                :key="item"
                data-reveal="scale"
                :data-reveal-delay="400 + idx * 80"
                class="px-3 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-400 hover:border-amber-500/30 transition-all duration-200 cursor-default"
              >
                {{ item }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Infinite marquee -->
      <div data-reveal="fade" data-reveal-delay="600" class="mt-16 relative">
        <div class="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-[#0f0f0f] to-transparent z-10 pointer-events-none"></div>
        <div class="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-[#0f0f0f] to-transparent z-10 pointer-events-none"></div>
        <div class="overflow-hidden">
          <div class="marquee-track">
            <span v-for="(skill, i) in [...allSkills, ...allSkills]" :key="i"
              class="inline-flex items-center gap-2 px-4 py-2 mx-1.5 text-xs font-mono text-stone-400 dark:text-stone-500 whitespace-nowrap">
              <span class="w-1 h-1 rounded-full bg-amber-500/50"></span>
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
