import React from "react";

const Navbar = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-stuck">
      <div className="container">
        <a
          className="navbar-brand pe-sm-3"
          style={{ color: "green", fontWeight: 900 }}
          href="index.html"
        >
          <div className="text-primary flex-shrink-0 me-2" />
          <img
            height="60px"
            width="60px"
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <path
            fill="currentColor"
            d="M35.6,29c-1.1,3.4-5.4,4.4-7.9,1.9c-2.3-2.2-6.1-3.7-9.4-3.7c-3.1,0-7.5,1.8-10,4.1c-2.2,2-5.8,1.5-7.3-1.1c-1-1.8-1.2-4.1,0-6.2l0.6-1.1l0,0c0.6-0.7,4.4-5.2,12.5-5.7c0.5,1.8,2,3.1,3.9,3.1c2.2,0,4.1-1.9,4.1-4.2s-1.8-4.2-4.1-4.2c-2,0-3.6,1.4-4,3.3H7.7c-0.8,0-1.3-0.9-0.9-1.6l5.6-9.8c2.5-4.5,8.8-4.5,11.3,0L35.1,24C36,25.7,36.1,27.5,35.6,29z"
          ></path>
          Chaperone
        </a>
        <div
          className="form-check form-switch mode-switch order-lg-2 me-3 me-lg-4 ms-auto"
          data-bs-toggle="mode"
        >
          <label className="form-check-label" for="theme-mode">
            <i className="ai-sun fs-lg"></i>
          </label>
          <label className="form-check-label" for="theme-mode">
            <i className="ai-moon fs-lg"></i>
          </label>
        </div>

        <button
          className="navbar-toggler ms-sm-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <nav className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav navbar-nav-scroll me-auto">
            <li className="nav-item dropdown">
              <a className="nav-link" href="#" aria-expanded="false">
                Home
              </a>
              <div className="dropdown-menu overflow-hidden p-0">
                <div className="d-lg-flex">
                  <div className="mega-dropdown-column pt-1 pt-lg-3 pb-lg-4"></div>
                  <div className="mega-dropdown-column pb-2 pt-lg-3 pb-lg-4"></div>
                  <div className="mega-dropdown-column position-relative border-start zindex-3"></div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                data-bs-auto-close="outside"
                aria-expanded="false"
                style={{ color: "orange", fontWeight: 600 }}
              >
                Plants & Pots
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                Tools
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link dropdown-toggle"
                href="components/typography.html"
              >
                Our Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="docs/getting-started.html">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="docs/getting-started.html">
                Our Story
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="docs/getting-started.html">
                FAQs
              </a>
            </li>
          </ul>
          <div className="profile1">
            <i class="fa-solid fa-user"></i>
          </div>

          <div className="profile2">
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
