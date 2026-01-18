<template>
  <div class="mb-6 slide-in-left" style="animation-delay: 0.2s;">
    <h2 class="text-xl md:text-2xl font-bold border-b border-cyan-500/30 pb-2 mb-6 font-mono flex items-center gap-2"
      :class="isDark ? 'text-cyan-400' : 'text-cyan-600'">
      <span :class="isDark ? 'text-pink-400' : 'text-pink-600'">&lt;</span>Skills<span
        :class="isDark ? 'text-pink-400' : 'text-pink-600'">/&gt;</span>
    </h2>

    <div class="space-y-8">
      <div>
        <h3 class="font-semibold mb-3 text-sm md:text-base font-mono"
          :class="isDark ? 'text-purple-400' : 'text-purple-600'">// Programming Languages</h3>
        <div class="flex flex-wrap gap-2">
          <span v-for="lang in languages" :key="lang" class="skill-tag"
            :class="isDark ? 'skill-tag-dark' : 'skill-tag-light'">{{ lang }}</span>
        </div>
      </div>

      <div>
        <h3 class="font-semibold mb-3 text-sm md:text-base font-mono"
          :class="isDark ? 'text-purple-400' : 'text-purple-600'">// Frontend</h3>
        <div class="flex flex-wrap gap-2">
          <span v-for="item in frontend" :key="item" class="skill-tag"
            :class="isDark ? 'skill-tag-dark' : 'skill-tag-light'">{{ item }}</span>
        </div>
      </div>

      <div>
        <h3 class="font-semibold mb-3 text-sm md:text-base font-mono"
          :class="isDark ? 'text-purple-400' : 'text-purple-600'">// Backend & Runtime</h3>
        <div class="flex flex-wrap gap-2">
          <span v-for="item in backend" :key="item" class="skill-tag"
            :class="isDark ? 'skill-tag-dark' : 'skill-tag-light'">{{ item }}</span>
        </div>
      </div>

      <div>
        <h3 class="font-semibold mb-3 text-sm md:text-base font-mono"
          :class="isDark ? 'text-purple-400' : 'text-purple-600'">// AI / LLM</h3>
        <div class="flex flex-wrap gap-2">
          <span v-for="item in ai_llm" :key="item" class="skill-tag"
            :class="isDark ? 'skill-tag-dark' : 'skill-tag-light'">{{ item }}</span>
        </div>
      </div>

      <div>
        <h3 class="font-semibold mb-3 text-sm md:text-base font-mono"
          :class="isDark ? 'text-purple-400' : 'text-purple-600'">// Databases</h3>
        <div class="flex flex-wrap gap-2">
          <span v-for="db in databases" :key="db" class="skill-tag"
            :class="isDark ? 'skill-tag-dark' : 'skill-tag-light'">{{ db }}</span>
        </div>
      </div>

      <div>
        <h3 class="font-semibold mb-3 text-sm md:text-base font-mono"
          :class="isDark ? 'text-purple-400' : 'text-purple-600'">// Cloud Services & BaaS</h3>
        <div class="flex flex-wrap gap-2">
          <span v-for="item in cloud" :key="item" class="skill-tag"
            :class="isDark ? 'skill-tag-dark' : 'skill-tag-light'">{{ item }}</span>
        </div>
      </div>

      <div>
        <h3 class="font-semibold mb-3 text-sm md:text-base font-mono"
          :class="isDark ? 'text-purple-400' : 'text-purple-600'">// DevOps & CI/CD Workflow</h3>
        <div class="flex flex-wrap gap-2">
          <span v-for="item in devops" :key="item" class="skill-tag"
            :class="isDark ? 'skill-tag-dark' : 'skill-tag-light'">{{ item }}</span>
        </div>
      </div>

      <div>
        <h3 class="font-semibold mb-3 text-sm md:text-base font-mono"
          :class="isDark ? 'text-purple-400' : 'text-purple-600'">// Tools</h3>
        <div class="flex flex-wrap gap-2">
          <span v-for="tool in tools" :key="tool" class="skill-tag"
            :class="isDark ? 'skill-tag-dark' : 'skill-tag-light'">{{ tool }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { isDark } = useTheme()

const languages = ['JavaScript', 'TypeScript', 'Golang', 'Java', 'C', 'Python']
const frontend = ['NuxtJS', 'NextJS', 'Vue', 'React', 'React Native', 'Tailwind CSS', 'DaisyUI', 'Vite']
const backend = ['Fiber', 'Gin', 'FastAPI', 'Node.js', 'Express.js', 'Bun', 'uv']
const ai_llm = ['MCP', 'LangChain', 'RAG', 'LLM-based Applications']
const databases = ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis']
const cloud = ['AWS', 'Firebase', 'Supabase']
const devops = ['Docker', 'Kubernetes (K8s)', 'Git', 'GitHub Actions', 'Jenkins', 'Postman', 'Playwright', 'n8n']
const tools = ['DBeaver', 'Figma', 'Visual Studio Code', 'FileZilla', 'Google Antigravity', 'Google AI Studio']
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
  @apply px-3 py-1 rounded text-sm border transition-all duration-300 cursor-default shadow-sm;
}

.skill-tag-dark {
  @apply bg-gray-800/80 text-gray-300 border-gray-700 hover:border-cyan-500 hover:text-cyan-400 hover:shadow-cyan-500/20;
}

.skill-tag-light {
  @apply bg-gray-200/80 text-gray-700 border-gray-300 hover:border-cyan-500 hover:text-cyan-600 hover:shadow-cyan-500/20;
}
</style>
