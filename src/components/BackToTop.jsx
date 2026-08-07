import { useState, useEffect } from 'react'

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', toggle)
    return () => window.removeEventListener('scroll', toggle)
  }, [])

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button 
      className={`back-to-top ${visible ? 'visible' : ''}`}
      onClick={scrollUp}
      aria-label="العودة للأعلى"
    >
      <i className="bi bi-arrow-up"></i>
    </button>
  )
}

export default BackToTop