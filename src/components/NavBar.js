import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {links.map((link, i) => (
        <a href={`#${link}`} key={i}>
          {link}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;
