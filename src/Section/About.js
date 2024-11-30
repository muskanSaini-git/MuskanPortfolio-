import React from "react";
import image from "../assest/image/MuskanSaini.webp";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-purple-600 via-blue-500 to-pink-600 text-white py-16"
    >
      <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center">
        {/* Left Side: Content */}
        <div className="lg:w-2/3 text-center lg:text-left space-y-6 mt-8 lg:mt-0">
          {/* Section Heading */}
          <div className="flex justify-center lg:justify-start items-center my-5">
            <span className="w-24 h-[2px] bg-gray-300"></span>
            <span className="bg-gray-800 w-fit text-white py-2 px-5 text-xl rounded-md mx-3">
              WHO I AM?
            </span>
            <span className="w-24 h-[2px] bg-gray-300"></span>
          </div>

          {/* Description */}
          <p className="text-lg">
            I am a passionate{" "}
            <span className="font-bold">Software Developer</span> specializing
            in front-end web and Android app development. My expertise includes
            React, Bootstrap, Tailwind CSS, Java, Kotlin, JavaScript, HTML, CSS,
            C++, and Python. I am driven to deliver intuitive user experiences
            and high-performance solutions through innovative technology.
          </p>
          <p className="text-lg mt-4">
            Currently pursuing an <span className="font-bold">MCA</span> and
            holding a <span className="font-bold">BCA</span> from Kurukshetra
            University, I am committed to tackling challenging projects and
            contributing to organizational success. With experience in designing
            and building responsive web applications, optimizing software
            performance, and collaborating on production projects, I bring
            technical expertise and creativity to every endeavor.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="lg:w-1/3 flex justify-center">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={image}
              alt="Profile"
              className="w-72 h-72 lg:w-full lg:h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
