import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../../main";

const Footer = () => {
  const isDashboard = useLocation("http://localhost:5173/dashboard");
  const { mode, setMode } = useContext(Context);
  const handleFooter = () => {
    setShow(!show);
  };

  return (
    <footer
      className={
        isDashboard.pathname === "/dashboard"
          ? "hideFooter"
          : mode === "light"
          ? "light-footer"
          : "dark-footer"
      }
    >
      <div className="container">
        <div className="about">
          <h3>About</h3>
          <p>
           SweConnect is the Software Engineering Department's blog site, providing insightful articles, valuable resources,
           and the latest departmental updates.
           It is a platform for students, faculty, 
           and alumni to share knowledge, engage with the community, and stay informed.
          </p>
          <p>
            <span>Email:</span>sweconnect@gmail.com
          </p>
         
        </div>
        <div className="quick_links">
          <h3>Quick Links</h3>
          <ul>
          <Link to={"/"} onClick={handleFooter}>HOME</Link>
            <Link to={"/blogs"}>Blogs</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/dashboard"}>Dashboard</Link>
          </ul>
        </div>
        <div className="categories">
          <h3>Categories</h3>
          <ul>
            <li>Lifestyle</li>
            <li>Technology</li>
            <li>Sports</li>
            <li>Travel</li>
            <li>Business</li>
            <li>Education</li>
          </ul>
        </div>
       
      </div>

    </footer>
  );
};

export default Footer;
