"use client";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Web development is the process of building, programming, and maintaining websites and web applications. Website developers use various programming languages, like HTML, CSS, and JavaScript, to develop websites and web applications. Keep Reading Learn More About Web Design and Development.",
    href: "",
  },
  {
    num: "02",
    title: "Graphic Design",
    description:
      "Graphic design is a profession, academic discipline and applied art whose activity consists in projecting visual communications intended to transmit specific messages to social groups, with specific objectives. Graphic design is an interdisciplinary branch of design and of the fine arts.",
    href: "",
  },
  {
    num: "03",
    title: "Teaching",
    description:
      "Teaching is the practice implemented by a teacher aimed at transmitting skills (knowledge, know-how, and interpersonal skills) to a learner, a student, or any other audience in the context of an educational institution. Teaching is closely related to learning, the student's activity of appropriating this knowledge.",
    href: "",
  },
  {
    num: "04",
    title: "UI/UX Designer",
    description:
      "UI designers work on individual pages, buttons, and interactions; making sure they are polished and functional. UX designers take a more high-level view of a product or service, ensuring the collective user flow of a site, service, or app is fully realized and consistent.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="flex flex-col justify-center items-center min-h-[80vh] py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: .1, duration: 0.1, ease: "easeInOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex-col flex justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div
                    className="text-4xl font-extrabold text-outline text-transparent
             group-hover:text-outline-hover transition-all duration-500"
                  >
                    {service.num}{" "}
                  </div>

                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white
             group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 "
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />{" "}
                  </Link>
                </div>
                {/* title */}
                <h2
                  className="text-[32px] font-bold leading-none text-white group-hover:text-accent
            transition-all duration-500 "
                >
                  {service.title}
                </h2>
                {/* decription */}
                <p className=""> {service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
