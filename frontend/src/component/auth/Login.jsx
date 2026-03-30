import React, { useState } from 'react'

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
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

    if (!form.email || !form.password) {
      setError("All fields are required");
      return;
    }

    setError("");
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Login Data:", form);
      setLoading(false);
      alert("Login Successful");
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <div className='flex flex-col lg:flex-row'>
        {/* LEFT SECTION */}
        <div className="w-full lg:w-1/2 bg-blue-300 text-gray-600 flex flex-col justify-center items-center">
          <img
            src="https://source.unsplash.com/600x400/?technology,secure"
            alt="login visual"
            className="rounded-xl shadow-lg mb-6 w-full text-center max-w-sm sm:max-w-md"
          />
          <h1 className="text-2xl sm:text-3xl font-bold mb-3 text-center">
            Welcome Back 👋
          </h1>
          <p className="text-center text-gray-500 max-w-md text-sm sm:text-base">
            Access your dashboard, manage your tasks, and explore powerful features
            built just for you.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate tempore impedit alias nisi ratione, architecto rem aut ipsum nulla reiciendis ut tempora eveniet reprehenderit odio vero illo atque molestias unde!
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full lg:w-1/2 flex justify-center items-center bg-gray-100 px-4 py-8 sm:px-6">
          <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6">
              Login
            </h2>
            {error && (
              <div className="bg-red-100 text-red-600 p-2 rounded mb-4 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
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
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none text-sm sm:text-base"
                  placeholder="Enter your email"
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
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none text-sm sm:text-base"
                  placeholder="Enter your password"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 sm:py-3 rounded-lg transition text-sm sm:text-base"
              >
                {loading ? "Logging in..." : "Login"}
              </button>

            </form>

            <p className="text-sm text-center text-gray-500 mt-4">
              Don’t have an account?{" "}
              <span className="text-blue-500 cursor-pointer hover:underline">
                Sign up
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

export default Login
