'use client'

import { useEffect, useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '@/contexts/ThemeContext'
import IconButton from '@/components/atoms/IconButton'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Antes de montar, evita divergência de hidratação entre servidor e cliente
  if (!mounted) {
    return <IconButton icon={FiMoon} label="Alternar tema" variant="toggle" disabled iconClassName="h-5 w-5" />
  }

  return (
    <IconButton
      icon={theme === 'light' ? FiMoon : FiSun}
      label={`Alternar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
      onClick={toggleTheme}
      variant="toggle"
      iconClassName="h-5 w-5"
    />
  )
}
