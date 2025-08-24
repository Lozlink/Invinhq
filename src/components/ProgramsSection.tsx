import Link from 'next/link';
import { 
  UserGroupIcon, 
  GlobeAltIcon, 
  BuildingOfficeIcon,
  StarIcon 
} from '@heroicons/react/24/outline';

export default function ProgramsSection() {
  const programs = [
    {
      icon: UserGroupIcon,
      title: 'Train Online',
      description: 'Train with the most empowering and supportive crew you will ever find.',
      cta: 'See Course',
      href: '/online',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: BuildingOfficeIcon,
      title: 'INVINCIBLE HQ',
      description: 'Train with the most empowering and supportive crew you will ever find.',
      cta: 'See Training Programs',
      href: '/train',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: GlobeAltIcon,
      title: 'INVINCIBLE LICENSING',
      description: 'Introduce Invincible Worldwide to your facility and change the game for good.',
      cta: 'Learn More',
      href: '/more/licensing',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: 'url(/images/programs-bg.jpg)' }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="container-max relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            WHICH INVINCIBLE PROGRAM IS RIGHT FOR YOU?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Take our discovery quiz to find out which program best suits your goals and fitness level.
          </p>
          <Link href="/quiz" className="inline-block border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white font-bold text-xl py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
            Take the FREE Quiz
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {programs.map((program, index) => (
            <div key={index} className="bg-white bg-opacity-95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className={`h-3 bg-gradient-to-r ${program.color}`}></div>
              <div className="p-10">
                <div className={`w-20 h-20 bg-gradient-to-r ${program.color} rounded-full flex items-center justify-center mb-8 shadow-lg`}>
                  <program.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-6">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  {program.description}
                </p>
                <Link 
                  href={program.href}
                  className={`inline-block bg-gradient-to-r ${program.color} text-white font-bold py-4 px-8 rounded-full hover:opacity-90 transition-opacity duration-200 shadow-lg`}
                >
                  {program.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Unlock Potential Section */}
        <div className="text-center">
          <div className="inline-block p-4 bg-gradient-to-r from-red-100 to-orange-100 rounded-full mb-8 shadow-lg bg-opacity-90 backdrop-blur-sm">
            <StarIcon className="w-10 h-10 text-red-600" />
          </div>
          <h3 className="text-3xl font-black text-white mb-6">
            Unlock your inner potential
          </h3>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
            Our programs are designed to help you discover your true capabilities and push beyond what you thought was possible.
          </p>
          <Link href="/login" className="inline-block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-xl py-5 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl">
            Start Your Journey
          </Link>
        </div>
      </div>
    </section>
  );
}
