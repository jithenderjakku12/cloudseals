import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src="/images/logo.svg" alt="CloudSeals" className="logo" />
        </Link>

        {/* NAV */}
        <nav className={`nav ${open ? "active" : ""}`}>
          <Link to="/" className="nav-link" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link to="/about" className="nav-link" onClick={() => setOpen(false)}>
            About Us
          </Link>

          {/* PRODUCTS */}
          <div className="dropdown">
            <button className="dropbtn" type="button">
              Guardian Eye - Products ▾
            </button>
            <div className="dropdown-content">
              <Link to="/complisight" onClick={() => setOpen(false)}>Complisight</Link>
              <Link to="/loadsight" onClick={() => setOpen(false)}>Loadsight</Link>
              <Link to="/carbonsight" onClick={() => setOpen(false)}>CarbonSight</Link>
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
                <Link to="/services/cloud-migration" className="dropdown-link">
                  Cloud <span className="submenu-arrow"> › </span>
                </Link>

                <div className="submenu">
                  <Link to="/services/cloud/cloud-migration" className="submenu-link" onClick={() => setOpen(false)}>
                    Cloud Migration
                  </Link>
                  <Link to="/services/cloud/cloud-services" className="submenu-link" onClick={() => setOpen(false)}>
                    Cloud Services
                  </Link>
                  <Link to="/services/cloud/devops-services" className="submenu-link" onClick={() => setOpen(false)}>
                    DevOps Services
                  </Link>
                </div>
              </div>

              <div className="dropdown-item">
                <Link to="/services/application_development" className="dropdown-link" onClick={() => setOpen(false)}>
                  Application Development
                </Link>
              </div>

              <div className="dropdown-item">
                <Link to="/services/data-aiops" className="dropdown-link" onClick={() => setOpen(false)}>
                  Q & A
                </Link>
              </div>

              <div className="dropdown-item">
                <Link to="/services/data-analytics" className="dropdown-link" onClick={() => setOpen(false)}>
                  Data Analytics
                </Link>
              </div>

              <div className="dropdown-item">
                <Link to="/services/it-consulting" className="dropdown-link" onClick={() => setOpen(false)}>
                  IT Consulting
                </Link>
              </div>
            </div>
          </div>

          <Link to="/industries" className="nav-link" onClick={() => setOpen(false)}>
            Industries 4.0
          </Link>

          <Link to="/insights" className="nav-link" onClick={() => setOpen(false)}>
            Insight
          </Link>

          <Link to="/contact" className="nav-link" onClick={() => setOpen(false)}>
            Contact
          </Link>

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
