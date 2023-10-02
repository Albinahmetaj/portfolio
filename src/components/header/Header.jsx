import React, { useState, useEffect } from "react";
import CTA from "./CTA";
import "./header.css";
import SelfImg from "../../assets/portfolio-pic2.png";
import HeaderSocials from "./HeaderSocials";

function Header() {
  const [showMouseScroll, setShowMouseScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowMouseScroll(false);
      } else {
        setShowMouseScroll(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div className="container header-container">
        <h5>Hej mitt namn är</h5>
        <h1>Albin Ahmetaj</h1>
        <h5 className="text-light">Fullstack Utvecklare</h5>
        <CTA />
        <HeaderSocials />
        <div className="self-portrait">
          <img
            src={SelfImg}
            alt="me"
            style={{ width: "310px", height: "500px" }}
          />
        </div>
        {showMouseScroll && (
          <>
            <a href="#contact" className="scroll-down">
              Scrolla Ner
            </a>
            <div class="mouse_scroll">
              <div>
                <span class="m_scroll_arrows unu"></span>
                <span class="m_scroll_arrows doi"></span>
                <span class="m_scroll_arrows trei"></span>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
