import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    setLoading(true);

    // Simulate API
    setTimeout(() => {
      console.log("Signup Data:", form);
      setLoading(false);
      alert("Signup Successful");
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <div className='flex flex-col lg:flex-row'>
        {/* LEFT SECTION */}
        <div className="w-full lg:w-1/2 bg-green-300 text-gray-800 flex flex-col justify-center items-center">
          <img
            src="https://source.unsplash.com/600x400/?technology,secure"
            alt="login visual"
            className="rounded-xl shadow-lg mb-6 w-full text-center max-w-sm sm:max-w-md"
          />
          <h1 className="text-2xl sm:text-3xl font-bold mb-3 text-center">
            Join Our Platform 🚀
          </h1>
          <p className="text-center text-gray-500 max-w-md text-sm sm:text-base">
            Create your account to access powerful tools, manage your dashboard,
            and start your journey with our software portal.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate tempore impedit alias nisi ratione,
            architecto rem aut ipsum nulla reiciendis ut tempora eveniet reprehenderit odio vero illo atque molestias unde!
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full lg:w-1/2 flex justify-center items-center bg-gray-100 px-4 py-8 sm:px-6">
          <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6">
              Create Account
            </h2>

            {error && (
              <div className="bg-red-100 text-red-600 p-2 rounded mb-4 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Name */}
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 sm:py-3 rounded-lg transition"
              >
                {loading ? "Creating..." : "Sign Up"}
              </button>

            </form>

            <p className="text-sm text-center text-gray-500 mt-4">
              Already have an account?{" "}
              <span className="text-green-500 cursor-pointer hover:underline">
                <Link to="/login">Login</Link>
              </span>
            </p>

          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 py-6 px-2">
        <div className='bg-white p-6 rounded-2xl shadow hover:shadow-lg transition'>
          <h1 className='text-center font-bold text-2xl text-gray-400'>The Software Portal login interface</h1>
          <p className='text-medium text-gray-500'>The Software Portal login interface is a critical entry point designed to provide secure, efficient, and user-friendly access to a wide range of digital services and tools. Built with modern web technologies such as React and Tailwind CSS, this responsive login system ensures a consistent and seamless experience across mobile devices.</p>
        </div>
        <div className='bg-white p-6 rounded-2xl shadow hover:shadow-lg transition'>
          <h1 className='text-center font-bold text-2xl text-gray-400'>Responsive Design</h1>
          <p className='text-medium text-gray-500'>The layout of the login page is thoughtfully structured to balance visual engagement with functionality. On larger screens, the interface is divided into two primary sections. The left section highlights branding, system information, or key features of the software portal through engaging visuals and concise content. This area helps </p>
        </div>
        <div className='bg-white p-6 rounded-2xl shadow hover:shadow-lg transition'>
          <h1 className='text-center font-bold text-2xl text-gray-400'>Mobile-First Approach</h1>
          <p className='text-medium text-gray-500'>For tablets and mobile devices, the layout adapts responsively to ensure optimal usability. On tablets, the design transitions into a stacked format, maintaining clear separation between informational content and the login form. On mobile devices, the interface becomes more streamlined, prioritizing essential elements such as input </p>
        </div>
      </div>
    </div>
  )
}

export default Signup
