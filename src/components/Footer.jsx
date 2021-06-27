import React from "react";

function Footer() {
  var thisYear = new Date().getFullYear();
  return (
    <footer>
      <p> © Copyright {thisYear} by ShapeAI </p>
    </footer>
  );
}

export default Footer;
