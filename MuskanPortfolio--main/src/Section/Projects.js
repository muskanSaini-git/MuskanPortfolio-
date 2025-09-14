import React from "react";

const Projects = () => {
  const projectList = [
    {
      title: "HRMS (Human Resource Management System)",
      description:
        "Comprehensive HRMS web application with employee management, leave tracking, and payroll integration. Built with React and Ant Design. Features role-based access control, automated notifications, and comprehensive reporting.",
      icon: "🌐",
    },
    {
      title: "SRM_Saathi (Supplier Relationship Management)",
      description:
        "SRM modules for supplier onboarding and contract management. Enhanced UI/UX with React and Redux components. Includes real-time dashboard for supplier performance tracking and automated contract renewal notifications.",
      icon: "🔍",
    },
    {
      title: "Articles Master",
      description:
        "Currently working on a modular system for managing articles with multi-level approval workflows and an intuitive admin panel. Implementing frontend features for creation, review, and approval processes, ensuring secure role-based access and smooth user experience. Developed rich text editor integration, version control system for articles, and automated workflow notifications.",
      icon: "⚛️",
    },
    {
      title: "EP LIVE",
      description:
        "Android app for live event management with real-time updates and user-friendly navigation. Enables users to start broadcasting and engage with expanding fanbase. Ideal for live performances and product launches.",
      icon: "",
      link: "https://play.google.com/store/apps/details?id=com.expert.eplive",
    },
    {
      title: "Wave of Food",
      description:
        "Web and mobile application for food ordering with order tracking and inventory management. Designed to enhance food ordering experience with intuitive interfaces and real-time updates for seamless communication.",
      icon: "🍽️",
    },
    {
      title: "KB Cafe",
      description:
        "Responsive website for café with menu displays, online reservations, and customer reviews. Crafted with React, Bootstrap, and Tailwind CSS delivering modern and delightful user experience for café enthusiasts.",
      icon: "⚛️",
      link: "https://www.kbcafe.online/",
    },
    {
      title: "Clue Finder",
      description:
        "Investigative website for detective agency with tools for pre and post-matrimonial investigations. Services include background checks, surveillance, and undercover operations with advanced investigative tools.",
      icon: "🔍",
      link: "https://cluefinder.in/",
    },
    {
      title: "KB Software Solutions",
      description:
        "Official website showcasing software products and services for businesses in the digital world. Offers custom software development, IT consulting, and system integration services for organizational success.",
      icon: "🌐",
      link: "https://kbsoftwaresolutions.com/",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gradient-to-r from-purple-600 via-blue-500 to-pink-600 text-white py-16"
    >
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Heading */}
        <div className="flex justify-center items-center mb-12">
          <span className="w-24 h-[2px] bg-gray-300"></span>
          <span className="bg-gray-900 text-white py-2 px-5 text-xl rounded-md mx-3">
            Projects
          </span>
          <span className="w-24 h-[2px] bg-gray-300"></span>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-4xl">{project.icon}</span>
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                  aria-label={`Learn more about ${project.title}`}
                >
                  Learn More
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
