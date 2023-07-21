import { navbarLinks } from "@/utils/links";
import { DarkSwitch, Logo, NavbarLink } from "../index";

const Navbar = () => {
    return (  
        <section>
            <nav className="container mx-auto flex justify-between items-center h-[5rem]">
                <div className="flex items-center">
                    <Logo />
                </div>
                     
                <div className="flex items-center">
                    {navbarLinks.map((link, index) => <NavbarLink key={index} link={link}  />)}
                    <DarkSwitch />
                </div>
            </nav>
        </section>
    );
}
 
export default Navbar;