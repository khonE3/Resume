<template>
    <div class="max-w-4xl mx-auto space-y-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="col-span-1 md:col-span-2">
                <ResumeExperienceSection />
            </div>

            <div class="col-span-1 md:col-span-2">
                <ResumeEducationSection />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'Experience - Thanakrit Thuakthao',
    meta: [
        { name: 'description', content: 'Experience and Education of Thanakrit Thuakthao' }
    ]
})
</script>
