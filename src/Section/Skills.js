import React from "react";
import Marquee from "react-fast-marquee";

// Skill SVG imports
import react from "../assest/svg/Skills/react.svg";
import cplusplus from "../assest/svg/Skills/cplusplus.svg";
import html from "../assest/svg/Skills/html.svg";
import css from "../assest/svg/Skills/css.svg";
import javascript from "../assest/svg/Skills/javascript.svg";
import figma from "../assest/svg/Skills/figma.svg";
import git from "../assest/svg/Skills/git.svg";
import c from "../assest/svg/Skills/c.svg";
import java from "../assest/svg/Skills/java (1).svg";
import kotlin from "../assest/svg/Skills/kotlin.svg";
import csharp from "../assest/svg/Skills/csharp.svg";
import mysql from "../assest/svg/Skills/mysql.svg";
import mongoDB from "../assest/svg/Skills/mongoDB.svg";
import bootstrap from "../assest/svg/Skills/bootstrap.svg";
import tailwind from "../assest/svg/Skills/tailwind.svg";
import photoshop from "../assest/svg/Skills/photoshop.svg";
import canva from "../assest/svg/Skills/canva.svg";
import python from "../assest/svg/Skills/python.svg";
import flutter from "../assest/svg/Skills/flutter.svg";

// Skill image mapping function
export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "react":
      return react;
    case "c++":
      return cplusplus;
    case "html":
      return html;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "figma":
      return figma;
    case "git":
      return git;
    case "c programming":
      return c;
    case "java":
      return java;
    case "kotlin":
      return kotlin;
    case "c#":
      return csharp;
    case "mysql":
      return mysql;
    case "mongodb":
      return mongoDB;
    case "bootstrap":
      return bootstrap;
    case "tailwind":
      return tailwind;
    case "photoshop":
      return photoshop;
    case "canva":
      return canva;
    case "python":
      return python;
    case "flutter":
      return flutter;
    default:
      return null;
  }
};

// Skill names for the marquee
export const skillsData = [
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "C++",
  "C Programming",
  "Python",
  "Java",
  "Kotlin",
  "C#",
  "MySQL",
  "MongoDB",
  "Bootstrap",
  "Tailwind",
  "Figma",
  "Git",
  "Photoshop",
  "Canva",
  "Flutter",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-gradient-to-r from-purple-600 via-blue-500 to-pink-600 text-white py-16 relative"
    >
      {/* Decorative Blur */}
      <div className="w-[100px] h-[100px] bg-purple-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      {/* Section Title */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-gray-800"></span>
          <span className="bg-gray-800 w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-gray-800"></span>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={true}
          pauseOnClick={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div
              key={id}
              className="m-3 sm:m-5 flex items-center justify-center bg-gray-900 p-4 rounded-lg shadow-lg text-white hover:scale-105 transition-transform duration-300"
            >
              {/* Skill Icon and Name */}
              <div className="flex flex-col items-center justify-center text-center">
                <img
                  src={skillsImage(skill)}
                  alt={skill}
                  className="h-16 w-40 sm:h-20 sm:w-30 mb-3" // Adjusted size for better visibility
                />
                <span className="text-base sm:text-lg font-semibold">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;
