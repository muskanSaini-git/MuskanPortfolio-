// src/components/Header.js
import React from "react";

const Hero = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 via-blue-500 to-pink-600 text-white py-12 sm:py-16">
      <div className="container mx-auto flex flex-col items-center md:flex-row justify-between space-y-8 md:space-y-0 px-4 sm:px-8 lg:px-16">
        {/* Left Side - Introduction Text */}
        <div className="text-center md:text-left space-y-6 md:max-w-lg">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Hello, <br />
            This is <span className="text-pink-400">MUSKAN</span>, I'm a
            <br />
            <span className="text-cyan-400">
              Professional Software Developer
            </span>
          </h1>
          <div className="flex flex-wrap justify-center md:justify-start space-x-4 mt-6">
            {/* GitHub Link */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400"
              aria-label="GitHub"
            >
              <span className="text-2xl sm:text-3xl">🐙</span>
            </a>
            {/* LinkedIn Link */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400"
              aria-label="LinkedIn"
            >
              <span className="text-2xl sm:text-3xl">💼</span>
            </a>
            {/* Contact Me Button */}
            <a
              href="mailto:muskansaini05042003@gmail.com?subject=Let's%20Connect&body=Hi%20Muskan,%0D%0AI%20came%20across%20your%20profile%20and%20would%20love%20to%20connect%20with%20you."
              className="bg-pink-500 hover:bg-pink-400 text-white font-semibold py-2 px-4 rounded shadow transition-all"
            >
              Contact Me
            </a>
            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/1Zu7heHufUq8DJC8cDwaHMUkztjPRzhf9/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold py-2 px-4 rounded shadow transition-all"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Right Side - Code Block */}
        <div className="bg-gray-900 rounded-lg p-6 w-full max-w-lg shadow-lg">
          <pre className="whitespace-pre-wrap overflow-x-auto">
            <code className="text-green-400 font-mono text-base sm:text-lg">
              {`const coder = {
  name: 'Muskan',
  skills: [
    "React", "NextJS", "Redux", "MySQL", 
    "MongoDB", "UI/UX Design", 
    "Material-UI", "Tailwind CSS", 
    "Figma", "Adobe Photoshop"
  ],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function () {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  },
};`}
            </code>
          </pre>
        </div>
      </div>
    </header>
  );
};

export default Hero;
