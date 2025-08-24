'use client';

import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function SuccessStoriesPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const stories = [
    {
      name: 'Jasmine (HQ Member)',
      quote: 'People here genuinely want to help you succeed. The community is amazing and the coaches are incredibly supportive.',
      image: '👩‍🦰',
      location: 'Wetherill Park HQ',
      program: 'Martial Arts & Strength Training'
    },
    {
      name: 'Tung (HQ Member)',
      quote: 'How Tung Found His Limitless potential through consistent training and the right mindset.',
      image: '👨‍🦱',
      location: 'Wetherill Park HQ',
      program: 'Tricking & Flexibility'
    },
    {
      name: 'Katrina (HQ Member)',
      quote: 'I wanted to learn things that would challenge me both physically and mentally. Invincible delivered that and more.',
      image: '👩‍🦳',
      location: 'Wetherill Park HQ',
      program: 'Body-Mind Mastery Program'
    },
    {
      name: 'Paul (HQ Member)',
      quote: 'I love to eat. My training here has helped me maintain a healthy balance while still enjoying life.',
      image: '👨‍🦲',
      location: 'Wetherill Park HQ',
      program: 'Strength & Conditioning'
    },
    {
      name: 'Mathew (HQ Member)',
      quote: 'This is the best I&apos;ve felt in years. The combination of strength and flexibility training is perfect.',
      image: '👨‍🦱',
      location: 'Wetherill Park HQ',
      program: 'Comprehensive Training'
    },
    {
      name: 'Danny (HQ Member)',
      quote: 'I&apos;m able to fit into clothes I haven&apos;t worn in years. The transformation has been incredible.',
      image: '👨‍🦱',
      location: 'Wetherill Park HQ',
      program: 'Transformation Program'
    },
    {
      name: 'Sheryl (HQ Member)',
      quote: 'Everyone was really friendly, nice, and encouraging. It&apos;s like having a second family.',
      image: '👩‍🦰',
      location: 'Wetherill Park HQ',
      program: 'Community Training'
    },
    {
      name: 'Nikkie (HQ Member)',
      quote: 'I need to do this for myself. The confidence I&apos;ve gained here has changed my life.',
      image: '👩‍🦳',
      location: 'Wetherill Park HQ',
      program: 'Confidence Building'
    },
    {
      name: 'Mya (HQ Junior)',
      quote: 'Invincible is my second home. I love coming here to train and hang out with my friends.',
      image: '👧',
      location: 'Wetherill Park HQ',
      program: 'Kids Martial Arts'
    },
    {
      name: 'Andre James (HQ Junior)',
      quote: 'My parents are proud of how much I&apos;ve improved. I&apos;ve learned discipline and respect.',
      image: '👦',
      location: 'Wetherill Park HQ',
      program: 'Kids Development'
    },
    {
      name: 'Fiona (HQ Member)',
      quote: 'Invincible HQ made a positive impact on my life. I&apos;ve never felt stronger or more confident.',
      image: '👩‍🦰',
      location: 'Wetherill Park HQ',
      program: 'Personal Development'
    },
    {
      name: 'Arron Huynh',
      quote: 'I feel more confident and capable than ever before. The training here is world-class.',
      image: '👨‍🦱',
      location: 'Wetherill Park HQ',
      program: 'Advanced Training'
    },
    {
      name: 'Mohammad Rukun',
      quote: 'My daughter is 9 years old and she loves coming here. The kids program is amazing.',
      image: '👨‍🦱',
      location: 'Wetherill Park HQ',
      program: 'Family Programs'
    },
    {
      name: 'Richard Huynh',
      quote: 'I am coming out of my shell more and more each day. The supportive environment is incredible.',
      image: '👨‍🦱',
      location: 'Wetherill Park HQ',
      program: 'Personal Growth'
    },
    {
      name: 'Lee Studdert',
      quote: 'It has been a great experience learning new skills and meeting new people. Highly recommended!',
      image: '👨‍🦱',
      location: 'Wetherill Park HQ',
      program: 'Skill Development'
    },
    {
      name: 'Nicole Pena',
      quote: 'Invincible Worldwide has been nothing short of amazing. The coaches truly care about your progress.',
      image: '👩‍🦰',
      location: 'Wetherill Park HQ',
      program: 'Coaching Excellence'
    },
    {
      name: 'Mayen Uddin',
      quote: 'I have great pleasure to be part of this amazing community. The training is challenging but rewarding.',
      image: '👨‍🦱',
      location: 'Wetherill Park HQ',
      program: 'Community Training'
    },
    {
      name: 'Kazi Haque',
      quote: 'My daughter goes to Invincible. She has grown so much in confidence and skill.',
      image: '👨‍🦱',
      location: 'Wetherill Park HQ',
      program: 'Youth Development'
    },
    {
      name: 'Charles Walwyn, Organizer at UMA',
      quote: 'Alan and his team are exceptional. They bring out the best in every student.',
      image: '👨‍🦱',
      location: 'Wetherill Park HQ',
      program: 'Professional Training'
    },
    {
      name: 'Jamie Sok',
      quote: 'From the very moment I walked in, I felt welcome. The atmosphere is electric and motivating.',
      image: '👩‍🦰',
      location: 'Wetherill Park HQ',
      program: 'Welcome Experience'
    },
    {
      name: 'Kirsten Marree Stocker, Age 14',
      quote: 'I learnt how to be confident and strong. The coaches here are the best!',
      image: '👧',
      location: 'Wetherill Park HQ',
      program: 'Teen Development'
    },
    {
      name: 'Prime Time MMA',
      quote: 'These guys are amazing! Too many people to mention but they all deserve recognition.',
      image: '🏆',
      location: 'Wetherill Park HQ',
      program: 'Professional Recognition'
    },
    {
      name: 'Rashad',
      quote: 'Alan is the best instructor! His teaching style is perfect for all skill levels.',
      image: '👨‍🦱',
      location: 'Wetherill Park HQ',
      program: 'Instructor Excellence'
    },
    {
      name: 'Hassan',
      quote: 'Through Invincible I have reached levels I never thought possible. Thank you team!',
      image: '👨‍🦱',
      location: 'Wetherill Park HQ',
      program: 'Limitless Achievement'
    },
    {
      name: 'Diana Lotorto',
      quote: 'The positive influence they shower on everyone is incredible. Life-changing experience.',
      image: '👩‍🦰',
      location: 'Wetherill Park HQ',
      program: 'Life Transformation'
    },
    {
      name: 'Szymon (Online Member)',
      quote: 'It was better than my expectations. The online program is comprehensive and effective.',
      image: '👨‍🦱',
      location: 'Online Training',
      program: 'Digital Programs'
    }
  ];

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="container-max text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Success Stories
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
            Real transformations from real people. See how Invincible Worldwide has changed lives through our proven training system.
          </p>
          <div className="mt-8">
            <Link 
              href="/login" 
              className="inline-block bg-white text-red-600 font-bold text-lg py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Start Your Success Story
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container-max">
          {/* Featured Story */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="bg-white rounded-3xl p-12 md:p-16 text-center relative shadow-2xl">
              {/* Navigation Arrows */}
              <button
                onClick={prevStory}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-xl hover:shadow-2xl transition-shadow duration-200 border border-gray-200"
              >
                <ChevronLeftIcon className="w-8 h-8 text-gray-600" />
              </button>
              
              <button
                onClick={nextStory}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-xl hover:shadow-2xl transition-shadow duration-200 border border-gray-200"
              >
                <ChevronRightIcon className="w-8 h-8 text-gray-600" />
              </button>

              {/* Current Story */}
              <div className="mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                  <span className="text-6xl">{stories[currentIndex].image}</span>
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-4">
                  {stories[currentIndex].name}
                </h3>
                <div className="mb-6">
                  <span className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mr-3">
                    📍 {stories[currentIndex].location}
                  </span>
                  <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                    🎯 {stories[currentIndex].program}
                  </span>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  &ldquo;{stories[currentIndex].quote}&rdquo;
                </p>
              </div>

              {/* Story Counter */}
              <div className="text-lg text-gray-500 font-medium">
                {currentIndex + 1} of {stories.length}
              </div>
            </div>
          </div>

          {/* Story Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-black text-gray-900 text-center mb-12">
              Browse All Success Stories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {stories.map((story, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`text-center p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                    index === currentIndex 
                      ? 'bg-gradient-to-br from-red-100 to-red-200 border-2 border-red-500 shadow-xl' 
                      : 'bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl shadow-lg ${
                    index === currentIndex ? 'scale-110' : ''
                  }`}>
                    {story.image}
                  </div>
                  <div className="text-sm font-bold text-gray-700 truncate">
                    {story.name}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-3xl font-black text-gray-900 mb-6">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join thousands of people who have already transformed their lives with Invincible Worldwide. Your success story starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/login" 
                className="inline-block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-xl py-5 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                Get Started Today
              </Link>
              <Link 
                href="/" 
                className="inline-block border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold text-xl py-5 px-10 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
