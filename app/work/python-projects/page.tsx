"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtn from "@/components/WorkSliderBtn";


const projects = [
  {
    num: "01",
    caterogy: "Personal Management ",
    title: "Streamlit Library Manager",
    description:
      "The Streamlit Library Manager is an app designed to help users manage and organize their digital library of books, articles, or research papers. Users can add, edit, delete, and search for items within the library. The app can support features like tagging, filtering, and categorizing books by genre, author, or publication year.",
      stack: [{ name: "Python" }, { name: "Streamlit" }, ],
    image: "/assets/images/py2.png",
    live: "https://stlibrarymanger.streamlit.app/",
    github: "https://github.com/faryal16/ST_Library_Manger.git",
  },
  {
    num: "02",
    caterogy: "Data Cleaning ",
    title: "Data Sweeper App",
    description:
      "A Python app built with Streamlit to clean and preprocess datasets, offering an intuitive interface for loading, cleaning, and visualizing data, helping users remove duplicates, handle missing values, and simplify data preprocessing for analysts and machine learning practitioners.",
    stack: [{ name: "Python" }, { name: "Streamlit" }, ],

    image: "/assets/images/py1.png",
    live: "https://q3p1datasweeper.streamlit.app/",
    github: "https://github.com/faryal16/Q3_P1_Data_Sweeper.git",
  },
 
  {
    num: "03",
    caterogy: "Security Tool ",
    title: " Password Strength Meter",
    description:
      "The Password Strength Meter evaluates a user's password strength based on length, complexity, special characters, and randomness, providing real-time feedback and suggestions for improvement to ensure stronger passwords.",
    stack: [{ name: "Python" }, { name: "Streamlit" }, ],

    image: "/assets/images/py3.png",
    live: "https://stpasswordchecker.streamlit.app/",
    github: "https://github.com/faryal16/ST_Password_Checker.git",
  },
 
  {
    num: "04",
    caterogy: "Utility Tool ",
    title: "Unit Converter",
    description:
      "The Unit Converter is a user-friendly tool that allows users to quickly convert values between various units of measurement, including length, weight, temperature, and volume.",
    stack: [{ name: "Python" }, { name: "Streamlit" }, ],

    image: "/assets/images/py4.png",
    live: "https://stunitconverted.streamlit.app/",
    github: "https://github.com/faryal16/ST_Unit_Converted.git",
  },
 
  {
    num: "05",
    caterogy: "Python ",
    title: " Mood Tracker",
    description:
      "The Mood Tracker is a wellness app that allows users to log daily moods, add notes, and visualize emotional trends over time, promoting self-awareness and mental well-being.",
    stack: [{ name: "Python" }, { name: "Streamlit" },{name: "UV "} ],

    image: "/assets/images/py5.png",
    live: "https://mood-tracking-07.streamlit.app/",
    github: "https://github.com/faryal16/Ramadan_Coding_Nights/tree/main/07_mood-tracker",
  },
 
  {
    num: "06",
    caterogy: "Automation Tool",
    title: "Money Making Machine",
    description:
      "The Money Making Machine is a finance automation app built with FastAPI that simulates or tracks income and expenses, providing a backend API to manage financial logic and data.",
    stack: [{ name: "Python" }, { name: "Streamlit" },{name : "FastAPI"}, {name : "UV"} ],

    image: "/assets/images/py6.png",
    live: "https://q3p1datasweeper.streamlit.app/",
    github: "https://github.com/faryal16/Ramadan_Coding_Nights/tree/main/05_money-making-machine",
  },
 
];


const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper: { realIndex: number }) => {
    // get current slide index
    const realIndex = swiper.realIndex;
    // update project state based on current slide index
    setProject(projects[realIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: .1, duration: 0.1, ease: "easeInOut" },
      }}
      className="min-h-[80vh flex flex-col justify-center py-12  xl:px-0]"
    >
      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%] ">
              {/* outline num */}
              <div className="text-6xl leading-none font-extrabold text-transparent text-outline">
                {project.num}  
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.caterogy}project
              </h2>
              <p className="text-accent/70 text-3xl text-center underline">{project.title}</p>
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remover the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-lg">Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-lg">Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] ">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop= {true}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[400px] relative group  flex justify-center items-center rounded-[40px] bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full rounded-[40px] bg-black/10 z-10"></div>
                      {/* images */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className=" rounded-[40px] "
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider button */}
              <WorkSliderBtn
  containerStyles="flex gap-2 absolute right-0 bottom-[60px] xl:bottom-[70px] z-20 w-full justify-between xl:w-max xl:justify-none"
  btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] flex justify-center items-center transition-all"
  iconStyles={undefined}
/>

            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
