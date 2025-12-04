<template>
  <div class="flex justify-center mb-6 slide-in-left">
    <div class="relative group">
      <!-- Glow effect -->
      <div class="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
      
      <div class="relative w-28 h-36 md:w-32 md:h-40 rounded-lg overflow-hidden border-2 border-cyan-500/50"
           :class="isDark ? 'bg-gray-800' : 'bg-gray-200'">
        <img 
          src="/images/นศ.png" 
          alt="Profile Photo" 
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { isDark } = useTheme()
</script>

<style scoped>
.slide-in-left {
  animation: slideInLeft 0.6s ease-out;
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

