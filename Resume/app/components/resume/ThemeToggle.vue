<template>
  <button
    @click="toggleTheme"
    class="fixed top-4 right-4 z-50 p-3 rounded-full transition-all duration-300 shadow-lg hover:scale-110 active:scale-95"
    :class="isDark 
      ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700 border border-gray-700' 
      : 'bg-white text-gray-800 hover:bg-gray-100 border border-gray-300'"
    :title="isDark ? 'เปลี่ยนเป็นธีมสว่าง' : 'เปลี่ยนเป็นธีมมืด'"
  >
    <!-- Sun icon (show in dark mode) -->
    <svg
      v-if="isDark"
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
    <!-- Moon icon (show in light mode) -->
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  </button>
</template>

<script setup lang="ts">
const { isDark, toggleTheme, initTheme } = useTheme()

onMounted(() => {
  initTheme()
})
</script>
