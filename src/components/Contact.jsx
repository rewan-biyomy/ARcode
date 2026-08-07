import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('شكراً لتواصلك معنا! سنرد عليك في أقرب وقت.')
    setFormData({ name: '', email: '', phone: '', projectType: '', message: '' })
  }

  return (
    <section className="section-padding" style={{ background: 'white' }}>
      <Container>
        <div className="text-center mb-5">
          <span className="text-uppercase small fw-bold" style={{ color: 'var(--primary-color)', letterSpacing: 2 }}>تواصل معنا</span>
          <h2 className="section-title mt-2">ابدأ مشروعك<br />معانا النهاردة</h2>
          <p className="section-subtitle">سيب بياناتك وهنكون معاك في أقرب وقت</p>
        </div>

        <Row className="align-items-stretch">
          <Col lg={5} className="mb-4 mb-lg-0">
            <div className="card-custom p-4 h-100" style={{ background: 'var(--primary-color)', color: 'white' }}>
              <h4 className="fw-bold mb-4">معلومات التواصل</h4>
              
              <div className="contact-info-item">
                <div className="contact-icon" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <div>
                  <div className="small opacity-75">البريد الإلكتروني</div>
                  <div className="fw-bold">info@codespace.com</div>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div>
                  <div className="small opacity-75">رقم الهاتف</div>
                  <div className="fw-bold">+20 123 456 7890</div>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <div>
                  <div className="small opacity-75">العنوان</div>
                  <div className="fw-bold">القاهرة، مصر - مبنى التكنولوجيا، الدور 5</div>
                </div>
              </div>

              <hr className="my-4 opacity-25" />

              <div>
                <div className="small opacity-75 mb-3">تابعنا على</div>
                <div>
                  <a href="#" className="social-icon" style={{ background: 'rgba(255,255,255,0.2)' }}>
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="social-icon" style={{ background: 'rgba(255,255,255,0.2)' }}>
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a href="#" className="social-icon" style={{ background: 'rgba(255,255,255,0.2)' }}>
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="#" className="social-icon" style={{ background: 'rgba(255,255,255,0.2)' }}>
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={7}>
            <div className="card-custom p-4 h-100">
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label className="fw-bold small">الاسم الكامل</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control-custom"
                        placeholder="محمد أحمد"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label className="fw-bold small">البريد الإلكتروني</Form.Label>
                      <Form.Control 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control-custom"
                        placeholder="example@email.com"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label className="fw-bold small">رقم الهاتف</Form.Label>
                      <Form.Control 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-control-custom"
                        placeholder="01xxxxxxxxx"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label className="fw-bold small">نوع المشروع</Form.Label>
                      <Form.Select 
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="form-control-custom"
                      >
                        <option value="">اختر نوع المشروع</option>
                        <option value="website">موقع إلكتروني</option>
                        <option value="app">تطبيق موبايل</option>
                        <option value="ecommerce">متجر إلكتروني</option>
                        <option value="uiux">تصميم UI/UX</option>
                        <option value="other">أخرى</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold small">تفاصيل المشروع</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control-custom"
                    placeholder="اخبرنا أكثر عن مشروعك..."
                    required
                  />
                </Form.Group>

                <Button type="submit" className="btn-primary-custom w-100 border-0" style={{ padding: '12px' }}>
                  إرسال الطلب
                  <i className="bi bi-send-fill me-2"></i>
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact