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
            <main>
              {children}
            </main>
        </body>
    </ThemeModeProvider>
  )
}
