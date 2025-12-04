<template>
  <div class="slide-in-right" style="animation-delay: 0.3s;">
    <h2 class="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 mb-4 font-mono flex items-center gap-2">
      <span :class="isDark ? 'text-green-400' : 'text-green-600'">🎓</span>
      <span :class="isDark ? 'text-pink-400' : 'text-pink-600'">&lt;</span>Education<span :class="isDark ? 'text-pink-400' : 'text-pink-600'">/&gt;</span>
    </h2>
    
    <div class="p-3 rounded-lg border transition-all duration-300 backdrop-blur-sm"
         :class="isDark ? 'bg-gray-900/60 border-gray-700 hover:border-green-500/50' : 'bg-white/60 border-gray-300 hover:border-green-500/70'">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
        <h3 class="font-bold" :class="isDark ? 'text-green-400' : 'text-green-600'">Digital Science and Technology</h3>
        <span class="font-mono text-xs px-2 py-0.5 rounded-full w-fit"
              :class="isDark ? 'text-cyan-400 bg-cyan-500/20' : 'text-cyan-600 bg-cyan-500/30'">2023 - Present</span>
      </div>
      <p class="text-xs flex items-center gap-2" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
        <span :class="isDark ? 'text-purple-400' : 'text-purple-600'">📍</span>
        Kasetsart University Sriracha Campus
      </p>
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

