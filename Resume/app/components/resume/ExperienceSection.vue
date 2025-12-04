<template>
  <div class="mb-6 slide-in-right" style="animation-delay: 0.2s;">
    <h2 class="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400 mb-4 font-mono flex items-center gap-2">
      <span class="text-purple-400">💼</span>
      <span class="text-pink-400">&lt;</span>Experience<span class="text-pink-400">/&gt;</span>
    </h2>
    
    <div class="card-glass p-3 rounded-lg border border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
        <h3 class="font-bold text-yellow-400">Part-time Sales Associate</h3>
        <span class="text-cyan-400 font-mono text-xs px-2 py-0.5 bg-cyan-500/20 rounded-full w-fit">2024</span>
      </div>
      <p class="text-purple-400 text-xs mb-2">@ Dotlife Store, Central Sri Racha</p>
      <ul class="text-gray-400 space-y-1 text-xs">
        <li class="flex items-start gap-2">
          <span class="text-cyan-400">▹</span>
          Maintained product knowledge and stayed updated on store promotions and inventory
        </li>
        <li class="flex items-start gap-2">
          <span class="text-purple-400">▹</span>
          Collaborated effectively with team members to achieve daily sales targets and store objectives
        </li>
        <li class="flex items-start gap-2">
          <span class="text-pink-400">▹</span>
          Developed interpersonal skills through direct customer interaction in a fast-paced retail environment
        </li>
      </ul>
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

