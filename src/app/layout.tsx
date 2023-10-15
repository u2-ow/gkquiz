import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
