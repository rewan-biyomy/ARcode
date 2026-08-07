import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

function HomePortfolio() {
  const featuredProjects = projects.slice(0, 4)

  return (
    <section className="section-padding" style={{ background: '#F8FAFC' }}>
      <Container>
        <div className="text-center mb-5">
          <span className="text-uppercase small fw-bold" style={{ color: 'var(--primary-color)', letterSpacing: 2 }}>
            أعمالنا
          </span>
          <h2 className="section-title mt-2">مشاريع نقدمها لك</h2>
          <p className="section-subtitle">نفخر بمشاريعنا التي ساهمت في نجاح شركائنا</p>
        </div>

        <Row className="g-4">
          {featuredProjects.map((project) => (
            <Col md={6} lg={3} key={project.id}>
              <div className="portfolio-pro-card">
                <div className="portfolio-pro-img-wrap">
                  <img src={project.image} alt={project.title} className="portfolio-pro-img" />
                  <div className="portfolio-pro-overlay">
                    <span className="portfolio-pro-view">
                      عرض التفاصيل <i className="bi bi-eye ms-1"></i>
                    </span>
                  </div>
                </div>
                <div className="portfolio-pro-body">
                  <h5 className="fw-bold mb-1" style={{ color: '#0f172a', fontSize: '1.05rem' }}>
                    {project.title}
                  </h5>
                  <p className="mb-2" style={{ color: '#64748b', fontSize: '0.85rem' }}>
                    {project.shortDesc}
                  </p>
                  <div className="portfolio-pro-result">
                    <i className="bi bi-graph-up-arrow"></i>
                    {project.result}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5">
          <Link to="/portfolio" className="btn-primary-custom">
            اذهب إلى صفحة المشاريع
            <i className="bi bi-arrow-left me-2"></i>
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default HomePortfolio