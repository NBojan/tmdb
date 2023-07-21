import { MenuLink } from "../index";
import { menuLinks } from "@/utils/links";

const Menu = () => {
    return (  
        <section className="bg-amber-200 dark:bg-gray-500">
            <div className="container mx-auto flex justify-center items-center h-[4rem]">
                {menuLinks.map((link, index) => <MenuLink key={index} link={link} />)}
            </div>
        </section>
    );
}
 
export default Menu;