import { lazy } from "react";

const Home = lazy(()=> import("./Home.js"))
const About = lazy(()=> import("./About.js"))
const Footer = lazy(()=> import("./Footer.js"))

export {Home,About,Footer}