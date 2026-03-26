import React from 'react'

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl text-center font-bold text-gray-800 mb-6">Contact Us</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-4">We’d love to hear from you. Whether you have a question, need support, or want to explore opportunities, feel free to get in touch with us. Our team is always ready to assist you and ensure you have the best experience with our services.</p>
        <div className="grid md:grid-cols-2 gap-8 text-center">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h1 className='text-2xl font-semibold text-gray-800 mb-3'>💼 Corporate / Formal</h1>
            <p className='text-gray-600'>For inquiries, support, or business collaborations, please contact us using the details below. Our team will respond promptly and ensure your queries are handled efficiently.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h1 className='text-2xl font-semibold text-gray-800 mb-3'>🚀 Startup / Modern Tone</h1>
            <p className='text-gray-600'>Got questions or ideas? Let’s connect! Reach out to us anytime—we’re here to help and always excited to hear from you.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h1 className='text-2xl font-semibold text-gray-800 mb-3'>🤝 Friendly / Casual</h1>
            <p className='text-gray-600'>Have something on your mind? We’re just a message away! Drop us a line and we’ll get back to you as soon as possible.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h1 className='text-2xl font-semibold text-gray-800 mb-3'>🛠️ Support-Focused</h1>
            <p className='text-gray-600'>Need help? Our support team is here for you. Contact us with your issue, and we’ll make sure to resolve it quickly and effectively.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
