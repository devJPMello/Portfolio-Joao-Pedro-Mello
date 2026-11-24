import { ImageResponse } from 'next/og'

export const alt = 'João Pedro Mendes de Mello | Desenvolvedor Full Stack'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background: 'linear-gradient(135deg, #0f172a 0%, #0c4a6e 100%)',
          color: 'white',
        }}
      >
        <svg width="96" height="96" viewBox="0 0 100 100" style={{ marginBottom: 32 }}>
          <rect width="100" height="100" rx="22" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
          <path d="M54 10 L30 54 L48 54 L40 90 L72 44 L53 44 Z" fill="#38bdf8" />
        </svg>
        <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.1 }}>João Pedro Mendes de Mello</div>
        <div style={{ fontSize: 42, marginTop: 28, color: '#e2e8f0' }}>Desenvolvedor Full Stack</div>
        <div style={{ fontSize: 30, marginTop: 16, color: '#94a3b8' }}>
          React · Next.js · NestJS · IA Generativa
        </div>
      </div>
    ),
    size
  )
}
