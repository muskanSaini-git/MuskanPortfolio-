import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

const Education = () => {
  return (
    <section
      id="education"
      className="bg-gradient-to-r from-purple-600 via-blue-500 to-pink-600 text-white py-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        {/* Section Header */}
        <div className="flex justify-center my-5 lg:py-8">
          <div className="flex items-center">
            <span className="w-24 h-[2px] bg-gray-800"></span>
            <span className="bg-gray-800 w-fit text-white p-2 px-5 text-xl rounded-md">
              Education
            </span>
            <span className="w-24 h-[2px] bg-gray-800"></span>
          </div>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* MCA */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <FaGraduationCap className="text-pink-400 text-3xl mr-4" />
              <h3 className="text-2xl font-semibold">
                Master of Computer Applications (MCA)
              </h3>
            </div>
            <p className="text-pink-400 font-medium">
              Ongoing | Kurukshetra University
            </p>
            <p className="mt-4 text-gray-300">
              Pursuing advanced knowledge in software development, algorithms,
              and modern web technologies. Working on practical projects to
              build scalable, efficient solutions for real-world problems.
            </p>
          </div>

          {/* BCA */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <FaGraduationCap className="text-pink-400 text-3xl mr-4" />
              <h3 className="text-2xl font-semibold">
                Bachelor’s in Computer Applications (BCA)
              </h3>
            </div>
            <p className="text-pink-400 font-medium">
              2020 - 2023 | Kurukshetra University
            </p>
            <p className="mt-4 text-gray-300">
              Developed a strong foundation in programming, database
              management, and web development. Completed projects focusing on
              creating dynamic and user-friendly web applications.
            </p>
          </div>

          {/* High School */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <MdSchool className="text-pink-400 text-3xl mr-4" />
              <h3 className="text-2xl font-semibold">High School Education</h3>
            </div>
            <p className="text-pink-400 font-medium">
              Completed | Shaheed Balbir Singh Govt. Model Sanskriti Sr. Sec.
              School
            </p>
            <p className="text-pink-400 font-medium">2020</p>
            <p className="mt-4 text-gray-300">
              Focused on mathematics and computer studies, developing a passion
              for technology and problem-solving at an early stage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
