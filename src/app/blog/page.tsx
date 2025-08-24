'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useState, useEffect } from 'react';
import { 
  PencilIcon, 
  EyeIcon, 
  CalendarIcon, 
  UserIcon,
  PlusIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  published: boolean;
  created_at: string;
  author: string;
}

export default function BlogPage() {
  const { user } = useAuth();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [showPostModal, setShowPostModal] = useState(false);

  useEffect(() => {
    // Mock data - in real app this would come from API
    setBlogPosts([
      {
        id: '1',
        title: 'The Science Behind Martial Arts Training',
        excerpt: 'Discover how modern science validates traditional martial arts techniques and how this knowledge can enhance your training experience.',
        content: 'Martial arts have been practiced for thousands of years, but only recently have we begun to understand the scientific principles that make them so effective. From biomechanics to neuroscience, research is revealing why these ancient practices continue to deliver results in the modern world.\n\nWhen you practice martial arts, you\'re not just learning self-defense techniques. You\'re engaging in a comprehensive physical and mental workout that affects your entire body and brain. Studies have shown that regular martial arts training can improve cardiovascular health, increase muscle strength and flexibility, and even enhance cognitive function.\n\nThe key lies in the combination of aerobic and anaerobic exercise, combined with the mental focus required to execute techniques properly. This creates a unique training stimulus that traditional gym workouts simply cannot replicate.',
        published: true,
        created_at: '2024-01-15',
        author: 'Alan La'
      },
      {
        id: '2',
        title: 'Building Mental Resilience Through Physical Training',
        excerpt: 'How physical challenges strengthen your mental fortitude and prepare you for life\'s obstacles.',
        content: 'Physical training is often viewed as a way to improve your body, but the mental benefits can be even more profound. When you push yourself through challenging workouts, you\'re not just building muscle—you\'re building mental resilience.\n\nEvery time you complete a difficult training session, you prove to yourself that you can overcome obstacles. This confidence translates into other areas of your life, whether it\'s dealing with work stress, personal challenges, or unexpected difficulties.\n\nThe key is consistency. It\'s not about having one amazing workout—it\'s about showing up day after day, even when you don\'t feel like it. This builds the mental discipline that separates successful people from those who give up when things get tough.',
        published: true,
        created_at: '2024-01-10',
        author: 'Alan La'
      },
      {
        id: '3',
        title: 'Flexibility Training for Martial Artists',
        excerpt: 'Essential stretching routines to improve your martial arts performance and prevent injuries.',
        content: 'Flexibility is often overlooked in martial arts training, but it\'s crucial for both performance and injury prevention. Many techniques require a full range of motion, and without proper flexibility, you\'ll be limited in what you can achieve.\n\nThe key to improving flexibility is consistency and proper technique. Static stretching after workouts, dynamic stretching before training, and regular mobility work can dramatically improve your range of motion over time.\n\nRemember that flexibility is individual—don\'t compare yourself to others. Focus on your own progress and celebrate small improvements. With dedication, you\'ll see significant changes in your martial arts abilities.',
        published: true,
        created_at: '2024-01-05',
        author: 'Alan La'
      }
    ]);
  }, []);

  const handleEditPost = (post: BlogPost) => {
    setSelectedPost(post);
    setShowPostModal(true);
  };

  const handleUpdatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedPost) {
      setBlogPosts(prev => prev.map(post => 
        post.id === selectedPost.id ? selectedPost : post
      ));
      setShowPostModal(false);
      setSelectedPost(null);
    }
  };

  const publishedPosts = blogPosts.filter(post => post.published);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container-max">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Invincible Blog
              </h1>
              <p className="text-gray-600">
                Insights, tips, and stories from the Invincible Worldwide community
              </p>
            </div>
            {user?.role === 'admin' && (
              <Link href="/admin" className="btn-primary flex items-center">
                <PlusIcon className="w-5 h-5 mr-2" />
                Manage Blog
              </Link>
            )}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publishedPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-xl">I</span>
                  </div>
                  <p className="text-red-600 font-medium">Invincible Worldwide</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    {new Date(post.created_at).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <UserIcon className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => {
                      setSelectedPost(post);
                      setShowPostModal(true);
                    }}
                    className="text-red-600 hover:text-red-700 font-medium transition-colors duration-200"
                  >
                    Read More
                  </button>
                  {user?.role === 'admin' && (
                    <button
                      onClick={() => handleEditPost(post)}
                      className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      <PencilIcon className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {publishedPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <DocumentTextIcon className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No blog posts yet</h3>
            <p className="text-gray-600">Check back soon for updates and insights from our team.</p>
          </div>
        )}
      </div>

      {/* Blog Post Modal */}
      {showPostModal && selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {user?.role === 'admin' ? 'Edit Blog Post' : selectedPost.title}
              </h2>
              <button
                onClick={() => {
                  setShowPostModal(false);
                  setSelectedPost(null);
                }}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <span className="text-2xl">×</span>
              </button>
            </div>

            {user?.role === 'admin' ? (
              <form onSubmit={handleUpdatePost} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    required
                    value={selectedPost.title}
                    onChange={(e) => setSelectedPost(prev => prev ? { ...prev, title: e.target.value } : null)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Excerpt
                  </label>
                  <textarea
                    required
                    value={selectedPost.excerpt}
                    onChange={(e) => setSelectedPost(prev => prev ? { ...prev, excerpt: e.target.value } : null)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Content
                  </label>
                  <textarea
                    required
                    value={selectedPost.content}
                    onChange={(e) => setSelectedPost(prev => prev ? { ...prev, content: e.target.value } : null)}
                    rows={12}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div className="flex space-x-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-200"
                  >
                    Update Post
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowPostModal(false);
                      setSelectedPost(null);
                    }}
                    className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    {new Date(selectedPost.created_at).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <UserIcon className="w-4 h-4 mr-1" />
                    {selectedPost.author}
                  </div>
                </div>
                <div className="prose max-w-none">
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {selectedPost.content}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
