export const useTheme = () => {
  const isDark = useState<boolean>('theme-dark', () => true)

  const toggleTheme = () => {
    isDark.value = !isDark.value
    updateTheme()
  }

  const updateTheme = () => {
    if (import.meta.client) {
      if (isDark.value) {
        document.documentElement.classList.add('dark')
        document.documentElement.classList.remove('light')
      } else {
        document.documentElement.classList.add('light')
        document.documentElement.classList.remove('dark')
      }
      localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    }
  }

  const initTheme = () => {
    if (import.meta.client) {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme) {
        isDark.value = savedTheme === 'dark'
      }
      updateTheme()
    }
  }

  return {
    isDark,
    toggleTheme,
    initTheme
  }
}
