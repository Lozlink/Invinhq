'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { 
  UserGroupIcon, 
  DocumentTextIcon, 
  ChartBarIcon,
  CogIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon,
  EyeIcon
} from '@heroicons/react/24/outline';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  published: boolean;
  created_at: string;
  author: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  joined: string;
}

export default function AdminPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [showBlogModal, setShowBlogModal] = useState(false);
  const [blogForm, setBlogForm] = useState({
    title: '',
    excerpt: '',
    content: '',
    published: false
  });

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    } else if (user && user.role !== 'admin') {
      router.push('/dashboard');
    }
  }, [user, isLoading, router]);

  useEffect(() => {
    if (user?.role === 'admin') {
      // Mock data - in real app this would come from API
      setBlogPosts([
        {
          id: '1',
          title: 'The Science Behind Martial Arts Training',
          excerpt: 'Discover how modern science validates traditional martial arts techniques...',
          published: true,
          created_at: '2024-01-15',
          author: 'Alan La'
        },
        {
          id: '2',
          title: 'Building Mental Resilience Through Physical Training',
          excerpt: 'How physical challenges strengthen your mental fortitude...',
          published: true,
          created_at: '2024-01-10',
          author: 'Alan La'
        },
        {
          id: '3',
          title: 'Flexibility Training for Martial Artists',
          excerpt: 'Essential stretching routines to improve your martial arts performance...',
          published: false,
          created_at: '2024-01-05',
          author: 'Alan La'
        }
      ]);

      setUsers([
        {
          id: '1',
          name: 'John Smith',
          email: 'john@example.com',
          role: 'parent',
          status: 'active',
          joined: '2024-01-01'
        },
        {
          id: '2',
          name: 'Sarah Johnson',
          email: 'sarah@example.com',
          role: 'staff',
          status: 'active',
          joined: '2024-01-02'
        },
        {
          id: '3',
          name: 'Mike Davis',
          email: 'mike@example.com',
          role: 'parent',
          status: 'paused',
          joined: '2024-01-03'
        }
      ]);
    }
  }, [user]);

  const handleBlogSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost: BlogPost = {
      id: Date.now().toString(),
      title: blogForm.title,
      excerpt: blogForm.excerpt,
      published: blogForm.published,
      created_at: new Date().toISOString().split('T')[0],
      author: 'Alan La'
    };
    setBlogPosts(prev => [...prev, newPost]);
    setShowBlogModal(false);
    setBlogForm({ title: '', excerpt: '', content: '', published: false });
  };

  const toggleBlogPublish = (id: string) => {
    setBlogPosts(prev => prev.map(post => 
      post.id === id ? { ...post, published: !post.published } : post
    ));
  };

  const deleteBlogPost = (id: string) => {
    setBlogPosts(prev => prev.filter(post => post.id !== id));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user || user.role !== 'admin') {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container-max">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Admin Dashboard
              </h1>
              <p className="text-gray-600">
                Manage your Invincible Worldwide system
              </p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => setShowBlogModal(true)}
                className="btn-primary flex items-center"
              >
                <PlusIcon className="w-5 h-5 mr-2" />
                New Blog Post
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 bg-red-50 rounded-xl">
              <div className="flex items-center">
                <UserGroupIcon className="w-8 h-8 text-red-600 mr-3" />
                <div>
                  <div className="text-2xl font-bold text-red-600">1,247</div>
                  <div className="text-sm text-red-700">Total Members</div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-green-50 rounded-xl">
              <div className="flex items-center">
                <DocumentTextIcon className="w-8 h-8 text-green-600 mr-3" />
                <div>
                  <div className="text-2xl font-bold text-green-600">23</div>
                  <div className="text-sm text-green-700">Blog Posts</div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl">
              <div className="flex items-center">
                <ChartBarIcon className="w-8 h-8 text-blue-600 mr-3" />
                <div>
                  <div className="text-2xl font-bold text-blue-600">$45.2K</div>
                  <div className="text-sm text-blue-700">Monthly Revenue</div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-purple-50 rounded-xl">
              <div className="flex items-center">
                <CogIcon className="w-8 h-8 text-purple-600 mr-3" />
                <div>
                  <div className="text-2xl font-bold text-purple-600">89%</div>
                  <div className="text-sm text-purple-700">Retention Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-8">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'overview'
                    ? 'border-red-500 text-red-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('blog')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'blog'
                    ? 'border-red-500 text-red-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Blog Management
              </button>
              <button
                onClick={() => setActiveTab('users')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'users'
                    ? 'border-red-500 text-red-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                User Management
              </button>
            </nav>
          </div>

          <div className="p-8">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">System Overview</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">New member registration</span>
                        <span className="text-xs text-gray-400">2 min ago</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">Blog post published</span>
                        <span className="text-xs text-gray-400">1 hour ago</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">Payment received</span>
                        <span className="text-xs text-gray-400">3 hours ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      <button className="w-full text-left p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors duration-200">
                        <div className="font-medium text-gray-900">Send Newsletter</div>
                        <div className="text-sm text-gray-600">Email all members</div>
                      </button>
                      <button className="w-full text-left p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors duration-200">
                        <div className="font-medium text-gray-900">Generate Report</div>
                        <div className="text-sm text-gray-600">Monthly performance</div>
                      </button>
                      <button className="w-full text-left p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors duration-200">
                        <div className="font-medium text-gray-900">Backup System</div>
                        <div className="text-sm text-gray-600">Create backup</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Blog Management Tab */}
            {activeTab === 'blog' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Blog Management</h2>
                  <button
                    onClick={() => setShowBlogModal(true)}
                    className="btn-primary flex items-center"
                  >
                    <PlusIcon className="w-5 h-5 mr-2" />
                    New Post
                  </button>
                </div>
                <div className="space-y-4">
                  {blogPosts.map((post) => (
                    <div key={post.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{post.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{post.excerpt}</p>
                        <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                          <span>By {post.author}</span>
                          <span>{post.created_at}</span>
                          <span className={`px-2 py-1 rounded-full ${
                            post.published 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {post.published ? 'Published' : 'Draft'}
                          </span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
                          <EyeIcon className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-green-600 transition-colors duration-200">
                          <PencilIcon className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={() => toggleBlogPublish(post.id)}
                          className={`p-2 transition-colors duration-200 ${
                            post.published 
                              ? 'text-yellow-600 hover:text-yellow-700' 
                              : 'text-green-600 hover:text-green-700'
                          }`}
                        >
                          {post.published ? 'Unpublish' : 'Publish'}
                        </button>
                        <button 
                          onClick={() => deleteBlogPost(post.id)}
                          className="p-2 text-gray-600 hover:text-red-600 transition-colors duration-200"
                        >
                          <TrashIcon className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* User Management Tab */}
            {activeTab === 'users' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">User Management</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          User
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Role
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Joined
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {users.map((user) => (
                        <tr key={user.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-gray-900">{user.name}</div>
                              <div className="text-sm text-gray-500">{user.email}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                              {user.role}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              user.status === 'active' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {user.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {user.joined}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className="text-red-600 hover:text-red-900 mr-3">Edit</button>
                            <button className="text-red-600 hover:text-red-900">Delete</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Blog Post Modal */}
      {showBlogModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Create New Blog Post</h3>
            <form onSubmit={handleBlogSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  required
                  value={blogForm.title}
                  onChange={(e) => setBlogForm(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Enter blog post title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Excerpt
                </label>
                <textarea
                  required
                  value={blogForm.excerpt}
                  onChange={(e) => setBlogForm(prev => ({ ...prev, excerpt: e.target.value }))}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Enter a brief excerpt"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content
                </label>
                <textarea
                  required
                  value={blogForm.content}
                  onChange={(e) => setBlogForm(prev => ({ ...prev, content: e.target.value }))}
                  rows={8}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Enter the full blog post content"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="published"
                  checked={blogForm.published}
                  onChange={(e) => setBlogForm(prev => ({ ...prev, published: e.target.checked }))}
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                />
                <label htmlFor="published" className="ml-2 block text-sm text-gray-900">
                  Publish immediately
                </label>
              </div>
              <div className="flex space-x-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-200"
                >
                  Create Post
                </button>
                <button
                  type="button"
                  onClick={() => setShowBlogModal(false)}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors duration-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
