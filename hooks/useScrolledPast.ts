'use client'

import { useEffect, useState } from 'react'

/** true quando a página já rolou mais que `threshold` pixels. */
export function useScrolledPast(threshold: number) {
  const [past, setPast] = useState(false)

  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return past
}
