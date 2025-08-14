import React, { useState } from 'react';
import { Heart, MessageCircle, Share, Bookmark, ArrowLeft, ExternalLink, Calendar, Eye } from 'lucide-react';

const ProjectShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Luxury Awaits",
      subtitle: "Premium Hotel Experience",
      description: "A sophisticated hotel booking platform that combines luxury with modern design. Features seamless booking flow, immersive room previews, and personalized recommendations for the ultimate hospitality experience.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
      gradient: "from-emerald-400 to-teal-600",
      category: "Web Design",
      date: "Dec 2024",
      views: "2.1k",
      likes: "156",
      tags: ["UI/UX", "Hospitality", "Booking"],
      details: {
        client: "Luxury Hotels Group",
        duration: "3 months",
        role: "Lead Designer",
        tools: ["Figma", "Principle", "Sketch"]
      }
    },
    {
      id: 2,
      title: "Magic Meets Comfort",
      subtitle: "Interior Design Showcase",
      description: "An elegant interior design portfolio showcasing modern comfort with magical touches. Clean layouts meet warm aesthetics in this comprehensive design system for luxury living spaces.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      gradient: "from-slate-400 to-slate-600",
      category: "Interior Design",
      date: "Nov 2024",
      views: "3.7k",
      likes: "289",
      tags: ["Interior", "Luxury", "Portfolio"],
      details: {
        client: "Modern Living Co.",
        duration: "2 months",
        role: "Creative Director",
        tools: ["3ds Max", "V-Ray", "Photoshop"]
      }
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      subtitle: "Data Visualization Platform",
      description: "A comprehensive analytics platform that helps businesses shape their future through intelligent data insights. Features real-time monitoring, predictive analytics, and intuitive visualizations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      gradient: "from-blue-400 to-purple-600",
      category: "Dashboard",
      date: "Jan 2025",
      views: "4.2k",
      likes: "321",
      tags: ["Analytics", "SaaS", "B2B"],
      details: {
        client: "TechCorp Analytics",
        duration: "4 months",
        role: "Product Designer",
        tools: ["Figma", "D3.js", "React"]
      }
    },
    {
      id: 4,
      title: "Mobile Banking",
      subtitle: "Financial App Design",
      description: "A secure and intuitive mobile banking application with focus on user experience and financial management. Features biometric authentication, spending insights, and seamless transactions.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      gradient: "from-indigo-400 to-blue-600",
      category: "Mobile App",
      date: "Oct 2024",
      views: "5.1k",
      likes: "412",
      tags: ["Fintech", "Mobile", "Security"],
      details: {
        client: "NextGen Bank",
        duration: "5 months",
        role: "UX Designer",
        tools: ["Sketch", "Principle", "Zeplin"]
      }
    },
    {
      id: 5,
      title: "E-commerce Platform",
      subtitle: "Shopping Experience",
      description: "A modern e-commerce platform designed for seamless shopping experiences. Features advanced filtering, personalized recommendations, and smooth checkout process.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      gradient: "from-pink-400 to-rose-600",
      category: "E-commerce",
      date: "Sep 2024",
      views: "6.3k",
      likes: "534",
      tags: ["Retail", "UX", "Conversion"],
      details: {
        client: "Fashion Forward",
        duration: "6 months",
        role: "Senior Designer",
        tools: ["Figma", "Framer", "Lottie"]
      }
    },
    {
      id: 6,
      title: "Dark Mode Dashboard",
      subtitle: "Admin Interface",
      description: "A sleek dark mode dashboard for administrative tasks with advanced search functionality. Focused on reducing eye strain while maintaining high productivity levels.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
      gradient: "from-gray-700 to-gray-900",
      category: "Admin Panel",
      date: "Aug 2024",
      views: "2.8k",
      likes: "198",
      tags: ["Dark UI", "Admin", "Productivity"],
      details: {
        client: "Enterprise Solutions",
        duration: "2 months",
        role: "UI Designer",
        tools: ["Adobe XD", "After Effects", "Illustrator"]
      }
    }
  ];

  const ProjectCard = ({ project, onClick }) => (
    <div 
      onClick={() => onClick(project)}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-gray-200"
    >
      <div className="relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-70 transition-opacity duration-300`} />
        <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
          <h3 className="font-bold text-xl mb-1">{project.title}</h3>
          <p className="text-sm opacity-90 mb-3">{project.subtitle}</p>
          <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium w-fit hover:bg-white/30 transition-colors">
            View Details
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
          <span className="bg-gray-100 px-2 py-1 rounded-md">{project.category}</span>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{project.views}</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              <span>{project.likes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ProjectDetail = ({ project, onBack }) => (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-100">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Projects</span>
        </button>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Heart className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Share className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Bookmark className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* Hero Image */}
        <div className="relative mb-8 rounded-2xl overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-80 object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`} />
          <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
            <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
            <p className="text-xl opacity-90">{project.subtitle}</p>
          </div>
        </div>

        {/* Project Info */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Client</h3>
              <p className="text-gray-900">{project.details.client}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Duration</h3>
              <p className="text-gray-900">{project.details.duration}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Role</h3>
              <p className="text-gray-900">{project.details.role}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {project.details.tools.map((tool, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
          <p className="text-gray-700 leading-relaxed text-lg">{project.description}</p>
        </div>

        {/* Tags */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-50 p-6 rounded-xl text-center">
            <div className="text-2xl font-bold text-gray-900 mb-1">{project.views}</div>
            <div className="text-sm text-gray-600">Views</div>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl text-center">
            <div className="text-2xl font-bold text-gray-900 mb-1">{project.likes}</div>
            <div className="text-sm text-gray-600">Likes</div>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl text-center">
            <div className="text-2xl font-bold text-gray-900 mb-1">12</div>
            <div className="text-sm text-gray-600">Comments</div>
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl font-medium transition-colors flex items-center justify-center gap-2">
          <ExternalLink className="w-5 h-5" />
          View Live Project
        </button>
      </div>
    </div>
  );

  return (
    <div className="h-screen bg-gray-50 flex">
      {/* Left Panel - Project Details */}
      <div className="w-1/2 bg-white border-r border-gray-200">
        {selectedProject ? (
          <ProjectDetail 
            project={selectedProject} 
            onBack={() => setSelectedProject(null)}
          />
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-center p-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <Bookmark className="w-12 h-12 text-gray-400" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Select a Project</h2>
            <p className="text-gray-600 max-w-md">
              Choose a project from the grid on the right to view detailed information, 
              project overview, and implementation details.
            </p>
          </div>
        )}
      </div>

      {/* Right Panel - Project Grid */}
      <div className="w-1/2">
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
                <p className="text-gray-600">Discover our latest work</p>
              </div>
              <div className="text-sm text-gray-500">
                {projects.length} projects
              </div>
            </div>
          </div>

          {/* Project Grid */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={setSelectedProject}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;