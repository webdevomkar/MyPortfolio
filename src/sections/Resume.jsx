import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaDownload, 
  FaEye, 
  FaGraduationCap, 
  FaBriefcase, 
  FaAward, 
  FaCode 
} from 'react-icons/fa';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const experience = [
    {
      title: 'Full Stack Developer',
      company: 'Nexus Logitech',
      period: 'January-25 - June-25',
      description: 'Built responsive web interfaces using ReactJS, improving user experience and performance. Integrated RESTful APIs and optimized state management with Redux and React hooks. Enhanced application efficiency by implementing lazy loading and code splitting reducing load time by 14%. Identified and fixed UI/UX bugs, reducing production errors by 15%. ',
      skills: ['React + Vite', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript','GSAP','React Framer Motion']
    },
    {
      title: 'React Intern',
      company: 'Codsoft Technologies',
      period: 'June-24 - December-24',
      description: 'Worked as a React Developer Intern, building dynamic user interfaces with reusable components and state management. Collaborated with teams to integrate REST APIs and optimize performance. Gained hands-on experience with modern tools like Vite, React Router, and Tailwind CSS. Contributed to delivering responsive, user-friendly web applications.',
      skills: ['HTML', 'CSS', 'Javascript', 'Tailwind CSS', 'React','Framer Motion']
    }
  ];

  const education = [
    {
      degree: 'B.E. in Computer Science & Engineering (AI & ML) with Honours in Data Science',
      institution: 'University Of Mumbai',
      period: '2021 - 2025',
      description: 'Graduated with distinction and 9.04 CGPA. Specialized in software engineering and web development technologies.',
      achievements: [
        'Participant – Smart India Hackathon 2025 (Developed web-based platform designed to enhance coordination, communication, and resource sharing among disaster relief agencies and NGOs during emergencies.)',
        'Data Structures and Algorithms',
        'Computer Networks',
        'Object Oriented Programming',
        'Operating Systems'
      ]
    },
    {
      degree: 'Full Stack Web Development',
      institution: 'Udemy ',
      period: '2023 - 2024',
      description: 'Completed comprehensive courses in modern web development technologies and best practices.',
      achievements: ['MERN Stack Certification', 'React Advanced Concepts', 'Node.js Backend Development']
    },
    {
      degree: 'Modern Web Development',
      institution: 'Coursera ',
      period: '2023 - 2024',
      description: 'Completed comprehensive courses in modern web development studying animations and various effects for websites.',
      achievements: ['GSAP Certification', 'React Framer Motion', 'Scrolltrigger', 'Locomotive','ThreeJS']
    }
  ];

  // ✅ UPDATED SKILLS ARRAY WITH LEVELS
  const skills = [
    {
      category: 'Frontend',
      items: [
        { name: 'React', level: 85 },
        { name: 'GSAP', level: 90 },
        { name: 'JavaScript', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Framer Motion', level: 75 },
        { name: 'Three.js', level: 70 }
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'MongoDB', level: 90 },
        { name: 'MySQL', level: 85 }
      ]
    },
    {
      category: 'Tools & Others',
      items: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 68 },
        { name: 'AWS', level: 65 },
        { name: 'Figma', level: 90 },
        { name: 'Postman', level: 80 },
        { name: 'Github', level: 91 }
      ]
    }
  ];

  const certifications = [
    { name: 'MERN Stack Development', issuer: 'Udemy', year: '2023' },
    { name: 'Modern Web Development', issuer: 'Coursera', year: '2024' },
    { name: 'Node.js Backend Development', issuer: 'Udemy', year: '2023' },
    { name: 'MongoDB Database Design', issuer: 'MongoDB University', year: '2024' }
  ];

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
      id="resume"
      className="min-h-screen w-full bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] text-white px-6 py-20 md:px-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#00d4aa] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-[#00b894] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-[#00d4aa] to-white bg-clip-text text-transparent">
              Resume
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            My professional journey, skills, and achievements. Download my resume for a detailed overview.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d4aa] to-[#00b894] mx-auto rounded-full"></div>
        </motion.div>

        {/* Download Section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="/Resume.pdf"
                download="omkar_gaikwad_resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00d4aa] to-[#00b894] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-[#00d4aa]/20"
              >
                <FaDownload size={18} />
                Download Resume
              </motion.a>
              <motion.button
                onClick={() => window.open('/Resume.pdf', '_blank')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-transparent text-white px-8 py-4 rounded-lg font-semibold border-2 border-[#00d4aa] hover:bg-[#00d4aa]/10 transition-all duration-300"
              >
                <FaEye size={18} />
                Preview Resume
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'experience', label: 'Experience', icon: FaBriefcase },
            { id: 'education', label: 'Education', icon: FaGraduationCap },
            { id: 'skills', label: 'Skills', icon: FaCode },
            { id: 'certifications', label: 'Certifications', icon: FaAward }
          ].map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 border-2 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-[#00d4aa] to-[#00b894] text-white border-[#00d4aa] shadow-lg'
                  : 'bg-white/5 text-gray-300 border-white/20 hover:bg-white/10 hover:border-white/30'
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-[400px]"
        >
          {activeTab === 'experience' && (
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-[#00d4aa] font-medium">{exp.company}</p>
                    </div>
                    <span className="text-gray-400 text-sm md:text-base mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-[#00d4aa]/20 text-[#00d4aa] text-sm rounded-full border border-[#00d4aa]/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                      <p className="text-[#00d4aa] font-medium">{edu.institution}</p>
                    </div>
                    <span className="text-gray-400 text-sm md:text-base mt-2 md:mt-0">{edu.period}</span>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">{edu.description}</p>
                  <div className="space-y-2">
                    {edu.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#00d4aa] rounded-full"></div>
                        <span className="text-gray-300 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-4 text-center">{skillGroup.category}</h3>
                  <div className="space-y-3">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center justify-between">
                        <span className="text-gray-300">{skill.name}</span>
                        <div className="w-20 h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="h-full bg-gradient-to-r from-[#00d4aa] to-[#00b894] rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-white">{cert.name}</h3>
                    <span className="text-[#00d4aa] text-sm font-medium">{cert.year}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{cert.issuer}</p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Resume;
