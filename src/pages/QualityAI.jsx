import React, { useEffect, useMemo } from "react";
import {
  FaCheckCircle,
  FaIndustry,
  FaHeadset,
  FaWaveSquare,
  FaRegChartBar,
  FaShieldAlt,
  FaRobot,
  FaSearch,
  FaArrowRight,
} from "react-icons/fa";

export default function QualityAI() {
  // reveal on scroll
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".qai-reveal"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("qai-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("qai-in")),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const IMG = useMemo(
    () => ({
      hero: "/images/brainai.jpeg",
      manuf: "/images/aimanfacturing.jpeg",
      production: "/images/production.jpeg",
      service: "/images/aisend.jpeg",
    }),
    []
  );

  const cards = [
    { label: "Accurate Evaluation", icon: <FaSearch /> },
    { label: "Precise Anomaly Detection", icon: <FaWaveSquare /> },
    { label: "Process Enhancements", icon: <FaRegChartBar /> },
    { label: "Predictive Analytics", icon: <FaRobot /> },
  ];

  const useCases = [
    {
      icon: <FaIndustry />,
      title: "Manufacturing inspection",
      desc: "Detect defects, deviations and failure patterns early using vision + sensor analytics.",
    },
    {
      icon: <FaHeadset />,
      title: "Call / chat QA",
      desc: "Auto-audit interactions for tone, script adherence and compliance phrases at scale.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Compliance checks",
      desc: "Standard-driven scoring with audit-ready logs and consistent outcomes.",
    },
  ];

  const benefits = [
    { title: "Boost throughput", desc: "Automate QA without slowing the production line or service operations." },
    { title: "Improve reliability", desc: "Consistent evaluations aligned to standards and quality gates." },
    { title: "Lower costs", desc: "Reduce manual effort, rework, and quality escapes." },
    { title: "Minimize human bias", desc: "Objective AI scoring and decisioning every time." },
  ];

  const pipeline = [
    { title: "Ingest", desc: "Video, images, audio, sensor logs, chat transcripts." },
    { title: "Analyze", desc: "Vision + NLP + anomaly detection + scoring rules." },
    { title: "Decide", desc: "Pass/fail, severity classification, root-cause hints." },
    { title: "Act", desc: "Alerts, tickets, workflow triggers, retraining signals." },
    { title: "Report", desc: "Dashboards, trends, audit logs, performance KPIs." },
  ];

  return (
    <main className="qai-page">
      {/* HERO */}
      <section className="qai-hero">
        <div className="qai-wrap qai-heroGrid">
          <div className="qai-heroCopy qai-reveal">
            <span className="qai-tag">AI-Driven Quality Assurance</span>
            <h1 className="qai-h1">
              Quality AI <br />
              <span>Across Industries</span>
            </h1>
            <p className="qai-lead">
              Intelligent Quality AI solutions that deliver accurate evaluation, precise anomaly detection,
              and continuous process enhancement across manufacturing and service environments.
            </p>

            <div className="qai-heroCtas">
              <a href="#contact" className="qai-btn qai-btn--primary">
                Talk to an Expert <FaArrowRight />
              </a>
              <a href="#usecases" className="qai-btn qai-btn--ghost">
                View use cases
              </a>
            </div>

            <div className="qai-metricRow">
              <div className="qai-metric">
                <strong>Faster QA</strong>
                <span>Automated scoring</span>
              </div>
              <div className="qai-metric">
                <strong>Less rework</strong>
                <span>Earlier detection</span>
              </div>
              <div className="qai-metric">
                <strong>Audit-ready</strong>
                <span>Consistent checks</span>
              </div>
            </div>
          </div>

          <div className="qai-heroVisual qai-reveal">
            <div className="qai-heroFrame">
              <img src={IMG.hero} alt="AI Quality Inspection" />
              <div className="qai-heroShade" />
              <div className="qai-heroBadge">
                <FaCheckCircle />
                <span>Standards-driven QA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="qai-glow qai-glow--a" />
        <div className="qai-glow qai-glow--b" />
      </section>

      {/* VALUE */}
      <section className="qai-value">
        <div className="qai-wrap qai-grid">
          <div className="qai-img qai-reveal">
            <div className="qai-imgFrame">
              <img src={IMG.manuf} alt="Manufacturing Quality AI" />
            </div>
          </div>

          <div className="qai-reveal">
            <h2 className="qai-h2">Versatile Quality AI Solutions</h2>
            <p className="qai-muted">
              CloudSeals delivers Quality AI solutions tailored to industry-specific challenges—ranging from
              manufacturing quality control to call-center audits.
            </p>
            <p className="qai-muted">
              Our toolkit evaluates signals, conversations, and physical characteristics against standards,
              automatically passing or failing samples using computer vision, NLP, and predictive analytics.
            </p>

            <div className="qai-cards">
              {cards.map((c) => (
                <div className="qai-card qai-reveal" key={c.label}>
                  <div className="qai-cardIcon">{c.icon}</div>
                  <div className="qai-cardText">{c.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MANUFACTURING */}
      <section className="qai-manufacturing">
        <div className="qai-wrap qai-grid qai-grid--reverse">
          <div className="qai-reveal">
            <h2 className="qai-h2">AI-Powered Manufacturing Quality</h2>
            <p className="qai-muted">
              In manufacturing, Quality AI leverages sensor and vision analytics to detect deviations early,
              map failure predictors to weak points, and enable proactive quality control.
            </p>
            <p className="qai-muted">
              Advanced diagnostics support optimal test sequencing based on statistical likelihood — reducing waste,
              downtime, and rework.
            </p>

            <div className="qai-bullets">
              <div className="qai-bullet"><FaCheckCircle /> Defect detection with thresholds & confidence</div>
              <div className="qai-bullet"><FaCheckCircle /> Predictive flags for high-risk batches</div>
              <div className="qai-bullet"><FaCheckCircle /> Trend analytics for process improvements</div>
            </div>
          </div>

          <div className="qai-img qai-reveal">
            <div className="qai-imgFrame">
              <img src={IMG.production} alt="Sensor Analytics AI" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE */}
      <section className="qai-service">
        <div className="qai-wrap qai-grid">
          <div className="qai-img qai-reveal">
            <div className="qai-imgFrame">
              <img src={IMG.service} alt="Call Center AI Analytics" />
            </div>
          </div>

          <div className="qai-reveal">
            <h2 className="qai-h2">Quality AI for Service Environments</h2>
            <p className="qai-muted">
              Within call centers and service operations, CloudSeals ingests thousands of recorded interactions
              using linguistic algorithms and speech analysis.
            </p>
            <p className="qai-muted">
              The system evaluates interaction quality, agent tone, and process consistency — and generates
              audit-ready insights that improve customer experience at scale.
            </p>

            <div className="qai-bullets">
              <div className="qai-bullet"><FaCheckCircle /> Tone & sentiment scoring</div>
              <div className="qai-bullet"><FaCheckCircle /> Script adherence & compliance phrases</div>
              <div className="qai-bullet"><FaCheckCircle /> Auto summaries + coaching signals</div>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="qai-usecases" id="usecases">
        <div className="qai-wrap">
          <div className="qai-head qai-reveal">
            <h2 className="qai-h2">Where Quality AI fits</h2>
            <p className="qai-muted">Deploy as a quality gate, compliance layer, or operational intelligence engine.</p>
          </div>

          <div className="qai-useGrid">
            {useCases.map((u) => (
              <div className="qai-useCard qai-reveal" key={u.title}>
                <div className="qai-useIcon">{u.icon}</div>
                <h3 className="qai-h3">{u.title}</h3>
                <p className="qai-muted">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PIPELINE */}
      <section className="qai-pipeline">
        <div className="qai-wrap">
          <div className="qai-head qai-reveal">
            <h2 className="qai-h2">How it works</h2>
            <p className="qai-muted">From ingest to action — built for operational scale.</p>
          </div>

          <div className="qai-flow">
            {pipeline.map((p) => (
              <div className="qai-step qai-reveal" key={p.title}>
                <div className="qai-stepTop">
                  <span className="qai-stepDot" />
                  <strong>{p.title}</strong>
                </div>
                <span className="qai-stepDesc">{p.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="qai-benefits">
        <div className="qai-wrap">
          <div className="qai-center qai-reveal">
            <h2 className="qai-h2">Adaptable Quality Assurance at Scale</h2>
            <p className="qai-muted">
              Reduce defects, improve consistency, and keep teams aligned to standards across environments.
            </p>
          </div>

          <div className="qai-benefitGrid">
            {benefits.map((b) => (
              <div className="qai-benefit qai-reveal" key={b.title}>
                <h4 className="qai-h4">{b.title}</h4>
                <p className="qai-muted">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="qai-cta" id="contact">
        <div className="qai-wrap qai-ctaBox qai-reveal">
          <h2 className="qai-h2">Elevate Quality With Intelligent AI</h2>
          <p className="qai-muted">
            Want a deeper walkthrough of CloudSeals Quality AI for your industry? We’ll share an approach,
            sample outputs, and a rollout plan.
          </p>
          <div className="qai-ctaRow">
            <a className="qai-btn qai-btn--primary" href="/contact">
              Request Consultation <FaArrowRight />
            </a>
            <a className="qai-btn qai-btn--ghost" href="#usecases">
              See use cases
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
