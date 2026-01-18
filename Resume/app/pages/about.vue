<template>
    <div class="flex flex-col md:flex-row gap-12 items-center justify-center min-h-[60vh]">
        <div class="flex-shrink-0">
            <ResumeProfileImage />
        </div>

        <div class="max-w-xl space-y-6 text-center md:text-left">
            <div>
                <h1 class="text-3xl font-bold mb-6 font-mono" :class="isDark ? 'text-cyan-400' : 'text-cyan-600'">
                    <span :class="isDark ? 'text-pink-400' : 'text-pink-600'">&lt;</span>About Me<span
                        :class="isDark ? 'text-pink-400' : 'text-pink-600'">/&gt;</span>
                </h1>
                <p class="leading-relaxed text-lg" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
                    Software Engineer with a strong focus on frontend development and a solid understanding of backend
                    systems. Experienced in building responsive user interfaces using React, Vue, Nuxt, Next, and
                    Tailwind CSS, with supporting experience in developing backend APIs using Go (Fiber, Gin), Node.js,
                    and Express. Familiar with integrating AI-related services, implementing real-time features, and
                    working with Docker and CI/CD in development workflows. Comfortable collaborating with UI/UX,
                    frontend, backend, and AI teams, with experience gained through project-based and national-level
                    competitions.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { isDark } = useTheme()

useHead({
    title: 'About - Thanakrit Thuakthao',
    meta: [
        { name: 'description', content: 'About Thanakrit Thuakthao' }
    ]
})
</script>
