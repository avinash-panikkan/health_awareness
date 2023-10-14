import React from "react";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  if (location.pathname == "/") {
    return null;
  } else {
    return <div className="bg-secondary w-full flex flex-col pr-4 items-end h-32 pt-5 pl-10 text-white">
        <p>Contact Us: xxxxxxxxxx</p>
        <p>Email: health@xyz.com</p>
    </div>;
  }
}
export default Footer;
