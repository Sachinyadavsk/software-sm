import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-gray-500 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to='/'>
                        <div className="text-xl font-bold">
                            Software SM
                        </div>
                    </Link>


                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <Link to="/" className="hover:text-yellow-400">Home</Link>
                        <Link to="/about" className="hover:text-yellow-400">About</Link>
                        <Link to="/service" className="hover:text-yellow-400">Services</Link>
                        <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
                        <Link to="/login" className="hover:text-yellow-400">Sign In</Link>
                        <Link to="/signup" className="hover:text-yellow-400">Sign Up</Link>
                    </div>

                    {/* Mobile Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            ☰
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-800 px-4 pb-4">
                    <Link to="/" className="block py-2 hover:text-yellow-400">Home</Link>
                    <Link to="/about" className="block py-2 hover:text-yellow-400">About</Link>
                    <Link to="/service" className="block py-2 hover:text-yellow-400">Services</Link>
                    <Link to="/contact" className="block py-2 hover:text-yellow-400">Contact</Link>
                    <Link to="/login" className="block py-2 hover:text-yellow-400">Sign In</Link>
                    <Link to="/signup" className="block py-2 hover:text-yellow-400">Sign Up</Link>
                </div>
            )}
        </nav>
    )
}

export default Navbar
