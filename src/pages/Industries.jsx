import React from "react";


import { MdFactory, MdLocalShipping } from "react-icons/md";
import { RiLeafLine, RiShieldCheckLine } from "react-icons/ri";
import { FiArrowRight, FiCpu, FiShield, FiTrendingUp, FiCheckCircle } from "react-icons/fi";

export default function Industries40() {
  const pillars = [
    {
      icon: <FiCpu aria-hidden />,
      title: "IoT Signals",
      desc: "Machines, cameras, sensors, fleets — unified into one real-time operational layer.",
      points: ["Device onboarding", "Live telemetry", "Edge + cloud pipelines"],
    },
    {
      icon: <FiTrendingUp aria-hidden />,
      title: "AI Automation",
      desc: "Detect, predict, and automate decisions — from safety alerts to quality and risk scoring.",
      points: ["Computer vision", "Anomaly detection", "Predictive intelligence"],
    },
    {
      icon: <FiShield aria-hidden />,
      title: "Blockchain Integrity",
      desc: "Tamper-evident audit trails for compliance, traceability, and governance evidence.",
      points: ["Chain-of-custody logs", "Immutable approvals", "Audit-ready history"],
    },
  ];

  const outcomes = [
    { k: "OEE ↑", v: "Higher uptime & throughput" },
    { k: "Risk ↓", v: "Fewer incidents & fraud signals" },
    { k: "Cost ↓", v: "Automation reduces manual effort" },
    { k: "Proof ↑", v: "Stronger audit & traceability" },
  ];

  const industries = [
    {
      key: "manufacturing",
      tag: (
        <>
          <MdFactory size={20} className="i40Industries__tagIcon" aria-hidden /> Manufacturing 4.0
        </>
      ),
      title: "Smart Factories with IoT + AI Quality",
      desc:
        "Unify shop-floor IoT, machine signals, and vision into one command layer. AI detects defects, predicts downtime, and lifts OEE — while blockchain preserves batch/part traceability for audits.",
      where: ["Factories", "Assembly lines", "Quality labs", "Maintenance operations"],
      who: ["COO / Plant Head", "Quality Manager", "Reliability Engineer", "CIO / IT Ops"],
      advantages: ["Reduced defects", "Higher uptime", "Faster root-cause analysis", "Audit-ready traceability"],
      bullets: [
        "IoT device integration & live telemetry",
        "AI quality inspection & anomaly detection",
        "Predictive maintenance & OEE uplift",
        "Blockchain traceability for parts/batches",
      ],
      img: "/images/About/Smart-Factories2.webp",
      alt: "Manufacturing 4.0",
    },
    {
      key: "logistics",
      tag: (
        <>
          <MdLocalShipping size={20} className="i40Industries__tagIcon" aria-hidden /> Logistics 4.0
        </>
      ),
      title: "Real-time Yards, Safety & Dispatch Intelligence",
      desc:
        "Visibility across yard, warehouse, fleet, and ports using IoT + AI. Reduce near-misses, improve slot planning, accelerate turnaround — with blockchain-backed chain-of-custody logs.",
      where: ["Yards", "Warehouses", "Ports & terminals", "Fleet operations"],
      who: ["Operations Head", "HSE / Safety Lead", "Dispatch Manager", "Compliance Manager"],
      advantages: ["Lower near-miss rate", "Faster turnaround", "Better capacity planning", "Trusted custody logs"],
      bullets: [
        "Yard + fleet visibility using telemetry",
        "AI safety alerts (zones, PPE, near-miss)",
        "Turnaround optimization & capacity planning",
        "Blockchain chain-of-custody event logs",
      ],
      img: "/images/About/FERNRIDE-Container-Handling-Terberg-3-1-1024x683.jpg",
      alt: "Logistics 4.0",
    },
    {
      key: "esg",
      tag: (
        <>
          <RiLeafLine size={20} className="i40Industries__tagIcon" aria-hidden /> Sustainability & ESG
        </>
      ),
      title: "From ESG Claims to ESG Proof",
      desc:
        "Connect energy + operations data (IoT), run AI analytics to find reduction opportunities, and maintain verifiable audit trails using blockchain — enabling ESG reporting stakeholders can trust.",
      where: ["Plants & facilities", "Energy systems", "Supply chains", "ESG reporting teams"],
      who: ["Sustainability Lead", "CFO / ESG Owner", "Plant Ops", "Governance & Audit"],
      advantages: ["Better ESG credibility", "Faster reporting", "Reduction insights", "Evidence-based governance"],
      bullets: [
        "Energy + emissions analytics (Scope readiness)",
        "AI insights for reduction & forecasting",
        "Automated ESG reporting & governance trails",
        "Blockchain verification for ESG data integrity",
      ],
      img: "/images/About/sustainability-dashboard-example.png",
      alt: "Sustainability & ESG",
    },
    {
      key: "finance",
      tag: (
        <>
          <RiShieldCheckLine size={20} className="i40Industries__tagIcon" aria-hidden /> Finance & Compliance
        </>
      ),
      title: "Secure Platforms with AI Risk & Compliance Automation",
      desc:
        "Design secure cloud-native systems that scale with governance. AI identifies fraud/risk signals, compliance automation enforces policy, and blockchain preserves integrity for approvals and records.",
      where: ["Banks", "FinTech platforms", "Risk & compliance teams", "Audit operations"],
      who: ["CISO", "Risk Officer", "Compliance Lead", "CTO / Platform Owner"],
      advantages: ["Lower fraud exposure", "Stronger controls", "Faster audits", "Better governance assurance"],
      bullets: [
        "Risk scoring + fraud & anomaly signals",
        "Compliance automation & policy enforcement",
        "Secure modernization + governance controls",
        "Blockchain integrity for approvals & records",
      ],
      img: "/images/About/OIP.jpg",
      alt: "Finance & Compliance",
    },
  ];

  const roles = [
    {
      title: "COO / Operations",
      desc: "Wants uptime, throughput, and cost control with real-time visibility.",
    },
    {
      title: "HSE / Safety Lead",
      desc: "Needs incident prevention, PPE compliance, near-miss detection, and evidence logs.",
    },
    {
      title: "CISO / Compliance",
      desc: "Requires policy enforcement, audit trails, access controls, and secure-by-design systems.",
    },
    {
      title: "Sustainability / ESG Owner",
      desc: "Needs trusted measurement, reduction insights, and stakeholder-ready reporting proof.",
    },
  ];

  const delivery = [
    { step: "01", title: "Discover", desc: "Use-cases, KPIs, risk areas, and success outcomes." },
    { step: "02", title: "Connect", desc: "Integrate IoT devices, video, systems, and data sources." },
    { step: "03", title: "Automate", desc: "AI detection, prediction, workflows, and real-time actions." },
    { step: "04", title: "Govern", desc: "Controls, approvals, policies, immutable audit trails." },
    { step: "05", title: "Prove", desc: "Dashboards, reports, evidence packs, continuous improvement." },
  ];

  return (
    <div className="i40Page">
      {/* =========================
          HERO
      ========================= */}
      <section className="i40Hero">
        <div className="i40Hero__wrap">
          <div className="i40Hero__left">
            <p className="i40Hero__pill">Industries 4.0 by CloudSeals</p>
            <h1 className="i40Hero__title">Connected. Intelligent. Trusted.</h1>
            <p className="i40Hero__sub">
              IoT signals + AI automation + blockchain integrity — built for measurable outcomes across
              Manufacturing, Logistics, ESG, and Finance.
            </p>

            <div className="i40Hero__metrics">
              {outcomes.map((o) => (
                <div className="i40Hero__metric" key={o.k}>
                  <div className="i40Hero__metricK">{o.k}</div>
                  <div className="i40Hero__metricV">{o.v}</div>
                </div>
              ))}
            </div>

            <div className="i40Hero__actions">
              <a className="i40Hero__btn" href="/contact">
                Talk to CloudSeals <FiArrowRight aria-hidden />
              </a>
              <a className="i40Hero__link" href="#i40-industries">
                Explore industries
              </a>
            </div>
          </div>

          <div className="i40Hero__right" aria-hidden>
            <div className="i40Hero__card">
              <div className="i40Hero__cardTop">
                <span className="i40Hero__badge">What is Industries 4.0?</span>
                <span className="i40Hero__ok">
                  <FiCheckCircle aria-hidden /> Outcome-first
                </span>
              </div>
              <p className="i40Hero__cardP">
                It’s the shift from traditional operations to <b>connected, intelligent, and trusted systems</b>.
                CloudSeals brings real-time signals, automated decisions, and tamper-evident proof — end-to-end.
              </p>
              <div className="i40Hero__miniGrid">
                <div className="i40Hero__mini">IoT</div>
                <div className="i40Hero__mini">AI</div>
                <div className="i40Hero__mini">Blockchain</div>
                <div className="i40Hero__mini">Compliance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          WHAT / WHY (PILLARS)
      ========================= */}
      <section className="i40What" id="i40-what">
        <div className="i40What__wrap">
          <div className="i40What__head">
            <h2 className="i40What__title">What we build</h2>
            <p className="i40What__sub">
              A single operational intelligence layer that connects signals → decisions → proof.
            </p>
          </div>

          <div className="i40What__grid">
            {pillars.map((p) => (
              <div className="i40What__card" key={p.title}>
                <div className="i40What__icon">{p.icon}</div>
                <h3 className="i40What__cardTitle">{p.title}</h3>
                <p className="i40What__cardP">{p.desc}</p>
                <ul className="i40What__list">
                  {p.points.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="i40What__why">
            <h3 className="i40What__whyTitle">Why it matters</h3>
            <div className="i40What__whyGrid">
              <div className="i40What__whyCard">
                <b>Faster decisions</b>
                <span>Real-time alerts + automation instead of manual review.</span>
              </div>
              <div className="i40What__whyCard">
                <b>Lower risk</b>
                <span>Safety, fraud, and compliance signals detected early.</span>
              </div>
              <div className="i40What__whyCard">
                <b>Audit-ready proof</b>
                <span>Tamper-evident logs to support audits and governance.</span>
              </div>
              <div className="i40What__whyCard">
                <b>Measurable outcomes</b>
                <span>KPIs tied to OEE, turnaround, emissions, and controls.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          INDUSTRIES (ONLY 4)
      ========================= */}
      <section className="i40Industries" id="i40-industries">
        <div className="i40Industries__wrap">
          <div className="i40Industries__head">
            <h2 className="i40Industries__title">Where CloudSeals Drives Industry 4.0 Outcomes</h2>
            <p className="i40Industries__sub">
              Choose your domain — we deliver the same architecture: signals → AI → governed proof.
            </p>
          </div>

          {industries.map((item, idx) => (
            <div className="i40Industries__row" key={item.key}>
              <div className="i40Industries__text">
                <span className="i40Industries__tag">{item.tag}</span>
                <h3 className="i40Industries__rowTitle">{item.title}</h3>
                <p className="i40Industries__rowP">{item.desc}</p>

                <div className="i40Industries__meta">
                  <div className="i40Industries__metaCol">
                    <div className="i40Industries__metaTitle">Where</div>
                    <ul className="i40Industries__metaList">
                      {item.where.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="i40Industries__metaCol">
                    <div className="i40Industries__metaTitle">Who</div>
                    <ul className="i40Industries__metaList">
                      {item.who.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="i40Industries__metaCol">
                    <div className="i40Industries__metaTitle">Advantages</div>
                    <ul className="i40Industries__metaList">
                      {item.advantages.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <ul className="i40Industries__bullets">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>

              <div className="i40Industries__media">
                <div className="i40Industries__imgFrame">
                  <img src={item.img} className="i40Industries__img" alt={item.alt} />
                  <div className="i40Industries__imgGlow" aria-hidden />
                </div>

                <div className="i40Industries__note" aria-hidden>
                  Outcome-first delivery • Secure-by-design • Audit-ready proof
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================
          WHO (PERSONAS)
      ========================= */}
      <section className="i40Who" id="i40-who">
        <div className="i40Who__wrap">
          <div className="i40Who__head">
            <h2 className="i40Who__title">Who benefits most</h2>
            <p className="i40Who__sub">
              We align to the people who own outcomes — operations, safety, security, and ESG.
            </p>
          </div>

          <div className="i40Who__grid">
            {roles.map((r) => (
              <div className="i40Who__card" key={r.title}>
                <h3 className="i40Who__cardTitle">{r.title}</h3>
                <p className="i40Who__cardP">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          HOW (DELIVERY STEPS)
      ========================= */}
      <section className="i40How" id="i40-how">
        <div className="i40How__wrap">
          <div className="i40How__head">
            <h2 className="i40How__title">How we deliver</h2>
            <p className="i40How__sub">
              Fast rollout with clear governance — from data connection to audit-proof reporting.
            </p>
          </div>

          <div className="i40How__steps">
            {delivery.map((d) => (
              <div className="i40How__step" key={d.step}>
                <div className="i40How__stepNo">{d.step}</div>
                <div className="i40How__stepTitle">{d.title}</div>
                <div className="i40How__stepDesc">{d.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          CTA
      ========================= */}
      <section className="i40Cta">
        <div className="i40Cta__wrap">
          <h2 className="i40Cta__title">Ready to make Industry 4.0 measurable?</h2>
          <p className="i40Cta__sub">
            Tell us your industry + KPI (OEE, safety, turnaround, ESG, compliance). We’ll map signals → AI → proof.
          </p>

          <div className="i40Cta__actions">
            <a className="i40Cta__btn" href="/contact">
              Book a demo <FiArrowRight aria-hidden />
            </a>
            <a className="i40Cta__ghost" href="#i40-what">
              See platform approach
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
