import { useState, useEffect } from "react";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [color, setColor] = useState();

  const controlNavbar = () => {
    if (window.scrollY > 50) {
      // if scroll down hide the navbar
      setShow(true);
    } else {
      // if scroll up show the navbar
      setShow(false);
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    console.log("ScrollY:", lastScrollY);
    console.log("Window Scroll:", window.scrollY);
    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0  left-0 z-50 flex items-center text-black justify-around w-full px-8 pt-8 pb-4 font-medium text-base md:text-lg ${
        show ? "bg-white " : "bg-transparent "
      }`}
    >
      <a href="#home">Home</a>
      <a href="#experience">Experience</a>
      <a href="#projects">My Projects</a>
      <a href="#connect-with-me">Connect With Me</a>
    </nav>
  );
};

export default Navbar;
