import Link from 'next/link';
import { PlayIcon } from '@heroicons/react/24/solid';

export default function AboutSection() {
  return (
    <section className="py-20 bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: 'url(/images/about-bg.jpg)' }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              What Is <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-500">Invincible Worldwide®</span>?
            </h2>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Click on the play button below to learn more about our mission and vision.
            </p>

            <div className="mb-10">
              <button className="w-24 h-24 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-2xl group">
                <PlayIcon className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-200" />
              </button>
            </div>

            <div className="space-y-8">
              <h3 className="text-3xl font-black">
                Want To Try Something Different?
              </h3>
              
              <p className="text-xl text-gray-200 leading-relaxed">
                Are you tired of the same old gym routine, or the egos that come with MMA fight gyms? Do traditional martial arts classes leave you feeling bored with repetitions and outdated skills?
              </p>
              
              <p className="text-2xl font-bold text-red-400">
                It&apos;s time for a change.
              </p>
              
              <p className="text-xl text-gray-200 leading-relaxed">
                At Invincible HQ, we offer a holistic approach to helping you <strong className="font-bold text-white">build a body that is strong, fast, flexible, powerful and feels good.</strong>
              </p>
              
              <p className="text-xl text-gray-200 leading-relaxed">
                Whether you&apos;re a beginner or a seasoned athlete, our inclusive atmosphere welcomes everyone who wants to try something different and push their limits.
              </p>
              
              <p className="text-xl text-gray-200 leading-relaxed">
                Join us and discover a new way to train that will leave you <strong className="font-bold text-white">feeling INVINCIBLE both inside and out.</strong>
              </p>
            </div>

            <div className="mt-12">
              <Link href="/login" className="inline-block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-xl py-5 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl">
                Get a Training Pass
              </Link>
            </div>
          </div>

          {/* Right Column - Image/Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-red-100 to-red-200 rounded-3xl flex items-center justify-center shadow-2xl bg-opacity-90 backdrop-blur-sm">
              <div className="text-center p-12">
                <div className="w-40 h-40 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                  <span className="text-white font-black text-6xl">I</span>
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-6">
                  Physical and Mental Training Programs
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Our comprehensive approach combines strength, flexibility, martial arts, and mental conditioning.
                </p>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-28 h-28 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-xl">
              <span className="text-white font-bold text-2xl">🏆</span>
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-xl">
              <span className="text-white font-bold text-xl">💪</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
