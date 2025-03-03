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
        <meta name="description" content="Portfolio of Hirantha Dissanayake, Flutter Developer" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@100..900&family=Pacifico&family=Poppins:wght@100..900&display=swap"
        />
      </Head>

      <main className="font-poppins bg-yellow-50 min-h-screen px-10 md:px-20 lg:px-40 dark:bg-black">
        {/* Navigation & Hero Section */}
        <section>
          {/* Navigation */}
          <nav className="py-5 px-5 flex items-center justify-between w-full">
            <h1 className="neon-text text-xs sm:text-sm md:text-xl dark:text-white">
              Welcome to my portfolio
            </h1>

            <div className="flex items-center gap-3 sm:gap-4">
              {/* Dark Mode Toggle */}
              <BsFillMoonStarsFill
                onClick={() => setdarkmode(!darkmode)}
                className="cursor-pointer text-lg sm:text-xl dark:text-white"
              />

              {/* Download CV Button */}
              <a
                className=" bg-green-800 text-black px-3 py-1 sm:px-4 sm:py-2 border-none rounded-md dark:text-white text-xs sm:text-sm md:text-base hover:bg-green-600 transition-all"
                href="https://drive.google.com/file/d/1aFflMc0VcIgI0FLkR-Gk-pMbmh7ogibe/view?usp=sharing"
                download={"Download CV"}
              >
                Download CV
              </a>
            </div>
          </nav>

          {/* Hero Section */}
          <div className="text-center p-10">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
            >
              <div className="animated-image bounce m-auto relative bg-gradient-to-b from-green-600 w-60 h-80 sm:w-56 sm:h-70 md:w-60 md:h-80 lg:w-75 lg:h-80 p-4 mt-10 mb-5 rounded-full flex items-center justify-center">
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
<h1 className="typing-effect text-1xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-green-700 lg:mb-4 dark:text-green-500 text-center w-full break-words">
  HIRANTHA DISSANAYAKE
</h1>

            </motion.div>

            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl pt-3 sm:pt-5 dark:text-white text-center">
              Mobile Application Full Stack Developer - Flutter
            </h3>

            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl pb-3 sm:pb-4 dark:text-white text-center">
              Mobile User Interface Designer (UI/UX)
            </h3>

            <p className=" text-xs sm:text-sm md:text-base lg:text-lg py-3 sm:py-4 text-gray-400 leading-relaxed max-w-2xl mx-auto text-center dark:text-white">
              I am a Software Engineering undergraduate at Cinec Campus eager to leverage my skills in building innovative digital solutions.
              With a strong foundation in <span className="text-green-500 font-semibold">Flutter</span>,
              I specialize in crafting user-centric mobile apps for both Android and iOS platforms.
            </p>

          </div>

          {/* Social Icons */}
          <div className=" floating text-5xl flex  justify-center gap-16 text-gray-600">
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
            <h2 className="fade-in text-3xl md:text-4xl lg:text-5xl py-6 md:py-8 font-bold opacity-60 dark:text-white">
              Services I Offer
            </h2>



          </div>


          {/* services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <div className="hover-card bg-green-500 text-center shadow-md rounded-xl p-6 md:p-8">
                <Image
                  src={applicationDesign}
                  alt="application image"
                  width={180}
                  height={180}
                  className="mx-auto"
                />
                <h2 className="text-xl md:text-2xl font-bold mt-4">Mobile Application Development</h2>
                <p className="text-sm md:text-base px-2 text-gray-800 leading-6 mt-2">
                  I am a passionate Flutter mobile application developer dedicated to building high-quality, user-friendly, and efficient mobile apps. With a strong foundation in Flutter, Firebase, Node.js, and Express.js, I craft seamless cross-platform applications that enhance user experience.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <div className="hover-card bg-green-500 text-center shadow-md rounded-xl p-6 md:p-8">
                <Image
                  src={webDesign}
                  alt="web design image"
                  width={270}
                  height={200}
                  className="mx-auto"
                />
                <h2 className="text-xl md:text-2xl font-bold mt-4">Mobile UI/UX Designing</h2>
                <p className="text-sm md:text-base px-2 text-gray-800 leading-6 mt-2">
                  I have a good understanding of UI/UX design for mobile interfaces, focusing on creating intuitive, user-friendly, and visually appealing app experiences. I prioritize usability, accessibility, and modern design trends to enhance user engagement.
                </p>
              </div>
            </motion.div>
          </div>


        </section>

        {/* my work */}

        <section>
          <div>
            <h2 className="fade-in text-3xl md:text-4xl lg:text-5xl py-6 md:py-8 font-bold opacity-20 dark:text-white ">
              My Projects
            </h2>
            <p className="text-sm md:text-base lg:text-lg leading-6 md:leading-7 lg:leading-8 text-gray-700 dark:text-white  max-w-full mb-20">
              This section showcases a collection of my projects, demonstrating my ability to transform ideas into functional digital products.
              Explore the diverse range of mobile apps I've created and mobile user interfaces I've designed, and feel free to delve into the source code
              to understand the technical intricacies behind each project.
            </p>

          </div>

          {/* images */}

          <div className="flex flex-col gap-10 p-10 md:flex-row md:flex-wrap lg:flex-row lg:flex-wrap justify-center">
            {/* Image 1 */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.8, rotate: -10, borderRadius: "100%" }}
              className="relative"
            >
              <div className="basis-full sm:basis-1/2 my-12 md:basis-1/3 lg:basis-1/4 flex-1">
                <Image
                  src={image1}
                  alt={"image 1"}
                  layout="responsive"
                  className="rounded-lg object-cover"
                />
                {/* Button */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <a href="https://github.com/HiranthaDissanayake/Online_Shopping_app"><button className="text-white bg-green-600 p-4 rounded-lg font-semibold">
                    View Project
                  </button></a>
                </div>
              </div>
            </motion.div>

            {/* Image 2 */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.8, rotate: -10, borderRadius: "100%" }}
              className="relative"
            >
              <div className="basis-full sm:basis-1/2 my-12 md:basis-1/3 lg:basis-1/4 flex-1">
                <Image
                  src={image2}
                  alt={"image 2"}
                  layout="responsive"
                  className="rounded-lg object-cover"
                />
                {/* Button */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <a href="https://github.com/HiranthaDissanayake/Sathkara-the_organ_donation_app"><button className="text-white bg-green-600 p-4 rounded-lg font-semibold">
                    View Project
                  </button></a>
                </div>
              </div>
            </motion.div>

            {/* Image 3 */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.8, rotate: -10, borderRadius: "100%" }}
              className="relative"
            >
              <div className="basis-full sm:basis-1/2 my-12 md:basis-1/3 lg:basis-1/4 flex-1">
                <Image
                  src={image3}
                  alt={"image 3"}
                  layout="responsive"
                  className="rounded-lg object-cover"
                />
                {/* Button */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <a href="https://github.com/HiranthaDissanayake/Campus-Attendance-App"><button className="text-white bg-green-600 p-4 rounded-lg font-semibold">
                    View Project
                  </button></a>
                </div>
              </div>
            </motion.div>
          </div>

        </section>

        <section id="contact" className=" p-5 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-center text-white mb-6">Contact Me</h2>
          <p className="text-center text-lg text-white mb-6">If you'd like to get in touch, feel free to send me an email!</p>

          <form
            action="mailto:hiranthamalindu46@gmail.com"
            method="POST"
            className="max-w-lg mx-auto bg-green-600 p-6 rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Your Message"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"

              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full px-6 py-3 bg-green-900 text-white font-semibold rounded-md hover:bg-green-1000 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>

        {/* footer */}

        <footer className="border-t-2 border-black text-sm opacity-70 flex flex-col gap-5 items-center justify-center py-10 md:px-10 lg:flex-row lg:items-center lg:justify-between dark:border-white mt-20">
          <div className="text-center lg:text-left max-w-lg">
            <h3 className="text-base mb-2 dark:text-white">Contact me for more details</h3>
            <p className="opacity-70 mb-6 dark:text-white">
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

