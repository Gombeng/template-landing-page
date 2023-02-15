import { useState } from "react";

const Navbar = () => {

  const [activeId = 1, setActiveId] = useState();

  const navLinks = [
    { id: 1, text: "Home", href: '#home' },
    { id: 2, text: "About", href: '#about' },
    { id: 3, text: "Features", href: '#features' },
    { id: 4, text: "Works", href: '#works' },
    { id: 5, text: "Blogs", href: '#blogs' },
    { id: 6, text: "Contact", href: '#contact' },
  ];

  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary d-flex justify-content-between px-3 px-sm-5 position-fixed w-100 shadow-lg">

      <a className="navbar-brand fw-bold" href="#home" onClick={() => setActiveId(1)}>Navbar</a>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse flex-grow-0" id="navbar">
        <div className="navbar-nav">
          {navLinks.map(({ id, href, text }) => (
            <a key={id} style={{ color: '#b4b4b4' }} href={href} className={activeId === id ? "nav-link text-dark fw-bold" : "nav-link navHover"} onClick={() => setActiveId(id)}>{text}</a>
          ))}
        </div>
      </div>

    </nav>
  )
}

export default Navbar