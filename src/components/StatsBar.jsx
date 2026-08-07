import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function StatsBar() {
  const stats = [
    { icon: 'bi-cart4', label: 'بناء متاجر إلكترونية' },
    { icon: 'bi-laptop', label: 'تصميم مواقع' },
    { icon: 'bi-speedometer2', label: 'بناء داش بورد' },
    { icon: 'bi-phone', label: 'تطوير تطبيقات' },
  ]

  return (
    <section className="stats-bar-section">
      <Container>
        <div className="stats-bar-card">
          <div className="stats-bar-overlay"></div>
          
          <Row className="align-items-center position-relative" style={{ zIndex: 2 }}>
            {stats.map((stat, idx) => (
              <Col xs={6} lg={3} key={idx} className="text-center">
                <div className="stats-item position-relative">
                  {idx !== 0 && <div className="stats-divider"></div>}
                  <i className={`bi ${stat.icon} stats-icon`}></i>
                  <div className="stats-label">{stat.label}</div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        
        {/* زرار المزيد */}
        <div className="text-center mt-4">
          <Link to="/services" className="btn-primary-custom">
            عرض المزيد من خدماتنا
            <i className="bi bi-arrow-left me-2"></i>
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default StatsBar