<template>
  <aside class="backdrop-blur-sm p-4 md:p-6 w-full lg:w-64 flex-shrink-0 border-r transition-colors duration-300"
         :class="isDark 
           ? 'bg-gray-900/80 text-white border-gray-800' 
           : 'bg-white/80 text-gray-900 border-gray-200'">
    <ResumeProfileImage />
    <ResumeContactSection />
    <ResumeSkillsSection />
    <ResumeLanguagesSection />
    <ResumeGithubSection />
  </aside>
</template>

<script setup lang="ts">
const { isDark } = useTheme()
</script>
