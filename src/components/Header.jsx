import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [q, setQ] = useState("");

  // ✅ mobile-only dropdown toggles
  const [mobProductsOpen, setMobProductsOpen] = useState(false);
  const [mobServicesOpen, setMobServicesOpen] = useState(false);
  const [mobCloudOpen, setMobCloudOpen] = useState(false);

  const navigate = useNavigate();

  const isMobile = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 1000px)").matches;

  const closeAll = () => {
    setOpen(false);
    setSearchOpen(false);
    setMobProductsOpen(false);
    setMobServicesOpen(false);
    setMobCloudOpen(false);
  };

  const goSearch = () => {
    const query = q.trim();
    if (!query) return;
    navigate(`/search?q=${encodeURIComponent(query)}`);
    setSearchOpen(false);
    closeAll();
  };

  const toggleMenu = () => {
    const next = !open;
    setOpen(next);

    // ✅ when closing menu, close mobile dropdowns too
    if (!next) {
      setMobProductsOpen(false);
      setMobServicesOpen(false);
      setMobCloudOpen(false);
      setSearchOpen(false);
    }
  };

  const toggleProducts = () => {
    if (!isMobile()) return;
    setMobProductsOpen((v) => !v);
    setMobServicesOpen(false);
    setMobCloudOpen(false);
  };

  const toggleServices = () => {
    if (!isMobile()) return;
    setMobServicesOpen((v) => !v);
    setMobProductsOpen(false);
    setMobCloudOpen(false);
  };

  const toggleCloudSub = (e) => {
    if (!isMobile()) return;
    e.preventDefault(); // ✅ stop navigation on mobile
    setMobCloudOpen((v) => !v);
  };

  return (
    <header className="header">
      {/* ✅ Mobile overlay - tap outside to close */}
      <div
        className={`nav-overlay ${open ? "show" : ""}`}
        onClick={closeAll}
        aria-hidden="true"
      />

      <div className="header-inner">
        {/* LOGO */}
        <NavLink to="/" className="brand" onClick={closeAll}>
          <img src="/images/logo.svg" alt="CloudSeals" className="logo" />
        </NavLink>

        {/* NAV */}
        <nav className={`nav ${open ? "active" : ""}`}>
          <NavLink to="/" className="nav-link" onClick={closeAll}>
            Home
          </NavLink>

          <NavLink to="/about" className="nav-link" onClick={closeAll}>
            About Us
          </NavLink>

          {/* PRODUCTS */}
          <div className={`dropdown ${mobProductsOpen ? "m-open" : ""}`}>
            <button className="dropbtn" type="button" onClick={toggleProducts}>
              Guardian Eye - Products ▾
            </button>
            <div className="dropdown-content">
              <NavLink to="/complisight" onClick={closeAll}>
                Complisight
              </NavLink>
              <NavLink to="/loadsight" onClick={closeAll}>
                Loadsight
              </NavLink>
              <NavLink to="/carbonsight" onClick={closeAll}>
                CarbonSight
              </NavLink>
            </div>
          </div>

          {/* SERVICES */}
          <div className={`dropdown ${mobServicesOpen ? "m-open" : ""}`}>
            <button className="dropbtn" type="button" onClick={toggleServices}>
              Services ▾
            </button>

            <div className="dropdown-content">
              {/* CLOUD */}
              <div className={`dropdown-item has-submenu ${mobCloudOpen ? "m-subopen" : ""}`}>
                {/* desktop: normal link
                    mobile: click toggles submenu (preventDefault) */}
                <NavLink to="" className="dropdown-link" onClick={toggleCloudSub}>
                  Cloud <span className="submenu-arrow"> › </span>
                </NavLink>

                <div className="submenu">
                  <NavLink to="/services/cloud/cloud-migration" className="submenu-link" onClick={closeAll}>
                    Cloud Migration
                  </NavLink>
                  <NavLink to="/services/cloud/cloud-services" className="submenu-link" onClick={closeAll}>
                    Cloud Services
                  </NavLink>
                  <NavLink to="/services/cloud/devops-services" className="submenu-link" onClick={closeAll}>
                    DevOps Services
                  </NavLink>
                </div>
              </div>

              <div className="dropdown-item">
                <NavLink to="/services/application_development" className="dropdown-link" onClick={closeAll}>
                  Application Development
                </NavLink>
              </div>

              <div className="dropdown-item">
                <NavLink to="/services/data-aiops" className="dropdown-link" onClick={closeAll}>
                  Q A
                </NavLink>
              </div>

              <div className="dropdown-item">
                <NavLink to="/services/data-analytics" className="dropdown-link" onClick={closeAll}>
                  Data Analytics
                </NavLink>
              </div>

              <div className="dropdown-item">
                <NavLink to="/services/it-consulting" className="dropdown-link" onClick={closeAll}>
                  IT Consulting
                </NavLink>
              </div>
            </div>
          </div>

          <NavLink to="/industries" className="nav-link" onClick={closeAll}>
            Industries 4.0
          </NavLink>

          <NavLink to="/insights" className="nav-link" onClick={closeAll}>
            Insight
          </NavLink>

          <NavLink to="/contact" className="nav-link" onClick={closeAll}>
            Contact
          </NavLink>

          {/* SEARCH */}
          <form
            className={`nav-search ${searchOpen ? "open" : ""}`}
            onSubmit={(e) => {
              e.preventDefault();
              goSearch();
            }}
            onMouseEnter={() => setSearchOpen(true)}
            onMouseLeave={() => {
              if (!q) setSearchOpen(false);
            }}
          >
            <button type="submit" className="search-btn" aria-label="Search">
              <IoMdSearch className="search" size={22} />
            </button>

            <input
              className="search-input"
              type="text"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search services, products..."
              onFocus={() => setSearchOpen(true)}
            />
          </form>
        </nav>

        {/* MOBILE TOGGLE (☰ / ✕) */}
        <button className="nav-toggle" onClick={toggleMenu} aria-label={open ? "close menu" : "open menu"} type="button">
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
