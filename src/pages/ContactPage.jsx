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
  FaArrowRight, // ✅ FIX: you were using it but not importing it
} from "react-icons/fa";

export default function ContactPage() {
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

  const [status, setStatus] = useState({ type: "idle", msg: "" }); // idle | error | success

  function onChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function validate() {
    if (!form.fullname.trim()) return "Please enter your full name.";
    if (!form.email.trim()) return "Please enter your business email.";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) return "Please enter a valid email address.";
    if (!form.message.trim()) return "Please enter your message.";
    return "";
  }

  function onSubmit(e) {
    e.preventDefault();

    const err = validate();
    if (err) {
      setStatus({ type: "error", msg: err });
      return;
    }

    // ✅ For now we show success on UI (later connect API)
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
  }

  return (
    <div className="csConPage">
      {/* HERO + FORM */}
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
                <div className={`csConAlert ${status.type === "success" ? "isSuccess" : "isError"}`}>
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
Business email <span className="csConReq">*</span>
                    </div>
                    
                    <input
                      className="csConInput"
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      placeholder="name@company.com"
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
                      placeholder="Company name"
                      autoComplete="organization"
                    />
                  </label>

                  <label className="csConLabel">
                    Phone
                    <input
                      className="csConInput"
                      name="phone"
                      value={form.phone}
                      onChange={onChange}
                      placeholder="Optional"
                      autoComplete="tel"
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

                <button className="csConBtn" type="submit">
                  Submit <FaArrowRight aria-hidden="true" />
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
