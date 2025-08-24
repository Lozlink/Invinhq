import Link from 'next/link';
import { 
  UsersIcon, 
  GlobeAltIcon, 
  ClockIcon, 
  TrophyIcon,
  StarIcon,
  AcademicCapIcon 
} from '@heroicons/react/24/outline';

export default function StatsSection() {
  const stats = [
    {
      icon: UsersIcon,
      number: '12,000+',
      label: 'Students',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: GlobeAltIcon,
      number: '25+',
      label: 'Countries Our Students Come From',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: ClockIcon,
      number: '15+',
      label: 'Years in Business',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: TrophyIcon,
      number: '50+',
      label: 'Awards Won',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: AcademicCapIcon,
      number: '50+',
      label: 'Coaches Accredited',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: StarIcon,
      number: '4.9',
      label: 'Average Rating',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white">
      <div className="container-max">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            THE IDEA. THE VISION. THE MOVEMENT.
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join thousands of people who&apos;ve already unlocked their next potential. Now it&apos;s your turn.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`w-24 h-24 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                <stat.icon className="w-12 h-12 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-black text-white mb-3">
                {stat.number}
              </div>
              <div className="text-sm text-gray-300 leading-tight font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Social Media Section */}
        <div className="text-center mb-20">
          <div className="bg-gray-800 rounded-3xl p-12 max-w-5xl mx-auto shadow-2xl">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mr-6 shadow-xl">
                <span className="text-white font-black text-2xl">I</span>
              </div>
              <div className="text-left">
                <div className="text-2xl font-black">invincible_hq</div>
                <div className="text-lg text-gray-400">Sydney&apos;s #1 Multi-Awarded Holistic Training Gym</div>
                <div className="text-lg text-gray-400">Founded by @alanlaworldwide</div>
                <div className="text-lg text-gray-400">📍1/30 Elizabeth St, Wetherill Park NSW</div>
              </div>
            </div>
            <div className="text-lg text-gray-300 font-medium">
              ⚡️ Send a DM to trial a session
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-black mb-6">
            Join the movement
          </h3>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join thousands of people who&apos;ve already unlocked their next potential. Now it&apos;s your turn. Try a class and experience the difference at Invincible HQ!
          </p>
          <Link href="/login" className="inline-block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-xl py-5 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl">
            Get A Training Pass
          </Link>
        </div>
      </div>
    </section>
  );
}
