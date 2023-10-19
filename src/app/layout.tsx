import '@/styles/globals.scss'
import type { Metadata } from 'next'
import { M_PLUS_1 } from 'next/font/google'



const mpuls = M_PLUS_1({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'gkquiz',
  description: '一般常識クイズ！',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      {/* reset.css modern-css-reset */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/modern-css-reset/dist/reset.min.css"
      />
      </head>
      <body className={mpuls.className}>{children}</body>
    </html>
  )
}
