"use client"

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const MenuLink = ({
  link,
}: {
  link: {
    text: string;
    path: string;
    active: string;
  };
}) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <Link
      href={link.path}
      className={`block mr-4 capitalize sm:text-lg hover-shadow-b hover:text-amber-500 transition duration-200 ${
        link.active === genre && "shadow-b"
      }`}
    >
      {link.text}
    </Link>
  );
};

export default MenuLink;
