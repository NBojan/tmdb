import { AiFillInfoCircle, AiFillHome } from "react-icons/ai";

export const navbarLinks = [
    {
        text: "home",
        url: "/",
        icon: <AiFillHome/>
    },
    {
        text: "about",
        url: "/about",
        icon: <AiFillInfoCircle/>
    },
]

export const menuLinks = [
    {
        text: "trending",
        path: "/?genre=trending",
        active: 'trending'
    },
    {
        text: "top rated",
        path: "/?genre=topRated",
        active: "topRated"
    },
]