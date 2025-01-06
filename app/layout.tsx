import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Your Name - Portfolio',
  description: 'Personal portfolio showcasing projects and hobbies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="pt-16">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}

