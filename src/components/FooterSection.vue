<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-slate-900/15 dark:border-white/15">
    <div class="max-w-7xl mx-auto px-6 md:px-12 py-12">
      <div class="grid md:grid-cols-2 gap-8 items-end">
        <div>
          <p class="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Merci de votre visite</p>
          <p class="mt-2 text-2xl md:text-3xl font-bold leading-tight text-slate-900 dark:text-white uppercase">Créons quelque chose<br />de mémorable.</p>
          <p class="mt-4 text-xs font-mono text-slate-500 dark:text-slate-400">Jean-Marc Jorite - {{ year }}</p>
        </div>

        <div class="flex md:justify-end items-center gap-2 flex-wrap">
          <a href="https://github.com/JeanMarcJorite" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
            class="px-4 py-2 border border-slate-900/15 dark:border-white/15 text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-200 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-colors">
            GitHub
          </a>
          <a href="mailto:jeanmarcjorite38@gmail.com" aria-label="Envoyer un email"
            class="px-4 py-2 border border-slate-900/15 dark:border-white/15 text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-200 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-colors">
            E-mail
          </a>
          <a href="https://www.linkedin.com/in/jean-marc-jorite-a788aa268/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
            class="px-4 py-2 border border-slate-900/15 dark:border-white/15 text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-200 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
