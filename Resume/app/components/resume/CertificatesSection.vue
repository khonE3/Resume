<template>
  <div class="mb-6 slide-in-right">
    <h2 class="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4 font-mono flex items-center gap-2">
      <span class="text-yellow-400">🏆</span>
      <span class="text-pink-400">&lt;</span>Certificates<span class="text-pink-400">/&gt;</span>
    </h2>
    
    <div class="space-y-3 text-xs md:text-sm">
      <div class="card-glass p-3 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
        <h3 class="font-bold text-cyan-400">EEC Hackathon 2025</h3>
        <p class="text-gray-400 mt-1 leading-relaxed">
          • Smart Sign reached in the Hackathon, earning the <span class="text-yellow-400 italic">Top Star for Health and Well-being Award</span> worth 10,000 THB, underscoring their potential in developing solutions that enhance the health and well-being of the deaf community.
        </p>
      </div>
      
      <div class="card-glass p-3 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
        <h3 class="font-bold text-purple-400">Innovation Award 2025</h3>
        <p class="text-gray-400 mt-1 leading-relaxed">
          • Smart Sign won <span class="text-cyan-400">1st Place</span> in the Innovation Award 2025, receiving a 12,000 THB prize for developing an innovative and impactful digital solution.
        </p>
      </div>
      
      <div class="card-glass p-3 rounded-lg border border-gray-700 hover:border-pink-500/50 transition-all duration-300">
        <h3 class="font-bold text-pink-400">KU Digital Literacy Certifications</h3>
        <p class="text-gray-400 mt-1 leading-relaxed">
          • Passed the Kasetsart University Digital Literacy competency examination, demonstrating proficiency in essential digital skills.
        </p>
      </div>
    </div>
  </div>
</template>

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

.card-glass {
  background: rgba(17, 24, 39, 0.6);
  backdrop-filter: blur(10px);
}
</style>

