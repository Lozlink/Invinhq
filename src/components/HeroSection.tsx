'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PlayIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

export default function HeroSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center" style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30px_30px,rgba(255,255,255,0.1)_2px,transparent_2px)] bg-[length:60px_60px]"></div>
      </div>

      <div className="container-max section-padding relative z-10 w-full">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tight text-white">
            Build a Body & Mind{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-orange-500">
              That is Limitless.
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Unlock Physical and Mental Freedom with Our Proven System: Science, Tradition, and a Supportive Community—<strong className="font-bold text-white">Feel Invincible.</strong>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link href="/login" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-xl py-5 px-10 transition-all duration-300 transform hover:scale-105 shadow-2xl uppercase tracking-wide">
              Start Here
            </Link>
            <button 
              onClick={() => setIsVideoModalOpen(true)}
              className="border-3 border-white text-white font-bold text-xl py-5 px-10 hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-2xl uppercase tracking-wide"
            >
              <PlayIcon className="w-7 h-7 mr-3 inline" />
              Watch Video
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-red-400 mb-3">12,000+</div>
              <div className="text-gray-300 text-lg font-medium">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-red-400 mb-3">15+</div>
              <div className="text-gray-300 text-lg font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-red-400 mb-3">50+</div>
              <div className="text-gray-300 text-lg font-medium">Expert Coaches</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-red-400 mb-3">25+</div>
              <div className="text-gray-300 text-lg font-medium">Countries</div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 max-w-5xl w-full shadow-2xl">
            <div className="relative">
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute -top-4 -right-4 bg-red-600 text-white w-10 h-10 flex items-center justify-center hover:bg-red-700 transition-colors duration-200 text-2xl font-bold"
              >
                ×
              </button>
              <div className="aspect-video bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-red-600 flex items-center justify-center mx-auto mb-6">
                    <PlayIcon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Invincible Worldwide</h3>
                  <p className="text-lg text-gray-600">Promotional Video</p>
                  <p className="text-sm text-gray-500 mt-2">Experience the power of our training system</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
