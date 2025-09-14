import React from "react";

const ExperienceItem = ({ title, company, duration, tasks }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      {/* Title and Company Info */}
      <h3 className="text-2xl font-semibold text-pink-400 mb-2">{title}</h3>
      <p className="text-gray-300 font-medium">{company}</p>
      <p className="text-gray-500">{duration}</p>

      {/* Tasks */}
      <h4 className="text-xl font-semibold text-white mt-4">Tasks</h4>
      <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Technolobby Private Limited",
      duration: "Jul 2025 - Present",
      location: "Gurugram, Haryana, India",
      tasks: [
        "Building responsive web interfaces using React.js, JavaScript, HTML5, and Tailwind CSS",
        "Collaborating with backend and design teams to enhance user experience",
        "Working on client projects including V2 Retail e-commerce platform",
        "Developing scalable components and implementing state management solutions",
        "Optimizing application performance and ensuring cross-browser compatibility",
        "Working on HRMS, SRM_Saathi, and Articles Master projects",
      ],
    },
    {
      title: "Software Developer as a freelance",
      company: "KHARIDO BEFIKER",
      duration: "Zirakpur, Punjab",
      tasks: [
        "Developed high-performance website using ReactJS.",
        "Created user-friendly interfaces with frameworks like Bootstrap and Tailwind CSS.",
        "Optimized software performance and resolved bugs for seamless user experiences.",
        "Transformed UI/UX designs into responsive, cross-browser-compatible websites.",
        "Conducted regular code reviews and debugging sessions to maintain code quality.",
      ],
    },
    {
      title: "Android Developer Intern",
      company: "OMNINOS TECHNOLOG INTERNATIONAL Pvt Ltd.",
      duration: "2022 - 2023",
      tasks: [
        "Managed IT hardware and software for teams working on production projects.",
        "Built responsive UI/UX and collaborated with clients on specifications.",
        "Integrated RESTful APIs for seamless app-backend interactions.",
        "Conducted testing and debugging to ensure high performance and reliability of mobile applications.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="bg-gradient-to-r from-purple-600 via-blue-500 to-pink-600 text-white py-16"
    >
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Header */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center">
            <span className="w-24 h-[2px] bg-gray-300"></span>
            <span className="bg-gray-900 w-fit text-white p-2 px-5 text-xl rounded-md mx-3">
              Experience
            </span>
            <span className="w-24 h-[2px] bg-gray-300"></span>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <div key={index} className="w-full max-w-md mx-auto">
              <ExperienceItem
                title={experience.title}
                company={experience.company}
                duration={experience.duration}
                tasks={experience.tasks}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
