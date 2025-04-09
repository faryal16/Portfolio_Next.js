"use client"
import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"
import Typewriter from "typewriter-effect";
import Link from "next/link"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Herosection = () => {
    return (
        <section className="h-full px-24 xl:py-8">
          <div className="container mx-auto  h-full">
            
            <div className="flex flex-col xl:flex-row items-center justify-between">
              {/* text */}
              <div className="text-center xl:text-left order-2 xl:order-none">
                <span className="text-4xl text-accent">ASPIRING WEB DEVELOPER!!</span>
                <br />
                <br />
                <h1 className="text-5xl ">
                  Hello!! It&#39;s me <br /><br /> <span className="h1">Faryal Junaid </span>
              </h1>
                <br />
              
            <div className="flex items-center text-5xl gap-4 mb-4">A 
              <h2 className="h3  text-accent"> 
               <Typewriter
            
            options={{
              strings: [
                "Front-end Developer!!",
                "Junior Web Developer",
                "Programmer!!",
                "UI/UX Designer!!",
                "Aspiring Python Developer",
                "Web Developer!!",
                "Coder!!",
                "Online Tutor!!"
              ],
              autoStart: true,
              loop: true,
              
            }}
            />
              </h2>
            </div>
            
            <p className="max-w-[500px] mb-9  text-white/80">Welcome to my portfolio!!
    showcasing my expertise and accomplishments.
    I&#39;ve developed a passion for delivering high-quality work
    that exceeds expectations.</p>
    
    {/* button and socials */}
    <div className="flex items-center flex-col xl:flex-row gap-8">
    
    <Button variant="outline" size="lg" className="uppercase flex items-center gap-3">
      <a href="/CV.pdf.pdf"><span className="flex gap-4 hover:text-base">Download CV<FiDownload className="text-xl hover:text-2xl"/></span></a>
      </Button>
      <div className="mb-8 xl:mb-0 flex gap-8  ">
        
      <Link href= "https://github.com/faryal16" className="Link">  <FaGithub  /> </Link>
        <Link href="https://www.linkedin.com/in/faryal-junaid-06780b2b4/" className="Link"> <FaLinkedin /></Link> 
        <Link href="https://www.instagram.com/bint_e_farzana/" className="Link"> <FaInstagram /></Link> 
        <Link href="https://x.com/faryal_jb143?t=oLBnYXTJam7-70gzGBUR1g&s=09" className="Link"> <FaXTwitter /></Link>  
      </div>
    </div>
    
              </div>
              {/* photo */}
              <div className="order-1 xl:order-none mb-8 xl:mb-0">
                <Photo/>
              </div>
    
            </div>
          </div>
          <Stats />
        </section>
      )
}

export default Herosection