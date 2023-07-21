import Link from "next/link";

const Logo = () => {
    return (  
        <Link href="/" className="flex items-center">
            <span className="text-2xl bg-amber-500 rounded py-1 px-2 mr-1">IMDb</span>
            <span className="text-lg hidden sm:block">Clone</span>
        </Link>
    );
}
 
export default Logo;