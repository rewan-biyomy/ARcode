import Portfolio from '../components/Portfolio'

function PortfolioPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>أعمالنا</h1>
          <p className="mb-0">معرض مشاريعنا وإنجازاتنا</p>
        </div>
      </div>
      <Portfolio />
    </>
  )
}

export default PortfolioPage