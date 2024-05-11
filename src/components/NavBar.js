import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkDisplay = links.map((link, index) => {
    return <a href={link} key={index}>{link}</a>
  })

  return <nav>{ linkDisplay/* display an <a> tag for each link here */}</nav>;
}

export default NavBar;
