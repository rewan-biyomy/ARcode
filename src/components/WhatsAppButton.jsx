function WhatsAppButton() {
  // غير الرقم هنا برقمك (مع كود الدولة بدون +)
  const phoneNumber = '201234567890'
  const message = 'مرحباً، أود التواصل معكم بخصوص خدماتكم'

  return (
    <a 
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank" 
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="تواصل معنا على واتساب"
    >
      <i className="bi bi-whatsapp"></i>
      <span>تواصل معانا</span>
    </a>
  )
}

export default WhatsAppButton