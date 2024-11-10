import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="container pt-32">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div data-aos="zoom-in-up">
          <h2 className="text-4xl md:text-5xl text-cyan-100">Technologies I worK with</h2>
          <p className="text-pink-50 pt-2">
            Skilled in JavaScript and TypeScript, specializing in building
            dynamic and scalable web applications using React.js and Next.js.
            Experienced with HTML, CSS, and Tailwind for responsive,
            user-friendly designs. Proficient in Python for backend development
            and API integration. Strong design capabilities with Figma, creating
            intuitive, visually appealing interfaces. Passionate about
            delivering high-quality, full-stack web solutions and seamless user
            experiences.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-2 text-cyan-100 text-3x1 sm:text-4x1">
            <div className="space-y-2">
              <h2 data-aos="zoom-in-up">Javascript/Typescript</h2>
              <h2 data-aos="zoom-in-up">Next.js</h2>
              <h2 data-aos="zoom-in-up">React.js</h2>
              <h2 data-aos="zoom-in-up">Python</h2>
            </div>
            <div className="space-y-2">
              <h2 data-aos="zoom-in-up">Html</h2>
              <h2 data-aos="zoom-in-up">CSS</h2>
              <h2 data-aos="zoom-in-up">Tailwind</h2>
              <h2 data-aos="zoom-in-up">Figma</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
