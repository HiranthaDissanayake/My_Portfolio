'use client';

import Head from "next/head";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
// images
import profileImage from "../app/public/p2.png";
import applicationDesign from "../app/public/code.png";
import webDesign from "../app/public/design.png";
import image1 from "../app/public/web1.png";
import image2 from "../app/public/web2.png";
import image3 from "../app/public/web3.png";

// framer motion
import { motion } from "framer-motion";

// icons
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";

// hooks
import { useState } from "react";

export default function Home() {
  // Dark mode state
  const [darkmode, setdarkmode] = useState(false);

  return (
    <div className={darkmode ? "" : "dark"}>
      {/* Head Section */}
      <Head>
        <title>Hirantha Dissanayake | Portfolio</title>
        <meta name="description" content="Portfolio of Hirantha Dissanayake, Mobile App & Web Developer" />
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@100..900&family=Pacifico&family=Poppins:wght@100..900&display=swap" 
        />
      </Head>

      <main className="font-poppins bg-yellow-50 min-h-screen px-10 md:px-20 lg:px-40 dark:bg-black">
        {/* Navigation & Hero Section */}
        <section>
          {/* Navigation */}
          <nav className="py-10 flex justify-between">
            <h1 className="text-sm md:text-xl dark:text-white">Welcome to my portfolio</h1>
            <ul className="flex items-center">
              {/* Dark Mode Toggle */}
              <li>
                <BsFillMoonStarsFill 
                  onClick={() => setdarkmode(!darkmode)} 
                  className="cursor-pointer text-xl mx-5 dark:text-white"
                />
              </li>
              <li>
                <a 
                  className="bg-green-800 text-black px-4 py-2 border-none rounded-md dark:text-white md:w-20"
                  href="https://docs.google.com/document/d/1nm6rsLGzd6YZaS9dqM8FS-4qfRqtJOkF/edit?usp=drive_link" 
                  download={"Download CV"}
                >
                  Download CV
                </a>
              </li>
            </ul>
          </nav>

          {/* Hero Section */}
          <div className="text-center p-10">
            {/* Profile Image */}
            <motion.div
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.9 }}
>
  <div className="m-auto relative bg-gradient-to-b from-green-600 w-60 h-80 sm:w-56 sm:h-70 md:w-60 md:h-80 lg:w-75 lg:h-80 p-4 mt-10 mb-5 rounded-full flex items-center justify-center">
    <Image
      src={profileImage}
      alt="profile image"
      className="w-full h-full object-cover rounded-full"
    />
  </div>
</motion.div>

            {/* Name & Title */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-5xl font-bold text-green-700 md:text-6xl lg:text-7xl lg:mb4 dark:text-green-500">
                HIRANTHA DISSANAYAKE
              </h1>
            </motion.div>
            
            <h3 className="text-2xl pt-5 md:text-3xl dark:text-white">Mobile Application Full Stack Developer - Flutter</h3>
            <h3 className="text-2xl pb-4 md:text-3xl dark:text-white">Mobile User Interface Designer (UI/UX)</h3>
            <p className="text-sm py-4 text-gray-400 leading-6 max-w-xl mx-auto md:text-md dark:text-white">
            I am a Software Engineering undergraduate at Cinec Campus eager to leverage my skills in building innovative digital solutions. With a strong foundation in Flutter , I specialize in crafting user-centric mobile apps for both Android and iOS platforms."
            </p>
          </div>

          {/* Social Icons */}
          <div className="text-5xl flex justify-center gap-16 text-gray-600">
      <a
        href="https://github.com/HiranthaDissanayake"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors duration-300 hover:text-green-500 active:text-green-500"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/hirantha-dissanayake-30107a28a/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors duration-300 hover:text-green-500 active:text-green-500"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://web.facebook.com/hirantha.dissanayake.33/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors duration-300 hover:text-green-500 active:text-green-500"
      >
        <CiFacebook />
      </a>
    </div>
        </section>

                {/* services */}

                <section>
          <div>
            <h2 className=" text-5xl pt-10 font-bold opacity-60 dark:text-white">Services I Offer</h2>


          </div>

          
            {/* services cards */}
            <div className=" md:flex  lg:flex gap-10">
              {/* card */}
              <motion.div
              whileHover={{scale:1.1}}
              whileTap={{scale:0.9}}
              >
                <div className=" bg-green-500 text-center shadow-sm rounded-xl my-10 py-5 px-5">
                <Image 
                src={applicationDesign} 
                alt={"application image"}
                width={200}
                height={200}
                className=" inline"
                />
                <h2 className=" text-2xl font-bold">Mobile Application Developing</h2>
                <p className=" text-sm py-2 px-2 text-gray-800 leading-6">"I am a passionate Flutter mobile application developer dedicated to building high-quality, user-friendly, and efficient mobile apps. With a strong foundation in Flutter, Firebase and Node.Js & Express Js, I specialize in crafting seamless cross-platform applications that enhance user experience. I am always eager to learn new technologies and implement innovative solutions to create impactful digital products."</p>
                </div>
              </motion.div>
              

              {/* card */}
              <motion.div
              whileHover={{scale:1.1}}
              whileTap={{scale:0.9}}
              >
                <div className=" bg-green-500 text-center shadow-sm rounded-xl my-10 py-5 px-5">
                <Image 
                src={webDesign} 
                alt={"web design image"}
                width={200}
                height={200}
                className=" inline"
                />
                <h2 className=" text-2xl font-bold">Mobile UI/UX Designing</h2>
                <p className=" text-sm py-2 px-2 text-gray-800 leading-6">"I have a good understanding of UI/UX design for mobile interfaces, focusing on creating intuitive, user-friendly, and visually appealing app experiences. I prioritize usability, accessibility, and modern design trends to enhance user engagement and satisfaction."</p>
                </div>
              </motion.div>
              
            </div>
        
        </section>

        {/* my work */}

        <section>
          <div>
            <h2 className=" text-5xl py-10 font-bold opacity-60 dark:text-white">My Projects</h2>
            <p className=" dark:text-white">"This section showcases a collection of my projects, demonstrating my ability to transform ideas into functional digital products. Explore the diverse range of mobile apps I've created and Mobile user interfaces I've designed, and feel free to delve into the source code to understand the technical intricacies behind each project."</p>
          </div>

          {/* images */}

          <div className=" flex flex-col gap-10 p-10 md:flex-row md:flex-wrap lg:flex-row lg:flex-wrap">
            
            <motion.div 
            whileHover={{scale:1.1, rotate:3}}
            whileTap={{scale:0.8, rotate:-10, borderRadius:"100%"}}
            >
              <div className=" basis-1/3 flex-1 lg: w-80">
              <Image 
              src={image1} 
              alt={"image 1"}
              layout="responsive"
              className="rounded-lg object-cover"
            />
              </div>
            </motion.div>
            
            <motion.div
            whileHover={{scale:1.1, rotate:3}}
            whileTap={{scale:0.8, rotate:-10, borderRadius:"100%"}}
            >
              <div className=" basis-1/3 flex-1 lg: w-80">
              <Image 
              src={image2} 
              alt={"image 1"}
              layout="responsive"
              className="rounded-lg object-cover"
            />
             </div>
            </motion.div>
            
            <motion.div
            whileHover={{scale:1.1, rotate:3}}
            whileTap={{scale:0.8, rotate:-10, borderRadius:"100%"}}
            >
              <div className=" basis-1/3 flex-1 lg: w-80">
              <Image 
              src={image3} 
              alt={"image 1"}
              layout="responsive"
              className="rounded-lg object-cover"
            />
              </div>
            </motion.div>
          
 
          </div>
        </section>

        {/* footer */}

        <footer className="border-t-2 border-black text-sm opacity-70 flex flex-col gap-5 items-center justify-center py-10 md:px-10 lg:flex-row lg:items-center lg:justify-between dark:border-white">
          <div className="text-center lg:text-left max-w-lg">
            <h3 className="text-base mb-2 dark:text-white">Contact me for more details</h3>
            <p className="opacity-40 mb-6 dark:text-white">
              Looking to bring your app idea to life? I offer professional mobile app development using Flutter, Firebase, Node.js, and Express.js. Let's create something amazing together! Contact me through the following channels.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-8 text-gray-600">
            <a href="https://github.com/HiranthaDissanayake" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-green-500 active:text-green-500">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/hirantha-dissanayake-30107a28a/" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-green-500 active:text-green-500">
              <FaLinkedin />
            </a>
            <a href="https://web.facebook.com/hirantha.dissanayake.33/" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-green-500 active:text-green-500">
              <CiFacebook />
            </a>
          </div>
        </footer>

      </main>
    </div>
  );
}
