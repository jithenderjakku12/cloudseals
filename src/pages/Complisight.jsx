import React, { useEffect, useMemo, useRef } from "react";

import {
  FaVideo,
  FaRobot,
  FaBell,
  FaChartLine,
  FaLock,
  FaServer,
  FaCloud,
  FaCheckCircle,
  FaExclamationTriangle,
  FaIndustry,
  FaClipboardCheck,
  FaShieldAlt,
} from "react-icons/fa";
// Put this at the TOP of your Complisight JSX file
import {
  FaMapMarkedAlt
} from "react-icons/fa";


export default function Complisight() {
  const pageRef = useRef(null);

  const cards = useMemo(
    () => [
      {
        icon: <FaRobot aria-hidden="true" />,
        title: "What is Complisight?",
        text:
          "Complisight is an AI safety product that detects PPE non-compliance (like missing helmet/vest/gloves) using YOLO-based computer vision and generates real-time alerts with evidence.",
      },
      {
        icon: <FaIndustry aria-hidden="true" />,
        title: "Why teams use it",
        text:
          "To prevent incidents before they happen—by making PPE compliance measurable, trackable, and action-driven across sites, shifts, and zones.",
      },
      {
        icon: <FaShieldAlt aria-hidden="true" />,
        title: "Where it fits (Industries 4.0)",
        text:
          "It becomes the safety layer of Industries 4.0—connected cameras + AI inference + operational workflows + audit-ready reporting for factories, logistics yards, and ESG programs.",
      },
    ],
    []
  );

  const steps = useMemo(
    () => [
      {
        icon: <FaVideo aria-hidden="true" />,
        title: "Capture",
        text: "CCTV/RTSP streams provide live frames from safety-critical zones.",
      },
      {
        icon: <FaRobot aria-hidden="true" />,
        title: "Detect",
        text: "YOLO models detect people + PPE items in each frame.",
      },
      {
        icon: <FaExclamationTriangle aria-hidden="true" />,
        title: "Decide",
        text: "Rules confirm violations (per zone, PPE type, time, confidence).",
      },
      {
        icon: <FaBell aria-hidden="true" />,
        title: "Act",
        text: "Alerts go to teams (dashboard / email / Teams / Slack), with evidence.",
      },
      {
        icon: <FaClipboardCheck aria-hidden="true" />,
        title: "Report",
        text: "Analytics and audit trails show trends, hotspots, and resolution status.",
      },
    ],
    []
  );

  const benefits = useMemo(
    () => [
      "Reduce PPE violations with instant feedback loops",
      "Lower incident risk by enforcing safety zones consistently",
      "Evidence snapshots for investigations and audits",
      "Site/shift-level insights to improve training and supervision",
      "Works across manufacturing, logistics, utilities, and construction environments",
    ],
    []
  );

  const deployment = useMemo(
    () => [
      {
        icon: <FaServer aria-hidden="true" />,
        title: "Edge / On-prem",
        text:
          "Low-latency detection near cameras. Useful for high-safety zones and limited connectivity.",
      },
      {
        icon: <FaCloud aria-hidden="true" />,
        title: "Cloud",
        text:
          "Centralized analytics, multi-site management, scalable inference, and easy integrations.",
      },
      {
        icon: <FaLock aria-hidden="true" />,
        title: "Privacy-first controls",
        text:
          "Role-based access, retention policies, and evidence controls—designed for compliance readiness.",
      },
    ],
    []
  );

  // Reveal on scroll (clean + lightweight)
  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    const items = Array.from(root.querySelectorAll("[data-reveal]"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("csReveal--in");
        });
      },
      { threshold: 0.12 }
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="complisightPage" ref={pageRef}>
      {/* HERO */}
      <section className="csHero">
        <div className="csContainer csHero__inner">
          <div className="csHero__copy" data-reveal>
            <div className="csPill">
              <span className="csPill__dot" />
              Complisight • AI PPE Compliance
            </div>

            <h1 className="csH1">
              Detect missing PPE in real-time — and trigger safety actions instantly.
            </h1>

            <p className="csLead">
              Complisight uses YOLO-based computer vision to identify PPE violations from CCTV feeds,
              helping industries prevent incidents, improve compliance, and maintain audit-ready evidence.
            </p>

            <div className="csHero__actions">
              <a className="csBtn csBtn--primary" href="#how-it-works">
                How it works
              </a>
              <a className="csBtn csBtn--ghost" href="#industries40">
                Industries 4.0 fit
              </a>
            </div>

            <div className="csHero__stats">
              <div className="csStat">
                <div className="csStat__top">
                  <FaCheckCircle aria-hidden="true" />
                  Real-time
                </div>
                <div className="csStat__bottom">alerts + evidence</div>
              </div>

              <div className="csStat">
                <div className="csStat__top">
                  <FaChartLine aria-hidden="true" />
                  Measurable
                </div>
                <div className="csStat__bottom">compliance trends</div>
              </div>

              <div className="csStat">
                <div className="csStat__top">
                  <FaLock aria-hidden="true" />
                  Privacy
                </div>
                <div className="csStat__bottom">controls built-in</div>
              </div>
            </div>
          </div>

          <div className="csHero__media" data-reveal>
            <div className="csHero__mediaFrame">
              <img
                className="csHero__img"
                src="/images/complisite/PPE-detection.webp"
                alt="Complisight hero visual"
              />
              <div className="csBadge">
                <FaRobot aria-hidden="true" />
                YOLO-powered detection
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEFINITION CARDS */}
      <section className="csSection">
        <div className="csContainer">
          <div className="csSection__head" data-reveal>
            <h2 className="csH2">Complisight in one minute</h2>
            <p className="csSub">
              A simple safety product: detect → alert → fix → report.
            </p>
          </div>

          <div className="csGrid3">
            {cards.map((c) => (
              <article className="csCard" key={c.title} data-reveal>
                <div className="csCard__icon">{c.icon}</div>
                <h3 className="csH3">{c.title}</h3>
                <p className="csP">{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OPERATIONAL DATA INPUTS */}
<section className="csOps" id="operational-data">
  <div className="csContainer">
    <div className="csOps__head">
      <h2 className="csH2">Operational data that makes alerts smarter</h2>
      <p className="csSub">
        Complisight combines CCTV detections with site context — so you don’t get noisy alerts.
      </p>
    </div>

    <div className="csOps__grid">
      <article className="csOps__card">
        <div className="csOps__icon">
          <FaMapMarkedAlt aria-hidden="true" />
        </div>
        <h3 className="csH3">Zone mapping</h3>
        <p className="csP">
          Define restricted areas, walkways, loading zones, and exclusion boundaries per camera.
        </p>
      </article>

      <article className="csOps__card">
        <div className="csOps__icon">
          <FaClipboardCheck aria-hidden="true" />
        </div>
        <h3 className="csH3">Shift & role rules</h3>
        <p className="csP">
          Apply different PPE rules by shift, contractor type, or job role (visitor vs worker vs driver).
        </p>
      </article>

      <article className="csOps__card">
        <div className="csOps__icon">
          <FaLock aria-hidden="true" />
        </div>
        <h3 className="csH3">Access & permits</h3>
        <p className="csP">
          Connect entry logs / permit-to-work to verify who is authorized for high-risk tasks.
        </p>
      </article>

      <article className="csOps__card">
        <div className="csOps__icon">
          <FaChartLine aria-hidden="true" />
        </div>
        <h3 className="csH3">Ops KPIs</h3>
        <p className="csP">
          Track hotspots, repeat violations, and closure time by zone/site to drive continuous improvement.
        </p>
      </article>
    </div>

    <div className="csOps__note">
      <FaCheckCircle aria-hidden="true" />
      Result: fewer false alarms, better prioritization, and audit-ready evidence aligned to operations.
    </div>
  </div>
</section>


      {/* INDUSTRIES 4.0 */}
      <section className="csSection csSection--alt" id="industries40">
        <div className="csContainer csSplit">
          <div className="csSplit__text" data-reveal>
            <h2 className="csH2">Industries 4.0 + Safety Automation</h2>
            <p className="csP">
              In Industries 4.0, operations become connected and data-driven. Complisight adds the
              missing part: an always-on safety layer powered by AI.
            </p>

            <ul className="csList">
              <li>
                <FaCheckCircle aria-hidden="true" /> CCTV + IoT context (zones, shifts, assets)
              </li>
              <li>
                <FaCheckCircle aria-hidden="true" /> AI detection for PPE + unsafe presence
              </li>
              <li>
                <FaCheckCircle aria-hidden="true" /> Actions and workflows, not just “detections”
              </li>
              <li>
                <FaCheckCircle aria-hidden="true" /> Audit-ready logs and compliance metrics
              </li>
            </ul>
          </div>

          <div className="csSplit__media" data-reveal>
            <img
              className="csMediaImg"
              src="/images/complisite/saftey.jpeg"
              alt="Industries 4.0 safety layer"
            />
          </div>
        </div>
      </section>
      

      {/* HOW IT WORKS */}
      <section className="csSection" id="how-it-works">
        <div className="csContainer">
          <div className="csSection__head" data-reveal>
            <h2 className="csH2">How it works</h2>
            <p className="csSub">Built for real sites: fast detection + clear actions.</p>
          </div>

          <div className="csSteps">
            {steps.map((s, idx) => (
              <div className="csStep" key={s.title} data-reveal>
                <div className="csStep__num">{String(idx + 1).padStart(2, "0")}</div>
                <div className="csStep__icon">{s.icon}</div>
                <div className="csStep__body">
                  <div className="csStep__title">{s.title}</div>
                  <div className="csStep__text">{s.text}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="csInlineMedia" data-reveal>
            <img
              className="csMediaImg"
              src="/images/complisight/images/complisight-detection.png"
              alt="PPE detection flow"
            />
          </div>
        </div>
      </section>

      {/* BENEFITS + DASHBOARD */}
      <section className="csSection csSection--alt">
        <div className="csContainer csSplit">
          <div className="csSplit__media" data-reveal>
            <img
              className="csMediaImg"
              src="/images/complisite/advantage.jpeg"
              alt="Complisight dashboard mock"
            />
          </div>

          <div className="csSplit__text" data-reveal>
            <h2 className="csH2">Advantages</h2>
            <p className="csP">
              Complisight improves safety culture by making compliance visible, measurable, and
              actionable—without depending only on manual supervision.
            </p>

            <ul className="csList">
              {benefits.map((b) => (
                <li key={b}>
                  <FaCheckCircle aria-hidden="true" /> {b}
                </li>
              ))}
            </ul>

            <div className="csNote">
              <FaLock aria-hidden="true" />
              Evidence controls + retention policies help maintain privacy and governance.
            </div>
          </div>
        </div>
      </section>

      {/* DEPLOYMENT */}
      <section className="csSection">
        <div className="csContainer">
          <div className="csSection__head" data-reveal>
            <h2 className="csH2">Deployment options</h2>
            <p className="csSub">Choose edge, cloud, or a hybrid rollout.</p>
          </div>

          <div className="csGrid3">
            {deployment.map((d) => (
              <article className="csCard" key={d.title} data-reveal>
                <div className="csCard__icon">{d.icon}</div>
                <h3 className="csH3">{d.title}</h3>
                <p className="csP">{d.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="csCta" id="contact">
        <div className="csContainer csCta__inner" data-reveal>
          <div>
            <h2 className="csH2 csH2--light">Want Complisight for your site?</h2>
            <p className="csP csP--light">
              We can map PPE types, zones, alert rules, and reporting to your operations.
            </p>
          </div>

          <div className="csCta__actions">
            <a className="csBtn csBtn--primary" href="mailto:info@cloudseals.com">
              Email us
            </a>
            <a className="csBtn csBtn--ghost" href="/about">
              Explore CloudSeals
            </a>
          </div>
        </div>
      </section>

      
    </div>
  );
}
