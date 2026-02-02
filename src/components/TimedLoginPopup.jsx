import React, { useEffect, useRef, useState } from "react";
import "../styles/TimedLoginPopup.css";

const LS_KEY = "cs_logged_in_v1";

const PURPOSE_OPTIONS = [
  { value: "complisight", label: "CompliSight" },
  { value: "loadsight", label: "LoadSight" },
  { value: "carbonsight", label: "CarbonSight" },
  { value: "guardianeye", label: "GuardianEye" },
  { value: "ai_services", label: "AI Services" },
  { value: "other", label: "Other" },
];

export default function TimedLoginPopup({
  initialDelayMs = 10000,
  repeatDelayMs = 20000,
  apiBaseUrl = "", // ✅ Vercel-ready (same domain). For local backend use: "http://localhost:4000"
}) {
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [mode, setMode] = useState("login"); // login | contact
  const [status, setStatus] = useState({ loading: false, error: "", ok: false });

  const t1 = useRef(null);
  const t2 = useRef(null);

  const [lead, setLead] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "complisight",
  });

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    purpose: "complisight",
    message: "",
  });

  // ✅ validation rules:
  const emailOk = (email) => /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email.trim());
  const phoneOk = (phone) => /^\d{10}$/.test(phone);

  useEffect(() => {
    const v = localStorage.getItem(LS_KEY);
    if (v === "1") setLoggedIn(true);
  }, []);

  useEffect(() => {
    if (loggedIn) return;

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
      const v = localStorage.getItem(LS_KEY);
      if (v !== "1") {
        setMode("contact");
        setOpen(true);
      }
    }, repeatDelayMs);
  }

  function closePopup() {
    setOpen(false);
    setStatus({ loading: false, error: "", ok: false });

    const v = localStorage.getItem(LS_KEY);
    if (v !== "1") scheduleRepeat();
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") closePopup();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  async function postJson(path, payload) {
    const res = await fetch(`${apiBaseUrl}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data?.error || "Request failed");
    return data;
  }

  async function handleLeadSubmit(e) {
    e.preventDefault();
    setStatus({ loading: true, error: "", ok: false });

    if (!lead.name) return setStatus({ loading: false, error: "Please enter your name.", ok: false });
    if (!emailOk(lead.email)) return setStatus({ loading: false, error: "Email must be a valid @gmail.com address.", ok: false });
    if (!phoneOk(lead.phone)) return setStatus({ loading: false, error: "Phone number must be exactly 10 digits.", ok: false });
    if (!lead.purpose) return setStatus({ loading: false, error: "Please select a purpose.", ok: false });

    try {
      // ✅ Vercel endpoint
      await postJson("https://cloudseals-api-3tbb.vercel.app/api/leads-login", {
        name: lead.name.trim(),
        email: lead.email.trim(),
        phone: lead.phone.trim(),
        purpose: lead.purpose,
        pageUrl: window.location.href,
      });

      localStorage.setItem(LS_KEY, "1");
      setLoggedIn(true);
      setStatus({ loading: false, error: "", ok: true });

      setTimeout(() => {
        setOpen(false);
        setStatus({ loading: false, error: "", ok: false });
      }, 700);
    } catch (err) {
      setStatus({ loading: false, error: err.message || "Something went wrong.", ok: false });
    }
  }

  async function handleContactSubmit(e) {
    e.preventDefault();
    setStatus({ loading: true, error: "", ok: false });

    if (!contact.name) return setStatus({ loading: false, error: "Please enter your name.", ok: false });
    if (!emailOk(contact.email)) return setStatus({ loading: false, error: "Email must be a valid @gmail.com address.", ok: false });
    if (!phoneOk(contact.phone)) return setStatus({ loading: false, error: "Phone number must be exactly 10 digits.", ok: false });
    if (!contact.company) return setStatus({ loading: false, error: "Please enter company name.", ok: false });
    if (!contact.purpose) return setStatus({ loading: false, error: "Please select a purpose.", ok: false });
    if (!contact.message) return setStatus({ loading: false, error: "Please enter your message.", ok: false });

    try {
      // ✅ Vercel endpoint
      await postJson("https://cloudseals-api-3tbb.vercel.app/api/leads-contact", {
        name: contact.name.trim(),
        email: contact.email.trim(),
        phone: contact.phone.trim(),
        company: contact.company.trim(),
        purpose: contact.purpose,
        message: contact.message.trim(),
        pageUrl: window.location.href,
      });

      setStatus({ loading: false, error: "", ok: true });

      setContact({
        name: "",
        email: "",
        phone: "",
        company: "",
        purpose: "complisight",
        message: "",
      });

      setTimeout(() => closePopup(), 900);
    } catch (err) {
      setStatus({ loading: false, error: err.message || "Something went wrong.", ok: false });
    }
  }

  if (!open || loggedIn) return null;

  return (
    <div className="tp-overlay" role="dialog" aria-modal="true">
      <div className="tp-backdrop" onClick={closePopup} />

      <div className="tp-modal">
        <button className="tp-x" onClick={closePopup} aria-label="Close">✕</button>

        <div className="tp-head">
          <div className="tp-badge">{mode === "login" ? "Get Started" : "Contact Us"}</div>
          <h3 className="tp-title">
            {mode === "login" ? "Share your details to continue" : "Let’s talk about your needs"}
          </h3>
          <p className="tp-sub">
            {mode === "login"
              ? "Select the product/service you’re interested in and submit your details."
              : "Send your request and our team will reach out shortly."}
          </p>
        </div>

        <div className="tp-tabs">
          <button
            className={`tp-tab ${mode === "login" ? "tp-tab--on" : ""}`}
            onClick={() => setMode("login")}
            type="button"
          >
            Get Started
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
        {status.ok && <div className="tp-alert tp-alert--ok">Sent ✅</div>}

        {mode === "login" ? (
          <form className="tp-form" onSubmit={handleLeadSubmit}>
            <div className="tp-field">
              <label>Name</label>
              <input
                value={lead.name}
                onChange={(e) => setLead((s) => ({ ...s, name: e.target.value }))}
                placeholder="Your name"
              />
            </div>

            <div className="tp-field">
              <label>Email</label>
              <input
                value={lead.email}
                onChange={(e) => setLead((s) => ({ ...s, email: e.target.value }))}
                placeholder="example@gmail.com"
              />
            </div>

            <div className="tp-field">
              <label>Phone</label>
              <input
                inputMode="numeric"
                maxLength={10}
                value={lead.phone}
                onChange={(e) => {
                  const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
                  setLead((s) => ({ ...s, phone: digits }));
                }}
                placeholder="9876543210"
              />
            </div>

            <div className="tp-field">
              <label>Purpose</label>
              <select
                value={lead.purpose}
                onChange={(e) => setLead((s) => ({ ...s, purpose: e.target.value }))}
              >
                {PURPOSE_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>

              <svg className="tp-selectArrow" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <button className="tp-btn" type="submit" disabled={status.loading}>
              {status.loading ? "Submitting..." : "Submit"}
            </button>

            <div className="tp-note">
              Need detailed discussion? Switch to <b>Contact</b>.
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
                  placeholder="example@gmail.com"
                />
              </div>
            </div>

            <div className="tp-grid2">
              <div className="tp-field">
                <label>Phone</label>
                <input
                  inputMode="numeric"
                  maxLength={10}
                  value={contact.phone}
                  onChange={(e) => {
                    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
                    setContact((s) => ({ ...s, phone: digits }));
                  }}
                  placeholder="9876543210"
                />
              </div>

              <div className="tp-field">
                <label>Company</label>
                <input
                  value={contact.company}
                  onChange={(e) => setContact((s) => ({ ...s, company: e.target.value }))}
                  placeholder="Company name"
                />
              </div>
            </div>

            <div className="tp-field">
              <label>Purpose</label>
              <select
                value={contact.purpose}
                onChange={(e) => setContact((s) => ({ ...s, purpose: e.target.value }))}
              >
                {PURPOSE_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>

              <svg className="tp-selectArrow" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="tp-field">
              <label>Message</label>
              <textarea
                value={contact.message}
                onChange={(e) => setContact((s) => ({ ...s, message: e.target.value }))}
                placeholder="Tell us what you need…"
              />
            </div>

            <button className="tp-btn" type="submit" disabled={status.loading}>
              {status.loading ? "Sending..." : "Send Message"}
            </button>

            <div className="tp-note">We reply fast. Your details stay confidential.</div>
          </form>
        )}
      </div>
    </div>
  );
}
