'use client'

import { LanguageProvider } from '../../context/LanguageContext'

export function PaintProviders({ children }) {
  return <LanguageProvider>{children}</LanguageProvider>
}
