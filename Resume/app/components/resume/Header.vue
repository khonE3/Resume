<template>
  <header class="relative py-8 px-4 md:px-8 text-center overflow-hidden">
    <!-- Animated gradient background effect -->
    <div class="absolute inset-0 animated-gradient" :class="isDark ? 'opacity-100' : 'opacity-50'"></div>
    
    <div class="relative z-10 slide-in-top">
      <!-- Terminal style name -->
      <div class="inline-block">
        <p class="font-mono text-sm mb-2" :class="isDark ? 'text-cyan-400' : 'text-cyan-600'">
          <span :class="isDark ? 'text-pink-400' : 'text-pink-600'">const</span>&nbsp;
          <span class="developer-text">
            <span 
              v-for="(char, index) in 'developer'" 
              :key="index" 
              class="developer-char"
              :style="{ animationDelay: `${2 + index * 0.1}s` }"
            >{{ char }}</span>
          </span>
          <span class="typing-effect">&nbsp;=&nbsp;</span>
          <span :class="isDark ? 'text-yellow-400' : 'text-yellow-600'">"</span>
        </p>
        <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent tracking-tight animated-text-gradient">
          THANAKRIT THUAKTHAO
        </h1>
        <p class="font-mono text-sm mt-2" :class="isDark ? 'text-cyan-400' : 'text-cyan-600'">
          <span :class="isDark ? 'text-yellow-400' : 'text-yellow-600'">"</span>;
        </p>
      </div>
      
      <p class="text-lg md:text-xl mt-4 font-light" :class="isDark ? 'text-gray-400' : 'text-gray-600'">ธนกฤต เทือกเถาว์</p>
      
    </div>
  </header>
</template>

<script setup lang="ts">
const { isDark } = useTheme()
</script>

<style scoped>
.animated-gradient {
  background: linear-gradient(
    -45deg,
    rgba(6, 182, 212, 0.15),
    rgba(168, 85, 247, 0.15),
    rgba(236, 72, 153, 0.15),
    rgba(59, 130, 246, 0.15),
    rgba(6, 182, 212, 0.15)
  );
  background-size: 400% 400%;
  animation: gradientShift 8s ease infinite;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animated-text-gradient {
  background: linear-gradient(
    90deg,
    #06b6d4,
    #a855f7,
    #ec4899,
    #3b82f6,
    #06b6d4
  );
  background-size: 300% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  animation: textGradientShift 6s ease infinite;
}

@keyframes textGradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

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

/* Developer text animation */
.developer-text {
  display: inline-block;
}

.developer-char {
  display: inline-block;
  animation: bounceAndDomino 4s ease-in-out infinite;
  transform-origin: bottom center;
}

@keyframes bounceAndDomino {
  /* Initial bounce up */
  0% {
    transform: translateY(0) rotate(0deg);
  }
  /* Bounce up */
  5% {
    transform: translateY(-8px) rotate(0deg);
  }
  /* Back down with slight bounce */
  10% {
    transform: translateY(0) rotate(0deg);
  }
  12% {
    transform: translateY(-3px) rotate(0deg);
  }
  15% {
    transform: translateY(0) rotate(0deg);
  }
  /* Start domino fall */
  25% {
    transform: translateY(0) rotate(0deg);
  }
  /* Fall forward */
  35% {
    transform: translateY(0) rotate(25deg);
  }
  /* Stay fallen */
  50% {
    transform: translateY(0) rotate(25deg);
  }
  /* Rise back up (domino reverse) */
  65% {
    transform: translateY(0) rotate(0deg);
  }
  /* Small bounce when back up */
  70% {
    transform: translateY(-4px) rotate(0deg);
  }
  75% {
    transform: translateY(0) rotate(0deg);
  }
  /* Stay normal */
  100% {
    transform: translateY(0) rotate(0deg);
  }
}
</style>