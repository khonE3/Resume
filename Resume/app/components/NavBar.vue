<template>
    <nav class="sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300"
        :class="isDark ? 'bg-gray-950/80 border-gray-800' : 'bg-white/80 border-gray-200'">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <!-- Logo / Name -->
                <div class="flex-shrink-0 font-mono font-bold text-lg"
                    :class="isDark ? 'text-cyan-400' : 'text-cyan-600'">
                    <NuxtLink to="/">&lt;Thanakrit /&gt;</NuxtLink>
                </div>

                <!-- Desktop Menu -->
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-4">
                        <NuxtLink to="/" class="nav-link" active-class="active-link">Home</NuxtLink>
                        <NuxtLink to="/about" class="nav-link" active-class="active-link">About</NuxtLink>
                        <NuxtLink to="/experience" class="nav-link" active-class="active-link">Experience</NuxtLink>
                        <NuxtLink to="/skills" class="nav-link" active-class="active-link">Skills</NuxtLink>
                        <NuxtLink to="/activities" class="nav-link" active-class="active-link">Activities</NuxtLink>
                        <NuxtLink to="/contact" class="nav-link" active-class="active-link">Contact</NuxtLink>
                    </div>
                </div>

                <!-- Mobile Menu Button (Hamburger) -->
                <div class="-mr-2 flex md:hidden">
                    <button @click="isOpen = !isOpen" type="button"
                        class="inline-flex items-center justify-center p-2 rounded-md transition-colors"
                        :class="isDark ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'"
                        aria-controls="mobile-menu" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg :class="{ 'hidden': isOpen, 'block': !isOpen }" class="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg :class="{ 'block': isOpen, 'hidden': !isOpen }" class="hidden h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div :class="{ 'block': isOpen, 'hidden': !isOpen }" class="md:hidden" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t"
                :class="isDark ? 'border-gray-800' : 'border-gray-200'">
                <NuxtLink to="/" class="mobile-nav-link" active-class="mobile-active-link" @click="isOpen = false">Home
                </NuxtLink>
                <NuxtLink to="/about" class="mobile-nav-link" active-class="mobile-active-link" @click="isOpen = false">
                    About</NuxtLink>
                <NuxtLink to="/experience" class="mobile-nav-link" active-class="mobile-active-link"
                    @click="isOpen = false">Experience</NuxtLink>
                <NuxtLink to="/skills" class="mobile-nav-link" active-class="mobile-active-link"
                    @click="isOpen = false">Skills</NuxtLink>
                <NuxtLink to="/activities" class="mobile-nav-link" active-class="mobile-active-link"
                    @click="isOpen = false">Activities</NuxtLink>
                <NuxtLink to="/contact" class="mobile-nav-link" active-class="mobile-active-link"
                    @click="isOpen = false">Contact</NuxtLink>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
const { isDark } = useTheme()
const isOpen = ref(false)
</script>

<style scoped>
.nav-link {
    @apply px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300;
    color: v-bind("isDark ? '#9ca3af' : '#4b5563'");
}

.nav-link:hover {
    color: v-bind("isDark ? '#ffffff' : '#111827'");
    background-color: v-bind("isDark ? 'rgba(31, 41, 55, 0.5)' : 'rgba(243, 244, 246, 0.5)'");
}

.active-link {
    color: v-bind("isDark ? '#22d3ee' : '#0891b2'") !important;
    background-color: v-bind("isDark ? 'rgba(31, 41, 55, 0.3)' : 'rgba(243, 244, 246)'");
}

.mobile-nav-link {
    @apply block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300;
    color: v-bind("isDark ? '#9ca3af' : '#4b5563'");
}

.mobile-active-link {
    color: v-bind("isDark ? '#22d3ee' : '#0891b2'") !important;
    background-color: v-bind("isDark ? 'rgba(31, 41, 55, 0.5)' : 'rgba(243, 244, 246, 0.5)'");
}
</style>
