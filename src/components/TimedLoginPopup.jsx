import React, { useEffect, useRef, useState } from "react";
import "../styles/TimedLoginPopup.css";

const LS_KEY = "cs_logged_in_v1";

export default function TimedLoginPopup({
  initialDelayMs = 10000, // 10s
  repeatDelayMs = 20000,  // 20s after closing if not logged in
}) {
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [mode, setMode] = useState("login"); // "login" | "contact"
  const [status, setStatus] = useState({ loading: false, error: "", ok: false });

  const t1 = useRef(null);
  const t2 = useRef(null);

  // form state
  const [login, setLogin] = useState({ email: "", password: "" });
  const [contact, setContact] = useState({ name: "", email: "", company: "", message: "" });

  // load login status
  useEffect(() => {
    const v = localStorage.getItem(LS_KEY);
    if (v === "1") setLoggedIn(true);
  }, []);

  // start timers
  useEffect(() => {
    if (loggedIn) return;

    // show after 10s
    t1.current = setTimeout(() => {
      setMode("login");
      setOpen(true);
    }, initialDelayMs);

    return () => {
      if (t1.current) clearTimeout(t1.current);
      if (t2.current) clearTimeout(t2.current);
    };
  }, [loggedIn, initialDelayMs]);

  function scheduleRepeat() {
    if (t2.current) clearTimeout(t2.current);
    t2.current = setTimeout(() => {
      // only show again if still not logged in
      const v = localStorage.getItem(LS_KEY);
      if (v !== "1") {
        setMode("contact"); // second time show contact (as you asked)
        setOpen(true);
      }
    }, repeatDelayMs);
  }

  function closePopup() {
    setOpen(false);
    setStatus({ loading: false, error: "", ok: false });

    // if not logged in, show again after 20s
    const v = localStorage.getItem(LS_KEY);
    if (v !== "1") scheduleRepeat();
  }

  // ESC closes
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") closePopup();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  async function handleLoginSubmit(e) {
    e.preventDefault();
    setStatus({ loading: true, error: "", ok: false });

    // basic validation
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(login.email);
    if (!emailOk || !login.password) {
      setStatus({ loading: false, error: "Enter valid email & password.", ok: false });
      return;
    }

    // TODO: Replace with real API call
    await new Promise((r) => setTimeout(r, 700));

    localStorage.setItem(LS_KEY, "1");
    setLoggedIn(true);
    setStatus({ loading: false, error: "", ok: true });

    // close after small delay
    setTimeout(() => {
      setOpen(false);
      setStatus({ loading: false, error: "", ok: false });
    }, 600);
  }

  async function handleContactSubmit(e) {
    e.preventDefault();
    setStatus({ loading: true, error: "", ok: false });

    if (!contact.name || !contact.email || !contact.company || !contact.message) {
      setStatus({ loading: false, error: "Fill all fields.", ok: false });
      return;
    }

    // TODO: Replace with real API call
    await new Promise((r) => setTimeout(r, 700));

    setStatus({ loading: false, error: "", ok: true });
    setContact({ name: "", email: "", company: "", message: "" });

    setTimeout(() => {
      closePopup();
    }, 700);
  }

  if (!open || loggedIn) return null;

  return (
    <div className="tp-overlay" role="dialog" aria-modal="true">
      <div className="tp-backdrop" onClick={closePopup} />

      <div className="tp-modal">
        <button className="tp-x" onClick={closePopup} aria-label="Close">✕</button>

        <div className="tp-head">
          <div className="tp-badge">{mode === "login" ? "Login Required" : "Contact Us"}</div>
          <h3 className="tp-title">
            {mode === "login" ? "Continue with your account" : "Let’s talk about your needs"}
          </h3>
          <p className="tp-sub">
            {mode === "login"
              ? "For a better experience, please login to continue browsing."
              : "If you’re not ready to login, send your request and we’ll contact you."}
          </p>
        </div>

        {/* tabs */}
        <div className="tp-tabs">
          <button
            className={`tp-tab ${mode === "login" ? "tp-tab--on" : ""}`}
            onClick={() => setMode("login")}
            type="button"
          >
            Login
          </button>
          <button
            className={`tp-tab ${mode === "contact" ? "tp-tab--on" : ""}`}
            onClick={() => setMode("contact")}
            type="button"
          >
            Contact
          </button>
        </div>

        {status.error && <div className="tp-alert tp-alert--bad">{status.error}</div>}
        {status.ok && <div className="tp-alert tp-alert--ok">Done ✅</div>}

        {/* content */}
        {mode === "login" ? (
          <form className="tp-form" onSubmit={handleLoginSubmit}>
            <div className="tp-field">
              <label>Email</label>
              <input
                value={login.email}
                onChange={(e) => setLogin((s) => ({ ...s, email: e.target.value }))}
                placeholder="you@company.com"
              />
            </div>

            <div className="tp-field">
              <label>Password</label>
              <input
                type="password"
                value={login.password}
                onChange={(e) => setLogin((s) => ({ ...s, password: e.target.value }))}
                placeholder="••••••••"
              />
            </div>

            <button className="tp-btn" type="submit" disabled={status.loading}>
              {status.loading ? "Logging in..." : "Login"}
            </button>

            <div className="tp-note">
              Don’t have access? Switch to <b>Contact</b> and we’ll reach you.
            </div>
          </form>
        ) : (
          <form className="tp-form" onSubmit={handleContactSubmit}>
            <div className="tp-grid2">
              <div className="tp-field">
                <label>Name</label>
                <input
                  value={contact.name}
                  onChange={(e) => setContact((s) => ({ ...s, name: e.target.value }))}
                  placeholder="Your name"
                />
              </div>

              <div className="tp-field">
                <label>Email</label>
                <input
                  value={contact.email}
                  onChange={(e) => setContact((s) => ({ ...s, email: e.target.value }))}
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div className="tp-field">
              <label>Company</label>
              <input
                value={contact.company}
                onChange={(e) => setContact((s) => ({ ...s, company: e.target.value }))}
                placeholder="Company name"
              />
            </div>

            <div className="tp-field">
              <label>Message</label>
              <textarea
                value={contact.message}
                onChange={(e) => setContact((s) => ({ ...s, message: e.target.value }))}
                placeholder="Tell us what you need (cloud, devops, sre, security)…"
              />
            </div>

            <button className="tp-btn" type="submit" disabled={status.loading}>
              {status.loading ? "Sending..." : "Send Contact"}
            </button>

            <div className="tp-note">
              We reply fast. Your details stay confidential.
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
