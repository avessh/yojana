import React from "react";
import "../Navbar/navbar.css";

//company main logo
import company_logo from "../../assets/logo/logo.jpg";

function Navbar() {
  // these are all the items of navigation bar.

  //company logo
  const logo = company_logo;

  return (
    <div>
      <section id="navbar-section">
        <nav class="navbar navbar-expand-lg navbar-light" id="navbar">
        
          <a class="navbar-brand navbar-font"  href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className=" reroar container justify-content-center" >
          <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a
                  class="nav-link navbar-section-font "
                  id="navbar-section-text"
                  href="#"
                >
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link navbar-section-font"
                  id="navbar-section-text"
                  href="#"
                >
                  Link
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link navbar-section-font dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ color: "#d3d3d3" , "padding": "10"}}
                >
                  Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
          </div>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default Navbar;
