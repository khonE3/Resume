<template>
  <div class="slide-in-right" style="animation-delay: 0.3s;">
    <h2
      class="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 mb-6 font-mono flex items-center gap-2">
      <span :class="isDark ? 'text-green-400' : 'text-green-600'">🎓</span>
      <span :class="isDark ? 'text-pink-400' : 'text-pink-600'">&lt;</span>Education<span
        :class="isDark ? 'text-pink-400' : 'text-pink-600'">/&gt;</span>
    </h2>

    <div class="p-4 md:p-6 rounded-lg border transition-all duration-300 backdrop-blur-sm shadow-md hover:shadow-lg"
      :class="isDark ? 'bg-gray-900/60 border-gray-700 hover:border-green-500/50' : 'bg-white/60 border-gray-300 hover:border-green-500/70'">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
        <h3 class="font-bold text-lg md:text-xl" :class="isDark ? 'text-green-400' : 'text-green-600'">Digital Science
          and Technology</h3>
        <span class="font-mono text-sm px-3 py-1 rounded-full w-fit"
          :class="isDark ? 'text-cyan-400 bg-cyan-500/20' : 'text-cyan-600 bg-cyan-500/30'">2023 - Present</span>
      </div>
      <p class="text-sm md:text-base mb-2 font-medium" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
        Faculty of Science
      </p>
      <p class="text-sm md:text-base flex items-center gap-2 mb-4" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
        <span :class="isDark ? 'text-purple-400' : 'text-purple-600'">📍</span>
        Kasetsart University Sriracha Campus
      </p>
      <p class="text-base md:text-lg font-bold" :class="isDark ? 'text-yellow-400' : 'text-yellow-600'">
        GPAX: 3.33
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
