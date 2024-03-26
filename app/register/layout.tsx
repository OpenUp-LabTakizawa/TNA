import { HomeBtn } from '@/app/components/homeBtn'
import { ScrollToTop } from '@/app/components/scrollToTop'
import type React from 'react'

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <HomeBtn />
      <ScrollToTop />
    </>
  )
}
