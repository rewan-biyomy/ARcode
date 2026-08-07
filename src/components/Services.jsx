import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Services() {
  const services = [
    {
      icon: 'bi-cart4',
      title: 'بناء متاجر إلكترونية',
      desc: 'متاجر احترافية مع بوابات دفع وإدارة مخزون ذكية',
      bg: '#FFF1F2',
      circle: '#FB7185',
      btnBg: '#FB7185',
      btnColor: '#fff'
    },
    {
      icon: 'bi-phone',
      title: 'تطبيقات الموبايل',
      desc: 'تطبيقات iOS و Android بأداء عالي وتجربة مستخدم سلسة',
      bg: '#EFF6FF',
      circle: '#60A5FA',
      btnBg: '#60A5FA',
      btnColor: '#fff'
    },
    {
      icon: 'bi-palette',
      title: 'UI/UX Design',
      desc: 'تصميم واجهات جذابة وتجربة استخدام ممتازة لعملائك',
      bg: '#FAF5FF',
      circle: '#C084FC',
      btnBg: '#C084FC',
      btnColor: '#fff'
    },
    {
      icon: 'bi-server',
      title: 'الاستضافة والسيرفرات',
      desc: 'استضافة آمنة وموثوقة مع دعم فني على مدار الساعة',
      bg: '#ECFDF5',
      circle: '#34D399',
      btnBg: '#34D399',
      btnColor: '#fff'
    },
    {
      icon: 'bi-tools',
      title: 'الصيانة والدعم',
      desc: 'صيانة دورية وتحديثات مستمرة لضمان استمرارية عملك',
      bg: '#FFFBEB',
      circle: '#FBBF24',
      btnBg: '#FBBF24',
      btnColor: '#fff'
    },
    {
      icon: 'bi-laptop',
      title: 'تصميم المواقع',
      desc: 'مواقع عصرية متجاوبة مع جميع الأجهزة بأحدث التقنيات',
      bg: '#F0F9FF',
      circle: '#38BDF8',
      btnBg: '#38BDF8',
      btnColor: '#fff'
    }
  ]

  return (
    <section className="section-padding" style={{ background: 'var(--secondary-color)' }}>
      <Container>
        <div className="text-center mb-5">
          <span className="text-uppercase small fw-bold" style={{ color: 'var(--primary-color)', letterSpacing: 2 }}>خدماتنا</span>
          <h2 className="section-title mt-2">حلول تقنية شاملة<br />لأعمالك</h2>
          <p className="section-subtitle">نقدم مجموعة متكاملة من الخدمات التقنية لتلبية جميع احتياجاتك الرقمية</p>
        </div>

        <Row className="g-4">
          {services.map((service, idx) => (
            <Col md={6} lg={4} key={idx}>
              <div 
                className="service-color-card"
                style={{ 
                  background: service.bg,
                  borderRadius: '28px',
                  padding: '40px 30px 30px',
                  textAlign: 'center',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  border: 'none',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* الدائرة الملونة والأيقونة */}
                <div 
                  className="service-circle-wrap"
                  style={{
                    width: '110px',
                    height: '110px',
                    margin: '0 auto 25px',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <div 
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      background: service.circle,
                      opacity: 0.18
                    }}
                  ></div>
                  <i 
                    className={`bi ${service.icon}`} 
                    style={{ 
                      fontSize: '2.8rem', 
                      color: service.circle,
                      position: 'relative',
                      zIndex: 2
                    }}
                  ></i>
                </div>

                <h5 className="fw-bold mb-2" style={{ color: '#1e293b', fontSize: '1.15rem' }}>
                  {service.title}
                </h5>
                <p className="mb-4" style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  {service.desc}
                </p>

                <Link 
                  to="/contact" 
                  className="d-inline-block fw-bold"
                  style={{
                    background: service.btnBg,
                    color: service.btnColor,
                    padding: '10px 32px',
                    borderRadius: '50px',
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    boxShadow: `0 8px 25px ${service.btnBg}40`
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px)'
                    e.target.style.boxShadow = `0 12px 35px ${service.btnBg}60`
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)'
                    e.target.style.boxShadow = `0 8px 25px ${service.btnBg}40`
                  }}
                >
                  اطلب الآن
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Services