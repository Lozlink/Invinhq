import Link from 'next/link';
import { StarIcon } from '@heroicons/react/24/outline';

export default function CTAFooter() {
  return (
    <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
      <div className="container-max text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block p-4 bg-white bg-opacity-20 rounded-full mb-8 shadow-xl">
            <StarIcon className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Build a High Performance Body In 4 Weeks
          </h2>
          
          <p className="text-2xl text-red-100 mb-10 leading-relaxed">
            Get the Invincible At-Home Training Program.. <strong className="font-bold text-white">FREE</strong>
          </p>
          
          <Link 
            href="/free-challenge" 
            className="inline-block bg-white text-red-600 font-black text-xl px-12 py-6 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            FREE CHALLENGE
          </Link>
        </div>
      </div>
    </section>
  );
}
