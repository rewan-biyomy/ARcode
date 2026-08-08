import { useState, useRef, useEffect } from 'react'

function FloatingButtons() {
  const [showWhatsappMenu, setShowWhatsappMenu] = useState(false)
  const menuRef = useRef(null)

  // إغلاق القائمة لما يدوس براها
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowWhatsappMenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const messengerUsername = 'https://www.facebook.com/share/1CvPDC2D54/' // غيره بـ username صفحة الفيسبوك

  const whatsappNumbers = [
    { number: '+201146956284', label: 'الفتره الصباحيه' },
    { number: '+201007158144', label: 'الفتره المسائيه' }
  ]

  return (
    <div className="floating-buttons">
      {/* واتساب مع قائمة */}
      <div className="float-btn-wrap" ref={menuRef}>
        <button
          className="float-btn whatsapp-btn"
          onClick={() => setShowWhatsappMenu(!showWhatsappMenu)}
          aria-label="تواصل عبر واتساب"
        >
          <i className="bi bi-whatsapp"></i>
          <span className="float-label">واتساب</span>
          <i className={`bi bi-chevron-up float-chevron ${showWhatsappMenu ? 'open' : ''}`}></i>
        </button>

        {/* قائمة الأرقام */}
        <div className={`whatsapp-menu ${showWhatsappMenu ? 'show' : ''}`}>
          {whatsappNumbers.map((item, idx) => (
            <a
              key={idx}
              href={`https://wa.me/${item.number}?text=${encodeURIComponent('مرحباً، أود التواصل معكم')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-menu-item"
              onClick={() => setShowWhatsappMenu(false)}
            >
              <span className="whatsapp-menu-label">{item.label}</span>
              <span className="whatsapp-menu-number">+{item.number}</span>
            </a>
          ))}
        </div>
      </div>

      {/* ماسنجر */}
      <a
        href={"https://www.facebook.com/share/1CvPDC2D54/"}
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn messenger-btn"
        aria-label="تواصل معنا على ماسنجر"
      >
        <i className="bi bi-messenger"></i>
        <span className="float-label">ماسنجر</span>
      </a>
    </div>
  )
}

export default FloatingButtons
