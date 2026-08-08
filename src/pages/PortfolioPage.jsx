import { useState } from 'react'
import { Container, Row, Col, Modal } from 'react-bootstrap'
import { projects, categories } from '../data/projects'

function PortfolioPage() {
  const [filter, setFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter)

  return (
    <>
      {/* Hero */}
      {/* <div className="page-header">
        <Container>
          <span className="text-uppercase small fw-bold opacity-75" style={{ letterSpacing: 2 }}>
            أعمالنا
          </span>
          <h1 className="fw-bold mb-3" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            معرض المشاريع<br />
            <span style={{ color: '#a5f3fc' }}>والإنجازات</span>
          </h1>
          <p className="mb-0 opacity-75" style={{ maxWidth: 600, margin: '0 auto', fontSize: '1.1rem' }}>
            نفخر بمشاريعنا التي ساهمت في نجاح شركائنا ونمو أعمالهم
          </p>
        </Container>
      </div> */}

      {/* Main Content: Sidebar + Grid */}
      <section className="section-padding" style={{ background: '#F8FAFC' }}>
        <Container>
          <Row>
            {/* المحتوى - على اليمين في RTL (زي الصورة) */}
            <Col lg={9} className="order-lg-1">
              <Row className="g-4">
                {filteredProjects.map((project) => (
                  <Col md={6} xl={4} key={project.id}>
                    <div className="portfolio-pro-card">
                      <div className="portfolio-pro-img-wrap">
                        <img src={project.image} alt={project.title} className="portfolio-pro-img" />
                        <div className="portfolio-pro-overlay">
                          <button
                            className="portfolio-pro-view"
                            onClick={() => setSelectedProject(project)}
                          >
                            عرض التفاصيل <i className="bi bi-eye ms-1"></i>
                          </button>
                        </div>
                      </div>
                      <div className="portfolio-pro-body">
                        <h5 className="fw-bold mb-1" style={{ color: '#0f172a', fontSize: '1.05rem' }}>
                          {project.title}
                        </h5>
                        <p className="mb-2" style={{ color: '#64748b', fontSize: '0.85rem' }}>
                          {project.shortDesc}
                        </p>
                        <div className="portfolio-pro-result mb-3">
                          <i className="bi bi-graph-up-arrow"></i>
                          {project.result}
                        </div>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary-custom w-100 justify-content-center"
                          style={{ padding: '10px 20px', fontSize: '0.9rem' }}
                        >
                          عرض مثال
                          <i className="bi bi-box-arrow-up-right me-2"></i>
                        </a>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>

            {/* Sidebar - على الشمال في RTL (زي الصورة) */}
            <Col lg={3} className="order-lg-2 mb-4 mb-lg-0">
              <div className="portfolio-sidebar">
                <h5 className="fw-bold mb-3" style={{ color: '#0f172a' }}>
                  <i className="bi bi-funnel me-2" style={{ color: 'var(--primary-color)' }}></i>
                  التصنيفات
                </h5>
                <div className="sidebar-filters">
                  {categories.map(cat => (
                    <button
                      key={cat.key}
                      className={`sidebar-filter-btn ${filter === cat.key ? 'active' : ''}`}
                      onClick={() => setFilter(cat.key)}
                    >
                      {cat.label}
                      {filter === cat.key && <i className="bi bi-check-lg ms-auto"></i>}
                    </button>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Modal */}
      <Modal
        show={!!selectedProject}
        onHide={() => setSelectedProject(null)}
        centered
        size="lg"
        dir="rtl"
      >
        {selectedProject && (
          <>
            <Modal.Header closeButton className="border-0 pb-0">
              <Modal.Title className="fw-bold">{selectedProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="pt-3">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="img-fluid rounded-4 mb-3 w-100"
                style={{ height: 300, objectFit: 'cover' }}
              />

              <h6 className="fw-bold mb-2" style={{ color: 'var(--primary-color)' }}>
                <i className="bi bi-bullseye me-2"></i>
                رؤية المشروع
              </h6>
              <p className="text-muted mb-3">{selectedProject.vision}</p>

              <div className="d-flex gap-2 flex-wrap mt-3 mb-3">
                {selectedProject.tech.map((t, i) => (
                  <span key={i} className="portfolio-tag">{t}</span>
                ))}
              </div>

              <div className="p-3 rounded-3 mb-3" style={{ background: 'var(--primary-light)' }}>
                <strong style={{ color: 'var(--primary-dark)' }}>النتيجة:</strong>{' '}
                <span className="text-success fw-bold">{selectedProject.result}</span>
              </div>

              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-custom w-100 justify-content-center"
              >
                عرض مثال
                <i className="bi bi-box-arrow-up-right me-2"></i>
              </a>
            </Modal.Body>
          </>
        )}
      </Modal>
    </>
  )
}

export default PortfolioPage