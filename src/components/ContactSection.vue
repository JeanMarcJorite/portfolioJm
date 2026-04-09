<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'

const section = ref(null)
useScrollReveal(section)
</script>

<template>
  <section id="contact" ref="section" class="py-24 transition-colors duration-300 relative overflow-hidden">
    <!-- Large faded number -->
    <div class="absolute -right-10 top-10 text-[18rem] font-black text-slate-900 dark:text-white opacity-[0.03] dark:opacity-[0.05] select-none pointer-events-none leading-none font-mono">
      07
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left: Content -->
        <div>
          <div data-reveal="left" class="section-num mb-4"><span>07 — Contact</span></div>

          <h2 data-reveal="up" data-reveal-delay="100"
            class="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            Travaillons<br/>
            <span class="text-amber-500">ensemble.</span>
          </h2>

          <p data-reveal="up" data-reveal-delay="200"
            class="text-stone-600 dark:text-stone-400 mb-10 leading-relaxed max-w-md">
            Je suis actuellement à la recherche d'opportunités de stage et d'alternance.
            N'hésitez pas à me contacter pour échanger sur un projet ou une collaboration.
          </p>

          <!-- CTA buttons stacked -->
          <div class="space-y-3">
            <a
              href="mailto:jeanmarcjorite38@gmail.com"
              data-reveal="up" data-reveal-delay="300"
              class="magnetic-btn group flex items-center gap-4 p-4 rounded-xl border border-stone-200 dark:border-stone-800 hover:border-amber-500/40 bg-stone-50 dark:bg-stone-900/50 transition-all"
            >
              <div class="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                <svg class="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="min-w-0">
                <p class="text-xs font-mono text-stone-400 dark:text-stone-500 uppercase tracking-wider">Email</p>
                <p class="text-sm font-medium text-stone-900 dark:text-white break-all sm:break-normal group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">jeanmarcjorite38@gmail.com</p>
              </div>
              <svg class="w-4 h-4 text-stone-300 dark:text-stone-600 ml-auto flex-shrink-0 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a
              href="tel:+33636108353"
              data-reveal="up" data-reveal-delay="450"
              class="magnetic-btn group flex items-center gap-4 p-4 rounded-xl border border-stone-200 dark:border-stone-800 hover:border-sky-500/40 bg-stone-50 dark:bg-stone-900/50 transition-all"
            >
              <div class="w-12 h-12 rounded-lg bg-sky-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-500/20 transition-colors">
                <svg class="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.518 4.55a1 1 0 01-.27 1.04l-2.2 2.2a11.042 11.042 0 005.516 5.516l2.2-2.2a1 1 0 011.04-.27l4.55 1.518a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C10.163 21 3 13.837 3 5V5z" />
                </svg>
              </div>
              <div class="min-w-0">
                <p class="text-xs font-mono text-stone-400 dark:text-stone-500 uppercase tracking-wider">Téléphone</p>
                <p class="text-sm font-medium text-stone-900 dark:text-white truncate group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">06 36 10 83 53</p>
              </div>
              <svg class="w-4 h-4 text-stone-300 dark:text-stone-600 ml-auto flex-shrink-0 group-hover:text-sky-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a
              href="https://github.com/JeanMarcJorite"
              target="_blank"
              data-reveal="up" data-reveal-delay="400"
              class="magnetic-btn group flex items-center gap-4 p-4 rounded-xl border border-stone-200 dark:border-stone-800 hover:border-violet-500/40 bg-stone-50 dark:bg-stone-900/50 transition-all"
            >
              <div class="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-500/20 transition-colors">
                <svg class="w-5 h-5 text-violet-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <div class="min-w-0">
                <p class="text-xs font-mono text-stone-400 dark:text-stone-500 uppercase tracking-wider">GitHub</p>
                <p class="text-sm font-medium text-stone-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">JeanMarcJorite</p>
              </div>
              <svg class="w-4 h-4 text-stone-300 dark:text-stone-600 ml-auto flex-shrink-0 group-hover:text-violet-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/jean-marc-jorite-a788aa268/"
              target="_blank"
              rel="noreferrer"
              data-reveal="up" data-reveal-delay="500"
              class="magnetic-btn group flex items-center gap-4 p-4 rounded-xl border border-stone-200 dark:border-stone-800 hover:border-violet-500/40 bg-stone-50 dark:bg-stone-900/50 transition-all"
            >
              <div class="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-500/20 transition-colors">
                <svg class="w-5 h-5 text-violet-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.2 8.98h4.6V24H.2V8.98zM8.4 8.98h4.4v2.05h.06c.61-1.16 2.1-2.38 4.33-2.38 4.63 0 5.48 3.05 5.48 7.02V24h-4.6v-6.8c0-1.62-.03-3.71-2.26-3.71-2.26 0-2.61 1.77-2.61 3.59V24H8.4V8.98z" />
                </svg>
              </div>
              <div class="min-w-0">
                <p class="text-xs font-mono text-stone-400 dark:text-stone-500 uppercase tracking-wider">LinkedIn</p>
                <p class="text-sm font-medium text-stone-900 dark:text-white truncate group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">LinkedIn</p>
              </div>
              <svg class="w-4 h-4 text-stone-300 dark:text-stone-600 ml-auto flex-shrink-0 group-hover:text-violet-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Right: Info card -->
        <div data-reveal="right" data-reveal-delay="300">
          <div class="p-8 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/50">
            <!-- Terminal header -->
            <div class="flex items-center gap-2 mb-6 pb-4 border-b border-stone-100 dark:border-stone-800">
              <div class="flex gap-1.5">
                <div class="w-2.5 h-2.5 rounded-full bg-red-400/60"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-amber-400/60"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-emerald-400/60"></div>
              </div>
              <span class="text-xs font-mono text-stone-400 dark:text-stone-500 ml-1">contact-info.json</span>
            </div>

            <div class="font-mono text-sm leading-loose text-stone-600 dark:text-stone-400">
              <div><span class="text-stone-400 dark:text-stone-500">{</span></div>
              <div class="pl-4">
                <span class="text-violet-500">"localisation"</span><span class="text-stone-400">:</span>
                <span class="text-amber-700 dark:text-amber-300"> "Orléans, France"</span><span class="text-stone-400">,</span>
              </div>
              <div class="pl-4">
                <span class="text-violet-500">"téléphone"</span><span class="text-stone-400">:</span>
                <span class="text-amber-700 dark:text-amber-300"> "06 36 10 83 53"</span><span class="text-stone-400">,</span>
              </div>
              <div class="pl-4">
                <span class="text-violet-500">"linkedin"</span><span class="text-stone-400">:</span>
                <span class="text-amber-700 dark:text-amber-300"> "Jean-Marc Jorite"</span><span class="text-stone-400">,</span>
              </div>
              <div class="pl-4">
                <span class="text-violet-500">"formation"</span><span class="text-stone-400">:</span>
                <span class="text-amber-700 dark:text-amber-300"> "Licence Informatique en MIAGE"</span><span class="text-stone-400">,</span>
              </div>
              <div class="pl-4">
                <span class="text-violet-500">"recherche"</span><span class="text-stone-400">:</span>
                <span class="text-amber-700 dark:text-amber-300"> "Stage / Alternance"</span><span class="text-stone-400">,</span>
              </div>
              <div class="pl-4">
                <span class="text-violet-500">"disponible"</span><span class="text-stone-400">:</span>
                <span class="text-emerald-500"> true</span>
              </div>
              <div><span class="text-stone-400 dark:text-stone-500">}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
