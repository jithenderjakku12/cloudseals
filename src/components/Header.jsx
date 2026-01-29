import React, { useState } from "react";
import { NavLink,Link, useNavigate } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [q, setQ] = useState("");

  const navigate = useNavigate();

  const goSearch = () => {
    const query = q.trim();
    if (!query) return;

    // go to search page with query param
    navigate(`/search?q=${encodeURIComponent(query)}`);
    setSearchOpen(false);
    setOpen(false);
  };

  return (
    <header className="header">
      <div className="header-inner">
        {/* LOGO */}
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <img src="/images/logo.svg" alt="CloudSeals" className="logo" />
        </NavLink>

        {/* NAV */}
        <nav className={`nav ${open ? "active" : ""}`}>
          <NavLink to="/" className="nav-link" onClick={() => setOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/about" className="nav-link" onClick={() => setOpen(false)}>
            About Us
          </NavLink>

          {/* PRODUCTS */}
          <div className="dropdown">
            <button className="dropbtn" type="button">
              Guardian Eye - Products ▾
            </button>
            <div className="dropdown-content">
              <NavLink to="/complisight" onClick={() => setOpen(false)}>Complisight</NavLink>
              <NavLink to="/loadsight" onClick={() => setOpen(false)}>Loadsight</NavLink>
              <NavLink to="/carbonsight" onClick={() => setOpen(false)}>CarbonSight</NavLink>
            </div>
          </div>

          {/* SERVICES */}
          <div className="dropdown">
            <button className="dropbtn" type="button">
              Services ▾
            </button>

            <div className="dropdown-content">
              {/* CLOUD */}
              <div className="dropdown-item has-submenu">
                <NavLink to="/services/cloud-migration" className="dropdown-link">
                  Cloud <span className="submenu-arrow"> › </span>
                </NavLink>

                <div className="submenu">
                  <NavLink to="/services/cloud/cloud-migration" className="submenu-link" onClick={() => setOpen(false)}>
                    Cloud Migration
                  </NavLink>
                  <NavLink to="/services/cloud/cloud-services" className="submenu-link" onClick={() => setOpen(false)}>
                    Cloud Services
                  </NavLink>
                  <NavLink to="/services/cloud/devops-services" className="submenu-link" onClick={() => setOpen(false)}>
                    DevOps Services
                  </NavLink>
                </div>
              </div>

              <div className="dropdown-item">
                <NavLink to="/services/application_development" className="dropdown-link" onClick={() => setOpen(false)}>
                  Application Development
                </NavLink>
              </div>

              <div className="dropdown-item">
                <NavLink to="/services/data-aiops" className="dropdown-link" onClick={() => setOpen(false)}>
                  Q & A
                </NavLink>
              </div>

              <div className="dropdown-item">
                <NavLink to="/services/data-analytics" className="dropdown-link" onClick={() => setOpen(false)}>
                  Data Analytics
                </NavLink>
              </div>

              <div className="dropdown-item">
                <NavLink to="/services/it-consulting" className="dropdown-link" onClick={() => setOpen(false)}>
                  IT Consulting
                </NavLink>
              </div>
            </div>
          </div>

          <NavLink to="/industries" className="nav-link" onClick={() => setOpen(false)}>
            Industries 4.0
          </NavLink>

          <NavLink to="/insights" className="nav-link" onClick={() => setOpen(false)}>
            Insight
          </NavLink>

          <NavLink to="/contact" className="nav-link" onClick={() => setOpen(false)}>
            Contact
          </NavLink>

          {/* ✅ SEARCH (form submit + enter + click icon) */}
          <form
            className={`nav-search ${searchOpen ? "open" : ""}`}
            onSubmit={(e) => {
              e.preventDefault();
              goSearch();
            }}
            onMouseEnter={() => setSearchOpen(true)}
            onMouseLeave={() => {
              if (!q) setSearchOpen(false); // if user typed, keep open
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

        {/* MOBILE TOGGLE */}
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="menu" type="button">
          ☰
        </button>
      </div>
    </header>
  );
}
