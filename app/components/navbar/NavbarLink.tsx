import Link from "next/link";

const NavbarLink = ({
  link,
}: {
  link: {
    text: string;
    url: string;
    icon: JSX.Element
  };
}) => {
  return (
    <Link href={link.url} className="block uppercase mr-4 md:mr-6 lg:mr-8 hover:text-amber-600 transition-colors">
        <span className="hidden sm:inline-block">{link.text}</span>
        <span className="sm:hidden text-2xl">{link.icon}</span>
    </Link>
  );
};

export default NavbarLink;
