# Invincible Worldwide - Next.js Clone

A complete Next.js 15 SPA that replicates the [Invincible Worldwide website](https://invincibleworldwide.com/) with enhanced functionality including role-based authentication, admin panels, and booking systems.

## ✨ Features

### 🎨 **Exact Visual Replication**
- **Hero Section**: Full-screen hero with background image and gradient overlays
- **Features Section**: Highlighting key benefits with animated icons
- **About Section**: Mission statement with background image and play button
- **Programs Section**: Three main programs with background image
- **Success Stories**: Interactive student testimonials carousel
- **Stats Section**: Key statistics with social media integration
- **CTA Footer**: Free challenge offer with gradient background

### 🔐 **Role-Based Authentication System**
- **Guest**: Public access to website content
- **Parent**: Manage account billing, pause subscriptions, view children's progress
- **Staff**: Track enrolled members, manage classes, view attendance
- **Admin**: Full access to blog management, user management, and analytics

### 📱 **Responsive Design**
- Mobile-first approach
- Tailwind CSS 4 with custom design system
- Smooth animations and transitions
- Professional typography and spacing

### 🚀 **Enhanced Functionality**
- **Blog System**: Admin-only content management
- **Appointment Booking**: Class scheduling and payment processing
- **Dashboard**: Role-specific user interfaces
- **Mock Authentication**: Visual demonstration with hidden Supabase integration

## 🎯 **Demo Login Credentials**

Use these emails to test different user roles:

| Email | Role | Access Level |
|-------|------|--------------|
| `admin@demo.com` | Admin | Full system access, blog management, user management |
| `staff@demo.com` | Staff | Member tracking, class management, limited admin |
| `parent@demo.com` | Parent | Subscription management, billing, children's progress |
| Any other email | Guest | Public website access only |

**Password**: `demo123` (any password works for demo)

## 🛠️ **Tech Stack**

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4 with custom design system
- **Icons**: Heroicons
- **Authentication**: Mock system with Supabase backend ready
- **State Management**: React Context API
- **Deployment**: Vercel-ready

## 🚀 **Getting Started**

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd invinhq
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 **Project Structure**

```
src/
├── app/                    # Next.js 15 app directory
│   ├── admin/             # Admin panel pages
│   ├── blog/              # Blog system
│   ├── dashboard/         # User dashboard
│   ├── login/             # Authentication page
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── HeroSection.tsx    # Main hero section
│   ├── FeaturesSection.tsx # Key features
│   ├── AboutSection.tsx   # About section
│   ├── ProgramsSection.tsx # Training programs
│   ├── SuccessStoriesSection.tsx # Student testimonials
│   ├── StatsSection.tsx   # Statistics display
│   └── CTAFooter.tsx      # Call-to-action footer
├── contexts/              # React contexts
│   └── AuthContext.tsx    # Authentication context
└── lib/                   # Utility libraries
    └── supabase.ts        # Supabase client (hidden integration)
```

## 🎨 **Design System**

### **Color Palette**
- **Primary**: Red gradient (`#dc2626` to `#ea580c`)
- **Secondary**: Gray scale (`#111827` to `#f9fafb`)
- **Accent**: Blue, Green, Yellow, Purple, Pink, Orange variants

### **Typography**
- **Headings**: Inter font, extra bold (900 weight)
- **Body**: Inter font, regular weight
- **Buttons**: Bold weight with rounded-full design

### **Components**
- **Buttons**: Gradient backgrounds with hover effects
- **Cards**: Rounded corners with shadows and backdrop blur
- **Sections**: Full-width with proper spacing and overlays

## 🔧 **Customization**

### **Adding New Sections**
1. Create component in `src/components/`
2. Import and add to `src/app/page.tsx`
3. Follow existing design patterns

### **Modifying Colors**
Update CSS custom properties in `src/app/globals.css` under `@theme`

### **Adding New Roles**
1. Update `AuthContext.tsx` user types
2. Add role-specific logic in dashboard
3. Update header navigation

## 🚀 **Deployment**

### **Vercel (Recommended)**
1. Connect GitHub repository
2. Deploy automatically on push
3. Environment variables handled automatically

### **Other Platforms**
1. Build: `npm run build`
2. Start: `npm start`
3. Set environment variables as needed

## 📱 **Mobile Optimization**

- Responsive grid layouts
- Touch-friendly navigation
- Optimized images and backgrounds
- Mobile-first component design

## 🔒 **Security Features**

- Role-based access control
- Protected admin routes
- Secure authentication flow
- Input validation and sanitization

## 🤝 **Contributing**

1. Fork the repository
2. Create feature branch
3. Follow existing code style
4. Test thoroughly
5. Submit pull request

## 📄 **License**

This project is for educational and demonstration purposes. The design and branding belong to Invincible Worldwide.

## 🆘 **Support**

For issues or questions:
1. Check existing issues
2. Create new issue with details
3. Include browser and device information

---

**Built with ❤️ using Next.js 15 and Tailwind CSS 4**
