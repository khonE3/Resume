<template>
  <div class="min-h-screen relative overflow-hidden transition-colors duration-300"
       :class="isDark ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'">
    <!-- Theme Toggle Button -->
    <ResumeThemeToggle />
    
    <!-- Background Animation -->
    <ResumeBackgroundAnimation />
    
    <!-- Main Container -->
    <div class="relative z-10 min-h-screen flex flex-col">
      <!-- Header -->
      <ResumeHeader />
      
      <!-- Content -->
      <div class="flex-1 flex flex-col lg:flex-row max-w-7xl mx-auto w-full">
        <!-- Sidebar -->
        <ResumeSidebar />
        
        <!-- Main Content -->
        <ResumeMainContent />
      </div>
      
      <!-- Footer -->
      <footer class="text-center py-4 text-xs font-mono border-t transition-colors duration-300"
              :class="isDark ? 'text-gray-600 border-gray-800' : 'text-gray-500 border-gray-300'">
        <p>&lt;/&gt; Built with Nuxt + TailwindCSS</p>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
const { isDark } = useTheme()

useHead({
  title: 'Resume - Thanakrit Thuakthao | Developer',
  meta: [
    { name: 'description', content: 'Resume of Thanakrit Thuakthao - Full Stack Developer & Digital Science Student' }
  ]
})
</script>

<style>
/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #1f2937;
}

::-webkit-scrollbar-thumb {
  background: #4b5563;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}
</style>

