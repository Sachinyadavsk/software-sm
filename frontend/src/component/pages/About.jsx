import React from 'react'

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
          About Our Software Portal
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Our platform helps developers and businesses manage applications,
          track performance, and build scalable solutions efficiently.
        </p>
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              🚀 What We Do
            </h2>
            <p className="text-gray-600">
              We provide a complete software portal where users can manage
              projects, track data, and integrate APIs easily. Our goal is to
              simplify development workflows and improve productivity.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <ul className="space-y-3 text-gray-700">
              <li>✔ Project Management</li>
              <li>✔ API Integration</li>
              <li>✔ User Authentication</li>
              <li>✔ Real-time Analytics</li>
            </ul>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 text-center mb-12">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">💻 Developers</h3>
            <p className="text-gray-600">
              Build, test, and deploy applications faster with our tools.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">🏢 Businesses</h3>
            <p className="text-gray-600">
              Manage teams, track performance, and scale operations easily.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">🔒 Secure</h3>
            <p className="text-gray-600">
              Advanced security ensures your data is always protected.
            </p>
          </div>
        </div>
        <div className="bg-blue-600 text-white p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-3">
            Why Choose Our Platform?
          </h2>
          <p className="mb-4">
            We combine performance, security, and simplicity to deliver the best
            experience for modern software development.
          </p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default About
