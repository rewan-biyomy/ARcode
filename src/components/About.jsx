import { Container, Row, Col } from 'react-bootstrap'

function About() {
  const values = [
    { icon: 'bi-shield-check', title: 'الجودة', desc: 'نلتزم بأعلى معايير الجودة في كل سطر كود' },
    { icon: 'bi-lightning', title: 'السرعة', desc: 'نسلم مشاريعك في الوقت المحدد دون تأخير' },
    { icon: 'bi-heart', title: 'الشغف', desc: 'نحب ما نعمله ونعكس ذلك في إبداعنا' },
    { icon: 'bi-people', title: 'الشراكة', desc: 'نراك شريكاً وليس مجرد عميل' },
  ]

  const team = [
    { name: 'أحمد ', role: 'Software Engineer', img: '/img/ahmed.png' },
    { name: ' روان', role: 'Full Stack Developer', img: '/img/rewan.png' },
  
  ]

  return (
    <>
      <section className="section-padding" style={{ background: 'white' }}>
        <Container>
          <Row className="align-items-center mb-5">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="position-relative">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&auto=format&fit=crop" 
                  alt="عن الشركة" 
                  className="img-fluid rounded-4 shadow"
                />
                <div 
                  className="p-3 rounded-4 text-white text-center"
                  style={{ 
                    position: 'absolute', 
                    bottom: '-20px', 
                    left: '20px', 
                    background: 'var(--primary-color)',
                    minWidth: 10
                  }}
                >
                  <div className="stat-number text-white" style={{ fontSize: '2rem' }}>3+</div>
                  <div className="small">سنوات من الخبرة</div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <span className="text-uppercase small fw-bold" style={{ color: 'var(--primary-color)', letterSpacing: 2 }}>من نحن</span>
              <h2 className="section-title mt-2">نحن نبني الحلول<br />التقنية المستقبلية</h2>
              <p className="text-muted mb-4">
                تأسست شركتنا عام 2026 بهدف تقديم حلول برمجية مبتكرة للشركات الناشئة والمؤسسات الكبرى. نؤمن بأن التكنولوجيا هي مفتاح النجاح في العصر الرقمي.
              </p>
              <p className="text-muted mb-4">
                فريقنا يضم نخبة من المطورين والمصممين المحترفين الذين يعملون بشغف لتحويل أفكارك إلى منتجات رقمية استثنائية.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <div className="text-center px-3">
                  <div className="stat-number" style={{ fontSize: '2rem' }}>10+</div>
                  <small className="text-muted">مشروع</small>
                </div>
                <div className="text-center px-3 border-end">
                  <div className="stat-number" style={{ fontSize: '2rem' }}>3+</div>
                  <small className="text-muted">عميل</small>
                </div>
                <div className="text-center px-3 border-end">
                  <div className="stat-number" style={{ fontSize: '2rem' }}>2</div>
                  <small className="text-muted">خبير</small>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="mt-5 pt-5">
            <Col xs={12} className="text-center mb-4">
              <h3 className="fw-bold">قيمنا</h3>
              <p className="text-muted">ما يميزنا عن غيرنا</p>
            </Col>
            {values.map((val, idx) => (
              <Col md={6} lg={3} key={idx} className="mb-4">
                <div className="card-custom p-4 text-center h-100">
                  <div className="service-icon mx-auto">
                    <i className={`bi ${val.icon}`}></i>
                  </div>
                  <h5 className="fw-bold mb-2">{val.title}</h5>
                  <p className="text-muted small mb-0">{val.desc}</p>
                </div>
              </Col>
            ))}
          </Row>

          <Row className="mt-5 pt-4">
            <Col xs={12} className="text-center mb-4">
              <h3 className="fw-bold">فريقنا</h3>
              <p className="text-muted">العقول المبدعة خلف نجاحنا</p>
            </Col>
            {team.map((member, idx) => (
              <Col sm={6} lg={3} key={idx} className="mb-4">
                <div className="card-custom text-center p-4">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="rounded-circle mb-3 mx-auto"
                    style={{ width: 100, height: 100, objectFit: 'cover' }}
                  />
                  <h5 className="fw-bold mb-1">{member.name}</h5>
                  <p className="text-muted small mb-0">{member.role}</p>
                  <div className="mt-3">
                    <a href="#" className="social-icon" style={{ width: 32, height: 32, fontSize: '0.85rem' }}>
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="#" className="social-icon" style={{ width: 32, height: 32, fontSize: '0.85rem' }}>
                      <i className="bi bi-twitter-x"></i>
                    </a>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default About