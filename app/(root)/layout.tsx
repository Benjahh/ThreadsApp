import TopBar from '@/components/shared/Topbar'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LeftSideBar from '@/components/shared/LeftSideBar'
import RightSidebar from '@/components/shared/RightSideBar'
import BottomBar from '@/components/shared/BottomBar'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Threads",
  description: "Next js meta data"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <TopBar/>
            <main className='flex flex-row'>
              <LeftSideBar/>
              <section className='main-container'>
                <div className='w-full max-w-4xl'>
                  {children}
                </div>
              </section>
              <RightSidebar/>
            </main>
          <BottomBar/>
          </body>
      </html>
    </ClerkProvider>
  )
}
