'use client'

import { useState } from 'react'
import { FiMail, FiCopy, FiCheck } from 'react-icons/fi'
import IconBadge from '@/components/atoms/IconBadge'
import { EMAIL } from '@/data/contact'

export default function EmailChannel() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // sem permissão de clipboard: abre o cliente de e-mail
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <div className="flex items-center gap-3 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
      <IconBadge icon={FiMail} />
      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">E-mail</p>
        <a
          href={`mailto:${EMAIL}`}
          className="block truncate font-medium text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          {EMAIL}
        </a>
      </div>
      <button
        onClick={copyEmail}
        aria-label="Copiar e-mail"
        className="shrink-0 inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        {copied ? <FiCheck className="h-4 w-4 text-green-500" /> : <FiCopy className="h-4 w-4" />}
        {copied ? 'Copiado' : 'Copiar'}
      </button>
    </div>
  )
}
