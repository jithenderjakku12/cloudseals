import React, { useEffect } from "react";


function useRevealOnScroll() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".cs-reveal"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("cs-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("cs-visible");
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Icon({ name }) {
  // Inline SVG icons (no installs needed)
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" };

  if (name === "design")
    return (
      <svg {...common}>
        <path d="M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M7 17l10-10 2 2-10 10H7v-2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    );

  if (name === "cube")
    return (
      <svg {...common}>
        <path
          d="M12 2l8 4.5v11L12 22l-8-4.5v-11L12 2z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 6.5L12 12 4 6.5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    );

  if (name === "code")
    return (
      <svg {...common}>
        <path d="M8 9l-3 3 3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 9l3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 7l-2 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );

  if (name === "shield")
    return (
      <svg {...common}>
        <path
          d="M12 2l8 4v7c0 5-3.4 9.4-8 9.4S4 18 4 13V6l8-4z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M9 12l2 2 4-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );

  if (name === "rocket")
    return (
      <svg {...common}>
        <path
          d="M14 4c3 1 6 4 6 8-4 0-7-3-8-6-1 1-2 2-2 4l-4 4c-1 1-1 3 0 4 1 1 3 1 4 0l4-4c2 0 3-1 4-2z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M7 17l-2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );

  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function CloudServices() {
  useRevealOnScroll();

  // ✅ your images directory style
  const IMG = {
    hero: "/images/devops/time.jpeg",
    security: "/images/devops/security.jpg",
    stack: "/images/devops/stack.jpeg",
    app: "/images/devops/app.jpeg",
    goal: "/images/devops/goal.jpeg",
  };

  const workflow = [
    { key: "Assessment", icon: "design", text: "Assess workloads, risks, cost drivers, and readiness." },
    { key: "Strategy", icon: "cube", text: "Build target architecture, governance, and migration waves." },
    { key: "Migration", icon: "code", text: "Move apps/data safely with minimal downtime and validation." },
    { key: "Security", icon: "shield", text: "Zero-trust, IAM, encryption, monitoring, and compliance." },
    { key: "Optimization", icon: "rocket", text: "FinOps + performance tuning + continuous improvements." },
  ];

  const offerings = [
    {
      title: "Cloud Architecture & Design",
      icon: "cube",
      points: ["Reference architecture (AWS/Azure/GCP)", "High availability + DR planning", "Landing zone + governance"],
    },
    {
      title: "Managed Cloud Services",
      icon: "rocket",
      points: ["24/7 monitoring + incident response", "Patching + backups + reliability", "Performance tuning + capacity"],
    },
    {
      title: "Cloud Security & Compliance",
      icon: "shield",
      points: ["IAM + least privilege", "Encryption + secrets management", "Compliance evidence + audit support"],
    },
    {
      title: "DevOps & Automation",
      icon: "code",
      points: ["CI/CD pipelines + release safety", "IaC (Terraform) + environment parity", "Containerization + orchestration"],
    },
  ];

  return (
    <main className="cs-page">
      {/* HERO */}
      <section className="cs-hero">
        <div className="cs-hero__bg" style={{ backgroundImage: `url(${IMG.hero})` }} />
        <div className="cs-hero__veil" />

        <div className="cs-wrap cs-hero__grid">
          <div className="cs-hero__copy cs-reveal">
            <div className="cs-kicker">
              <span className="cs-kicker__dot" />
              CloudSeals • Cloud Services
            </div>

            <h1 className="cs-title">Build, Scale & Secure Your Digital Infrastructure in the Cloud</h1>

            <p className="cs-subtitle">
              CloudSeals delivers enterprise-grade cloud architecture, management and optimization across AWS, Azure &
              Google Cloud—helping teams move faster, scale smarter, and stay secure.
            </p>

            <div className="cs-ctaRow">
              <a className="cs-btn cs-btn--primary" href="/contact">
                Get Free Consultation
              </a>
             
            </div>

            <div className="cs-badges">
              <span className="cs-badge">AWS</span>
              <span className="cs-badge">Azure</span>
              <span className="cs-badge">Google Cloud</span>
              <span className="cs-badge">FinOps</span>
              <span className="cs-badge">Security</span>
            </div>
          </div>

          <div className="cs-hero__card cs-reveal">
            <div className="cs-glass">
              <div className="cs-glass__head">
                <h3 className="cs-h3">Quick Outcomes</h3>
                <span className="cs-pill">Enterprise-ready</span>
              </div>
              <ul className="cs-list">
                <li>Faster migrations with lower risk</li>
                <li>Secure-by-design with compliance mapping</li>
                <li>Optimized cost + performance (FinOps)</li>
                <li>Operational excellence (SRE + monitoring)</li>
              </ul>

              <div className="cs-miniGrid">
                <div className="cs-mini">
                  <strong>↓ Cost</strong>
                  <span>Reduce waste</span>
                </div>
                <div className="cs-mini">
                  <strong>↑ Speed</strong>
                  <span>Ship faster</span>
                </div>
                <div className="cs-mini">
                  <strong>↑ Trust</strong>
                  <span>More secure</span>
                </div>
              </div>
            </div>

            <div className="cs-photo">
              <img className="cs-photo__img" src="/images/cloudservices/services.jpeg" alt="Cloud security" />
              <div className="cs-photo__cap">Security + governance built into every layer</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHITEPAPER */}
      <section id="cs-whitepaper" className="cs-sec cs-whitepaper">
        <div className="cs-wrap cs-whitepaper__grid">
          <div className="cs-gallery cs-reveal">
            <img src={IMG.hero} alt="Cloud ops" />
            <img src={IMG.security} alt="Security" />
            <img src={IMG.stack} alt="Stack" />
            <img src={IMG.app} alt="Apps" />
          </div>

          <div className="cs-whitepaper__content cs-reveal">
            <div className="cs-feature">
              <img src="/images/cloudservices/modern cloud.jpeg" alt="Feature" />
            </div>
            <span className="cs-eyebrow">Cloud Services for Growing Businesses</span>
            <h2 className="cs-h2">Empowering SMBs With Intelligent Cloud Solutions</h2>
            <p className="cs-muted">
              We help small and mid-sized businesses design, deploy, and manage secure environments on AWS, Azure, and
              GCP—so you can scale smoothly, reduce IT overhead, and move with confidence.
            </p>

            <div className="cs-whitepaper__actions">
              
              <div className="cs-note">Includes: migration checklist, landing zone blueprint, and security baseline.</div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="cs-sec cs-overview">
        <div className="cs-wrap cs-overview__grid">
          <div className="cs-overview__img cs-reveal">
            <img src={IMG.goal} alt="Cloud services overview" />
          </div>

          <div className="cs-overview__text cs-reveal">
            <span className="cs-eyebrow">Overview</span>
            <h2 className="cs-h2">Cloud Services — Powering Intelligent Digital Enterprises</h2>
            <p className="cs-muted">
              Cloud services are the backbone of modern digital enterprises—enabling agility, security, scalability, and
              continuous innovation. We start with an assessment of your workloads, governance, and business goals to
              identify bottlenecks, security gaps, automation opportunities, and cost inefficiencies.
              <br />
              <br />
              Using best-practice frameworks and architecture patterns, we implement a tailored cloud strategy covering
              architecture, managed services, security, DevOps enablement, and continuous optimization—so your cloud stays
              secure, scalable, and aligned to growth.
            </p>

            <div className="cs-highlight">
              <strong>What makes it different?</strong>
              <span>
                We combine architecture + SRE + security + FinOps into one operating model, not scattered projects.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="cs-sec cs-workflow">
        <div className="cs-wrap">
          <div className="cs-head cs-reveal">
            <h2 className="cs-h2">Our Cloud Delivery Workflow</h2>
            <p className="cs-muted">A clean, measurable approach from readiness to optimization.</p>
          </div>

          <div className="cs-steps">
            {workflow.map((s, idx) => (
              <article className="cs-step cs-reveal" key={s.key} style={{ transitionDelay: `${idx * 70}ms` }}>
                <div className="cs-step__icon">
                  <Icon name={s.icon} />
                </div>
                <div className="cs-step__body">
                  <div className="cs-step__top">
                    <span className="cs-step__no">{String(idx + 1).padStart(2, "0")}</span>
                    <h3 className="cs-h3">{s.key}</h3>
                  </div>
                  <p className="cs-muted">{s.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OFFERINGS */}
      <section className="cs-sec cs-offerings">
        <div className="cs-wrap">
          <div className="cs-head cs-reveal">
            <span className="cs-eyebrow">What We Do</span>
            <h2 className="cs-h2">Our Cloud Services Offerings</h2>
            <p className="cs-muted">
              Comprehensive services to improve performance, security, scalability, and operational efficiency.
            </p>
          </div>

          <div className="cs-offGrid">
            {offerings.map((o, idx) => (
              <article className="cs-offCard cs-reveal" key={o.title} style={{ transitionDelay: `${idx * 80}ms` }}>
                <div className="cs-offCard__head">
                  <div className="cs-offCard__icon">
                    <Icon name={o.icon} />
                  </div>
                  <h3 className="cs-h3">{o.title}</h3>
                </div>

                <ul className="cs-points">
                  {o.points.map((p) => (
                    <li className="cs-point" key={p}>
                      <span className="cs-check">✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cs-contact" className="cs-sec cs-cta">
        <div className="cs-wrap cs-cta__box cs-reveal">
          <div className="cs-cta__left">
            <h2 className="cs-h2">Ready to modernize your cloud?</h2>
            <p className="cs-muted">
              Share your cloud provider, current workloads, and priorities — we’ll propose a pilot plan + architecture
              blueprint.
            </p>
            <div className="cs-cta__actions">
              <a className="cs-btn cs-btn--primary" href="#cs-whitepaper">
                Get the Whitepaper
              </a>
              <a className="cs-btn cs-btn--ghost" href="#cs-contact">
                Talk to an Expert
              </a>
            </div>
          </div>

          <div className="cs-cta__right">
            <img src={IMG.stack} alt="Cloud stack" />
          </div>
        </div>
      </section>
    </main>
  );
}
