<template>
  <div class="mb-6 slide-in-left" style="animation-delay: 0.3s;">
    <h2 class="text-base font-bold border-b border-cyan-500/30 pb-1 mb-3 font-mono flex items-center gap-2"
        :class="isDark ? 'text-cyan-400' : 'text-cyan-600'">
      <span :class="isDark ? 'text-pink-400' : 'text-pink-600'">&lt;</span>Languages<span :class="isDark ? 'text-pink-400' : 'text-pink-600'">/&gt;</span>
    </h2>
    <div class="space-y-2 text-xs">
      <div class="flex items-center justify-between">
        <span :class="isDark ? 'text-gray-300' : 'text-gray-700'"> English</span>
        <span :class="isDark ? 'text-cyan-400' : 'text-cyan-600'" class="font-mono">(Good)</span>
      </div>
      <div class="flex items-center justify-between">
        <span :class="isDark ? 'text-gray-300' : 'text-gray-700'"> Thai</span>
        <span :class="isDark ? 'text-pink-400' : 'text-pink-600'" class="font-mono">(Native)</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { isDark } = useTheme()
</script>

<style scoped>
.slide-in-left {
  animation: slideInLeft 0.6s ease-out backwards;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>

