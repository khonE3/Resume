<template>
    <div class="max-w-2xl mx-auto pt-10">
        <div class="space-y-12">
            <ResumeContactSection />
            <ResumeGithubSection />
        </div>
    </div>
</template>

<script setup lang="ts">
const { isDark } = useTheme()

useHead({
    title: 'Contact - Thanakrit Thuakthao',
    meta: [
        { name: 'description', content: 'Contact Thanakrit Thuakthao' }
    ]
})
</script>
