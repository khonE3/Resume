<template>
  <div class="mb-6 slide-in-right" style="animation-delay: 0.1s;">
    <h2
      class="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6 font-mono flex items-center gap-2">
      <span :class="isDark ? 'text-cyan-400' : 'text-cyan-600'">⚡</span>
      <span :class="isDark ? 'text-pink-400' : 'text-pink-600'">&lt;</span>Activities<span
        :class="isDark ? 'text-pink-400' : 'text-pink-600'">/&gt;</span>
    </h2>

    <div class="space-y-6 text-sm md:text-base">

      <!-- NSC 2025 -->
      <div class="p-4 md:p-6 rounded-lg border transition-all duration-300 backdrop-blur-sm shadow-md hover:shadow-lg"
        :class="isDark ? 'bg-gray-900/60 border-gray-700 hover:border-pink-500/50' : 'bg-white/60 border-gray-300 hover:border-pink-500/70'">
        <h3 class="font-bold text-lg mb-2" :class="isDark ? 'text-pink-400' : 'text-pink-600'">National Software Contest
          (NSC) 2025 – 1st Place Winner – Eastern 🥇</h3>
        <p class="leading-relaxed" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
          Smart Sign Project: Health, Disability & Elderly Category (Qualified for National Final Round).
        </p>
      </div>

      <!-- EEC Hackathon 2025 -->
      <div class="p-4 md:p-6 rounded-lg border transition-all duration-300 backdrop-blur-sm shadow-md hover:shadow-lg"
        :class="isDark ? 'bg-gray-900/60 border-gray-700 hover:border-purple-500/50' : 'bg-white/60 border-gray-300 hover:border-purple-500/70'">
        <h3 class="font-bold text-lg mb-2" :class="isDark ? 'text-purple-400' : 'text-purple-600'">EEC Hackathon 2025 –
          National Level 🏆</h3>
        <p class="leading-relaxed" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
          Smart Sign Project: Top Star for Health and Well-being Award (10,000 THB) & Presentation Award (3,000 THB).
        </p>
      </div>

      <!-- Innovation Award 2025 -->
      <div class="p-4 md:p-6 rounded-lg border transition-all duration-300 backdrop-blur-sm shadow-md hover:shadow-lg"
        :class="isDark ? 'bg-gray-900/60 border-gray-700 hover:border-cyan-500/50' : 'bg-white/60 border-gray-300 hover:border-cyan-500/70'">
        <h3 class="font-bold text-lg mb-2" :class="isDark ? 'text-cyan-400' : 'text-cyan-600'">Innovation Award 2025 –
          Kasetsart University Kamphaeng Saen Campus 💡</h3>
        <p class="leading-relaxed" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
          Smart Sign Project: 1st Place Winner, Undergraduate Level Category (12,000 THB)
        </p>
      </div>

      <!-- Entrepreneurship & Startup Camp #2 -->
      <div class="p-4 md:p-6 rounded-lg border transition-all duration-300 backdrop-blur-sm shadow-md hover:shadow-lg"
        :class="isDark ? 'bg-gray-900/60 border-gray-700 hover:border-cyan-500/50' : 'bg-white/60 border-gray-300 hover:border-cyan-500/70'">
        <h3 class="font-bold text-lg mb-2" :class="isDark ? 'text-cyan-400' : 'text-cyan-600'">Entrepreneurship &
          Startup Camp #2 🚀</h3>
        <p class="leading-relaxed" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
          Participated in a 2-day startup project competition and team-based product development.
        </p>
      </div>

      <!-- Barcamp Bangsaen #3 -->
      <div class="p-4 md:p-6 rounded-lg border transition-all duration-300 backdrop-blur-sm shadow-md hover:shadow-lg"
        :class="isDark ? 'bg-gray-900/60 border-gray-700 hover:border-purple-500/50' : 'bg-white/60 border-gray-300 hover:border-purple-500/70'">
        <h3 class="font-bold text-lg mb-2" :class="isDark ? 'text-purple-400' : 'text-purple-600'">Barcamp Bangsaen #3
          🎤</h3>
        <p class="leading-relaxed" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
          Attended a technology conference focused on software testing and emerging AI technologies.
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
