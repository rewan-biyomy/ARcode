import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={4} className="mb-4 mb-lg-0">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div 
                style={{ 
                  width: 36, 
                  height: 36, 
                  background: 'var(--primary-color)', 
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 800,
                  fontSize: '0.9rem'
                }}
              >
                AR
              </div>
              <span className="fw-bold fs-5">AR<span style={{ color: 'var(--primary-color)' }}>code</span></span>
            </div>
            <p className="opacity-75 small">
              نحن شركة برمجة متخصصة في تقديم حلول تقنية مبتكرة. نؤمن بأن كل فكرة عظيمة تستحق تنفيذاً عظيماً.
            </p>
          </Col>
          
          <Col md={4} lg={2} className="mb-4 mb-lg-0">
            <h6 className="fw-bold mb-3">روابط سريعة</h6>
            <Link to="/" className="footer-link">الرئيسية</Link>
            <Link to="/about" className="footer-link">من نحن</Link>
            <Link to="/services" className="footer-link">الخدمات</Link>
            <Link to="/portfolio" className="footer-link">أعمالنا</Link>
          </Col>
          
          <Col md={4} lg={2} className="mb-4 mb-lg-0">
            <h6 className="fw-bold mb-3">الخدمات</h6>
            <Link to="/services" className="footer-link">تطوير المواقع</Link>
            <Link to="/services" className="footer-link"> بناء المتاجر</Link>
            <Link to="/services" className="footer-link">لوحات التحكم</Link>
            <Link to="/services" className="footer-link">صفحات الهبوط</Link>
            <Link to="/services" className="footer-link"> الموقع الشخصي</Link>
        
          </Col>
          
        
        </Row>
        
        <hr className="my-4 opacity-25" />
        
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="small opacity-75 mb-3 mb-md-0">© 2024 ARcode. جميع الحقوق محفوظة.</p>
          <div>
            <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a>
            <a href="#" className="social-icon"><i className="bi bi-twitter-x"></i></a>
            <a href="#" className="social-icon"><i className="bi bi-linkedin"></i></a>
            <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer