<template>
  <div class="mb-6 slide-in-left" style="animation-delay: 0.3s;">
    <h2 class="text-base font-bold text-cyan-400 border-b border-cyan-500/30 pb-1 mb-3 font-mono flex items-center gap-2">
      <span class="text-pink-400">&lt;</span>Languages<span class="text-pink-400">/&gt;</span>
    </h2>
    <div class="space-y-2 text-xs">
      <div class="flex items-center justify-between">
        <span class="text-gray-300"> English</span>
        <span class="text-cyan-400 font-mono">(Good)</span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-gray-300"> Thai</span>
        <span class="text-pink-400 font-mono">(Native)</span>
      </div>
    </div>
  </div>
</template>

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

