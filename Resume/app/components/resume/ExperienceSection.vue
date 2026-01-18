<template>
  <div class="mb-6 slide-in-right" style="animation-delay: 0.2s;">
    <h2
      class="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400 mb-6 font-mono flex items-center gap-2">
      <span :class="isDark ? 'text-purple-400' : 'text-purple-600'">💼</span>
      <span :class="isDark ? 'text-pink-400' : 'text-pink-600'">&lt;</span>Experience<span
        :class="isDark ? 'text-pink-400' : 'text-pink-600'">/&gt;</span>
    </h2>

    <div class="space-y-6">

      <!-- MindcareAI -->
      <div class="p-4 md:p-6 rounded-lg border transition-all duration-300 backdrop-blur-sm shadow-md hover:shadow-lg"
        :class="isDark ? 'bg-gray-900/60 border-gray-700 hover:border-yellow-500/50' : 'bg-white/60 border-gray-300 hover:border-yellow-500/70'">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
          <h3 class="font-bold text-lg md:text-xl" :class="isDark ? 'text-yellow-400' : 'text-yellow-600'">MindcareAI,
            Mental Health Consultation App</h3>
          <span class="font-mono text-sm px-3 py-1 rounded-full w-fit"
            :class="isDark ? 'text-cyan-400 bg-cyan-500/20' : 'text-cyan-600 bg-cyan-500/30'">Dec 2025 - Present</span>
        </div>
      </div>

      <!-- SMARTSIGN -->
      <div class="p-4 md:p-6 rounded-lg border transition-all duration-300 backdrop-blur-sm shadow-md hover:shadow-lg"
        :class="isDark ? 'bg-gray-900/60 border-gray-700 hover:border-yellow-500/50' : 'bg-white/60 border-gray-300 hover:border-yellow-500/70'">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
          <h3 class="font-bold text-lg md:text-xl" :class="isDark ? 'text-yellow-400' : 'text-yellow-600'">SMARTSIGN -
            AI Detected Sign Language</h3>
          <span class="font-mono text-sm px-3 py-1 rounded-full w-fit"
            :class="isDark ? 'text-cyan-400 bg-cyan-500/20' : 'text-cyan-600 bg-cyan-500/30'">Aug - Dec 2025</span>
        </div>

        <!-- Role 1 -->
        <div class="mb-6 pl-4 border-l-2" :class="isDark ? 'border-purple-500/30' : 'border-purple-500/20'">
          <h4 class="text-base md:text-lg font-semibold mb-2" :class="isDark ? 'text-purple-300' : 'text-purple-700'">
            Role: Frontend Developer & UI/UX Designer</h4>
          <ul class="space-y-2 text-sm md:text-base leading-relaxed"
            :class="isDark ? 'text-gray-300' : 'text-gray-700'">
            <li class="flex items-start gap-2">
              <span :class="isDark ? 'text-cyan-400' : 'text-cyan-600'">▹</span>
              Designed the end-to-end UI/UX and overall product flow, built a responsive frontend with real-time video
              display and interactive UI components.
            </li>
            <li class="flex items-start gap-2">
              <span :class="isDark ? 'text-cyan-400' : 'text-cyan-600'">▹</span>
              Collaborated with backend and AI teams to integrate AI-powered features via APIs, and resolved production
              issues related to HTTPS camera access and real-time data handling.
            </li>
            <li class="flex items-start gap-2">
              <span :class="isDark ? 'text-pink-400' : 'text-pink-600'">▹</span>
              <span><strong>Gained Experience:</strong> Cross-team collaboration (UI/UX, frontend, backend, AI),
                improved skills in UI/UX design, frontend architecture, API integration, and building reliable,
                user-facing features, strengthened presentation and pitching skills through national-level
                competitions.</span>
            </li>
          </ul>
        </div>

        <!-- Role 2 -->
        <div class="pl-4 border-l-2" :class="isDark ? 'border-purple-500/30' : 'border-purple-500/20'">
          <h4 class="text-base md:text-lg font-semibold mb-2" :class="isDark ? 'text-purple-300' : 'text-purple-700'">
            Role: Software Engineer (Backend)</h4>
          <ul class="space-y-2 text-sm md:text-base leading-relaxed"
            :class="isDark ? 'text-gray-300' : 'text-gray-700'">
            <li class="flex items-start gap-2">
              <span :class="isDark ? 'text-cyan-400' : 'text-cyan-600'">▹</span>
              Developed backend services using Go (Gin, Fiber) following Clean Architecture, contributing to a
              microservices-based system for authentication, user management, AI features, and notifications.
            </li>
            <li class="flex items-start gap-2">
              <span :class="isDark ? 'text-cyan-400' : 'text-cyan-600'">▹</span>
              Implemented JWT authentication, Apple Sign-In, basic API Gateway routing, and built real-time features
              using WebSocket and Redis, with CI/CD workflows supported by Docker, Docker Compose, and Jenkins.
            </li>
            <li class="flex items-start gap-2">
              <span :class="isDark ? 'text-pink-400' : 'text-pink-600'">▹</span>
              <span><strong>Gained Experience:</strong> Backend API design, microservices and service-to-service
                integration, authentication and authorization flows (JWT/OAuth), real-time backend development with
                WebSocket and Redis, CI/CD automation with Jenkins, and collaboration across backend, AI, and frontend
                teams.</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Dotlife -->
      <div class="p-4 md:p-6 rounded-lg border transition-all duration-300 backdrop-blur-sm shadow-md hover:shadow-lg"
        :class="isDark ? 'bg-gray-900/60 border-gray-700 hover:border-yellow-500/50' : 'bg-white/60 border-gray-300 hover:border-yellow-500/70'">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
          <h3 class="font-bold text-lg md:text-xl" :class="isDark ? 'text-yellow-400' : 'text-yellow-600'">Part-time
            Sales Associate</h3>
          <span class="font-mono text-sm px-3 py-1 rounded-full w-fit"
            :class="isDark ? 'text-cyan-400 bg-cyan-500/20' : 'text-cyan-600 bg-cyan-500/30'">2024</span>
        </div>
        <p class="text-sm mb-4 font-semibold" :class="isDark ? 'text-purple-400' : 'text-purple-600'">@ Dotlife Store
        </p>
        <ul class="space-y-2 text-sm md:text-base leading-relaxed" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
          <li class="flex items-start gap-2">
            <span :class="isDark ? 'text-cyan-400' : 'text-cyan-600'">▹</span>
            Provided customer service in a fast-paced retail environment.
          </li>
          <li class="flex items-start gap-2">
            <span :class="isDark ? 'text-purple-400' : 'text-purple-600'">▹</span>
            Collaborated with team members to achieve daily sales targets.
          </li>
          <li class="flex items-start gap-2">
            <span :class="isDark ? 'text-pink-400' : 'text-pink-600'">▹</span>
            Developed strong communication and teamwork skills through direct customer interaction.
          </li>
          <li class="flex items-start gap-2">
            <span :class="isDark ? 'text-cyan-400' : 'text-cyan-600'">▹</span>
            Maintained product knowledge and stayed updated on store promotions and inventory
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
const { isDark } = useTheme()
</script>

<style scoped>
.slide-in-right {
  animation: slideInRight 0.6s ease-out backwards;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
