'use client';

import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function SuccessStoriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const stories = [
    {
      name: 'Jasmine (HQ Member)',
      quote: 'People here genuinely want to help you succeed. The community is amazing and the coaches are incredibly supportive.',
      image: '👩‍🦰'
    },
    {
      name: 'Tung (HQ Member)',
      quote: 'How Tung Found His Limitless potential through consistent training and the right mindset.',
      image: '👨‍🦱'
    },
    {
      name: 'Katrina (HQ Member)',
      quote: 'I wanted to learn things that would challenge me both physically and mentally. Invincible delivered that and more.',
      image: '👩‍🦳'
    },
    {
      name: 'Paul (HQ Member)',
      quote: 'I love to eat. My training here has helped me maintain a healthy balance while still enjoying life.',
      image: '👨‍🦲'
    },
    {
      name: 'Mathew (HQ Member)',
      quote: 'This is the best I&apos;ve felt in years. The combination of strength and flexibility training is perfect.',
      image: '👨‍🦱'
    },
    {
      name: 'Danny (HQ Member)',
      quote: 'I&apos;m able to fit into clothes I haven&apos;t worn in years. The transformation has been incredible.',
      image: '👨‍🦱'
    },
    {
      name: 'Sheryl (HQ Member)',
      quote: 'Everyone was really friendly, nice, and encouraging. It&apos;s like having a second family.',
      image: '👩‍🦰'
    },
    {
      name: 'Nikkie (HQ Member)',
      quote: 'I need to do this for myself. The confidence I&apos;ve gained here has changed my life.',
      image: '👩‍🦳'
    },
    {
      name: 'Mya (HQ Junior)',
      quote: 'Invincible is my second home. I love coming here to train and hang out with my friends.',
      image: '👧'
    },
    {
      name: 'Andre James (HQ Junior)',
      quote: 'My parents are proud of how much I&apos;ve improved. I&apos;ve learned discipline and respect.',
      image: '👦'
    },
    {
      name: 'Fiona (HQ Member)',
      quote: 'Invincible HQ made a positive impact on my life. I&apos;ve never felt stronger or more confident.',
      image: '👩‍🦰'
    },
    {
      name: 'Arron Huynh',
      quote: 'I feel more confident and capable than ever before. The training here is world-class.',
      image: '👨‍🦱'
    },
    {
      name: 'Mohammad Rukun',
      quote: 'My daughter is 9 years old and she loves coming here. The kids program is amazing.',
      image: '👨‍🦱'
    },
    {
      name: 'Richard Huynh',
      quote: 'I am coming out of my shell more and more each day. The supportive environment is incredible.',
      image: '👨‍🦱'
    },
    {
      name: 'Lee Studdert',
      quote: 'It has been a great experience learning new skills and meeting new people. Highly recommended!',
      image: '👨‍🦱'
    },
    {
      name: 'Nicole Pena',
      quote: 'Invincible Worldwide has been nothing short of amazing. The coaches truly care about your progress.',
      image: '👩‍🦰'
    },
    {
      name: 'Mayen Uddin',
      quote: 'I have great pleasure to be part of this amazing community. The training is challenging but rewarding.',
      image: '👨‍🦱'
    },
    {
      name: 'Kazi Haque',
      quote: 'My daughter goes to Invincible. She has grown so much in confidence and skill.',
      image: '👨‍🦱'
    },
    {
      name: 'Charles Walwyn, Organizer at UMA',
      quote: 'Alan and his team are exceptional. They bring out the best in every student.',
      image: '👨‍🦱'
    },
    {
      name: 'Jamie Sok',
      quote: 'From the very moment I walked in, I felt welcome. The atmosphere is electric and motivating.',
      image: '👩‍🦰'
    },
    {
      name: 'Kirsten Marree Stocker, Age 14',
      quote: 'I learnt how to be confident and strong. The coaches here are the best!',
      image: '👧'
    },
    {
      name: 'Prime Time MMA',
      quote: 'These guys are amazing! Too many people to mention but they all deserve recognition.',
      image: '🏆'
    },
    {
      name: 'Rashad',
      quote: 'Alan is the best instructor! His teaching style is perfect for all skill levels.',
      image: '👨‍🦱'
    },
    {
      name: 'Hassan',
      quote: 'Through Invincible I have reached levels I never thought possible. Thank you team!',
      image: '👨‍🦱'
    },
    {
      name: 'Diana Lotorto',
      quote: 'The positive influence they shower on everyone is incredible. Life-changing experience.',
      image: '👩‍🦰'
    },
    {
      name: 'Szymon (Online Member)',
      quote: 'It was better than my expectations. The online program is comprehensive and effective.',
      image: '👨‍🦱'
    }
  ];

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            CLICK ON THEIR PHOTOS TO READ THEIR STORIES!
          </p>
        </div>

        {/* Story Display */}
        <div className="max-w-5xl mx-auto">
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
              <h3 className="text-2xl font-black text-gray-900 mb-4">
                {stories[currentIndex].name}
              </h3>
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
        <div className="mt-20">
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
      </div>
    </section>
  );
}
