import React from "react";
import aboutImage from "../assets/About.svg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="pt-[12rem] mx-[4rem] max-xl:mx-[1rem]" id="about">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        className=" text-[3rem] font-bold mb-[2rem] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500"
      >
        About Me
      </motion.h1>
      <div className=" flex gap-[10rem] max-xl:gap-[3rem] max-xl:flex-wrap justify-center">
        <motion.img
          src={aboutImage}
          alt="Me"
          initial={{ opacity: 0 }}
          whileInView={{ y: [150, 10], opacity: 1 }}
          transition={{ duration: 1 }}
          className=" w-[30%] h-[100%] hover:cursor-pointer sm:w-[300px] rounded-xl max-xl:w-[68%]"
          // viewport={{ once: true }}
        />
        <motion.div
          className="w-[100%] flex flex-col gap-[2rem]"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className=" text-[2.5rem] max-md:text-[2rem]">
            I’m a Full Stack Web Developer
          </h1>
          <p className="text-justify break-words md:break-words whitespace-normal  text-[2rem] max-md:text-[1.5rem] text-[#838697]">
            I have 1.2 years of experience in Full Stack Development. I'm
            passionate about building digital products that improve the everyday
            experience for people. I'm eager to deploy on challenging projects
            to expand my current skill set and tech stack.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
