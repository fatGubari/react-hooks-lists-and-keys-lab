import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  let nav = links.map((link) => (
    <a href={"#" +link } key={link}>{link}</a>
  ))
  return (<nav>
    {nav}
  </nav>);
}

export default NavBar;
