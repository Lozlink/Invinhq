import { 
  UserGroupIcon, 
  BeakerIcon, 
  TrophyIcon, 
  StarIcon 
} from '@heroicons/react/24/outline';

export default function FeaturesSection() {
  const features = [
    {
      icon: UserGroupIcon,
      title: 'BEGINNER FRIENDLY',
      description: 'Perfect for all skill levels, from complete beginners to advanced athletes.'
    },
    {
      icon: BeakerIcon,
      title: 'SCIENCE-BASED PROGRAMMING',
      description: 'Our training methods are backed by the latest sports science and research.'
    },
    {
      icon: TrophyIcon,
      title: '12,000+ HAPPY STUDENTS',
      description: 'Join thousands of satisfied students who have transformed their lives with us.'
    },
    {
      icon: StarIcon,
      title: 'AWARD-WINNING SERVICE',
      description: 'Recognized for excellence in martial arts training and fitness instruction.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-max">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Why Choose Invincible Worldwide?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine traditional martial arts wisdom with modern training techniques to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-300 shadow-xl">
                <feature.icon className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-4 uppercase tracking-wide">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Featured In Section */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-12">
            Invincible Worldwide Has Been Featured In:
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-16 opacity-70">
            <div className="w-32 h-20 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-gray-700 font-bold text-lg">TEN</span>
            </div>
            <div className="w-32 h-20 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-gray-700 font-bold text-lg">The Project</span>
            </div>
            <div className="w-32 h-20 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-gray-700 font-bold text-lg">ASB</span>
            </div>
            <div className="w-32 h-20 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-gray-700 font-bold text-lg">Media</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
