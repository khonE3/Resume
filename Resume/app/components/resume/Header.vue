<template>
  <header class="relative py-8 px-4 md:px-8 text-center overflow-hidden">
    <!-- Glowing background effect -->
    <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
    
    <div class="relative z-10 slide-in-top">
      <!-- Terminal style name -->
      <div class="inline-block">
        <p class="text-cyan-400 font-mono text-sm mb-2 typing-effect">
          <span class="text-pink-400">const</span> developer = <span class="text-yellow-400">"</span>
        </p>
        <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight">
          THANAKRIT THUAKTHAO
        </h1>
        <p class="text-cyan-400 font-mono text-sm mt-2">
          <span class="text-yellow-400">"</span>;
        </p>
      </div>
      
      <p class="text-gray-400 text-lg md:text-xl mt-4 font-light">ธนกฤต เทือกเถาว์</p>
      
      <!-- Role badges -->
      <div class="flex flex-wrap justify-center gap-2 mt-4">
        <span class="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs md:text-sm font-mono border border-cyan-500/30">
          Frontend Developer
        </span>
        <span class="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs md:text-sm font-mono border border-purple-500/30">
          Backend Developer
        </span>
        <span class="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-xs md:text-sm font-mono border border-pink-500/30">
          Student @ KU
        </span>
      </div>
    </div>
  </header>
</template>

<style scoped>
.slide-in-top {
  animation: slideInTop 0.8s ease-out;
}

@keyframes slideInTop {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.typing-effect {
  overflow: hidden;
  white-space: nowrap;
  animation: typing 2s steps(20);
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}
</style>

