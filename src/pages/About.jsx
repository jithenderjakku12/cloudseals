import React, { useEffect, useRef, useState } from "react";
import { MdFactory, MdLocalShipping, MdSensors } from "react-icons/md";
import { RiLeafLine, RiShieldCheckLine } from "react-icons/ri";
import { TbBrain } from "react-icons/tb";
import { FaCubes } from "react-icons/fa6";
import { Link} from "react-router-dom";


const partners = [
  { name: "Partner 1", logo: "/images/partners/neo4j-1.svg" },
  { name: "Partner 2", logo: "/images/partners/aws.png" },
  { name: "Partner 3", logo: "/images/partners/nvidia.jpg" },
  { name: "Partner 4", logo: "/images/partners/supercloud.svg" },
  { name: "Partner 5", logo: "/images/partners/tray.png" },
  { name: "Partner 6", logo: "/images/partners/alibaba3.avif" },
];


export default function About() {



  // ===== Contact Form State =====
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [mobile, setMobile] = useState("");
const [message, setMessage] = useState("");

const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState(null); // null | true | false
const [errorMsg, setErrorMsg] = useState("");

// ===== Helpers =====
const isGmail = (value) =>
  /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(String(value || "").trim());

const is10Digits = (value) =>
  /^\d{10}$/.test(String(value || "").trim());

// ===== Submit =====
const handleSubmit = async (e) => {
  e.preventDefault();
  if (loading) return;

  setLoading(true);
  setSuccess(null);
  setErrorMsg("");

  const fullName = `${firstName}`.trim() + " " + `${lastName}`.trim();
  const cleanEmail = String(email || "").trim();
  const cleanPhone = String(mobile || "").trim();
  const cleanMessage = String(message || "").trim();

  if (!firstName.trim() || !lastName.trim()) {
    setErrorMsg("Please enter your first and last name.");
    setLoading(false);
    return;
  }

  if (!isGmail(cleanEmail)) {
    setErrorMsg("Email must be a valid Gmail address (example@gmail.com).");
    setLoading(false);
    return;
  }

  if (!is10Digits(cleanPhone)) {
    setErrorMsg("Mobile number must be exactly 10 digits.");
    setLoading(false);
    return;
  }

  if (cleanMessage.length < 5) {
    setErrorMsg("Please add a short message (min 5 characters).");
    setLoading(false);
    return;
  }

  try {
    const payload = {
      name: fullName.trim(),
      email: cleanEmail,
      phone: cleanPhone,
      company: "-",
      purpose: "other",
      message: cleanMessage,
      pageUrl: window.location.href,
    };

    const res = await fetch("https://cloudseals-api-3tbb.vercel.app/api/leads-contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    // ✅ FIXED: no jsonErr variable
    let data = null;
    let text = "";

    try {
      data = await res.json();
    } catch (e) {
  console.warn("Response is not JSON:", e);
  data = null;
}


    console.log("Contact API status:", res.status);
    console.log("Contact API response:", data || text);

    if (!res.ok) {
      const msg =
        (data && (data.message || data.error)) ||
        text ||
        `Request failed (HTTP ${res.status}).`;
      setSuccess(false);
      setErrorMsg(msg);
      return;
    }

    if (data && data.ok === false) {
      setSuccess(false);
      setErrorMsg(data.message || "Something went wrong. Try again.");
      return;
    }

    setSuccess(true);
    setErrorMsg("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setMobile("");
    setMessage("");
  } catch (err) {
    console.error("Contact API error:", err);
    setSuccess(false);
    setErrorMsg(
      "Network/CORS error: request was blocked or API is unreachable. Check DevTools Console & Network tab."
    );
  } finally {
    setLoading(false);
  }
};


  const headerRef = useRef(null);

 const [_navOpen, _setNavOpen] = useState(false);
const [_activeDropdown, _setActiveDropdown] = useState(null);

const _closeNavAll = () => {
  _setNavOpen(false);
  _setActiveDropdown(null);
};

const _toggleDropdown = (e, id) => {
  e.preventDefault();
  e.stopPropagation();
  _setActiveDropdown((prev) => (prev === id ? null : id));
};


  useEffect(() => {
    const onDocClick = (e) => {
      if (!headerRef.current?.contains(e.target)) {
        _setActiveDropdown(null);
        _setNavOpen(false);
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  useEffect(() => {
    const halo = document.getElementById("cursorHalo");
    const dot = document.getElementById("cursorDot");

    const finePointer =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(pointer: fine)").matches;

    if (!finePointer || !halo || !dot) return;

    let raf = null;
    let x = 0,
      y = 0;

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        dot.style.transform = `translate(${x}px, ${y}px)`;
        halo.style.transform = `translate(${x}px, ${y}px)`;
        raf = null;
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

    const loop = [...partners, ...partners];

  return (
    <div className="aboutPage">
      <main className="aboutPage__main">
        {/* ABOUT SECTION */}
        {/* ABOUT US  DIV STARTS HERE  */}
 
  <section className="about-section">
 
    <div className="about-text">
        <h2>About us</h2>
        <p>Cloud Security Simplified: Your Data, Our Priority.</p>
 
        <p>
            CloudSeals is a leading innovator in the realm of Data-Driven Business
            Transformation and Data-Driven Economics. With a relentless commitment
            to pioneering data-driven innovation, we leverage cutting-edge AI and
            machine learning technologies to unearth invaluable insights from data.
        </p>
        <p>
            Our solutions empower leaders to make informed decisions, unlocking
            unprecedented success for businesses and economies alike. At CloudSeals,
            we specialize in guiding organizations.
        </p>
 
        <div className="features-grid">
            <div className="feature"><span><i className="fa-solid fa-lock"></i></span> Data Encryption & Protection</div>
            <div className="feature"><span><i className="fa-solid fa-robot"></i></span> AI-Driven Security Solutions</div>
 
            <div className="feature"><span><i className="fa-solid fa-gear"></i></span> Customizable Features</div>
            <div className="feature"><span><i className="fa-solid fa-rocket"></i></span> Industry-Leading Performance</div>
 
            <div className="feature"><span><i className="fa-solid fa-file"></i></span> Automated Backups</div>
            <div className="feature"><span><i className="fa-solid fa-trophy"></i></span> Proven Track Record</div>
 
            <div className="feature"><span><i className="fa-solid fa-music"></i></span> Reliable, 24/7 Support</div>
            <div className="feature"><span><i className="fa-solid fa-recycle"></i></span> Continuous Innovation & Updates</div>
        </div>  
       <Link to="/contact" onClick={_closeNavAll}>
  <button className="touch-btn">Get in Touch ↓</button>
</Link>

      
    </div>
</section>

        {/* PREMIUM SECTION */}
        <section className="aboutPage__culture">
          <div className="aboutPage__sectionHeader">
            <h2 className="aboutPage__h2">Our Culture Is Built Around Four Key Attributes </h2>
            <h2 className="aboutPage__h2"> That Differentiate Us From Our Competition.</h2>
           
          </div>

          <div className="aboutPage__cardGrid">
            <div className="aboutPage__card">
              <i className="fa-solid fa-crosshairs"></i>
              <h3 className="aboutPage__h3">Passionate</h3>
              <p className="aboutPage__pSmall">
                We are intensely enthusiastic about providing a superior experience.
              </p>
            </div>

            <div className="aboutPage__card">
              <i className="fa-regular fa-handshake"></i>
              <h3 className="aboutPage__h3">Respectful</h3>
              <p className="aboutPage__pSmall">
                We are polite and kind to one another, even when it gets tough.
              </p>
            </div>

            <div className="aboutPage__card">
              <i className="fa-solid fa-building-shield"></i>
              <h3 className="aboutPage__h3">Ownership</h3>
              <p className="aboutPage__pSmall">
                We are empowered to do our jobs and work towards a common goal.
              </p>
            </div>

            <div className="aboutPage__card">
              <i className="fa-solid fa-people-group"></i>
              <h3 className="aboutPage__h3">Unified</h3>
              <p className="aboutPage__pSmall">
                We work as a team and trust each other to create a seamless experience.
              </p>
            </div>
          </div>
        </section>

        {/* INFO SECTION */}
       <section className="aboutPage__highlights">
  <div className="aboutPage__highlightsInner">

    {/* NEW: Section Heading */}
    <div className="aboutPage__highlightsHead">
      <h2 className="aboutPage__highlightsTitle">What Makes CloudSeals Different</h2>
      <p className="aboutPage__highlightsSub">
        Three pillars that power measurable outcomes for modern enterprises.
      </p>
    </div>

    <div className="aboutPage__highlightRow">
      <img className="aboutPage__highlightImg" src="/images/About us/Data.jpeg" alt="AI & Data" />
      <div className="aboutPage__highlightText">
        <h3 className="aboutPage__h3">Data-Driven Innovation</h3>
        <p className="aboutPage__p">
          CloudSeals empowers organizations by turning complex data into actionable
          intelligence using advanced AI and analytics.
        </p>
      </div>
    </div>

    <div className="aboutPage__highlightRow aboutPage__highlightRowReverse">
      <img className="aboutPage__highlightImg" src="/images/About us/safe cloud.jpeg" alt="Cloud Security" />
      <div className="aboutPage__highlightText">
        <h3 className="aboutPage__h3">Secure Cloud Solutions</h3>
        <p className="aboutPage__p">
          Our cloud-first approach ensures security, scalability, and performance,
          helping businesses operate with confidence.
        </p>
      </div>
    </div>

    <div className="aboutPage__highlightRow">
      <img className="aboutPage__highlightImg" src="/images/About us/growth.jpeg" alt="Business Growth" />
      <div className="aboutPage__highlightText">
        <h3 className="aboutPage__h3">Business Growth &amp; Impact</h3>
        <p className="aboutPage__p">
          We partner with organizations to accelerate growth, optimize operations, and
          deliver measurable business outcomes.
        </p>
      </div>
    </div>

  </div>
</section>


        {/* TEAM SECTION */}
       <section className="aboutPage__team">
  {/* NEW HEADING BLOCK */}
  <div className="aboutPage__teamHead">
    <div className="aboutPage__teamKicker">CloudSeals Leadership</div>
    <h2 className="aboutPage__teamTitle">Meet the Leadership Team</h2>
    <p className="aboutPage__teamSub">
      A focused team combining technology, finance, and go-to-market leadership to build secure,
      scalable platforms for modern enterprises.
    </p>
  </div>

  <div className="aboutPage__teamGrid">
    <article className="aboutPage__teamCard">
      <img
        className="aboutPage__teamImg"
        src="/images/About/srinivas.png"
        alt="Srinivas Palle"
      />
      <h3 className="aboutPage__teamName">Srinivas Palle</h3>
      <span className="aboutPage__role">Founder &amp; CEO</span>
      <p className="aboutPage__pSmall">
        Experienced leader driving success through innovation. Founded CloudSeals to
        disrupt data security and deliver high-impact cloud cybersecurity solutions.
      </p>
    </article>

    <article className="aboutPage__teamCard">
      <img
        className="aboutPage__teamImg"
        src="/images/About/naveen.png"
        alt="Naveen Gopala"
      />
      <h3 className="aboutPage__teamName">Naveen Gopala</h3>
      <span className="aboutPage__role">Co-Founder &amp; CFO</span>
      <p className="aboutPage__pSmall">
        18+ years of experience in finance, banking, and digital payments. Proven in
        driving profitability, strategic partnerships, and scalable revenue models.
      </p>
    </article>

    <article className="aboutPage__teamCard">
      <img
        className="aboutPage__teamImg"
        src="/images/SRIDHAR.jpg"
        alt="Mr. Sridhar Gopi"
      />
      <h3 className="aboutPage__teamName">Sridhar Gopi</h3>
      <span className="aboutPage__role">GTM Director</span>
      <p className="aboutPage__pSmall">
     Seasoned industry leader with 30+ years of experience across Banking, Financial Services, 
     Insurance, and Technology, with strong global exposure and a proven track record in driving innovation and transformation.
      </p>
    </article>

  </div>
</section>






<section className="aboutPage__team">
  {/* NEW HEADING BLOCK */}
  <div className="aboutPage__teamHead">
    <div className="aboutPage__teamKicker">CloudSeals Advisory Board</div>
    <h2 className="aboutPage__teamTitle">Meet Our Advisory Team</h2>
    <p className="aboutPage__teamSub">
      Seasoned advisors bringing deep expertise across cloud, cybersecurity, compliance, enterprise delivery,
      and go-to-market strategy — guiding CloudSeals as we build secure, scalable platforms for modern enterprises.
    </p>
  </div>


  <div className="aboutPage__teamGrid">
 

    <article className="aboutPage__teamCard">
      <img
        className="aboutPage__teamImg"
        src="/images/About/barry.png"
        alt="Barry Flaherty"
      />
      <h3 className="aboutPage__teamName">Barry Flaherty</h3>
      <span className="aboutPage__role">GTM Director</span>
      <p className="aboutPage__pSmall">
        Global growth strategist with expertise in sales engines, GTM partnerships, and
        scaling early-stage ventures into high-growth market leaders.
      </p>
    </article>

     <article className="aboutPage__teamCard">
      <img
        className="aboutPage__teamImg"
        src="/images/SRINI.jpg"
        alt="Srinivas"
      />
      <h3 className="aboutPage__teamName">Srinivas Mutapuram</h3>
      <span className="aboutPage__role">Director Business Development & Operations</span>
      <p className="aboutPage__pSmall">
      Innovation meets execution. Bringing more than two decades 
      of high-impact leadership at the intersection of Strategic Business Development and Operational Excellence
      </p>
    </article>

     <article className="aboutPage__teamCard">
      <img
        className="aboutPage__teamImg"
        src="/images/BILL.jpg"
        alt="Mr. Sridhar Gopi"
      />
      <h3 className="aboutPage__teamName">Bill Weathersby</h3>
      <span className="aboutPage__role">US GTM</span>
      <p className="aboutPage__pSmall">
     Bill is an 8-time Founder, Investor and former Global Executive with over 40+ years in both private equity backed and publicly traded high growth companies. He has
      successfully led over 6 Founder-led companies to over $20M in Revenue, over $100M of Fundraising and help generate over $500M of value in M&A.
      </p>
    </article>
  </div>
</section>



{/* 
OUR PARTNERS */}
<section className="partners" aria-label="Partners">
      <div className="partners__container">
        <div className="partners__head">
          <span className="partners__kicker">Trusted Ecosystem</span>
          <h2 className="partners__title">Our Partners</h2>
          <p className="partners__sub">
            We collaborate with innovators and industry leaders to deliver secure, scalable outcomes.
          </p>
        </div>

        <div className="partners__marquee" role="region" aria-label="Partner logos carousel">
          <div className="partners__track">
            {loop.map((p, idx) => (
              <div className="partners__logoCard" key={`${p.name}-${idx}`} title={p.name}>
                <img
                  src={p.logo}
                  alt={`${p.name} logo`}
                  loading="lazy"
                  className="partners__logo"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="partners__ctaRow">
          <div className="partners__note">
            Want to partner with CloudSeals? We’re always open to strategic collaborations.
          </div>
          <a className="partners__btn" href="/contact">
            Become a Partner →
          </a>
        </div>
      </div>
    </section>






        {/* INDUSTRIES STACK */}
      <section className="aboutPage__industries" id="industries-4-0">
  <div className="aboutPage__industriesHeader">
    <div className="aboutPage__industriesHead">
  <h2 className="aboutPage__industriesTitle">
    Where CloudSeals Drives Industry 4.0 Outcomes
  </h2>
  <p className="aboutPage__industriesSub">
    IoT signals + AI automation + blockchain integrity — built for measurable outcomes.
  </p>
</div>

    <p className="aboutPage__p aboutPage__industriesLead">
      Industries 4.0 is the shift from traditional operations to <b>connected, intelligent, and trusted systems</b>.
      CloudSeals combines <b>IoT</b> (real-time signals), <b>AI</b> (decisions & automation), and <b>Blockchain</b>
      (integrity & audit trails) to deliver measurable outcomes across core industries.
    </p>
  </div>

  {/* 1) Manufacturing */}
  <div className="aboutPage__industryRow aboutPage__industryRowRight">
    <div className="aboutPage__industryText">
      <span className="aboutPage__tag">    <MdFactory  size={22} className="aboutPage__industryIcon" aria-hidden /> Manufacturing 4.0 </span>
      <h2 className="aboutPage__h2">Smart Factories with IoT + AI Quality</h2>
      <p className="aboutPage__p">
        We unify shop-floor IoT, machine signals, and computer vision into one live operational layer.
        AI detects defects, predicts downtime, and improves OEE — while blockchain preserves traceability
        for audit-ready batch and part history.
      </p>

      <ul className="aboutPage__industryList">
        <li>IoT device integration & live telemetry</li>
        <li>AI quality inspection & anomaly detection</li>
        <li>Predictive maintenance & OEE uplift</li>
        <li>Blockchain traceability for parts/batches</li>
      </ul>
    </div>

    <div className="aboutPage__industryMedia">
      <img src="/images/About/Smart-Factories2.webp" className="aboutPage__industryImg" alt="Manufacturing" />
    </div>
  </div>

  {/* 2) Logistics */}
  <div className="aboutPage__industryRow aboutPage__industryRowRight">
    <div className="aboutPage__industryText">
      <span className="aboutPage__tag"><MdLocalShipping size={22} className="aboutPage__industryIcon" aria-hidden /> Logistics 4.0</span>
      <h2 className="aboutPage__h2">Real-time Yards, Safety & Dispatch Intelligence</h2>
      <p className="aboutPage__p">
        CloudSeals enables visibility across yard, warehouse, fleet, and port operations using IoT and AI.
        We reduce near-miss events, improve slot planning, and accelerate turnaround — with blockchain-backed
        chain-of-custody logs for trust and compliance.
      </p>

      <ul className="aboutPage__industryList">
        <li>Yard + fleet visibility using telemetry</li>
        <li>AI safety alerts (zones, PPE, near-miss)</li>
        <li>Turnaround optimization & capacity planning</li>
        <li>Blockchain chain-of-custody event logs</li>
      </ul>
    </div>

    <div className="aboutPage__industryMedia">
      <img src="/images/About/FERNRIDE-Container-Handling-Terberg-3-1-1024x683.jpg" className="aboutPage__industryImg" alt="Logistics" />
    </div>
  </div>

  {/* 3) Sustainability / ESG */}
  <div className="aboutPage__industryRow aboutPage__industryRowRight">
    <div className="aboutPage__industryText">
      <span className="aboutPage__tag">  <RiLeafLine size={22} className="aboutPage__industryIcon" aria-hidden /> Sustainability & ESG</span>
      <h2 className="aboutPage__h2">From ESG Claims to ESG Proof</h2>
      <p className="aboutPage__p">
        Industries 4.0 includes responsible operations. We connect energy and operations data (IoT),
        run AI analytics to find reduction opportunities, and maintain verifiable audit trails using blockchain —
        enabling ESG reporting that stakeholders can trust.
      </p>

      <ul className="aboutPage__industryList">
        <li>Energy + emissions analytics (Scope readiness)</li>
        <li>AI insights for reduction & forecasting</li>
        <li>Automated ESG reporting & governance trails</li>
        <li>Blockchain verification for ESG data integrity</li>
      </ul>
    </div>

    <div className="aboutPage__industryMedia">
      <img src="/images/About/sustainability-dashboard-example.png" className="aboutPage__industryImg" alt="Sustainability and ESG" />
    </div>
  </div>

  {/* 4) Finance / Compliance */}
  <div className="aboutPage__industryRow aboutPage__industryRowRight">
    <div className="aboutPage__industryText">
      <span className="aboutPage__tag">  <RiShieldCheckLine size={22} className="aboutPage__industryIcon" aria-hidden /> Finance & Compliance</span>
      <h2 className="aboutPage__h2">Secure Platforms with AI Risk & Compliance Automation</h2>
      <p className="aboutPage__p">
        We design secure cloud-native systems that scale with governance. AI identifies fraud/risk signals,
        compliance automation enforces policy, and blockchain preserves integrity for approvals, records,
        and critical workflows.
      </p>

      <ul className="aboutPage__industryList">
        <li>Risk scoring + fraud & anomaly signals</li>
        <li>Compliance automation & policy enforcement</li>
        <li>Secure modernization + governance controls</li>
        <li>Blockchain integrity for approvals & records</li>
      </ul>
    </div>

    <div className="aboutPage__industryMedia">
      <img src="/images/About/OIP.jpg" className="aboutPage__industryImg" alt="Finance and Compliance" />
    </div>
  </div>
</section>

<section className="trustMini" id="usp-trust-gate">

  {/* DIFFERENTIATOR STRIP */}
<div className="aboutPage__diffStrip">
  <div className="aboutPage__diffInner">
    <h2 className="aboutPage__diffTitle">
      What Sets CloudSeals Apart : AI That Acts With Proof &amp; Approval
    </h2>
    <p className="aboutPage__diffSub">
      Chat → intent → action — with HIL approvals, policy checks, and full auditability.
    </p>
  </div>
</div>

  <div className="trustMini__content">
    <h2 className="trustMini__title">Chat-to-Action (HIL) + Trust Gate</h2>

  <p className="trustMini__p">
    <b>USP:</b> Chat-to-Action converts natural language requests (deploy, create ticket, notify teams)
    into structured steps and tool actions. With <b>HIL (Human-in-the-Loop)</b>, sensitive actions are
    reviewed and approved before execution — with full auditability.
  </p>

  <p className="trustMini__p">
    <b>Trust Gate:</b> A safety checkpoint between AI output and real execution. It uses policy rules
    and a <b>behavioral dataset</b> (past approvals/rejections, outcomes, context like prod/PII/IAM)
    to decide: <b>Allow</b>, <b>Require Approval</b>, or <b>Block</b>.
  </p>

  <p className="trustMini__p">
    <b>Behavioral dataset:</b> Stores examples of chat → intent → proposed action → trust decision →
    human feedback → outcome, so the Trust Gate improves over time.
  </p>
  </div>
</section>



        {/* CONTACT GLASS FORM */}
        {/* <section className="aboutPage__contact" id="contact">
          <span className="aboutPage__orb aboutPage__orbLeft"></span>
          <span className="aboutPage__orb aboutPage__orbRight"></span>

          <div className="aboutPage__contactCard">
            <h2 className="aboutPage__h2">
              Contact Us <i className="fa-regular fa-face-smile"></i>
            </h2>

            <form
              className="aboutPage__contactForm"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="aboutPage__row">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>

              <div className="aboutPage__row">
                <input type="email" placeholder="Email" />
                <input type="tel" placeholder="Mobile" />
              </div>

              <textarea placeholder="Project idea..."></textarea>

              <button className="aboutPage__submit" type="submit">
                Send
              </button>
            </form>
          </div>
        </section> */}


        <section className="aboutPage__contact" id="contact">
  <span className="aboutPage__orb aboutPage__orbLeft"></span>
  <span className="aboutPage__orb aboutPage__orbRight"></span>

  <div className="aboutPage__contactCard">
    <h2 className="aboutPage__h2">
      Contact Us <i className="fa-regular fa-face-smile"></i>
    </h2>

    <form className="aboutPage__contactForm" onSubmit={handleSubmit}>
      <div className="aboutPage__row">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>

      <div className="aboutPage__row">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => {
            const val = e.target.value.replace(/\D/g, "");
            if (val.length <= 10) setMobile(val);
          }}
          required
        />
      </div>

      <textarea
        placeholder="Project idea..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

      <button className="aboutPage__submit" type="submit" disabled={loading}>
        {loading ? "Sending..." : "Send"}
      </button>

      {success === true && (
        <p className="successMsg">Message sent successfully!</p>
      )}

      {success === false && (
        <p className="errorMsg">{errorMsg || "Something went wrong. Try again."}</p>
      )}
    </form>
  </div>
</section>










      </main>
    </div>
  );
}
