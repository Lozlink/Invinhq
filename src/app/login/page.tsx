'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    lookingFor: '',
    location: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // For demo purposes, we'll use the email to determine role
      await login(formData.email, 'demo123');
      router.push('/dashboard');
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 py-12">
      <div className="container-max max-w-2xl mx-auto">
        <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
              <span className="text-white font-black text-3xl">I</span>
            </div>
            <h1 className="text-4xl font-black text-gray-900 mb-4">
              Get Your Training Pass
            </h1>
            <p className="text-xl text-gray-600">
              Join over <strong className="text-red-600">12,000+</strong> inspiring students and start your journey today
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="fullName" className="block text-sm font-bold text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                placeholder="Enter your email address"
              />
              <div className="mt-2 p-3 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-200">
                <p className="text-sm text-red-700 font-medium">
                  <strong>🎯 Demo Tip:</strong> Use these emails to test different roles:
                </p>
                <ul className="text-xs text-red-600 mt-1 space-y-1">
                  <li>• <strong>admin@demo.com</strong> - Full admin access</li>
                  <li>• <strong>staff@demo.com</strong> - Staff member access</li>
                  <li>• <strong>parent@demo.com</strong> - Parent with subscription</li>
                  <li>• <strong>any@email.com</strong> - Default parent role</li>
                </ul>
              </div>
            </div>

            <div>
              <label htmlFor="lookingFor" className="block text-sm font-bold text-gray-700 mb-2">
                What are you MOST Looking For? <span className="text-red-500">*</span>
              </label>
              <select
                id="lookingFor"
                name="lookingFor"
                required
                value={formData.lookingFor}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200"
              >
                <option value="">Select your primary goal</option>
                <option value="strength">Build Functional Strength & Muscle Tone</option>
                <option value="flexibility">Improve Flexibility & Kick Higher</option>
                <option value="skills">Learn New Skills & Tricks</option>
                <option value="confidence">Build Confidence & Feel Good</option>
              </select>
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-bold text-gray-700 mb-2">
                Location <span className="text-red-500">*</span>
              </label>
              <select
                id="location"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200"
              >
                <option value="">Select your preferred location</option>
                <option value="wetherill-park">Wetherill Park (HQ)</option>
                <option value="online">Online Training</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black text-xl py-5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? 'Processing...' : 'GET A TRAINING PASS'}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              Already have an account?{' '}
              <Link href="/login" className="text-red-600 hover:text-red-700 font-bold">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
