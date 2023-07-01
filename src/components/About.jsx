import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            {" "}
            About{" "}
          </p>
        </div>

        <p className="text-xl mt-20">
          I am a passionate and innovative web developer with a strong
          background in evaluating and enhancing business systems. With over 1.5
          years of experience, I have proven my skills in Web development and
          DSA projects , effectively leading teams to achieve project goals.
          Excel in software development and working with diverse data
          structures, demonstrating a creative approach to problem-solving.
        </p>

        <br />
        <p className="text-xl">
          I have also earned certifications as a Google Cloud Associate Engineer
          and has solved more than 200 questions on LeetCode, demonstrating my
          problem-solving skills.My portfolio can be found on LinkedIn, GitHub,
          and LeetCode, providing further insights into my work.
        </p>
      </div>
    </div>
  );
};

export default About;
