"use client";
import { useEffect, useRef } from "react";
import "./cursor.css";
import { gsap } from "gsap";

const Cursor = () => {
  const csr = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      if (e.target && (e.target as HTMLElement).tagName === "A") {
        gsap.to(csr.current, {
          scale: 4,
        });
        csr.current?.classList.add("active");
      } else {
        gsap.to(csr.current, {
          scale: 1,
        });
        csr.current?.classList.remove("active");
      }
      gsap.to(csr.current, {
        x: clientX,
        y: clientY,
      });
    });
  }, []);

  return <div className="cursor" ref={csr}></div>;
};

export default Cursor;
