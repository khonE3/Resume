<template>
  <div class="mb-6 slide-in-right" style="animation-delay: 0.1s;">
    <h2 class="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4 font-mono flex items-center gap-2">
      <span :class="isDark ? 'text-cyan-400' : 'text-cyan-600'">⚡</span>
      <span :class="isDark ? 'text-pink-400' : 'text-pink-600'">&lt;</span>Activities<span :class="isDark ? 'text-pink-400' : 'text-pink-600'">/&gt;</span>
    </h2>
    
    <div class="space-y-3 text-xs md:text-sm">
      <div class="p-3 rounded-lg border transition-all duration-300 backdrop-blur-sm"
           :class="isDark ? 'bg-gray-900/60 border-gray-700 hover:border-cyan-500/50' : 'bg-white/60 border-gray-300 hover:border-cyan-500/70'">
        <h3 class="font-bold" :class="isDark ? 'text-cyan-400' : 'text-cyan-600'">ENTREPRENEURSHIP & STARTUP CAMP#2</h3>
        <p class="mt-1 leading-relaxed" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
          Participated in intensive 2-day project competition, collaborating with teams to develop innovative startup concepts and enhance entrepreneurial skills through hands-on experience and competitive project development.
        </p>
      </div>
      
      <div class="p-3 rounded-lg border transition-all duration-300 backdrop-blur-sm"
           :class="isDark ? 'bg-gray-900/60 border-gray-700 hover:border-purple-500/50' : 'bg-white/60 border-gray-300 hover:border-purple-500/70'">
        <h3 class="font-bold" :class="isDark ? 'text-purple-400' : 'text-purple-600'">Barcamp Bangsaen#3</h3>
        <p class="mt-1 leading-relaxed" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
          Attended technology conference to network with industry professionals, participated in knowledge exchange sessions, and gained insights from lectures on software testing methodologies and emerging AI training technologies.
        </p>
      </div>
      
      <div class="p-3 rounded-lg border transition-all duration-300 backdrop-blur-sm"
           :class="isDark ? 'bg-gray-900/60 border-gray-700 hover:border-pink-500/50' : 'bg-white/60 border-gray-300 hover:border-pink-500/70'">
        <h3 class="font-bold" :class="isDark ? 'text-pink-400' : 'text-pink-600'">National Software Contest (NSC) 2025 🥇</h3>
        <p class="mt-1 leading-relaxed" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
          Smart Sign won <span :class="isDark ? 'text-orange-400' : 'text-orange-600'" class="font-semibold">1st Place</span> in the National Software Contest (NSC) 2025 in the Eastern Region. I served as a Frontend Development Assistant with additional Backend Support responsibilities, contributing directly to the project's overall success.
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

