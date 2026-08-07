import { useState, useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom'

function NavigationBar() {
  const [scrolled, setScrolled] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setExpanded(false)
  }, [location])

  // منع التمرير لما القائمة مفتوحة على الموبايل
  useEffect(() => {
    if (expanded && window.innerWidth < 992) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [expanded])

  const navLinks = [
    { path: '/', label: 'الرئيسية' },
    { path: '/about', label: 'من نحن' },
    { path: '/services', label: 'الخدمات' },
    { path: '/portfolio', label: 'أعمالنا' },
    { path: '/faq', label: 'الأسئلة الشائعة' },
    { path: '/contact', label: 'تواصل معنا' },
  ]

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className="navbar-custom"
      style={{ padding: scrolled ? '0.4rem 0' : '0.6rem 0' }}
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="navbar-brand-custom">
          <img 
            src="/logo.png" 
            alt="اللوجو" 
            className="brand-logo"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />
          <div 
            style={{ 
              display: 'none',
              width: 38, 
              height: 38, 
              background: 'var(--primary-color)', 
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 800,
              fontSize: '1rem'
            }}
          >
            AR
          </div>
          <span className="brand-text">AR<span>Code</span></span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* زر إغلاق الموبايل */}
          <button 
            className="mobile-menu-close d-lg-none" 
            onClick={() => setExpanded(false)}
            aria-label="إغلاق القائمة"
          >
            <i className="bi bi-x-lg"></i>
          </button>

          <Nav className="me-auto align-items-center">
            {navLinks.map((link) => (
              <Nav.Link 
                key={link.path}
                as={NavLink} 
                to={link.path}
                className="nav-link-custom"
                onClick={() => setExpanded(false)}
                end={link.path === '/'}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
          <NavLink 
            to="/contact" 
            className="nav-cta-btn" 
            onClick={() => setExpanded(false)}
          >
            اطلب عرض سعر
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
