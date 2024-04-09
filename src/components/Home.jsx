import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Exist from "./Exist";
import Features from "./Features";
import Demo from "./Demo";
import Supporters from "./Supporters";
import Footer from "./Footer";
import Testimonials from "./Testimonials";

function Home(){
    return(
<>
        <HeroSection/>
        <Exist />
        <Features />
        <Demo />
        <Supporters />
        <Testimonials />

        </>
    );
}

export default Home;
