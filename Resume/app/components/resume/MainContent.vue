<template>
  <main class="flex-1 p-4 md:p-6 overflow-y-auto transition-colors duration-300"
        :class="isDark ? 'bg-transparent' : 'bg-gray-50/50'">
    <ResumeCertificatesSection />
    <ResumeActivitiesSection />
    <ResumeExperienceSection />
    <ResumeEducationSection />
  </main>
</template>

<script setup lang="ts">
const { isDark } = useTheme()
</script>
