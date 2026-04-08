
<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import { education, experiences } from '../data'

const section = ref(null)
useScrollReveal(section)
</script>

<template>
  <section id="apropos" ref="section" class="py-28 bg-stone-50 dark:bg-[#0a0a0a] transition-colors duration-300 relative noise-bg">
    <!-- Large faded number -->
    <div class="absolute -left-10 top-20 text-[18rem] font-black text-stone-900 dark:text-white opacity-[0.02] dark:opacity-[0.03] select-none pointer-events-none leading-none font-mono">
      02
    </div>

    <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
      <div data-reveal="left" class="mb-16">
        <div class="section-num mb-4"><span>02 — À propos</span></div>
        <h2 class="text-3xl md:text-4xl font-black tracking-tight text-stone-900 dark:text-white transition-colors">
          Parcours & Expérience
        </h2>
      </div>

      <div class="grid lg:grid-cols-5 gap-8">
        <!-- Education: left column (3/5) -->
        <div class="lg:col-span-3 space-y-4" data-reveal="up" data-reveal-delay="200">
          <div
            v-for="(edu, i) in education"
            :key="i"
            :data-reveal-delay="300 + i * 150"
            data-reveal="up"
            class="group relative p-6 rounded-xl border transition-all duration-300 cursor-default"
            :class="edu.active
              ? 'bg-amber-500/5 dark:bg-amber-500/5 border-amber-500/20 hover:border-amber-500/40'
              : 'bg-white dark:bg-stone-900/50 border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-600'"
          >
            <div class="flex items-start gap-4">
              <!-- Left indicator -->
              <div class="flex-shrink-0 mt-1">
                <div :class="edu.active ? 'bg-amber-500' : 'bg-stone-300 dark:bg-stone-600'"
                  class="w-3 h-3 rounded-full relative">
                  <div v-if="edu.active" class="absolute inset-0 rounded-full bg-amber-500 animate-pulse-ring"></div>
                </div>
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-3 mb-1 flex-wrap">
                  <span class="font-mono text-xs tracking-wider uppercase"
                    :class="edu.active ? 'text-amber-600 dark:text-amber-400' : 'text-stone-400 dark:text-stone-500'">
                    {{ edu.period }}
                  </span>
                  <span v-if="edu.active" class="px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded">En cours</span>
                </div>
                <p class="text-lg font-bold text-stone-900 dark:text-white transition-colors">{{ edu.title }}</p>
                <p class="text-stone-500 dark:text-stone-400 text-sm">{{ edu.school }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Experience: right column (2/5) -->
        <div class="lg:col-span-2" data-reveal="right" data-reveal-delay="400">
          <div class="p-6 rounded-xl bg-white dark:bg-stone-900/50 border border-stone-200 dark:border-stone-800">
            <!-- Terminal-style header -->
            <div class="flex items-center gap-2 mb-5 pb-4 border-b border-stone-100 dark:border-stone-800">
              <div class="flex gap-1.5">
                <div class="w-2.5 h-2.5 rounded-full bg-red-400/60"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-amber-400/60"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-emerald-400/60"></div>
              </div>
              <span class="text-xs font-mono text-stone-400 dark:text-stone-500 ml-1">experience.md</span>
            </div>

            <div class="space-y-5">
              <div
                v-for="(exp, i) in experiences"
                :key="exp.title"
                class="pb-5 border-b border-stone-100 dark:border-stone-800 last:border-0 last:pb-0"
              >
                <div class="flex items-center gap-2">
                  <span class="font-mono text-xs text-amber-500">→</span>
                  <span class="font-mono text-xs text-stone-400 dark:text-stone-500">{{ exp.period }}</span>
                </div>
                <h3 class="text-base font-bold text-stone-900 dark:text-white mt-1">{{ exp.title }}</h3>
                <p class="text-sm font-medium text-amber-600 dark:text-amber-400">{{ exp.location }}</p>
                <p class="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mt-2">{{ exp.description }}</p>

                <div class="flex flex-wrap gap-1.5 pt-3">
                  <span
                    v-for="(tag, j) in exp.tags"
                    :key="tag"
                    :data-reveal-delay="600 + i * 60 + j * 40"
                    data-reveal="scale"
                    class="px-2.5 py-1 bg-stone-100 dark:bg-stone-800 rounded text-[11px] font-mono font-medium text-stone-600 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors cursor-default"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
