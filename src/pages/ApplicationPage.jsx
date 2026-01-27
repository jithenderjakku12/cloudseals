import React, { useEffect, useMemo, useState } from "react";

import {
  FaPencilRuler,
  FaCube,
  FaCode,
  FaBug,
  FaRocket,
  FaMobileAlt,
  FaCloudUploadAlt,
  FaShieldAlt,
  FaTachometerAlt,
  FaProjectDiagram,
  FaCheckCircle,
} from "react-icons/fa";

export default function ApplicationDevelopment() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".ad-reveal"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("ad-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("ad-in")),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const IMG = useMemo(
    () => ({
      cloud: "/images/cloud.jpg",
      devops: "/images/devops.jpg",
      security: "/images/security.jpg",
      ai: "/images/aisend.jpeg",
      target: "/images/target.jpeg",
      time: "/images/time.jpeg",
      app: "/images/app.jpeg",
    }),
    []
  );

  const services = [
    { img: IMG.cloud, title: "Cloud Engineering", tag: "GCP • AWS • Azure", desc: "Secure cloud foundation + scalability + cost control." },
    { img: IMG.devops, title: "DevOps & SRE", tag: "CI/CD • IaC • SLOs", desc: "Automation + reliability practices for fast stable releases." },
    { img: IMG.security, title: "Cybersecurity Solutions", tag: "Zero Trust • IAM", desc: "Secure SDLC, IAM, audit-ready controls and monitoring." },
    { img: IMG.ai, title: "AI / ML Automation", tag: "Agents • RAG • ML", desc: "Automation workflows that convert data into actions and insights." },
  ];

  const workflow = [
    { icon: <FaPencilRuler />, title: "Design", sub: "UX + architecture" },
    { icon: <FaCube />, title: "Prototype", sub: "MVP draft" },
    { icon: <FaCode />, title: "Build", sub: "APIs + UI" },
    { icon: <FaBug />, title: "Test", sub: "QA + security" },
    { icon: <FaRocket />, title: "Maintain", sub: "SRE + improve" },
  ];

  const capabilities = [
    { icon: <FaMobileAlt />, title: "Web & Mobile Apps", desc: "Modern UI, scalable backend and clean API design." },
    { icon: <FaCloudUploadAlt />, title: "Cloud-native Architecture", desc: "Containers, serverless, microservices and event-driven." },
    { icon: <FaShieldAlt />, title: "Secure SDLC", desc: "Threat modeling, IAM review and security controls." },
    { icon: <FaTachometerAlt />, title: "Performance & Reliability", desc: "Observability, SLOs and cost guardrails." },
  ];

  const [active, setActive] = useState("MVP");
  const deliveryTabs = {
    MVP: {
      bullets: [
        "Fast MVP build with core workflows",
        "CI/CD setup from day one",
        "Basic security + logging & alerts",
        "Go-live checklist and handover",
      ],
      img: IMG.time,
    },
    Scale: {
      bullets: [
        "Modular architecture and scaling plan",
        "SRE practices: SLOs + incident readiness",
        "Performance tuning + caching",
        "Cost optimization guardrails",
      ],
      img: IMG.cloud,
    },
    Compliance: {
      bullets: [
        "Secure SDLC + IAM review",
        "Audit-ready logging and access controls",
        "Policy-aligned deployment patterns",
        "Compliance evidence pack support",
      ],
      img: IMG.security,
    },
  };

  return (
    <main className="ad-page">
      <section className="ad-hero">
        <div className="ad-wrap ad-heroGrid">
          <div className="ad-heroLeft ad-reveal">
            <div className="ad-chip">
              <span className="ad-dot" />
              Application Development
              <span className="ad-chipLine" />
              CloudSeals
            </div>

            <h1 className="ad-h1">
              Build modern apps that are <span>fast</span>, <span>secure</span> and <span>scalable</span>.
            </h1>

            <p className="ad-lead">
              We design, build, test and maintain production-ready applications — from MVP to enterprise scale —
              with cloud-native engineering, DevOps/SRE and security-first delivery.
            </p>

            <div className="ad-metrics">
              <div className="ad-metric">
                <strong>1–2 weeks</strong>
                <span>Pilot kickoff</span>
              </div>
              <div className="ad-metric">
                <strong>CI/CD</strong>
                <span>From day one</span>
              </div>
              <div className="ad-metric">
                <strong>KPIs</strong>
                <span>Measured</span>
              </div>
            </div>

            <div className="ad-ctaRow">
              <a className="ad-btn ad-btn--primary" href="/contact">Talk to CloudSeals</a>
              <a className="ad-btn ad-btn--ghost" href="#services">View services</a>
            </div>
          </div>

          <div className="ad-heroRight ad-reveal">
            <div className="ad-heroCard">
              <img className="ad-heroImg" src={IMG.app} alt="Application development" />
              <div className="ad-heroOverlay">
                <div className="ad-heroBadge">
                  <FaCheckCircle />
                  <span>Production-ready delivery</span>
                </div>
                <p className="ad-heroNote">
                  Clean architecture • measurable SLOs • secure pipelines • audit-ready logging
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="ad-bgGlow ad-bgGlow--a" />
        <div className="ad-bgGlow ad-bgGlow--b" />
      </section>

      <section className="ad-sec" id="services">
        <div className="ad-wrap">
          <div className="ad-head ad-reveal">
            <h2 className="ad-h2">CloudSeals Full-Stack Services</h2>
            <p className="ad-muted">Application delivery backed by cloud engineering, DevOps/SRE and security controls.</p>
          </div>

          <div className="ad-cardGrid">
            {services.map((s) => (
              <article className="ad-card ad-reveal" key={s.title}>
                <div className="ad-cardImg">
                  <img src={s.img} alt={s.title} />
                </div>
                <div className="ad-cardBody">
                  <div className="ad-cardTop">
                    <h3 className="ad-h3">{s.title}</h3>
                    <span className="ad-tag">{s.tag}</span>
                  </div>
                  <p className="ad-muted">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ad-sec ad-sec--tight">
        <div className="ad-wrap">
          <div className="ad-head ad-reveal">
            <h2 className="ad-h2">Delivery Workflow</h2>
            <p className="ad-muted">Clear steps. Clean handover. Continuous improvement.</p>
          </div>

          <div className="ad-flow">
            {workflow.map((w) => (
              <div className="ad-step ad-reveal" key={w.title}>
                <div className="ad-stepIcon" aria-hidden="true">{w.icon}</div>
                <div className="ad-stepText">
                  <strong>{w.title}</strong>
                  <span>{w.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ad-sec">
        <div className="ad-wrap ad-split">
          <div className="ad-reveal">
            <h2 className="ad-h2">Engineering Digital Excellence</h2>
            <p className="ad-muted">
              We turn ideas into scalable, production-ready platforms using cloud-native architecture, observability and
              security-first delivery.
            </p>

            <div className="ad-checks">
              <div className="ad-check"><FaCheckCircle /> Clean architecture + reusable components</div>
              <div className="ad-check"><FaCheckCircle /> Automated testing + CI/CD pipelines</div>
              <div className="ad-check"><FaCheckCircle /> Observability: logs, metrics, traces</div>
              <div className="ad-check"><FaCheckCircle /> Secure-by-default (IAM, secrets, audits)</div>
            </div>
          </div>

          <div className="ad-reveal">
            <div className="ad-imageFrame">
              <img src={IMG.target} alt="Target delivery" />
            </div>
          </div>
        </div>
      </section>

      <section className="ad-sec ad-sec--alt">
        <div className="ad-wrap ad-deliveryGrid">
          <div className="ad-reveal">
            <h2 className="ad-h2">Delivery Model</h2>
            <p className="ad-muted">Pick a goal — we execute with measurable KPIs.</p>

            <div className="ad-tabs">
              {Object.keys(deliveryTabs).map((k) => (
                <button
                  key={k}
                  type="button"
                  className={`ad-tab ${active === k ? "ad-tab--on" : ""}`}
                  onClick={() => setActive(k)}
                >
                  <FaProjectDiagram />
                  <span>{k}</span>
                </button>
              ))}
            </div>

            <div className="ad-panel">
              <h3 className="ad-h3">{active} Delivery</h3>
              <ul className="ad-bullets">
                {deliveryTabs[active].bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
              <a className="ad-link" href="/contact">Start a {active} plan →</a>
            </div>
          </div>

          <div className="ad-reveal">
            <div className="ad-tabVisual">
              <img key={deliveryTabs[active].img} src={deliveryTabs[active].img} alt={active} />
              <div className="ad-tabGlow" />
            </div>
          </div>
        </div>
      </section>

      <section className="ad-sec">
        <div className="ad-wrap">
          <div className="ad-head ad-reveal">
            <h2 className="ad-h2">What we build</h2>
            <p className="ad-muted">Practical solutions that ship and stay stable.</p>
          </div>

          <div className="ad-capGrid">
            {capabilities.map((c) => (
              <div className="ad-cap ad-reveal" key={c.title}>
                <div className="ad-capIcon">{c.icon}</div>
                <div>
                  <h3 className="ad-h3">{c.title}</h3>
                  <p className="ad-muted">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ad-cta">
        <div className="ad-wrap ad-ctaBox ad-reveal">
          <h2 className="ad-h2">Ready to build your next application?</h2>
          <p className="ad-muted">
            Tell us what you want to ship. We’ll reply with a plan: scope, timeline, architecture and delivery approach.
          </p>
          <div className="ad-ctaRow">
            <a className="ad-btn ad-btn--primary" href="/contact">Get a delivery plan</a>
            <a className="ad-btn ad-btn--ghost" href="#services">Explore services</a>
          </div>
        </div>
      </section>
    </main>
  );
}
