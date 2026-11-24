'use client'

import { FiArrowUp } from 'react-icons/fi'
import IconButton from '@/components/atoms/IconButton'
import { useScrolledPast } from '@/hooks/useScrolledPast'

export default function BackToTop() {
  const visible = useScrolledPast(600)

  return (
    <IconButton
      icon={FiArrowUp}
      label="Voltar ao topo"
      variant="solid"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      iconClassName="h-5 w-5"
      className={`fixed bottom-5 right-5 z-40 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    />
  )
}
