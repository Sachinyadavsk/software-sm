import React from 'react'

const Service = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className='text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6'>Servive the Software SM</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10"> We provide powerful software management solutions to help businesses
          streamline operations, improve productivity, and scale efficiently.</p>
        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Service 1 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3">💻 Software Development</h2>
            <p className="text-gray-600">
              We build scalable and high-performance applications tailored to your
              business needs using modern technologies.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3">📊 Data Management</h2>
            <p className="text-gray-600">
              Manage and analyze your data efficiently with secure storage,
              real-time insights, and reporting tools.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3">🔗 API Integration</h2>
            <p className="text-gray-600">
              Seamlessly connect your applications with third-party services to
              enhance functionality and automation.
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3">🔒 Security Solutions</h2>
            <p className="text-gray-600">
              Protect your system with advanced security features including
              authentication, encryption, and monitoring.
            </p>
          </div>

          {/* Service 5 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3">⚙️ System Automation</h2>
            <p className="text-gray-600">
              Automate repetitive tasks and workflows to increase efficiency and
              reduce manual errors.
            </p>
          </div>

          {/* Service 6 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3">📈 Performance Monitoring</h2>
            <p className="text-gray-600">
              Track system performance and user activity with real-time dashboards
              and analytics tools.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-12 bg-blue-600 text-white text-center p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-3">
            Grow Your Business with Our Software Solutions
          </h2>
          <p className="mb-4">
            Our platform is designed to simplify management and boost productivity.
          </p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Service
