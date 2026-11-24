export function scrollToSection(id: string): boolean {
  const element = document.getElementById(id)
  if (!element) return false
  element.scrollIntoView({ behavior: 'smooth' })
  return true
}
