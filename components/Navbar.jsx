"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/mongolia.jpg"
                width={50}
                height={50}
                className="rounded-full"
                alt="logo"
              />
              <span className="text-2xl font-bold text-slate-600">
                Creatine Mongolia
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-slate-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-blue-50"
            >
              Бэлэн бүтээгдэхүүн
            </Link>
            <Link
              href="/pre-order"
              className="text-slate-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-blue-50"
            >
              Захиалах боломжтой
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-64 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block text-slate-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Бэлэн бүтээгдэхүүн
            </Link>
            <Link
              href="/pre-order"
              className="block text-slate-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Захиалах боломжтой
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
