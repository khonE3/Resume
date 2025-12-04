<template>
  <div class="mb-6 slide-in-left" style="animation-delay: 0.2s;">
    <h2 class="text-base font-bold border-b border-cyan-500/30 pb-1 mb-3 font-mono flex items-center gap-2"
        :class="isDark ? 'text-cyan-400' : 'text-cyan-600'">
      <span :class="isDark ? 'text-pink-400' : 'text-pink-600'">&lt;</span>Skills<span :class="isDark ? 'text-pink-400' : 'text-pink-600'">/&gt;</span>
    </h2>
    
    <div class="space-y-3 text-xs">
      <div>
        <h3 class="font-semibold mb-2 text-xs" :class="isDark ? 'text-purple-400' : 'text-purple-600'">// Languages</h3>
        <div class="flex flex-wrap gap-1">
          <span v-for="lang in languages" :key="lang" 
                class="skill-tag"
                :class="isDark ? 'skill-tag-dark' : 'skill-tag-light'">{{ lang }}</span>
        </div>
      </div>
      
      <div>
        <h3 class="font-semibold mb-2 text-xs" :class="isDark ? 'text-purple-400' : 'text-purple-600'">// Frameworks</h3>
        <div class="flex flex-wrap gap-1">
          <span v-for="fw in frameworks" :key="fw" 
                class="skill-tag"
                :class="isDark ? 'skill-tag-dark' : 'skill-tag-light'">{{ fw }}</span>
        </div>
      </div>
      
      <div>
        <h3 class="font-semibold mb-2 text-xs" :class="isDark ? 'text-purple-400' : 'text-purple-600'">// Databases</h3>
        <div class="flex flex-wrap gap-1">
          <span v-for="db in databases" :key="db" 
                class="skill-tag"
                :class="isDark ? 'skill-tag-dark' : 'skill-tag-light'">{{ db }}</span>
        </div>
      </div>
      
      <div>
        <h3 class="font-semibold mb-2 text-xs" :class="isDark ? 'text-purple-400' : 'text-purple-600'">// Tools</h3>
        <div class="flex flex-wrap gap-1">
          <span v-for="tool in tools" :key="tool" 
                class="skill-tag"
                :class="isDark ? 'skill-tag-dark' : 'skill-tag-light'">{{ tool }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { isDark } = useTheme()

const languages = ['JavaScript', 'TypeScript', 'Golang', 'Java', 'C', 'Python']
const frameworks = ['NuxtJS', 'NextJS', 'Vue', 'React', 'React Native', 'TailwindCSS', 'DaisyUI', 'Node.js', 'Express.js', 'Gin', 'GORM']
const databases = ['PostgreSQL', 'Supabase', 'MongoDB', 'Firebase']
const tools = ['Git', 'GitHub', 'DBeaver', 'Postman', 'Docker', 'Jenkins', 'VS Code']
</script>

<style scoped>
.slide-in-left {
  animation: slideInLeft 0.6s ease-out backwards;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.skill-tag {
  @apply px-2 py-0.5 rounded text-xs border transition-all duration-300 cursor-default;
}

.skill-tag-dark {
  @apply bg-gray-800/80 text-gray-300 border-gray-700 hover:border-cyan-500 hover:text-cyan-400;
}

.skill-tag-light {
  @apply bg-gray-200/80 text-gray-700 border-gray-300 hover:border-cyan-500 hover:text-cyan-600;
}
</style>

