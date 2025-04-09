import { FaLeaf } from "react-icons/fa6";
const Footer = () => {
    return (
      <footer className=" text-accent/60 mt-12 py-4 ">
        <div className="container mx-auto text-center">
          <p className="text-sm flex justify-center items-center">
            &copy; {new Date().getFullYear()} CodeWithFairy <span className="text-accent/60"> <FaLeaf /></span>. All Rights Reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  