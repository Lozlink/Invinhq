'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'guest' | 'parent' | 'staff' | 'admin';
  subscription?: {
    status: 'active' | 'paused' | 'cancelled';
    nextBilling: string;
    plan: string;
  };
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    try {
      // Mock authentication based on email
      let userData: User;
      
      if (email.includes('admin')) {
        userData = {
          id: '1',
          email,
          name: 'Admin User',
          role: 'admin'
        };
      } else if (email.includes('staff')) {
        userData = {
          id: '2',
          email,
          name: 'Staff Member',
          role: 'staff'
        };
      } else if (email.includes('parent')) {
        userData = {
          id: '3',
          email,
          name: 'Parent User',
          role: 'parent',
          subscription: {
            status: 'active',
            nextBilling: '2024-02-01',
            plan: 'Premium Family Plan'
          }
        };
      } else {
        // Default to parent role for any other email
        userData = {
          id: '4',
          email,
          name: 'Demo User',
          role: 'parent',
          subscription: {
            status: 'active',
            nextBilling: '2024-02-01',
            plan: 'Basic Plan'
          }
        };
      }
      
      setUser(userData);
      
      // Store in localStorage for persistence
      localStorage.setItem('invincible_user', JSON.stringify(userData));
      
    } catch (error) {
      console.error('Login error:', error);
      throw new Error('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('invincible_user');
  };

  // Check for existing user on mount
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('invincible_user');
      if (savedUser) {
        try {
          setUser(JSON.parse(savedUser));
        } catch (error) {
          console.error('Error parsing saved user:', error);
          localStorage.removeItem('invincible_user');
        }
      }
    } catch (error) {
      console.error('Error in auth check:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
