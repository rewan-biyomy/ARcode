import { useState } from 'react'
import { Container, Row, Col, Badge, Modal } from 'react-bootstrap'

function Portfolio() {
  const [filter, setFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const categories = [
    { key: 'all', label: 'الكل' },
    { key: 'web', label: 'مواقع' },
    { key: 'app', label: 'تطبيقات' },
    { key: 'ecommerce', label: 'متاجر' },
    { key: 'uiux', label: 'UI/UX' },
  ]

  const projects = [
    {
      title: 'منصة تعليم إلكتروني',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
      shortDesc: 'منصة متكاملة لـ 10,000+ طالب',
      result: '+60% سرعة',
      fullDesc: 'بنينا منصة تعليمية كاملة باستخدام Next.js ونظام CDN عالمي. النتيجة: تحميل أسرع 60% و10 آلاف طالب نشط يومياً.',
      tech: ['Next.js', 'Node.js', 'PostgreSQL']
    },
    {
      title: 'تطبيق توصيل',
      category: 'app',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      shortDesc: 'تتبع مباشر للطلبات',
      result: '4.8 ★ تقييم',
      fullDesc: 'تطبيق React Native مع WebSockets للتحديثات المباشرة. حقق 40% زيادة في المبيعات وتقييم 4.8 نجوم.',
      tech: ['React Native', 'Firebase', 'Maps API']
    },
    {
      title: 'متجر أزياء',
      category: 'ecommerce',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
      shortDesc: 'تجربة شراء سلسة',
      result: '+120% مبيعات',
      fullDesc: 'متجر Shopify مخصص مع تكامل APIs خارجية. زيادة المبيعات 120% وتقليل المخزون غير المباع 30%.',
      tech: ['Shopify', 'Liquid', 'Stripe']
    },
    {
      title: 'هوية بصرية',
      category: 'uiux',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      shortDesc: 'تصميم هوية كاملة',
      result: '+200% وعي',
      fullDesc: 'إعادة تصميم الهوية البصرية لشركة ناشئة. زيادة الوعي بالعلامة 200% خلال 3 شهور.',
      tech: ['Figma', 'Illustrator', 'After Effects']
    },
    {
      title: 'موقع عقارات',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      shortDesc: 'بحث ذكي + خريطة',
      result: '50K+ زيارة/شهر',
      fullDesc: 'موقع React مع Elasticsearch للبحث الفوري. 50 ألف زيارة شهرياً وزيادة الطلبات 85%.',
      tech: ['React', 'Elasticsearch', 'Maps']
    },
    {
      title: 'تطبيق لياقة',
      category: 'app',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop',
      shortDesc: 'خطط تدريب مخصصة',
      result: '100K+ تحميل',
      fullDesc: 'تطبيق Flutter مع تصميم gamification. 100 ألف تحميل وتقييم 4.9 نجوم على المتاجر.',
      tech: ['Flutter', 'Dart', 'Firebase']
    },
    {
      title: 'متجر إلكترونيات',
      category: 'ecommerce',
      image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&h=600&fit=crop',
      shortDesc: 'مقارنة منتجات ذكية',
      result: '+95% مبيعات',
      fullDesc: 'حل WooCommerce مخصص مع نظام cache متقدم. زيادة المبيعات 95% و200 ألف زيارة شهرياً.',
      tech: ['WooCommerce', 'PHP', 'Redis']
    },
    {
      title: 'تطبيق بنكي',
      category: 'uiux',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
      shortDesc: 'إعادة تصميم كاملة',
      result: '+70% استخدام',
      fullDesc: 'إعادة تصميم تجربة مستخدم لتطبيق بنك رقمي. زيادة الاستخدام 70% وتقليل الشكاوى 50%.',
      tech: ['Figma', 'Prototyping', 'Testing']
    }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section className="section-padding" style={{ background: 'white' }}>
      <Container>
        {/* Filter */}
        <div className="d-flex justify-content-center gap-2 mb-5 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat.key}
              className={`btn-filter ${filter === cat.key ? 'active' : ''}`}
              onClick={() => setFilter(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <Row className="g-4">
          {filteredProjects.map((project, idx) => (
            <Col md={6} lg={3} key={idx}>
              <div 
                className="portfolio-pro-card"
                onClick={() => setSelectedProject(project)}
                style={{ cursor: 'pointer' }}
              >
                {/* الصورة */}
                <div className="portfolio-pro-img-wrap">
                  <img src={project.image} alt={project.title} className="portfolio-pro-img" />
                  <div className="portfolio-pro-overlay">
                    <span className="portfolio-pro-view">
                      عرض التفاصيل <i className="bi bi-eye ms-1"></i>
                    </span>
                  </div>
                  <Badge className="portfolio-pro-badge">
                    {categories.find(c => c.key === project.category)?.label}
                  </Badge>
                </div>

                {/* المحتوى */}
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
      </Container>

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
              <p className="text-muted">{selectedProject.fullDesc}</p>
              <div className="d-flex gap-2 flex-wrap mt-3">
                {selectedProject.tech.map((t, i) => (
                  <span key={i} className="portfolio-tag">{t}</span>
                ))}
              </div>
              <div className="mt-3 p-3 rounded-3" style={{ background: 'var(--primary-light)' }}>
                <strong style={{ color: 'var(--primary-dark)' }}>النتيجة:</strong>{' '}
                <span className="text-success fw-bold">{selectedProject.result}</span>
              </div>
            </Modal.Body>
          </>
        )}
      </Modal>
    </section>
  )
}

export default Portfolio