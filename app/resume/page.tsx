"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython ,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { LiaPython } from "react-icons/lia"

// about data

const about = {
  title: "About me",
  description:
    "Hello,I'm a Rising Front-end Developer from GIAIC(Governor Sindh Initiative for. Artificial Intelligence, Web 3.0 & Metaverse). I'm practicing many Projects, marketing websites and advertisements.I've successfully passed my Quarter and Dive into another one. I also learn Graphic Designing. ",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Faryal Junaid",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+92) 342 295 0881 ",
    },
    {
      fieldName: "Experience",
      fieldValue: "10+ Years",
    },
    {
      fieldName: "Email",
      fieldValue: "bintefarzana1992@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "pakistani",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: (
        <a 
          href="https://www.linkedin.com/in/faryal-junaid-06780b2b4/"
          target="_blank" 
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Faryal Junaid
        </a>
      ),
    },
    {
      fieldName: "GitHub",
      fieldValue: (
        <a 
          href="https://github.com/faryal16"
          target="_blank" 
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          faryal16
        </a>
      ),
    },
    {
      fieldName: "Twitter",
      fieldValue: (
        <a 
          href="https://x.com/faryal_jb143?t=oLBnYXTJam7-70gzGBUR1g&s=09"
          target="_blank" 
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          faryal_jb143
        </a>
      ),
    },
    {
      fieldName: "Freelance",
      fieldValue: "Avaliable",
    },
    {
      fieldName: "Languages",
      fieldValue: "English , Urdu",
    },
  ],
};

// experiences data
const experience = {
  icon: "/icons,badge.svg,cap.svg",
  title: "My Experience",
  description:
    "I have 10 Years of experience in teaching.i taught Many students in my life.i Love to teach cause its a only profession that make a child to be anything in his life.",
  items: [
    {
      company: "CodeAlpha",
      position: "Front-End Developer Intern",
      duration: "Summer 2024",
    },
    {
      company: "Math",
      position: "Online Tutor",
      duration: "2020 - Present",
    },
    {
      company: "English",
      position: "Online Tutor",
      duration: "2020 - Present",
    },
    {
      company: "Private Institutes",
      position: "Teacher",
      duration: "2013 - 2020",
    },
  ],
};

// education data
const education = {
  icon: "/icons,resume,cap.svg",
  title: "My Education",
  description:
    "I have not stopped learning cause  thoughts you can not complete your learning process.there is somthing always left to learn behind.so go on and get more.",
  item: [
    {
      instituion: "Online Course",
      degree: "Progrmming Course",
      duration: "2021-2022",
    },
    {
      instituion: "Online Source",
      degree: "Front-End Develop Course",
      duration: "2022-2023",
    },
    {
      instituion: "Karachi Univercity",
      degree: "Master's In Islamic Studies",
      duration: "2016 - 2018",
    },
    {
      instituion: "Karachi Univercity",
      degree: "Beachloar's In Commerce",
      duration: "2014 - 2016",
    },
    {
      instituion: "Sir Syed Govt Girls College",
      degree: "Beachloar's In Arts",
      duration: "2011 - 2013",
    },
    {
      instituion: "American Institute of Computers",
      degree: "MSoffice , software",
      duration: "2010 -2012",
    },
  ],
};

// skills data
const skills = {
  title: "My Skills",
  description:
    "Technical skills are the specialized knowledge and expertise required to perform specific tasks and use specific tools and programs in real-world situations.",
  skillList: [
    {
      icon: <FaPython />,
      name: "Python"
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import {  motion } from "framer-motion";


const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: .1, duration: 0.1, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "
    >
    <div className="container mx-auto">
      <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About Me</TabsTrigger>
        </TabsList>

        {/* content */}
        <div className="min-h-[70vh] w-full">
          {/* experience */}
          <TabsContent value="experience" className="w-full" >
      <div className="flex flex-col  gap-[30px] text-center xl:text-left ">
        <h3 className="text-4xl font-bold text-accent hover:underline">{experience.title}</h3>
        <p className="max-w-[600px] text/white/60 mx-auto xl:m-0 " >{experience.description}</p>
        <ScrollArea className="h-[400px]" >
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]" >
            {experience.items.map((item, index) => {
              return (
                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                  <span className="text-accent">{item.duration} </span>
                  <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                  <div className="flex items-center gap-3">
                    {/* dot */}
                    <span className="w-[10px] h-[10px] rounded-full bg-accent " ></span>
                    <p className="text-white/60">{item.company}</p>
                  </div>

                </li>
              )
            })}

          </ul>
        </ScrollArea>

      </div>
          </TabsContent>

          {/* education */}
          <TabsContent value="education" className="w-full" >
          <div className="flex flex-col  gap-[30px] text-center xl:text-left ">
        <h3 className="text-4xl font-bold text-accent hover:underline">{education.title}</h3>
        <p className="max-w-[600px] text/white/60 mx-auto xl:m-0 " >{education.description}</p>
        <ScrollArea className="h-[400px]" >
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]" >
            {education.item.map((item, index) => {
              return (
                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                  <span className="text-accent">{item.duration} </span>
                  <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                  <div className="flex items-center gap-3">
                    {/* dot */}
                    <span className="w-[10px] h-[10px] rounded-full bg-accent " ></span>
                    <p className="text-white/60">{item.instituion}</p>
                  </div>

                </li>
              )
            })}

          </ul>
        </ScrollArea>

      </div>

          </TabsContent>
          {/* skills */}
          <TabsContent value="skills" className="w-full h-full" >
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl text-bold text-accent hover:underline  ">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] ">
                {skills.skillList.map((skill, index) => {
                  return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group ">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300 ">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize text-xl text-accent">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  )
                })}
              </ul>
            </div>
          </TabsContent>
          
          {/* about */}
          <TabsContent value="about" className="w-full text-center xl:text-left" >
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold text-accent hover:underline">{about.title}</h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
            {about.description}
            </p>
            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
              {about.info.map((item ,index) =>{
                return (
                  <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
<span className="text-white/60">{item.fieldName}</span>
<span className="text-xl hover:underline hover:text-accent">{item.fieldValue}</span>
                  </li>
                )
              })}
            </ul>
            </div>
            
          </TabsContent>
        </div>
      </Tabs>
    </div>
    </motion.div>
  );
};

export default Resume;
