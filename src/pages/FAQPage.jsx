import FAQ from '../components/FAQ'

function FAQPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>الأسئلة الشائعة</h1>
          <p className="mb-0">إجابات على أكثر الأسئلة تكراراً</p>
        </div>
      </div>
      <FAQ />
    </>
  )
}

export default FAQPage