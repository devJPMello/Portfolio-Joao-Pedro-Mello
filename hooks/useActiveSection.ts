'use client'

import { useEffect, useState } from 'react'

/**
 * Retorna o id da seção ativa: a última cujo topo já passou da linha `offset`.
 * No fim da página, considera a última seção como ativa.
 */
export function useActiveSection(ids: string[], offset = 120) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const update = () => {
      let current: string | null = null
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= offset) current = id
      }
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 4
      if (atBottom) current = ids[ids.length - 1]
      setActiveId(current)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [ids, offset])

  return activeId
}
