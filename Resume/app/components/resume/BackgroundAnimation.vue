<template>
  <div class="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <!-- Code brackets background -->
    <div class="absolute inset-0 opacity-5">
      <span 
        v-for="(bracket, index) in brackets" 
        :key="index"
        class="absolute text-cyan-400 font-mono select-none"
        :style="{
          left: bracket.left + '%',
          top: bracket.top + '%',
          fontSize: bracket.size + 'rem',
          transform: `rotate(${bracket.rotate}deg)`,
          opacity: bracket.opacity
        }"
      >
        {{ bracket.char }}
      </span>
    </div>
    
    <!-- Falling tech icons -->
    <div 
      v-for="(icon, index) in fallingIcons" 
      :key="'icon-' + index"
      class="falling-icon absolute text-2xl md:text-3xl"
      :style="{
        left: icon.left + '%',
        animationDelay: icon.delay + 's',
        animationDuration: icon.duration + 's'
      }"
    >
      <span class="opacity-40">{{ icon.emoji }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const brackets = ref<Array<{left: number, top: number, size: number, rotate: number, opacity: number, char: string}>>([])
const fallingIcons = ref<Array<{left: number, delay: number, duration: number, emoji: string}>>([])

const techEmojis = ['⚛️', '🟢', '🔷', '🐍', '☕', '🦫', '🐘', '🍃', '🔥', '🐳', '⚡', '🚀', '💻', '🔧', '📦']

onMounted(() => {
  // Generate brackets
  const chars = ['<', '>', '{', '}', '[', ']', '/', '(', ')']
  brackets.value = Array.from({ length: 30 }, () => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 4 + 2,
    rotate: Math.random() * 40 - 20,
    opacity: Math.random() * 0.5 + 0.3,
    char: chars[Math.floor(Math.random() * chars.length)]
  }))
  
  // Generate falling icons
  fallingIcons.value = Array.from({ length: 15 }, () => ({
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: Math.random() * 10 + 15,
    emoji: techEmojis[Math.floor(Math.random() * techEmojis.length)]
  }))
})
</script>

<style scoped>
.falling-icon {
  animation: fall linear infinite;
  top: -50px;
}

@keyframes fall {
  0% {
    transform: translateY(-50px) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.4;
  }
  90% {
    opacity: 0.4;
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
}
</style>
