import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  // ✅ Edit these anytime
  const company = {
    name: "CloudSeals",
    tagline: "Agentic AI for Safe & Compliant Operations",
    about:
      "CloudSeals builds enterprise-grade AI agents for safety, compliance, and automation across industries.",
    email: "hello@cloudseals.com",
    phone: "+91 XXXXX XXXXX",
  };

  // ✅ Matches your Header routes
  const products = [
    { label: "CompliSight", to: "/complisight" },
    { label: "LoadSight", to: "/loadsight" },
    { label: "CarbonSight", to: "/carbonsight" },
  ];

  // ✅ Matches your Header routes (Services dropdown)
  const services = [
    { label: "Cloud Migration", to: "/services/cloud/cloud-migration" },
    { label: "Cloud Services", to: "/services/cloud/cloud-services" },
    { label: "DevOps Services", to: "/services/cloud/devops-services" },
    { label: "Application Development", to: "/services/application_development" },
    { label: "Data Analytics", to: "/services/data-analytics" },
    { label: "IT Consulting", to: "/services/it-consulting" },
    { label: "Q & A", to: "/services/data-aiops" },
  ];

  // ✅ Main pages you already have in navbar
  const companyLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Industries 4.0", to: "/industries" },
    { label: "Insights", to: "/insights" },
    { label: "Contact", to: "/contact" },
  ];

  // Optional (keep as # until you create these pages)
  const explore = [
    { label: "Privacy", to: "#" },
    { label: "Terms", to: "#" },
  ];

  return (
    <footer className="cs-footer">
      <div className="cs-footer__inner">
        {/* LEFT */}
        <div className="cs-footer__left">
          <div className="cs-footer__brand">
            <img
              src="/images/logo.svg"
              alt={company.name}
              className="cs-footer__logo"
            />
            <div className="cs-footer__brandText">
              <div className="cs-footer__name">{company.name}</div>
              <div className="cs-footer__tagline">{company.tagline}</div>
            </div>
          </div>

          <p className="cs-footer__about">{company.about}</p>

          <div className="cs-footer__countries">
            <img src="/images/USA.svg" alt="" />
            <img src="/images/INDIA.svg" alt="" />
            <img src="/images/UK.svg" alt="" />
          </div>

          <div className="cs-footer__contact">
            <a className="cs-footer__contactLink" href={`mailto:${company.email}`}>
              {company.email}
            </a>
            <span className="cs-footer__sep">|</span>
            <a className="cs-footer__contactLink" href={`tel:${company.phone}`}>
              {company.phone}
            </a>
          </div>
        </div>

        {/* COLUMNS */}
        <div className="cs-footer__cols">
          <div className="cs-footer__col">
            <h4>Products</h4>
            <ul>
              {products.map((x) => (
                <li key={x.label}>
                  <Link to={x.to}>{x.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="cs-footer__col">
            <h4>Services</h4>
            <ul>
              {services.map((x) => (
                <li key={x.label}>
                  <Link to={x.to}>{x.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="cs-footer__col">
            <h4>Company</h4>
            <ul>
              {companyLinks.map((x) => (
                <li key={x.label}>
                  <Link to={x.to}>{x.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT */}
        <div className="cs-footer__right">
          <h4>Subscribe</h4>
          <p className="cs-footer__muted">Subscribe to our monthly Newsletter</p>

          <button className="cs-footer__subscribeBtn" type="button">
            Subscribe Now <span className="cs-footer__arrow">›</span>
          </button>

          <div className="cs-footer__follow">
            <div className="cs-footer__followTitle">Follow us on</div>
            <div className="cs-footer__socials">
              <a className="cs-social" href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a className="cs-social" href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a className="cs-social" href="#" aria-label="X">
                <FaXTwitter />
              </a>
              <a className="cs-social" href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a className="cs-social" href="#" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="cs-footer__badges">
            <div className="cs-badge">
              ISO<br />9001
            </div>
            <div className="cs-badge">
              ISO<br />27001
            </div>
          </div>
        </div>
      </div>

      <div className="cs-footer__bottom">
        <div>© {new Date().getFullYear()} CloudSeals. All rights reserved.</div>

        <div className="cs-footer__bottomLinks">
          {explore.map((x) => (
            <a key={x.label} href={x.to}>
              {x.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
