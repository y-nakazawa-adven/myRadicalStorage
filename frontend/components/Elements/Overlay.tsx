import { memo } from 'react'

export const Overlay = memo(() => (
  <div className="fixed inset-0 z-30 h-screen w-screen bg-black opacity-50" />
))
