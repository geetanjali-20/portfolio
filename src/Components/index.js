import { lazy } from "react";

const Home = lazy(()=> import("./Home.js"))
const About = lazy(()=> import("./About.js"))

export {Home,About}