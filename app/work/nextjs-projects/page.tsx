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
    caterogy: "🖥️ Full Stack ",
    title: "Hekto Furniture",
    description:
    "An e-commerce furniture web app built with Next.js and Tailwind CSS. It features dynamic routing, responsive design, and optimized performance using server-side rendering and reusable components.",  
    stack: [{ name: "Next.js" }, { name: "Tailwindcss" },],
    image: "/assets/project/p1.png",
    live: "https://hackathon-e-commerce-theta.vercel.app",
    github: "hhttps://github.com/faryal16/Hackathon-e-commerce.git",
  },
  {
    num: "02",
    caterogy: "🖥️ Frontend ",
    title: " Portfolio Website",
    description:
     "A fast, responsive portfolio built with Next.js and Tailwind CSS to showcase my skills, projects, and experience with a clean, modern design.",
     stack: [{ name: "Next.js" }, { name: "Tailwindcss" },],
    image: "/assets/project/p2.png",
    live: "https://portfolio-next-js-eight-sooty.vercel.app",
    github: "https://github.com/faryal16/Portfolio_Next.js.git",
  },
  {
    num: "03",
    caterogy: "🖥️ Frontend ",
    title: "Weather App",
    description:
      "This is a simple Weather App built with Next.js that fetches real-time weather data using a public API. Users can enter a city name and instantly view current weather conditions like temperature, weather type (e.g., cloudy, sunny), humidity, and wind speed.",
      stack: [{ name: "Next.js" }, { name: "Tailwindcss" },],
    image: "/assets/project/p3.png",
    live: "https://weather-app-next-js-wheat.vercel.app/",
    github: "https://github.com/faryal16/weather_app_next.js.git",
  },
  {
    num: "04",
    caterogy: "🖥️ Next.Js ",
    title: "GIAIC Clone",
    description:
      "A responsive website clone of the Global Institute of Artificial Intelligence and Computing, showcasing IT courses. Built with Next.js, custom CSS, and Tailwind CSS for a mobile-friendly design, the clone features dynamic routing and a clean, user-friendly interface.",
      stack: [{ name: "Next.js" }, { name: "Tailwindcss" },],
    image: "/assets/project/p4.png",
    live: "https://giaic-clone-ten.vercel.app/",
    github: "https://github.com/faryal16/GIAIC_Clone.git",
  },
  {
    num: "05",
    caterogy: "🖥️ UI/UX Design ",
    title: "Figma Portfolio",
    description:
      "An interactive portfolio created in Figma, showcasing UI/UX designs, web app concepts, and branding projects. Demonstrates skills in vector editing, prototyping, and collaboration.",
      stack: [{ name: "Next.js" }, { name: "Tailwindcss" }, {name: "Figma"},],
    image: "/assets/project/p5.png",
    live: "https://weather-app-next-js-wheat.vercel.app/",
    github: "https://github.com/faryal16/weather_app_next.js.git",
  },
  {
    num: "06",
    caterogy: "🖥️ Figma ",
    title: "Whitespace SaaS Landing Page",
    description:
      "A clean and modern landing page design for a SaaS product, featuring a minimalist layout with clear call-to-action buttons, product features, and client testimonials. Built with Next.js and Tailwind CSS, it provides an engaging user experience with a responsive design and smooth interactions.",
      stack: [{ name: "Next.js" }, { name: "Tailwindcss" }, {name: "figma"},],
    image: "/assets/project/p6.png",
    live: "https://whitepace-saa-s-landing-page.vercel.app/",
    github: "https://github.com/faryal16/Whitepace---SaaS-Landing-Page.git",
  },
  {
    num: "07",
    caterogy: "🖥️ Self-Improvement ",
    title: "Blog - A Productive Mindset",
    description:
      "A blog that explores strategies, habits, and tools for cultivating a productive mindset. It offers practical tips to enhance focus, motivation, and efficiency, helping readers build sustainable work habits and achieve their goals",
      stack: [{ name: "Next.js" }, { name: "Tailwindcss" },],
    image: "/assets/project/p7.png",
    live: "https://my-first-blog-a-productive-mindset.vercel.app/",
    github: "https://github.com/faryal16/MY_First_Blog_A_productive_mindset.git",
  },
  
  {
    num: "08",
    caterogy: "🖥️ Sanity CMS ",
    title: "Parakh Jewelers",
    description:
      "A sleek, responsive e-commerce website for Parakh Jewelers, built with Next.js, Sanity CMS, and Tailwind CSS. The site offers a dynamic and engaging shopping experience, featuring product listings, detailed descriptions, and an easy-to-use checkout system. With Sanity CMS, the content is easily manageable, allowing for seamless updates to product information and imagery.",
      stack: [{ name: "Next.js" }, { name: "Tailwindcss" },{name: "Sanity CMS"}],
    image: "/assets/project/p8.png",
    live: "https://parakh-jewellars.vercel.app/",
    github: "https://github.com/faryal16/Parakh_Jewellars.git",
  },
  {
    num: "09",
    caterogy: "🖥️ API Integration ",
    title: "Noor’s Kitchen App",
    description:
      "A recipe app built with Next.js and integrated with an external API to provide a wide variety of recipes. Users can explore and search for recipes, view detailed instructions, ingredients, and nutritional information. The app offers a smooth, responsive user experience with a clean design powered by Tailwind CSS, making it easy to find and save favorite recipes.",
      stack: [{ name: "Next.js" }, { name: "Tailwindcss" },],
    image: "/assets/project/p9.png",
    live: "https://noor-s-kitchen.vercel.app/",
    github: "https://github.com/faryal16/Noor-s_Kitchen.git",
  },
  {
    num: "10",
    caterogy: "🖥️ Authentication ",
    title: "Hekto Admin Dashboard",
    description:
      "A powerful admin dashboard for managing content, users, and data, built with Next.js. It features integrated authentication for secure access and Sanity CMS for managing and displaying dynamic content. The dashboard offers a clean, intuitive UI with functionalities such as user management, content creation, and real-time updates, ensuring smooth admin operations and content flexibility.",
      stack: [{ name: "Next.js" }, { name: "Tailwindcss" },{name: "Sanity CMS"}],
    image: "/assets/project/p10.png",
    live: "https://hekto-admin-dashboard.vercel.app/admin/dashboard",
    github: "https://github.com/faryal16/Hekto_Admin_Dashboard.git",
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
