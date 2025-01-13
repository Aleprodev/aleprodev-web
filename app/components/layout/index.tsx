"use client"
import React from 'react'
import Header from './Header'
import { ThemeModeProvider } from '../ThemeModeProvider'

export default function LayoutComponent({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeModeProvider>
        <body>
            <Header />
            <main className="pt-16">
              {children}
            </main>
        </body>
    </ThemeModeProvider>
  )
}
