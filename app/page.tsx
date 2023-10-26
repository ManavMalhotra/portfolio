"use client";
import Image from "next/image";
import Link from "next/link";
import Cursor from "./Components/utils/Cursor";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Socials from "./Components/Socials";
import Intro from "./Components/Intro";
import Navbar from "./Components/Navbar";

export default function Home() {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
    options={{
      smooth: true,
    }}
    containerRef={containerRef}
    >
      <Navbar />

    <Cursor />
    
      <main
        className="flex flex-col min-h-screen px-24 pb-28"
        data-scroll-container
        ref={containerRef}
      >
        <Intro />
        <Experience />
        <Projects />
        <Socials />
      </main>
    </LocomotiveScrollProvider>
  );
}
