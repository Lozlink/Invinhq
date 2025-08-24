'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { useAuth } from '@/contexts/AuthContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout, isLoading } = useAuth();



  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const closeMobileMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-max">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-lg">
              <span className="text-white font-black text-2xl">I</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-black text-gray-900 group-hover:text-red-600 transition-colors duration-200">Invincible</div>
              <div className="text-sm font-bold text-red-600">Worldwide</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Train With Us */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-red-600 font-semibold py-2 transition-colors duration-200">
                <span>Train With Us</span>
                <ChevronDownIcon className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-2xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-4 space-y-1">
                  <Link href="/martial-arts" className="block text-gray-700 hover:text-red-600 hover:bg-red-50 px-4 py-3 transition-colors duration-200 font-medium">Martial Arts Classes</Link>
                  <Link href="/strength" className="block text-gray-700 hover:text-red-600 hover:bg-red-50 px-4 py-3 transition-colors duration-200 font-medium">Strength Classes</Link>
                  <Link href="/tricking" className="block text-gray-700 hover:text-red-600 hover:bg-red-50 px-4 py-3 transition-colors duration-200 font-medium">Tricking Classes</Link>
                  <Link href="/kids" className="block text-gray-700 hover:text-red-600 hover:bg-red-50 px-4 py-3 transition-colors duration-200 font-medium">Kids Martial Arts Classes</Link>
                </div>
              </div>
            </div>

            {/* Train Online */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-red-600 font-semibold py-2 transition-colors duration-200">
                <span>Train Online</span>
                <ChevronDownIcon className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-2xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-4 space-y-1">
                  <Link href="/free-challenge" className="block text-gray-700 hover:text-red-600 hover:bg-red-50 px-4 py-3 transition-colors duration-200 font-medium">Free At-Home Challenge</Link>
                  <Link href="/flexibility" className="block text-gray-700 hover:text-red-600 hover:bg-red-50 px-4 py-3 transition-colors duration-200 font-medium">28-Day Flexibility Challenge</Link>
                  <Link href="/kickstarter" className="block text-gray-700 hover:text-red-600 hover:bg-red-50 px-4 py-3 transition-colors duration-200 font-medium">30-Day Kickstarter Program</Link>
                  <Link href="/mastery" className="block text-gray-700 hover:text-red-600 hover:bg-red-50 px-4 py-3 transition-colors duration-200 font-medium">12-Wk Body-Mind Mastery Program</Link>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-red-600 font-semibold py-2 transition-colors duration-200">
                <span>About</span>
                <ChevronDownIcon className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-2xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-4 space-y-1">
                  <Link href="/timetable" className="block text-gray-700 hover:text-red-600 hover:bg-red-50 px-4 py-3 transition-colors duration-200 font-medium">Invincible HQ Timetable</Link>
                  <Link href="/alan-la" className="block text-gray-700 hover:text-red-600 hover:bg-red-50 px-4 py-3 transition-colors duration-200 font-medium">Alan La</Link>
                  <Link href="/success-stories" className="block text-gray-700 hover:text-red-600 hover:bg-red-50 px-4 py-3 transition-colors duration-200 font-medium">Success Stories</Link>
                  <Link href="/careers" className="block text-gray-700 hover:text-red-600 hover:bg-red-50 px-4 py-3 transition-colors duration-200 font-medium">Careers</Link>
                  <Link href="/contact" className="block text-gray-700 hover:text-red-600 hover:bg-red-50 px-4 py-3 transition-colors duration-200 font-medium">Contact Us</Link>
                </div>
              </div>
            </div>

            <Link href="/shop" className="text-gray-700 hover:text-red-600 font-semibold py-2 transition-colors duration-200">
              Shop
            </Link>

            {/* More */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-red-600 font-semibold py-2 transition-colors duration-200">
                <span>More</span>
                <ChevronDownIcon className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-2xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-4 space-y-1">
                  <Link href="/blog" className="block text-gray-700 hover:text-red-600 hover:bg-red-50 px-4 py-3 transition-colors duration-200 font-medium">Blog</Link>
                  <Link href="/school-programs" className="block text-gray-700 hover:text-red-600 hover:bg-red-50 px-4 py-3 transition-colors duration-200 font-medium">School Programs</Link>
                  <Link href="/birthday-parties" className="block text-gray-700 hover:text-red-600 hover:bg-red-50 px-4 py-3 transition-colors duration-200 font-medium">Birthday Parties</Link>
                  <Link href="/licensing" className="block text-gray-600 hover:text-red-600 hover:bg-red-50 px-4 py-3 transition-colors duration-200 font-medium">Licensing Program</Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {isLoading ? (
              <div className="w-32 h-10 bg-gray-200 animate-pulse rounded-full"></div>
            ) : user ? (
              <div className="flex items-center space-x-4">
                <Link href="/dashboard" className="text-gray-700 hover:text-red-600 font-semibold transition-colors duration-200">
                  Dashboard
                </Link>
                {user.role === 'admin' && (
                  <Link href="/admin" className="text-gray-700 hover:text-red-600 font-semibold transition-colors duration-200">
                    Admin
                  </Link>
                )}
                <button
                  onClick={logout}
                  className="text-gray-700 hover:text-red-600 font-semibold transition-colors duration-200"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link 
                  href="/signin" 
                  className="text-gray-700 hover:text-red-600 font-semibold transition-colors duration-200"
                >
                  Sign In
                </Link>
                <Link 
                  href="/login" 
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-8 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide"
                >
                  Get Training Pass
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-700 hover:text-red-600 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="font-semibold text-gray-900 px-4 py-2">Train With Us</div>
                <div className="pl-8 space-y-2">
                  <Link href="/martial-arts" onClick={closeMobileMenu} className="block text-gray-600 hover:text-red-600 py-1">Martial Arts Classes</Link>
                  <Link href="/strength" onClick={closeMobileMenu} className="block text-gray-600 hover:text-red-600 py-1">Strength Classes</Link>
                  <Link href="/tricking" onClick={closeMobileMenu} className="block text-gray-600 hover:text-red-600 py-1">Tricking Classes</Link>
                  <Link href="/kids" onClick={closeMobileMenu} className="block text-gray-600 hover:text-red-600 py-1">Kids Martial Arts Classes</Link>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="font-semibold text-gray-900 px-4 py-2">Train Online</div>
                <div className="pl-8 space-y-2">
                  <Link href="/free-challenge" onClick={closeMobileMenu} className="block text-gray-600 hover:text-red-600 py-1">Free At-Home Challenge</Link>
                  <Link href="/flexibility" onClick={closeMobileMenu} className="block text-gray-600 hover:text-red-600 py-1">28-Day Flexibility Challenge</Link>
                  <Link href="/kickstarter" onClick={closeMobileMenu} className="block text-gray-600 hover:text-red-600 py-1">30-Day Kickstarter Program</Link>
                  <Link href="/mastery" onClick={closeMobileMenu} className="block text-gray-600 hover:text-red-600 py-1">12-Wk Body-Mind Mastery Program</Link>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="font-semibold text-gray-900 px-4 py-2">About</div>
                <div className="pl-8 space-y-2">
                  <Link href="/timetable" onClick={closeMobileMenu} className="block text-gray-600 hover:text-red-600 py-1">Invincible HQ Timetable</Link>
                  <Link href="/alan-la" onClick={closeMobileMenu} className="block text-gray-600 hover:text-red-600 py-1">Alan La</Link>
                  <Link href="/success-stories" onClick={closeMobileMenu} className="block text-gray-600 hover:text-red-600 py-1">Success Stories</Link>
                  <Link href="/careers" onClick={closeMobileMenu} className="block text-gray-600 hover:text-red-600 py-1">Careers</Link>
                  <Link href="/contact" onClick={closeMobileMenu} className="block text-gray-600 hover:text-red-600 py-1">Contact Us</Link>
                </div>
              </div>
              
              <Link href="/shop" onClick={closeMobileMenu} className="block font-semibold text-gray-900 px-4 py-2">Shop</Link>
              
              <div className="space-y-2">
                <div className="font-semibold text-gray-900 px-4 py-2">More</div>
                <div className="pl-8 space-y-2">
                  <Link href="/blog" onClick={closeMobileMenu} className="block text-gray-600 hover:text-red-600 py-1">Blog</Link>
                  <Link href="/school-programs" onClick={closeMobileMenu} className="block text-gray-600 hover:text-red-600 py-1">School Programs</Link>
                  <Link href="/birthday-parties" onClick={closeMobileMenu} className="block text-gray-600 hover:text-red-600 py-1">Birthday Parties</Link>
                  <Link href="/licensing" onClick={closeMobileMenu} className="block text-gray-600 hover:text-red-600 py-1">Licensing Program</Link>
                </div>
              </div>
              
              {/* Auth Options for Mobile */}
              {!user && (
                <div className="border-t border-gray-200 pt-4 px-4 space-y-3">
                  <Link 
                    href="/signin" 
                    onClick={closeMobileMenu}
                    className="block text-center text-gray-700 hover:text-red-600 font-semibold py-2"
                  >
                    Sign In
                  </Link>
                  <Link 
                    href="/login" 
                    onClick={closeMobileMenu}
                    className="block text-center bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-3 px-6 uppercase tracking-wide"
                  >
                    Get Training Pass
                  </Link>
                </div>
              )}
              
              {/* User Options for Mobile */}
              {user && (
                <div className="border-t border-gray-200 pt-4 px-4 space-y-3">
                  <Link 
                    href="/dashboard" 
                    onClick={closeMobileMenu}
                    className="block text-center text-gray-700 hover:text-red-600 font-semibold py-2"
                  >
                    Dashboard
                  </Link>
                  {user.role === 'admin' && (
                    <Link 
                      href="/admin" 
                      onClick={closeMobileMenu}
                      className="block text-center text-gray-700 hover:text-red-600 font-semibold py-2"
                    >
                      Admin
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      logout();
                      closeMobileMenu();
                    }}
                    className="block w-full text-center text-gray-700 hover:text-red-600 font-semibold py-2"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
