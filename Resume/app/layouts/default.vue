<template>
    <div class="min-h-screen relative overflow-hidden transition-colors duration-300"
        :class="isDark ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'">

        <!-- Background Animation -->
        <ResumeBackgroundAnimation />
        <ResumeThemeToggle class="fixed bottom-4 right-4 z-50" />

        <div class="relative z-10 min-h-screen flex flex-col">
            <NavBar />
            <main class="flex-1 max-w-7xl mx-auto w-full p-4 md:p-8">
                <slot />
            </main>

            <footer class="text-center py-6 text-xs font-mono border-t transition-colors duration-300 relative z-10"
                :class="isDark ? 'text-gray-600 border-gray-800' : 'text-gray-500 border-gray-300'">
                <p>&lt;/&gt; Built with Nuxt + TailwindCSS</p>
            </footer>
        </div>
    </div>
</template>

<script setup lang="ts">
const { isDark } = useTheme()
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
