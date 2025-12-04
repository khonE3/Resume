<template>
  <div class="mb-6 slide-in-right">
    <h2 class="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4 font-mono flex items-center gap-2">
      <span :class="isDark ? 'text-yellow-400' : 'text-yellow-600'">🏆</span>
      <span :class="isDark ? 'text-pink-400' : 'text-pink-600'">&lt;</span>Certificates<span :class="isDark ? 'text-pink-400' : 'text-pink-600'">/&gt;</span>
    </h2>
    
    <div class="space-y-3 text-xs md:text-sm">
      <div class="p-3 rounded-lg border transition-all duration-300 backdrop-blur-sm"
           :class="isDark ? 'bg-gray-900/60 border-gray-700 hover:border-cyan-500/50' : 'bg-white/60 border-gray-300 hover:border-cyan-500/70'">
        <h3 class="font-bold" :class="isDark ? 'text-cyan-400' : 'text-cyan-600'">EEC Hackathon 2025</h3>
        <p class="mt-1 leading-relaxed" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
          • Smart Sign reached in the Hackathon, earning the <span :class="isDark ? 'text-yellow-400' : 'text-yellow-600'" class="italic">Top Star for Health and Well-being Award</span> worth 10,000 THB, underscoring their potential in developing solutions that enhance the health and well-being of the deaf community.
        </p>
      </div>
      
      <div class="p-3 rounded-lg border transition-all duration-300 backdrop-blur-sm"
           :class="isDark ? 'bg-gray-900/60 border-gray-700 hover:border-purple-500/50' : 'bg-white/60 border-gray-300 hover:border-purple-500/70'">
        <h3 class="font-bold" :class="isDark ? 'text-purple-400' : 'text-purple-600'">Innovation Award 2025</h3>
        <p class="mt-1 leading-relaxed" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
          • Smart Sign won <span :class="isDark ? 'text-cyan-400' : 'text-cyan-600'">1st Place</span> in the Innovation Award 2025, receiving a 12,000 THB prize for developing an innovative and impactful digital solution.
        </p>
      </div>
      
      <div class="p-3 rounded-lg border transition-all duration-300 backdrop-blur-sm"
           :class="isDark ? 'bg-gray-900/60 border-gray-700 hover:border-pink-500/50' : 'bg-white/60 border-gray-300 hover:border-pink-500/70'">
        <h3 class="font-bold" :class="isDark ? 'text-pink-400' : 'text-pink-600'">KU Digital Literacy Certifications</h3>
        <p class="mt-1 leading-relaxed" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
          • Passed the Kasetsart University Digital Literacy competency examination, demonstrating proficiency in essential digital skills.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { isDark } = useTheme()
</script>

<style scoped>
.slide-in-right {
  animation: slideInRight 0.6s ease-out;
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

