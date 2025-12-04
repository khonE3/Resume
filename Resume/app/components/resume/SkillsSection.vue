<template>
  <div class="mb-6 slide-in-left" style="animation-delay: 0.2s;">
    <h2 class="text-base font-bold text-cyan-400 border-b border-cyan-500/30 pb-1 mb-3 font-mono flex items-center gap-2">
      <span class="text-pink-400">&lt;</span>Skills<span class="text-pink-400">/&gt;</span>
    </h2>
    
    <div class="space-y-3 text-xs">
      <div>
        <h3 class="font-semibold mb-2 text-purple-400 text-xs">// Languages</h3>
        <div class="flex flex-wrap gap-1">
          <span v-for="lang in languages" :key="lang" class="skill-tag">{{ lang }}</span>
        </div>
      </div>
      
      <div>
        <h3 class="font-semibold mb-2 text-purple-400 text-xs">// Frameworks</h3>
        <div class="flex flex-wrap gap-1">
          <span v-for="fw in frameworks" :key="fw" class="skill-tag">{{ fw }}</span>
        </div>
      </div>
      
      <div>
        <h3 class="font-semibold mb-2 text-purple-400 text-xs">// Databases</h3>
        <div class="flex flex-wrap gap-1">
          <span v-for="db in databases" :key="db" class="skill-tag">{{ db }}</span>
        </div>
      </div>
      
      <div>
        <h3 class="font-semibold mb-2 text-purple-400 text-xs">// Tools</h3>
        <div class="flex flex-wrap gap-1">
          <span v-for="tool in tools" :key="tool" class="skill-tag">{{ tool }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
  @apply px-2 py-0.5 bg-gray-800/80 text-gray-300 rounded text-xs border border-gray-700 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 cursor-default;
}
</style>

