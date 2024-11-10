import Link from "next/link";
import { Button } from "./ui/button";
import { FaLeaf } from "react-icons/fa6";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
      <header className="py-8 xl:py-12 text-white ">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
        
        <h1 className="4xl font-semibold flex  ">
            CodeWithFairy <span className="text-accent mt-2"> <FaLeaf /></span></h1></Link>

            {/*desktop nav hire button  */}
<div className="hidden xl:flex items-center gap-8">
    <Nav />
    <Link href="/contact">
    <Button>Hire Me</Button></Link>
</div>

{/* mobile Nav */}
<div className="xl:hidden">
  <MobileNav />
  </div>


      </div>
      </header>
  )
}

export default Header