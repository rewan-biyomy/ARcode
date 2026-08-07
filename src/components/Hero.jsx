import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0 animate-fade-in">
            <div className="hero-badge">
              <i className="bi bi-stars"></i>
              نحن نبني المستقبل الرقمي
            </div>
            <h1 className="hero-title">
              حلول برمجية <span>متكاملة</span><br />
              لتنمية أعمالك
            </h1>
            <p className="hero-desc">
              نقدم خدمات تطوير المواقع والتطبيقات بحلول مبتكرة وعصرية. فريقنا المتخصص جاهز لتحويل أفكارك إلى واقع رقمي مذهل.
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <Link to="/contact" className="btn-primary-custom">
                ابدأ مشروعك الآن
                <i className="bi bi-arrow-left"></i>
              </Link>
              <Link to="/portfolio" className="btn-outline-custom">
                شاهد أعمالنا
              </Link>
            </div>
            
            <div className="mt-5 d-flex align-items-center gap-4 flex-wrap">
              <div className="text-center">
                <div className="stat-number" style={{ fontSize: '1.8rem' }}>10+</div>
                <small className="text-muted">مشروع منجز</small>
              </div>
              <div style={{ width: 1, height: 40, background: '#ddd' }}></div>
              <div className="text-center">
                <div className="stat-number" style={{ fontSize: '1.8rem' }}>4+</div>
                <small className="text-muted">عميل سعيد</small>
              </div>
              <div style={{ width: 1, height: 40, background: '#ddd' }}></div>
              <div className="text-center">
                <div className="stat-number" style={{ fontSize: '1.8rem' }}>3+</div>
                <small className="text-muted">سنوات خبرة</small>
              </div>
            </div>
          </Col>
          
          <Col lg={6} className="position-relative d-none d-lg-block">
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: '-15px',
                right: '-15px',
                width: '100%',
                height: '100%',
                border: '3px solid var(--primary-color)',
                borderRadius: '24px',
                zIndex: 0
              }}></div>
              <img 
                src="https://i.pinimg.com/736x/ff/59/6a/ff596ae5b0d3aa9eb8b83ed1970039d5.jpg" 
                alt="فريق العمل" 
                className="img-fluid rounded-4 shadow-lg"
                style={{ position: 'relative', zIndex: 1 }}
              />
              <div 
                className="p-3 rounded-4 shadow-sm d-flex align-items-center gap-2"
                style={{ 
                  position: 'absolute', 
                  bottom: '-15px', 
                  left: '-15px', 
                  background: 'white',
                  zIndex: 2
                }}
              >
                <div className="bg-success rounded-circle" style={{ width: 10, height: 10 }}></div>
                <span className="fw-bold small">متاحون الآن للمشاريع الجديدة</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero