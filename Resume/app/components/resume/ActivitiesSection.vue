<template>
  <div class="mb-6 slide-in-right" style="animation-delay: 0.1s;">
    <h2 class="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4 font-mono flex items-center gap-2">
      <span class="text-cyan-400">⚡</span>
      <span class="text-pink-400">&lt;</span>Activities<span class="text-pink-400">/&gt;</span>
    </h2>
    
    <div class="space-y-3 text-xs md:text-sm">
      <div class="card-glass p-3 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
        <h3 class="font-bold text-cyan-400">ENTREPRENEURSHIP & STARTUP CAMP#2</h3>
        <p class="text-gray-400 mt-1 leading-relaxed">
          Participated in intensive 2-day project competition, collaborating with teams to develop innovative startup concepts and enhance entrepreneurial skills through hands-on experience and competitive project development.
        </p>
      </div>
      
      <div class="card-glass p-3 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
        <h3 class="font-bold text-purple-400">Barcamp Bangsaen#3</h3>
        <p class="text-gray-400 mt-1 leading-relaxed">
          Attended technology conference to network with industry professionals, participated in knowledge exchange sessions, and gained insights from lectures on software testing methodologies and emerging AI training technologies.
        </p>
      </div>
      
      <div class="card-glass p-3 rounded-lg border border-gray-700 hover:border-pink-500/50 transition-all duration-300">
        <h3 class="font-bold text-pink-400">National Software Contest (NSC) 2025 🥇</h3>
        <p class="text-gray-400 mt-1 leading-relaxed">
          Smart Sign won <span class="text-orange-400 font-semibold">1st Place</span> in the National Software Contest (NSC) 2025 in the Eastern Region. I served as a Frontend Development Assistant with additional Backend Support responsibilities, contributing directly to the project's overall success.
        </p>
      </div>
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

