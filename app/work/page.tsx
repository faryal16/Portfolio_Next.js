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
    caterogy: "frontend",
    title: "MyOnlineMeal",
    description:
      "Food Delivery app by HTML, CSS and Javascript.Best food delivery app freelance services online. Outsource your food delivery app project and get it quickly done and delivered remotely online.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/images/project1.png",
    live: "https://my-online-meal-delivery-app.vercel.app/",
    github: "https://github.com/faryal16/MyOnlineMeal.git",
  },
  {
    num: "02",
    caterogy: "frontend",
    title: "Static Resume",
    description:
      "A static resume focuses on top skills, and is tailored to the roles you are seeking. experience in retail and consistent record of advancement to leadership positions.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/images/project2.png",
    live: "https://milestone-1-static-resume.vercel.app/",
    github: "https://github.com/faryal16/milestone-1-Static_Resume.git",
  },
  {
    num: "03",
    caterogy: "frontend",
    title: "Dynamic Resume Builder",
    description:
      "The goal of Online Resume Builder is to automate the existing manual system using computerised equipment and full- featured computer software to meet their needs, so that their valuable data/information may be stored in the System for a long time with very easy access and manipulation.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/images/project3.png",
    live: "https://milestone02-dynamic-resume-builder.vercel.app/",
    github: "https://github.com/faryal16/Milestone02-Dynamic-resume-builder.git",
  },
  {
    num: "04",
    caterogy: "fullstack",
    title: "ToDo List App",
    description:
      "No matter who you are and what you do - you will be better organized! At home, at work and in your free time - you will focus on really important things!",
      stack: [{ name: "Typescript" }],
    image: "/assets/images/project4.png",
    live: "npx todos_list_007",
    github: "https://github.com/faryal16/My_TODO-s_list_007.git",
  },
  {
    num: "05",
    caterogy: "frontend",
    title: "Currency Converter",
    description:
      "Online program where currency values can be easily converted based on current exchange rates. A currency converter app can help users convert a currency into multiple currencies simultaneously..",
    stack: [{ name: "Typescript" }],
    image: "/assets/images/projects5.jpg",
    live: "npx currency_converter_007",
    github: "https://github.com/faryal16/Currency_Converter_007.git",
  },
  {
    num: "06",
    caterogy: "frontend",
    title: "Portfolio",
    description:
      "My personal portfolio make by me using fontend programming languages.",
      stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/images/project6.png",
    live: "https://portfolio-website-by-fairy.vercel.app/",
    github: "https://github.com/faryal16/Portfolio_Website_by_Fairy.git",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper: { activeIndex: number }) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
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
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.caterogy} project
              </h2>
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
                        <p className="">Live Project</p>
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
                        <p className="">Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* images */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider button */}
              <WorkSliderBtn
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] flex justify-center items-center transition-all" iconStyles={undefined}              
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
