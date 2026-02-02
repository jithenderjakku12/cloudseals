import React, { useEffect, useMemo, useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaCheckCircle,
  FaShieldAlt,
  FaRobot,
  FaCloud,
  FaLeaf,
  FaArrowRight,
} from "react-icons/fa";

export default function ContactPage({ apiBaseUrl = "" }) {
  // Reveal animations
  useEffect(() => {
    if (typeof window === "undefined") return;

    const els = Array.from(document.querySelectorAll(".csConReveal"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("isVisible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("isVisible")),
      { threshold: 0.12 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const topics = useMemo(
    () => [
      "General Enquiry",
      "Cloud Transformation",
      "DevOps / SRE",
      "Cybersecurity & Compliance",
      "Agentic AI (Complisight / Loadsight)",
      "Carbon dMRV (CarbonSight)",
      "Partnerships",
      "Careers",
      "Other",
    ],
    []
  );

  // Replace these with your real details
  const contact = useMemo(
    () => ({
      phone: "+91-XXXXXXXXXX",
      email: "contact@cloudseals.com",
      response: "We usually respond within 24–48 business hours.",
    }),
    []
  );

  const locations = useMemo(
    () => [
      {
        title: "UK Office",
        subtitle: "Sales & Partnerships",
        lines: ["London, United Kingdom", "Phone: +44-XXXXXXXXXX"],
      },
      {
        title: "India Delivery Center",
        subtitle: "Engineering & Operations",
        lines: ["Hyderabad, Telangana", "Phone: +91-XXXXXXXXXX"],
      },
      {
        title: "Remote-first",
        subtitle: "Global delivery model",
        lines: ["Distributed teams across regions", "Secure, compliant delivery processes"],
      },
    ],
    []
  );

  const [form, setForm] = useState({
    topic: topics[0],
    fullname: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "idle", msg: "" }); // idle | loading | error | success

  function onChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  // ✅ Phone: digits only, max 10
  function onPhoneChange(e) {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
    setForm((s) => ({ ...s, phone: digits }));
  }

  // ✅ Validation rules
  const isGmail = (email) => /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email.trim());
  const is10Digits = (phone) => /^\d{10}$/.test(phone);

  function validate() {
    if (!form.fullname.trim()) return "Please enter your full name.";
    if (!form.email.trim()) return "Please enter your Gmail address.";
    if (!isGmail(form.email)) return "Email must be a valid @gmail.com address.";
    if (!form.phone.trim()) return "Please enter your phone number.";
    if (!is10Digits(form.phone)) return "Phone number must be exactly 10 digits.";
    if (!form.message.trim()) return "Please enter your message.";
    return "";
  }

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

  async function onSubmit(e) {
    e.preventDefault();

    const err = validate();
    if (err) {
      setStatus({ type: "error", msg: err });
      return;
    }

    try {
      setStatus({ type: "loading", msg: "Sending your message..." });

      // ✅ Vercel endpoint (serverless function)
      await postJson("https://cloudseals-api-3tbb.vercel.app/api/leads-contact", {
        name: form.fullname.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        company: form.company.trim() || "-",
        purpose: form.topic, // topic goes as purpose
        message: form.message.trim(),
        pageUrl: window.location.href,
      });

      setStatus({
        type: "success",
        msg: "Thanks! We received your enquiry. Our team will get back to you within 24–48 business hours.",
      });

      setForm({
        topic: topics[0],
        fullname: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setStatus({ type: "error", msg: error.message || "Something went wrong." });
    }
  }

  return (
    <div className="csConPage">
      <header className="csConHero">
        <div className="csConHero__bg" />

        <div className="csConWrap csConHero__grid">
          {/* LEFT */}
          <div className="csConHero__left csConReveal">
            <div className="csConKicker">
              <span className="csConDot" />
              Contact CloudSeals
            </div>

            <h1 className="csConTitle">Let’s build safer, smarter, and audit-ready systems.</h1>

            <p className="csConSub">
              Whether you’re starting a new initiative or improving an existing one, we help teams deploy
              <b> cloud</b>, <b>AI</b>, and <b>security</b> with clear outcomes — not noise.
            </p>

            <div className="csConPills">
              <span className="csConPill">
                <FaShieldAlt aria-hidden="true" /> Compliance-first
              </span>
              <span className="csConPill">
                <FaRobot aria-hidden="true" /> Agentic AI
              </span>
              <span className="csConPill">
                <FaCloud aria-hidden="true" /> Cloud + SRE
              </span>
              <span className="csConPill">
                <FaLeaf aria-hidden="true" /> Carbon dMRV
              </span>
            </div>

            <div className="csConInfoGrid">
              <div className="csConInfoCard">
                <div className="csConInfoIcon">
                  <FaPhoneAlt aria-hidden="true" />
                </div>
                <div>
                  <div className="csConInfoLabel">Phone</div>
                  <a className="csConInfoValue" href={`tel:${contact.phone}`}>
                    {contact.phone}
                  </a>
                </div>
              </div>

              <div className="csConInfoCard">
                <div className="csConInfoIcon">
                  <FaEnvelope aria-hidden="true" />
                </div>
                <div>
                  <div className="csConInfoLabel">Email</div>
                  <a className="csConInfoValue" href={`mailto:${contact.email}`}>
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="csConInfoCard">
                <div className="csConInfoIcon">
                  <FaClock aria-hidden="true" />
                </div>
                <div>
                  <div className="csConInfoLabel">Response time</div>
                  <div className="csConInfoValuePlain">{contact.response}</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="csConHero__right csConReveal">
            <div className="csConFormCard">
              <div className="csConFormHead">
                <div>
                  <h2 className="csConFormTitle">Send us a message</h2>
                  <p className="csConFormSub">Tell us what you’re building — we’ll suggest the fastest path.</p>
                </div>

                <div className="csConFormBadge">
                  <FaPaperPlane aria-hidden="true" /> Fast response
                </div>
              </div>

              {status.type !== "idle" && (
                <div
                  className={`csConAlert ${
                    status.type === "success" ? "isSuccess" : status.type === "error" ? "isError" : ""
                  }`}
                >
                  {status.type === "success" ? (
                    <FaCheckCircle aria-hidden="true" />
                  ) : (
                    <span className="csConAlertDot" aria-hidden="true" />
                  )}
                  <span>{status.msg}</span>
                </div>
              )}

              <form className="csConForm" onSubmit={onSubmit}>
                <div className="csConRow">
                  <label className="csConLabel">
                    Topic
                    <select className="csConSelect" name="topic" value={form.topic} onChange={onChange}>
                      {topics.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <div className="csConGrid2">
                  <label className="csConLabel">
                    <div>
                      Full name <span className="csConReq">*</span>
                    </div>
                    <input
                      className="csConInput"
                      name="fullname"
                      value={form.fullname}
                      onChange={onChange}
                      placeholder="Your name"
                      autoComplete="name"
                    />
                  </label>

                  <label className="csConLabel">
                    <div>
                      Email <span className="csConReq">*</span>
                    </div>
                    <input
                      className="csConInput"
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      placeholder="example@gmail.com"
                      autoComplete="email"
                    />
                  </label>
                </div>

                <div className="csConGrid2">
                  <label className="csConLabel">
                    Company
                    <input
                      className="csConInput"
                      name="company"
                      value={form.company}
                      onChange={onChange}
                      placeholder="Company name (optional)"
                      autoComplete="organization"
                    />
                  </label>

                  <label className="csConLabel">
                    Phone <span className="csConReq">*</span>
                    <input
                      className="csConInput"
                      name="phone"
                      value={form.phone}
                      onChange={onPhoneChange}
                      placeholder="9876543210"
                      autoComplete="tel"
                      inputMode="numeric"
                      maxLength={10}
                    />
                  </label>
                </div>

                <label className="csConLabel">
                  <div>
                    Message <span className="csConReq">*</span>
                  </div>
                  <textarea
                    className="csConTextarea"
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    placeholder="What do you need help with?"
                    rows={5}
                  />
                </label>

                <button className="csConBtn" type="submit" disabled={status.type === "loading"}>
                  {status.type === "loading" ? "Sending..." : "Submit"} <FaArrowRight aria-hidden="true" />
                </button>

                <p className="csConDisclaimer">
                  By submitting this form you agree to our Terms &amp; Privacy Policy. We do not share your
                  information with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </header>

      {/* LOCATIONS */}
      <section className="csConLocations">
        <div className="csConWrap">
          <div className="csConLocHead csConReveal">
            <h2 className="csConH2">Global Locations</h2>
            <p className="csConP">
              Strategically positioned to deliver secure cloud + AI outcomes — with strong governance and
              audit-friendly execution.
            </p>
          </div>

          <div className="csConLocGrid">
            {locations.map((l) => (
              <article className="csConLocCard csConReveal" key={l.title}>
                <div className="csConLocTop">
                  <div className="csConLocIcon">
                    <FaMapMarkerAlt aria-hidden="true" />
                  </div>
                  <div>
                    <div className="csConLocTitle">{l.title}</div>
                    <div className="csConLocSub">{l.subtitle}</div>
                  </div>
                </div>

                <ul className="csConLocList">
                  {l.lines.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
