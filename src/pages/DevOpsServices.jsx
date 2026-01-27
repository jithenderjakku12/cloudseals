import React, { useEffect, useMemo, useState } from "react";

function useScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".dv-reveal"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("dv-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("dv-visible");
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function DevOpsServices() {
  useScrollReveal();
  const [activeTab, setActiveTab] = useState("CI/CD");

  // ✅ Your public folder images
  const IMG = {
    hero: "/images/devops/devops.jpg",
    cloud: "/images/devops/cloud.jpg",
    secure: "/images/devops/security.jpg",
    lock: "/images/devops/lock.jpeg",
    time: "/images/devops/time.jpeg",
    money: "/images/devops/money.jpeg",
    app: "/images/devops/app.jpeg",
    steps: "/images/devops/steps.jpeg",
    stack: "/images/devops/stack.jpeg",
    productive: "/images/devops/productive.jpeg",
    opportunities: "/images/devops/opportunities.jpeg",
    target: "/images/devops/target.jpeg",
    react: "/images/devops/react.jpeg",
    vision: "/images/devops/vision.jpeg",
  };

  const flowSteps = useMemo(
    () => [
      {
        no: "01",
        title: "Assessment & Planning",
        desc: "We evaluate your SDLC, environments, bottlenecks, and KPIs to build a DevOps roadmap.",
        img: IMG.target,
      },
      {
        no: "02",
        title: "Pilot Framework",
        desc: "We build a pilot pipeline + governance model aligned to your org and release goals.",
        img: IMG.opportunities,
      },
      {
        no: "03",
        title: "Infrastructure as Code",
        desc: "Standardize environments using IaC so deployments are reproducible and auditable.",
        img: IMG.lock,
      },
      {
        no: "04",
        title: "CI/CD Pipelines",
        desc: "Automated testing, artifact versioning, approvals, and safe rollout with rollbacks.",
        img: IMG.steps,
      },
      {
        no: "05",
        title: "Observability",
        desc: "Metrics/logs/traces, dashboards, SLOs, and tuned alerting to reduce MTTR.",
        img: IMG.time,
      },
      {
        no: "06",
        title: "DevSecOps",
        desc: "Security scanning, policy gates, secrets management, and compliance-ready evidence.",
        img: IMG.secure,
      },
    ],
    [IMG]
  );

  const strategyCards = useMemo(
    () => [
      { img: IMG.app, title: "Speed", desc: "Accelerate delivery with automation-first workflows." },
      { img: IMG.money, title: "Rapid Delivery", desc: "Ship more often with confidence and fewer failures." },
      { img: IMG.cloud, title: "Reliability", desc: "Build resilient systems using SRE principles." },
      { img: IMG.lock, title: "Scalability", desc: "Standardize infra and scale across teams/environments." },
      { img: IMG.productive, title: "Collaboration", desc: "One shared view: dashboards, runbooks, ownership." },
      { img: IMG.secure, title: "Security", desc: "Shift-left security with automated gates and checks." },
    ],
    [IMG]
  );

  const tools = useMemo(
    () => [
      { group: "CI/CD", items: ["Bitbucket Pipelines", "GitHub Actions", "GitLab CI", "Jenkins"] },
      { group: "Containers", items: ["Docker", "Kubernetes", "Cloud Run", "Artifact Registry"] },
      { group: "IaC", items: ["Terraform", "Pulumi", "Helm", "Ansible"] },
      { group: "Observability", items: ["Cloud Monitoring", "Prometheus", "Grafana", "ELK / OpenSearch"] },
      { group: "Security", items: ["SAST/DAST", "SBOM", "Secrets Manager", "Policy-as-Code"] },
    ],
    []
  );

const deliveryTabs = useMemo(
  () => ({
    "CI/CD": {
      title: "CI/CD That Teams Actually Use",
      image: IMG.react, // ✅ change image on tab
      points: [
        "Branch strategy + approvals aligned to dev/uat/prod.",
        "Build once, deploy many with versioned artifacts.",
        "Blue/green or canary rollout with instant rollback.",
        "Environment parity to reduce drift and incidents.",
      ],
    },
    SRE: {
      title: "SRE for Reliability at Scale",
      image: IMG.vision, // ✅ change image on tab
      points: [
        "Define SLIs/SLOs for true customer experience.",
        "Smart alert routing + deduplication to reduce noise.",
        "Runbooks + incident workflows to reduce MTTR.",
        "Dashboards for metrics, logs, and traces.",
      ],
    },
    DevSecOps: {
      title: "DevSecOps Without Slowing Delivery",
      image: IMG.secure, // ✅ change image on tab
      points: [
        "Policy gates for vulnerabilities and misconfigurations.",
        "Secure secrets handling inside CI/CD pipelines.",
        "Audit-ready evidence capture and reporting.",
        "Least-privilege IAM + automated posture checks.",
      ],
    },
  }),
  [IMG]
);


  const caseStudies = useMemo(
    () => [
      {
        img: IMG.vision,
        title: "Safety Analytics Platform",
        desc: "Reduced release time from days to hours using CI/CD + controlled container deployments.",
        kpis: ["Release frequency ↑", "Rollback time ↓", "Downtime ↓"],
      },
      {
        img: IMG.react,
        title: "Modern Web Delivery",
        desc: "Introduced preview environments and clean branching workflows for faster iteration.",
        kpis: ["Cycle time ↓", "Defects ↓", "Velocity ↑"],
      },
      {
        img: IMG.cloud,
        title: "Cloud Cost & Reliability",
        desc: "Implemented dashboards + SLOs + alert routing for proactive incident management.",
        kpis: ["Cloud waste ↓", "MTTR ↓", "Availability ↑"],
      },
    ],
    [IMG]
  );

  const faqs = useMemo(
    () => [
      { q: "How long does DevOps implementation take?", a: "Pilot can start in 1–2 weeks; full rollout depends on scope." },
      { q: "Can you use our existing tools?", a: "Yes. We optimize your current stack and standardize best practices." },
      { q: "Do you setup monitoring & alerts?", a: "Yes—metrics, logs, dashboards, SLOs, and alert tuning included." },
      { q: "Do you support compliance needs?", a: "Yes. We add security gates + audit evidence capture (DevSecOps)." },
    ],
    []
  );

  return (
    <main className="dv-shell">
      {/* HERO */}
      <section className="dv-hero">
        <div className="dv-hero__bg" style={{ backgroundImage: `url(${IMG.hero})` }} />
        <div className="dv-hero__overlay" />

        <div className="dv-wrap dv-hero__grid">
          <div className="dv-hero__left dv-reveal">
            <div className="dv-kicker">CloudSeals • DevOps Services</div>

            <h1 className="dv-title">DevOps that ships faster, costs less, and stays reliable.</h1>

            <p className="dv-subtitle">
              Build modern pipelines, reliable platforms, and security-first delivery so your teams launch confidently—every time.
            </p>

            <div className="dv-ctaRow">
              <a className="dv-btn dv-btn--primary" href="#dv-contact">Book a DevOps Review</a>
              <a className="dv-btn dv-btn--ghost" href="#dv-flow">See Enablement Flow</a>
            </div>

            <div className="dv-tags">
              <span className="dv-tag">CI/CD</span>
              <span className="dv-tag">Cloud Native</span>
              <span className="dv-tag">SRE</span>
              <span className="dv-tag">DevSecOps</span>
            </div>
          </div>

          <div className="dv-hero__right dv-reveal">
            <div className="dv-glass">
              <h3 className="dv-glass__title">What you get</h3>
              <ul className="dv-bullets">
                <li>Production-grade CI/CD with rollbacks</li>
                <li>IaC (Terraform) and environment parity</li>
                <li>Observability: metrics, logs, traces, SLOs</li>
                <li>Security scanning + policy gates</li>
              </ul>

              <div className="dv-metrics">
                <div className="dv-metric">
                  <strong>↓ MTTR</strong>
                  <span>Recover faster</span>
                </div>
                <div className="dv-metric">
                  <strong>↑ Releases</strong>
                  <span>Ship more</span>
                </div>
                <div className="dv-metric">
                  <strong>↓ Cost</strong>
                  <span>Less waste</span>
                </div>
              </div>
            </div>

            <div className="dv-heroShot">
              <img src={IMG.cloud} alt="Cloud automation" />
              <div className="dv-heroShot__cap">Cloud-native automation with controlled deployment</div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="dv-sec dv-intro">
        <div className="dv-wrap dv-intro__grid">
          <div className="dv-intro__img dv-reveal">
            <img className="dv-img" src={IMG.steps} alt="DevOps flow" />
          </div>

          <div className="dv-intro__text dv-reveal">
            <h2 className="dv-h2">DevOps Services</h2>
            <p className="dv-p">
              CloudSeals helps teams modernize delivery through automation, reliability engineering, and cloud best practices.
            </p>
            <p className="dv-p dv-muted">
              Outcome: faster releases, fewer incidents, measurable improvements in quality and operations.
            </p>
          </div>
        </div>
      </section>

      {/* FLOW */}
      <section id="dv-flow" className="dv-sec dv-flow">
        <div className="dv-wrap">
          <div className="dv-head dv-reveal">
            <h2 className="dv-h2">DevOps Enablement Flow</h2>
            <p className="dv-muted">A proven flow from pilot → standardization → scale.</p>
          </div>

          <div className="dv-flowGrid">
            {flowSteps.map((s) => (
              <article className="dv-flowCard dv-reveal" key={s.no}>
                <div className="dv-flowCard__top">
                  <span className="dv-step">{s.no}</span>
                  <h3 className="dv-h3">{s.title}</h3>
                </div>
                <p className="dv-muted">{s.desc}</p>
                <div className="dv-flowCard__img">
                  <img src={s.img} alt={s.title} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STRATEGY */}
      <section className="dv-sec dv-strategy">
        <div className="dv-wrap">
          <div className="dv-head dv-reveal">
            <h2 className="dv-h2">Our DevOps Strategy</h2>
            <p className="dv-muted">Simple, practical, and built for real-world delivery.</p>
          </div>

          <div className="dv-cardGrid">
            {strategyCards.map((c) => (
              <article key={c.title} className="dv-card dv-reveal">
                <div className="dv-card__img">
                  <img src={c.img} alt={c.title} />
                </div>
                <h3 className="dv-h3">{c.title}</h3>
                <p className="dv-muted">{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="dv-sec dv-tools">
        <div className="dv-wrap">
          <div className="dv-head dv-reveal">
            <h2 className="dv-h2">Tools & Platform Stack</h2>
            <p className="dv-muted">We integrate with your existing ecosystem and scale it cleanly.</p>
          </div>

          <div className="dv-toolGrid">
            {tools.map((t) => (
              <div className="dv-toolCard dv-reveal" key={t.group}>
                <div className="dv-toolCard__head">
                  <img className="dv-toolIcon" src={IMG.stack} alt="stack" />
                  <h3 className="dv-h3">{t.group}</h3>
                </div>
                <ul className="dv-bullets dv-muted">
                  {t.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERY */}
   <section className="dv-sec dv-delivery">
  <div className="dv-wrap dv-delivery__grid">
    {/* LEFT */}
    <div className="dv-delivery__left dv-reveal">
      <h2 className="dv-h2">Delivery Model</h2>
      <p className="dv-muted">
        Choose a focus area — we execute with measurable KPIs and a clean rollout plan.
      </p>

      <div className="dv-tabs">
        {Object.keys(deliveryTabs).map((k) => (
          <button
            key={k}
            type="button"
            className={`dv-tabBtn ${activeTab === k ? "dv-tabBtn--active" : ""}`}
            onClick={() => setActiveTab(k)}
          >
            <span className="dv-tabBtn__dot" />
            {k}
          </button>
        ))}
      </div>

      <div className="dv-panel">
        <div className="dv-panel__head">
          <h3 className="dv-h3">{deliveryTabs[activeTab].title}</h3>
          <span className="dv-panel__badge">Recommended</span>
        </div>

        <ul className="dv-points">
          {deliveryTabs[activeTab].points.map((p, idx) => (
            <li key={`${activeTab}-${idx}`} className="dv-point">
              <span className="dv-point__icon">✓</span>
              <span className="dv-point__text">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* RIGHT (Image switches) */}
    <div className="dv-delivery__right dv-reveal">
      <div className="dv-preview">
        <div className="dv-preview__top">
          <span className="dv-preview__pill">{activeTab}</span>
          <span className="dv-preview__meta">Implementation Preview</span>
        </div>

        <div className="dv-preview__imgWrap">
          {/* ✅ key forces smooth fade on change */}
          <img
            key={activeTab}
            className="dv-preview__img"
            src={deliveryTabs[activeTab].image}
            alt={`${activeTab} preview`}
          />
        </div>

        <div className="dv-preview__footer">
          <div className="dv-miniStat">
            <strong>Faster</strong>
            <span>Delivery</span>
          </div>
          <div className="dv-miniStat">
            <strong>Safer</strong>
            <span>Releases</span>
          </div>
          <div className="dv-miniStat">
            <strong>Clear</strong>
            <span>KPIs</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* CASE STUDIES */}
      <section className="dv-sec dv-cases">
        <div className="dv-wrap">
          <div className="dv-head dv-reveal">
            <h2 className="dv-h2">Example Outcomes</h2>
            <p className="dv-muted">What customers typically achieve with our DevOps + SRE approach.</p>
          </div>

          <div className="dv-caseGrid">
            {caseStudies.map((c) => (
              <article key={c.title} className="dv-case dv-reveal">
                <img className="dv-case__img" src={c.img} alt={c.title} />
                <div className="dv-case__body">
                  <h3 className="dv-h3">{c.title}</h3>
                  <p className="dv-muted">{c.desc}</p>
                  <div className="dv-pillRow">
                    {c.kpis.map((k) => (
                      <span className="dv-pill" key={k}>
                        {k}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="dv-sec dv-faq">
        <div className="dv-wrap">
          <div className="dv-head dv-reveal">
            <h2 className="dv-h2">FAQ</h2>
            <p className="dv-muted">Quick answers to common DevOps questions.</p>
          </div>

          <div className="dv-faqGrid">
            {faqs.map((f) => (
              <details key={f.q} className="dv-faqItem dv-reveal">
                <summary>{f.q}</summary>
                <p className="dv-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="dv-contact" className="dv-sec dv-cta">
        <div className="dv-wrap dv-ctaBox dv-reveal">
          <div className="dv-ctaBox__left">
            <h2 className="dv-h2">Ready to upgrade delivery?</h2>
            <p className="dv-muted">
              Share your pipeline, tools, and environments — we’ll propose a pilot plan and rollout roadmap.
            </p>
            <div className="dv-ctaRow">
              <a className="dv-btn dv-btn--primary" href="#dv-flow">Start with Flow</a>
              <a className="dv-btn dv-btn--ghost" href="#dv-contact">Contact Us</a>
            </div>
          </div>

          <div className="dv-ctaBox__right">
            <img src={IMG.hero} alt="DevOps" />
          </div>
        </div>
      </section>
    </main>
  );
}
