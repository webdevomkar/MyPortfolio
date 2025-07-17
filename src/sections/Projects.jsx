// src/sections/Projects.jsx
import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFilter } from 'react-icons/fa';
import senana from '../assets/sman.jpg';
import apd from '../assets/apdr.jpg';
import bt from '../assets/brain tumor.jpeg';
import tkfy from '../assets/thin.png';
import miranda from '../assets/mico.png';
import blogimg from '../assets/bg.png';
import portfolio from '../assets/pfbg.png';
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'Crisis Avengers',
      description:
        'Disaster Relief Coordination Platform – A web-based system enabling disaster agencies and NGOs to coordinate via a secure central database, map-based resource tracking, and real-time communication. Features include resource requests, SOS alerts, and instant chat, ensuring swift and organized disaster response.',
      tech: [
        'React',
        'NodeJs',
        'Tailwind CSS',
        'Framer Motion',
        'MongoDB Atlas',
        'AES',
        'NGINX'
      ],
      github:
        'https://github.com/webdevomkar/-Calamity-Response-Coordination-Hub-',
      demo: '#',
      image: apd,
      category: ['fullstack', 'backend'],
      featured: true
    },
    {
      title: 'Thinkify ',
      description:
        'Thinkify is a dynamic platform where people connect to share knowledge and insights. It fosters engaging conversations and diverse idea exchanges across various interests.',
      tech: ['React', 'NodeJs', 'Tailwind CSS', 'GSAP', 'MongoDB', 'ExpressJS'],
      github: 'https://github.com/webdevomkar/Thought-Share',
      demo: '#',
      image: tkfy,
      category: ['fullstack', 'backend'],
      featured: true
    },
    {
      title: 'TrendyBlogs',
      description:
        'Created a blogging site where users can publish and read blogs, powered by a React frontend and Node.js backend. Requests flow through NGINX load balancing to fetch posts from MongoDB, ensuring smooth and scalable performance.',
      tech: [
        'React',
        'NodeJs',
        'Tailwind CSS',
        'Framer Motion',
        'MongoDB Atlas',
        'ExpressJS',
        'ThreeJS',
        'LocomotiveJS'
      ],
      github: 'https://github.com/webdevomkar/TrendyBlogs',
      demo: '#',
      image: blogimg,
      category: ['fullstack', 'backend'],
      featured: true
    },
    {
      title: 'Miranda Co.',
      description:
        'Disaster Relief Coordination Platform – A web-based system enabling disaster agencies and NGOs to coordinate via a secure central database, map-based resource tracking, and real-time communication. Features include resource requests, SOS alerts, and instant chat, ensuring swift and organized disaster response.',
      tech: ['React', 'NodeJs', 'Tailwind CSS', 'Framer Motion', 'MongoDB Atlas', 'AES'],
      github:
        'https://github.com/webdevomkar/Animated-websites/tree/main/Miranda%20sarthak',
      demo: '#',
      image: miranda,
      category: 'frontend',
      featured: false
    },
    {
      title: 'Brain Tumor Detection',
      description:
        'Full-stack e-commerce solution with advanced features including cart management, product filtering, user authentication, payment integration, and admin dashboard.',
      tech: [
        'Pyhton',
        'HTML',
        'CSS',
        'JS',
        'SQL',
        'Keras',
        'Jupyter Notebook',
        'OpenCV'
      ],
      github: 'https://github.com/webdevomkar/BrainTumorDetection',
      demo: '#',
      image: bt,
      category: 'ai-ml',
      featured: true
    },
    {
      title: 'Sentiment Analysis',
      description:
        'Sentiment analysis is a natural language processing technique used to detect emotions or opinions expressed in text. It classifies content as positive, negative, or neutral, helping businesses and researchers understand public sentiment.',
      tech: [
        'Django',
        'SQLite',
        'Bootstrap',
        'Chart.js',
        'Python',
        'NLTK',
        'Tensorflow',
        'keras'
      ],
      github: '#',
      demo: '#',
      image: senana,
      category: 'ai-ml',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description:
        'Modern, responsive portfolio website built with React and Three.js. Features 3D animations, interactive elements, and professional design.',
      tech: [
        'React + Vite',
        'Three.js',
        'Tailwind CSS',
        'Framer Motion',
        'Blender',
        'Canvas',
        'Figma'
      ],
      github: 'https://github.com/webdevomkar/MyPortfolio',
      demo: '',
      image: portfolio,
      category: 'frontend',
      featured: false
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'featured', label: 'Featured' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'ai-ml', label: 'AI/ML' }
  ];

  // ✅ Updated filtering logic to handle arrays
  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return Array.isArray(project.category)
      ? project.category.includes(activeFilter)
      : project.category === activeFilter;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section
      id="projects"
      className="min-h-screen w-full bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] text-white px-4 sm:px-6 lg:px-20 py-16 sm:py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-32 h-32 sm:w-64 sm:h-64 bg-[#00d4aa] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-32 h-32 sm:w-64 sm:h-64 bg-[#00b894] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-[#00d4aa] to-white bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Explore my latest work and creative solutions. Each project represents a unique challenge 
            and showcases different aspects of modern web development.
          </p>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-[#00d4aa] to-[#00b894] mx-auto rounded-full"></div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4">
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 border-2 text-xs sm:text-sm ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-[#00d4aa] to-[#00b894] text-white border-[#00d4aa] shadow-lg'
                  : 'bg-white/5 text-gray-300 border-white/20 hover:bg-white/10 hover:border-white/30'
              }`}
            >
              <div className="flex items-center gap-1.5">
                {activeFilter === filter.id && <FaFilter size={10} className="sm:w-2 sm:h-2" />}
                <span className="hidden sm:inline">{filter.label}</span>
                <span className="sm:hidden">{filter.label.split(' ')[0]}</span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 sm:py-16 px-4"
          >
            <div className="text-4xl sm:text-6xl mb-4">🔍</div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">No projects found</h3>
            <p className="text-gray-400 text-sm sm:text-base">Try selecting a different filter to see more projects.</p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Projects;
