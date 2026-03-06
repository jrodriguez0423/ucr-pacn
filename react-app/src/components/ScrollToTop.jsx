import { useEffect, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation()

  function resetScrollPosition() {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0

    const main = document.querySelector('main')
    if (main instanceof HTMLElement) {
      main.scrollTop = 0
    }
  }

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    resetScrollPosition()
  }, [pathname, search, hash])

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      resetScrollPosition()
    })

    return () => {
      window.cancelAnimationFrame(id)
    }
  }, [pathname, search, hash])

  return null
}
