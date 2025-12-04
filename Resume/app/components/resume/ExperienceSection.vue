<template>
  <div class="mb-6 slide-in-right" style="animation-delay: 0.2s;">
    <h2 class="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400 mb-4 font-mono flex items-center gap-2">
      <span :class="isDark ? 'text-purple-400' : 'text-purple-600'">💼</span>
      <span :class="isDark ? 'text-pink-400' : 'text-pink-600'">&lt;</span>Experience<span :class="isDark ? 'text-pink-400' : 'text-pink-600'">/&gt;</span>
    </h2>
    
    <div class="p-3 rounded-lg border transition-all duration-300 backdrop-blur-sm"
         :class="isDark ? 'bg-gray-900/60 border-gray-700 hover:border-yellow-500/50' : 'bg-white/60 border-gray-300 hover:border-yellow-500/70'">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
        <h3 class="font-bold" :class="isDark ? 'text-yellow-400' : 'text-yellow-600'">Part-time Sales Associate</h3>
        <span class="font-mono text-xs px-2 py-0.5 rounded-full w-fit"
              :class="isDark ? 'text-cyan-400 bg-cyan-500/20' : 'text-cyan-600 bg-cyan-500/30'">2024</span>
      </div>
      <p class="text-xs mb-2" :class="isDark ? 'text-purple-400' : 'text-purple-600'">@ Dotlife Store, Central Sri Racha</p>
      <ul class="space-y-1 text-xs" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
        <li class="flex items-start gap-2">
          <span :class="isDark ? 'text-cyan-400' : 'text-cyan-600'">▹</span>
          Maintained product knowledge and stayed updated on store promotions and inventory
        </li>
        <li class="flex items-start gap-2">
          <span :class="isDark ? 'text-purple-400' : 'text-purple-600'">▹</span>
          Collaborated effectively with team members to achieve daily sales targets and store objectives
        </li>
        <li class="flex items-start gap-2">
          <span :class="isDark ? 'text-pink-400' : 'text-pink-600'">▹</span>
          Developed interpersonal skills through direct customer interaction in a fast-paced retail environment
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const { isDark } = useTheme()
</script>

<style scoped>
.slide-in-right {
  animation: slideInRight 0.6s ease-out backwards;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>

