import React from "react";
import {
  FaMobileAlt,
  FaUtensils,
  FaReact,
  FaSearch,
  FaGlobe,
} from "react-icons/fa";

const Projects = () => {
  const projectList = [
    {
      title: "HRMS (Human Resource Management System)",
      description:
        "Comprehensive HRMS web application enabling employee management, leave tracking, payroll integration, and performance monitoring. Developed FNF module for employee settlement processing with responsive UI using React and Ant Design. Implemented role-based access control, automated notifications, and comprehensive reporting features.",
      icon: <FaGlobe className="text-4xl text-blue-400" />,
    },
    {
      title: "SRM_Saathi (Supplier Relationship Management)",
      description:
        "SRM modules for supplier onboarding, contract management, and vendor communication. Enhanced UI/UX design with scalable React and Redux components. Developed real-time dashboard for supplier performance tracking, automated contract renewal notifications, and integrated document management system.",
      icon: <FaSearch className="text-4xl text-green-400" />,
    },
    {
      title: "Articles Master",
      description:
        "Modular system for managing articles with multi-level approval workflows and intuitive admin panel. Implemented frontend features for creation, review, and approval processes with secure role-based access. Developed rich text editor integration, version control system, and comprehensive analytics dashboard.",
      icon: <FaReact className="text-4xl text-purple-400" />,
    },
    {
      title: "EP LIVE",
      description:
        "An Android app developed using Java for seamless live event management, featuring real-time updates and user-friendly navigation. EP LIVE enables users to start broadcasting and engage with a rapidly expanding fanbase, making it ideal for live performances, product launches, and promotions.",
      icon: <FaMobileAlt className="text-4xl text-purple-400" />,
      link: "https://play.google.com/store/apps/details?id=com.expert.eplive",
    },
    {
      title: "Wave of Food",
      description:
        "A comprehensive web and mobile application facilitating user and admin interactions, including order tracking, inventory management, and seamless communication. Designed to enhance the food ordering experience with intuitive interfaces and real-time updates.",
      icon: <FaUtensils className="text-4xl text-blue-400" />,
    },
    {
      title: "KB Cafe",
      description:
        "A visually stunning and responsive website crafted with React, Bootstrap, and Tailwind CSS, delivering a modern and delightful user experience for café enthusiasts. Features include menu displays, online reservations, and customer reviews.",
      icon: <FaReact className="text-4xl text-pink-400" />,
      link: "https://www.kbcafe.online/",
    },
    {
      title: "Clue Finder",
      description:
        "A highly effective investigative website designed for Clue Finder Detective Agency, featuring advanced tools for pre- and post-matrimonial investigations. Services include background checks, surveillance, and undercover operations.",
      icon: <FaSearch className="text-4xl text-green-400" />,
      link: "https://cluefinder.in/",
    },
    {
      title: "KB Software Solutions",
      description:
        "The official website of KB Software Solutions, showcasing cutting-edge software products and services designed for businesses to excel in the digital world. Offers custom software development, IT consulting, and system integration services.",
      icon: <FaGlobe className="text-4xl text-red-400" />,
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
                {React.cloneElement(project.icon, { "aria-hidden": true })}
                <h3 className="text-2xl font-semibold">{project.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                  aria-label={`Learn more about ${project.title}`}
                >
                  Learn More
                </a>
              ) : (
                <span className="text-gray-500 italic">Coming Soon</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
