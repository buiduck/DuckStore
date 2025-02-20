/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ containerStyles }) => {
  const [isActive, setIsActive] = useState("home");
  const navigate = useNavigate();

  const handleNavClick = (section) => {
    setIsActive(section);
    navigate("/"); // Quay về trang Home trước
    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }, 100); // Chờ React Router cập nhật trước khi cuộn xuống
  };

  return (
    <nav className={`${containerStyles}`}>
      <button
        onClick={() => handleNavClick("home")}
        className={isActive === "home" ? "active-link" : ""}
      >
        Home
      </button>
      <button
        onClick={() => handleNavClick("categories")}
        className={isActive === "categories" ? "active-link" : ""}
      >
        Categories
      </button>
      <button
        onClick={() => handleNavClick("shop")}
        className={isActive === "shop" ? "active-link" : ""}
      >
        Shop
      </button>
      <button
        onClick={() => navigate("/contact")}
        className={isActive === "contact" ? "active-link" : ""}
      >
        Contact
      </button>
    </nav>
  );
};

export default Navbar;
