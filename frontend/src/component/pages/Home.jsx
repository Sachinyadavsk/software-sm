import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="bg-gray-100">

      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Software Management Portal
        </h1>
        <p className="max-w-2xl mx-auto text-gray-300 mb-6">
          Manage your applications, track performance, and scale your business
          with our powerful and secure platform.
        </p>

        <div className="flex justify-center gap-4">
          <Link to="/service" className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300">
            Explore Services
          </Link>
          <Link to="/about" className="border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-black">
            Learn More
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Key Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">⚡ Fast Performance</h3>
            <p className="text-gray-600">
              Optimized system ensures fast load times and smooth operations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">🔒 Secure System</h3>
            <p className="text-gray-600">
              Advanced security to keep your data safe and protected.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">📊 Analytics</h3>
            <p className="text-gray-600">
              Real-time insights and dashboards to track performance.
            </p>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Our Services
          </h2>
          <p className="text-gray-600 mb-8">
            We provide complete software solutions for your business growth.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold mb-2">Software Development</h3>
              <p className="text-gray-600 text-sm">
                Custom applications tailored to your needs.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold mb-2">API Integration</h3>
              <p className="text-gray-600 text-sm">
                Connect systems and automate workflows.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold mb-2">Data Management</h3>
              <p className="text-gray-600 text-sm">
                Organize and analyze your business data.
              </p>
            </div>
          </div>
          <Link to="/service" className="inline-block mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500">
            View All Services
          </Link>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white text-center py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Start Managing Your Software Today
        </h2>
        <p className="mb-4">
          Join our platform and simplify your workflow.
        </p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Home
