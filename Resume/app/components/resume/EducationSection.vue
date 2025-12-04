<template>
  <div class="slide-in-right" style="animation-delay: 0.3s;">
    <h2 class="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 mb-4 font-mono flex items-center gap-2">
      <span class="text-green-400">🎓</span>
      <span class="text-pink-400">&lt;</span>Education<span class="text-pink-400">/&gt;</span>
    </h2>
    
    <div class="card-glass p-3 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all duration-300">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
        <h3 class="font-bold text-green-400">Digital Science and Technology</h3>
        <span class="text-cyan-400 font-mono text-xs px-2 py-0.5 bg-cyan-500/20 rounded-full w-fit">2023 - Present</span>
      </div>
      <p class="text-gray-400 text-xs flex items-center gap-2">
        <span class="text-purple-400">📍</span>
        Kasetsart University Sriracha Campus
      </p>
    </div>
  </div>
</template>

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

.card-glass {
  background: rgba(17, 24, 39, 0.6);
  backdrop-filter: blur(10px);
}
</style>

