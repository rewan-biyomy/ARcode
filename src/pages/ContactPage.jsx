import { Container, Row, Col } from 'react-bootstrap'

function ContactPage() {
  const contactLinks = [
    {
      icon: 'bi-whatsapp',
      label: 'واتساب',
      value: '+201007158144',
      color: '#25D366',
      link: 'https://wa.me/201234567890'
    },
    {
      icon: 'bi-messenger',
      label: 'ماسنجر',
      value: 'تواصل فوري',
      color: '#0084FF',
      link: 'https://www.facebook.com/share/1CvPDC2D54/'
    },
    {
      icon: 'bi-facebook',
      label: 'فيسبوك',
      value: 'ARcode',
      color: '#1877F2',
      link: 'https://www.facebook.com/share/1CvPDC2D54/'
    },
    {
      icon: 'bi-instagram',
      label: 'انستجرام',
      value: '@ARcode',
      color: '#E4405F',
      link: 'https://instagram.com/YOUR_HANDLE'
    },
    {
      icon: 'bi-linkedin',
      label: 'لينكد إن',
      value: 'ARcode',
      color: '#0A66C2',
      link: 'https://www.linkedin.com/in/ar-code-9816b9427'
    },
    {
      icon: 'bi-envelope-fill',
      label: 'البريد الإلكتروني',
      value: 'arcode682026@gmail.com',
      color: '#5B8FA8',
      link: 'mailto:arcode682026@gmail.com'
    }
  ]

  return (
    <>
      {/* Hero */}
      <div className="page-header">
        <Container>
          <h1 className="fw-bold mb-3" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            تواصل <span style={{ color: '#a5f3fc' }}>معانا</span>
          </h1>
          <p className="mb-0 opacity-75" style={{ maxWidth: 600, margin: '0 auto', fontSize: '1.1rem' }}>
            نحن هنا لمساعدتك. اختر الطريقة اللي تناسبك وتواصل معانا فوراً
          </p>
        </Container>
      </div>

      {/* Content */}
      <section className="section-padding" style={{ background: '#F8FAFC' }}>
        <Container>
          <Row className="align-items-center g-5">
            {/* صورة الموبايل */}
            <Col lg={5} className="text-center">
              <div className="contact-phone-wrap">
                <img 
                  src="https://i.pinimg.com/736x/d7/1e/9e/d71e9ec9fdf3a7996d62720227c47f34.jpg" 
                  alt="تواصل معنا" 
                  className="contact-phone-img"
                />
                <div className="contact-phone-glow"></div>
              </div>
            </Col>

            {/* لينكات التواصل */}
            <Col lg={7}>
              <div className="contact-links-grid">
                {contactLinks.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link-card"
                    style={{ '--contact-color': item.color }}
                  >
                    <div className="contact-link-icon" style={{ background: item.color + '15', color: item.color }}>
                      <i className={`bi ${item.icon}`}></i>
                    </div>
                    <div className="contact-link-info">
                      <span className="contact-link-label">{item.label}</span>
                      <span className="contact-link-value">{item.value}</span>
                    </div>
                    <i className="bi bi-arrow-left contact-link-arrow"></i>
                  </a>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default ContactPage