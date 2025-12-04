<template>
  <div class="min-h-screen bg-gray-950 text-white relative overflow-hidden">
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
      <footer class="text-center py-4 text-gray-600 text-xs font-mono border-t border-gray-800">
        <p>&lt;/&gt; Built with Nuxt + TailwindCSS</p>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
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

