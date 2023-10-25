const Navbar = () => {
  return (
    <nav
    className="fixed top-0 left-0 z-50 flex items-center justify-between w-full px-14 py-6 font-medium text-2xl text-black"
    >
      <a href="#">Home</a>
      <a href="#experience">Experience</a>
      <a href="#projects">My Projects</a>
      <a href="#contact-me">Contact Me</a>
    </nav>
  );
};

export default Navbar;
