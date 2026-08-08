import { Container, Row, Col, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ServicesPage() {
  const services = [
    {
      icon: 'bi-cart4',
      title: 'متاجر إلكترونية',
      desc: 'نبني لك متجر احترافي يحقق مبيعات. منصات متكاملة مع بوابات دفع، إدارة مخزون ذكية، وتجربة شراء سلسة.',
      bg: '#FFF1F2',
      circle: '#FB7185',
      features: []
    },
    {
      icon: 'bi-laptop',
      title: 'تصميم المواقع',
      desc: 'مواقع عصرية متجاوبة مع جميع الأجهزة. نركز على السرعة، SEO، وتجربة مستخدم لا تُنسى.',
      bg: '#F0F9FF',
      circle: '#38BDF8',
      features: []
    },
    {
      icon: 'bi-speedometer2',
      title: 'لوحات التحكم',
      desc: 'أنظمة إدارة داخلية متقدمة لإدارة أعمالك. تحليلات بيانات، تقارير ذكية، وتحكم كامل.',
      bg: '#FAF5FF',
      circle: '#C084FC',
      features: []
    },
    {
      icon: 'bi-speedometer2',
      title: ' صفحات هبوط',
      desc: 'صفحات هبوط جذابة لمشاريعك. تصميم يركز على التحويل، تجربة مستخدم سلسة، وتحقيق أهدافك التسويقية.',
      bg: '#FAF5FF',
      circle: '#C084FC',
      features: []
    },
    {
      icon: 'bi-server',
      title: '  موقع تعريفى شخصى(protfolio)',
      desc: 'موقع تعريفى شخصى يعرض أعمالك ومهاراتك. تصميم عصري، سهل التصفح، ويعكس هويتك الرقمية.',
      bg: '#fcdff6',
      circle: '#fb8ffb',
      features: []
    },
     ]

  const process = [
    { step: '01', title: 'الاستكشاف', desc: 'نفهم احتياجاتك وأهدافك بعمق' },
    { step: '02', title: 'التخطيط', desc: 'نرسم خارطة طريق واضحة للمشروع' },
    { step: '03', title: 'التصميم', desc: 'واجهات جذابة وتجربة مستخدم مثالية' },
    { step: '04', title: 'التطوير', desc: 'نبرمج الحل بأحدث التقنيات' },
    { step: '05', title: 'الاختبار', desc: 'نختبر كل شيء لضمان الجودة' },
    { step: '06', title: 'الإطلاق', desc: 'نطلق مشروعك وندعمك بعده' }
  ]

  const techStack = [
    { name: 'React', icon: 'bi bi-filetype-jsx' },
    { name: 'JavaScript', icon: 'bi bi-lightning-charge' },
    { name: 'Node.js', icon: 'bi bi-server' },
    { name: 'Python', icon: 'bi bi-phone' },
    { name: 'php', icon: 'bi bi-cloud' },
    { name: 'laravel', icon: 'bi bi-palette' },
    { name: 'mysql', icon: 'bi bi-database' },
    { name: 'Django', icon: 'bi bi-box' },
    { name: 'REST APIs', icon: 'bi bi-box' },
    { name: 'Tailwind CSS', icon: 'bi bi-box' },
    { name: ' Firebase', icon: 'bi bi-box' },
    { name: ' Supabase', icon: 'bi bi-box' }
  ]

  return (
    <>
      {/* Hero Section */}
      <div className="page-header">
        <Container>
          <Badge bg="light" text="dark" className="rounded-pill px-3 py-2 mb-3 opacity-75">
            ما نقدمه
          </Badge>
          <h1 className="fw-bold mb-3" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            نحول أفكارك إلى<br />
            <span style={{ color: '#a5f3fc' }}>حلول رقمية</span>
          </h1>
          <p className="mb-0 opacity-75" style={{ maxWidth: 600, margin: '0 auto', fontSize: '1.1rem' }}>
            فريق متخصص يقدم خدمات برمجية متكاملة بأعلى معايير الجودة العالمية
          </p>
        </Container>
      </div>

      {/* Services Grid */}
      <section className="section-padding" style={{ background: '#F8FAFC' }}>
        <Container>
          <Row className="g-4">
            {services.map((service, idx) => (
              <Col md={6} lg={4} key={idx}>
                <div 
                  className="service-card-pro"
                  style={{ 
                    background: 'white',
                    borderRadius: '28px',
                    padding: '40px 30px',
                    height: '100%',
                    border: '1px solid #f1f5f9',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div 
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: '150px',
                      height: '150px',
                      background: service.bg,
                      borderRadius: '0 0 0 100%',
                      opacity: 0.5,
                      zIndex: 0
                    }}
                  ></div>

                  <div className="position-relative" style={{ zIndex: 1 }}>
                    <div 
                      style={{
                        width: '70px',
                        height: '70px',
                        borderRadius: '20px',
                        background: service.bg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '24px'
                      }}
                    >
                      <i 
                        className={`bi ${service.icon}`} 
                        style={{ fontSize: '1.8rem', color: service.circle }}
                      ></i>
                    </div>

                    <h4 className="fw-bold mb-3" style={{ color: '#0f172a', fontSize: '1.25rem' }}>
                      {service.title}
                    </h4>
                    <p className="mb-4" style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.8 }}>
                      {service.desc}
                    </p>

                    <div className="d-flex flex-wrap gap-2 mb-4">
                      {service.features.map((feat, i) => (
                        <span 
                          key={i}
                          style={{
                            background: service.bg,
                            color: service.circle,
                            padding: '4px 12px',
                            borderRadius: '20px',
                            fontSize: '0.8rem',
                            fontWeight: 600
                          }}
                        >
                          {feat}
                        </span>
                      ))}
                    </div>

                    <Link 
                      to="/contact"
                      style={{
                        color: service.circle,
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.gap = '12px'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.gap = '6px'
                      }}
                    >
                      ابدأ الآن
                      <i className="bi bi-arrow-left transition-all"></i>
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Process Section */}
      <section className="section-padding" style={{ background: 'white' }}>
        <Container>
          <div className="text-center mb-5">
            <span className="text-uppercase small fw-bold" style={{ color: 'var(--primary-color)', letterSpacing: 2 }}>
              منهجية العمل
            </span>
            <h2 className="section-title mt-2">كيف نعمل؟</h2>
            <p className="section-subtitle">عملية منظمة تضمن نجاح مشروعك في كل مرحلة</p>
          </div>

          <Row className="g-4">
            {process.map((item, idx) => (
              <Col sm={6} lg={4} key={idx}>
                <div 
                  className="process-card"
                  style={{
                    padding: '35px 30px',
                    borderRadius: '24px',
                    background: '#F8FAFC',
                    border: '1px solid #f1f5f9',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div 
                    style={{
                      fontSize: '4rem',
                      fontWeight: 900,
                      color: 'var(--primary-color)',
                      opacity: 0.08,
                      position: 'absolute',
                      top: '-10px',
                      left: '20px',
                      lineHeight: 1
                    }}
                  >
                    {item.step}
                  </div>
                  <div className="position-relative" style={{ zIndex: 1 }}>
                    <Badge 
                      bg="light" 
                      className="mb-3 rounded-pill px-3 py-2"
                      style={{ color: 'var(--primary-color)', fontWeight: 700, border: '1px solid var(--primary-light)' }}
                    >
                      الخطوة {item.step}
                    </Badge>
                    <h5 className="fw-bold mb-2" style={{ color: '#0f172a' }}>{item.title}</h5>
                    <p className="mb-0 text-muted" style={{ fontSize: '0.95rem' }}>{item.desc}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Tech Stack */}
      <section className="section-padding" style={{ background: '#F8FAFC' }}>
        <Container>
          <div className="text-center mb-5">
            <span className="text-uppercase small fw-bold" style={{ color: 'var(--primary-color)', letterSpacing: 2 }}>
              التقنيات
            </span>
            <h2 className="section-title mt-2">نستخدم أحدث التقنيات</h2>
            <p className="section-subtitle">أدوات عالمية لنتائج عالمية</p>
          </div>

          <Row className="g-3 justify-content-center">
            {techStack.map((tech, idx) => (
              <Col xs={6} sm={4} md={3} lg={2} key={idx}>
                <div 
                  style={{
                    background: 'white',
                    borderRadius: '16px',
                    padding: '25px 15px',
                    textAlign: 'center',
                    border: '1px solid #f1f5f9',
                    transition: 'all 0.3s ease'
                  }}
                  className="tech-card"
                >
                  <i className={`${tech.icon}`} style={{ fontSize: '2rem', color: 'var(--primary-color)', display: 'block', marginBottom: '10px' }}></i>
                  <span className="fw-bold" style={{ color: '#334155', fontSize: '0.9rem' }}>{tech.name}</span>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%)',
        padding: '100px 0',
        color: 'white',
        textAlign: 'center'
      }}>
        <Container>
          <h2 className="fw-bold mb-3" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
            جاهز تبدأ مشروعك؟
          </h2>
          <p className="mb-4 opacity-75" style={{ maxWidth: 500, margin: '0 auto 30px', fontSize: '1.1rem' }}>
            تواصل معانا النهاردة واحصل على استشارة مجانية لمشروعك
          </p>
          <Link 
            to="/contact" 
            className="btn btn-light rounded-pill px-5 py-3 fw-bold"
            style={{ color: 'var(--primary-dark)', fontSize: '1.05rem' }}
          >
            اطلب عرض سعر
            <i className="bi bi-arrow-left me-2"></i>
          </Link>
        </Container>
      </section>
    </>
  )
}

export default ServicesPage