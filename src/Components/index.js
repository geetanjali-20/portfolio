import { lazy } from "react";

const Home = lazy(()=> import("./Home.js"))
const About = lazy(()=> import("./About.js"))
const Skills = lazy(()=> import("./Skills.js"))
const Project = lazy(() => import('./Project.js'))
const Footer = lazy(()=> import("./Footer.js"))
const Contact = lazy(()=> import("./Contact.js"))

export {Home,About,Skills,Project,Footer, Contact}