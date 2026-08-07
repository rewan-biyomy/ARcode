import Hero from '../components/Hero'
import StatsBar from '../components/StatsBar'
// import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      {/* <Services /> */}
      <Portfolio />
      
      {/* CTA انتقالي */}
      <section style={{ 
        background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%)',
        padding: '80px 0',
        color: 'white',
        textAlign: 'center'
      }}>
        <Container>
          <h2 className="fw-bold mb-3" style={{ fontSize: '2rem' }}>
            عندك فكرة؟ خلينا نحققها سوا
          </h2>
          <p className="mb-4 opacity-75" style={{ maxWidth: 500, margin: '0 auto' }}>
            فريقنا جاهز يبدأ معاك مشروعك الجديد من الآن. تواصل معانا واحصل على استشارة مجانية.
          </p>
          <Link to="/contact" className="btn btn-light rounded-pill px-5 py-3 fw-bold" style={{ color: 'var(--primary-dark)' }}>
            ابدأ مشروعك
            <i className="bi bi-arrow-left me-2"></i>
          </Link>
        </Container>
      </section>
    </>
  )
}

export default Home