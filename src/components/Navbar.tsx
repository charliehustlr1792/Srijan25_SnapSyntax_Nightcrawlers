import React from 'react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <span className="flex justify-center w-full fixed top-0 z-10">
            <nav className="bg-gray-200 p-4 rounded-full shadow-md w-1/5 md:w-2/4 lg:w-2/3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-between w-full space-x-4">
                        <button className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-full transition-colors duration-300">
                            Dashboard
                        </button>

                        <Link href="/about" className="text-gray-700 hover:text-gray-900">
                            About Us
                        </Link>

                        <Link href="/skills" className="text-gray-700 hover:text-gray-900">
                            My Skills
                        </Link>

                        <Link href="/projects" className="text-gray-700 hover:text-gray-900">
                            Projects
                        </Link>

                        <Link href="/contact" className="text-gray-700 hover:text-gray-900">
                            Contact Me
                        </Link>

                        <button className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-full transition-colors duration-300">
                            Login
                        </button>
                    </div>
                </div>
            </nav>
        </span>
    );
}