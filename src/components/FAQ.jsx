import { Container, Row, Col, Accordion } from 'react-bootstrap'

function FAQ() {
  const faqs = [
    {
      question: 'إزاي بتتحسب تكلفة المشروع؟',
      answer: 'تكلفة المشروع تحسب بناءً على عدة عوامل: حجم المشروع، التقنيات المستخدمة، المدة الزمنية، والميزات المطلوبة. نقدم عرض سعر مفصل مجاني بعد فهم متطلباتك بالكامل.'
    },
    {
      question: 'هتدعموني بعد تسليم المشروع؟',
      answer: 'بالتأكيد! نقدم فترة دعم فني مجانية تصل إلى 3 أشهر بعد التسليم تشمل إصلاح الأخطاء والاستفسارات. وبعدها يمكنك الاشتراك في باقة دعم شهرية.'
    },
    {
      question: 'عدد مرات التعديل المسموح بيها؟',
      answer: 'نقدم 3 جولات تعديل مجانية ضمن نطاق المشروع المتفق عليه. أي تعديلات خارج النطاق تتم مناقشتها وتحديد تكلفتها مسبقاً.'
    },
    {
      question: 'إمتى بيتم تسليم المشروع؟',
      answer: 'المدة الزمنية تعتمد على حجم المشروع. عادةً الموقع البسيط يستغرق 2-3 أسابيع، والمتجر الإلكتروني 4-6 أسابيع، والتطبيقات 6-10 أسابيع. يتم تحديد موعد دقيق في العقد.'
    },
    {
      question: 'هل بتوقعوا عقد رسمي؟',
      answer: 'نعم، نوقع عقد رسمي يضمن حقوق الطرفين ويحدد جميع التفاصيل: النطاق، المدة، التكلفة، وشروط الدفع. نحن نؤمن بالشفافية الكاملة.'
    },
    {
      question: 'هل أقدر أتابع تقدم المشروع؟',
      answer: 'نعم، نستخدم أدوات إدارة مشاريع مثل Trello و Jira تتيح لك متابعة كل مهمة بشكل يومي. كما نجتمع أسبوعياً لمراجعة التقدم.'
    }
  ]

  return (
    <section className="section-padding" style={{ background: 'var(--secondary-color)' }}>
      <Container>
        <div className="text-center mb-5">
          <span className="text-uppercase small fw-bold" style={{ color: 'var(--primary-color)', letterSpacing: 2 }}>الأسئلة الشائعة</span>
          <h2 className="section-title mt-2">عندك سؤال؟<br />إحنا جاهزين نجاوب</h2>
        </div>

        <Row className="justify-content-center">
          <Col lg={8}>
            <Accordion className="accordion-custom" defaultActiveKey="0">
              {faqs.map((faq, idx) => (
                <Accordion.Item eventKey={idx.toString()} key={idx}>
                  <Accordion.Header>
                    <span className="fw-bold" style={{ fontSize: '0.95rem' }}>{faq.question}</span>
                  </Accordion.Header>
                  <Accordion.Body className="text-muted">
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FAQ