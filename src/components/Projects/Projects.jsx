import React from "react";
import Project from "./Project";
// import rickandmorty from "../../assets/project-1.png";
import realtimeChat from "../../assets/realTimeChat.png";
import contactManager from "../../assets/contactManager.png";
import foodRecipeApp from "../../assets/foodRecipeApp.png";
import userManagement from "../../assets/userManagement.png";
import activityTracker from "../../assets/acitivityTracker.png";
import planets from '../../assets/planets.jpg'
import squidGame from '../../assets/Squid game.png'

import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div
      className=" flex flex-col justify-center mx-[1rem] lg:mx-[4rem] pt-[12rem]"
      id="projects"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ y: [-55, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-justify  break-words md:break-words whitespace-normal text-[3rem] font-bold mb-[2rem] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500"
      >
        Projects
      </motion.h1>
      <div className='flex items-center justify-center '>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ x: [-110, 0], opacity: 1 }}
        transition={{ duration: 1.6 }}
        viewport={{ once: true }}
        className="  tracking-tight leading-7 md:break-words text-[1rem] whitespace-normal grid grid-cols-1 gap-[4.3rem]  md:grid-cols-2 mx    lg:grid-cols-2 xl:grid-cols-3 "
      >
        <Project
          img={realtimeChat}
          title="Real Time Chat App"
          github="https://github.com/Dineshchandra47/Real-Time-Chat-App-012"
          demo="https://real-time-chat-app-747020.netlify.app/"
          desc="Developed a real-time chat application using ReactJs , Node.js, Socket.io, and Express. Implemented features such as messaging, and chat using emojis. Used MongoDB as the database to store user data."
        />
        {/* <Project
          img={rickandmorty}
          title="Rick And Morty Characters With API"
          github=""
          demo=""
          desc="This project consumes The Rick and Morty API to render a beautiful interface with all characters from the show."
        /> */}
        <Project
          img={contactManager}
          title="Contact Manager"
          github="https://github.com/Dineshchandra47/Contact_Manager-CLIENT"
          demo="https://contact-manager-application-mern.netlify.app/"
          desc="Developed a full-stack MERN contact manager application with React, Express, Node.js, MongoDB, and mongoose. Implemented CRUD (create, read, update, delete) operations for contacts. Used JWT authentication for user login and authorization."
        />
        <Project
          img={foodRecipeApp}
          title="Food recipe App"
          github="https://github.com/Dineshchandra47/Add_to_cart_3_2_23"
          demo="https://add-to-cart-3-2-23.netlify.app/"
          desc="Developed a food recipe app using the MERN stack (MongoDB, Express, React, Node.js) and Redux. 
          Implemented a search feature that allows users to search for recipes by ingredient, cuisine, or 
          dietary restriction. Used Redux to manage the state of the app."
        />
        <Project
          img={userManagement}
          title="User Management System"
          github="https://github.com/Dineshchandra47/Nodejs-User-Management-Systemt"
          demo="https://user-managemen-system.onrender.com/"
          desc="Developed a user management app using Node.js, Express, MongoDB, and EJS. The app allows users to create, read, update, and delete the user details."
        />
        <Project
          img={planets}
          title="THE PLANETS"
          github="https://github.com/Dineshchandra47/Planets"
          demo="https://planets-666.netlify.app/"
          desc="The Planets fact site is a great example of how ReactJS can be used
          to create interactive and informative web applications. It is a well-designed 
          and easy-to-use site that provides users with a wealth of information about the 
          planets in our solar system."
        />
        
        <Project
          img={squidGame} 
          title="Squid Game Web Page"
          github="https://github.com/Dineshchandra47/REACT-PROJECTS/tree/master/squid%20game%20web%20design"
          demo="https://squid-game-web-page.netlify.app/"
          desc="The Squid Game website has been designed using React and Styled Components.
          The Scroll Reveal library has been used for the animations. The website is fully responsive and 
          includes cool reveal-on-scroll animations that draw user attention to important bits as they scroll past."
        />
        
        <Project
          img={activityTracker} 
          title="Activity Tracker"
          github="https://github.com/Dineshchandra47/RECIPE-APP"
          demo="https://todo-client-mern.netlify.app/"
          desc="A Recipe App that lets you search for recipes and also show you some in the 
        homepage if you’re interested in being surprised."
        />

        
        
        
      </motion.div>
      </div>
      
    </div>
  );
};

export default Projects;
