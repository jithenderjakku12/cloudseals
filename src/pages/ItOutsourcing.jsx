import React, { useEffect, useMemo, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaUnlock,
  FaUsersCog,
  FaShieldAlt,
  FaCogs,
  FaCloud,
  FaCheckCircle,
  FaClock,
  FaHandshake,
  FaBolt,
} from "react-icons/fa";

export default function ItOutsourcing() {
  // reveal on scroll
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".io-reveal"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("io-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("io-in")),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const IMG = useMemo(
    () => ({
      productive: "/images/productive.jpeg",
      innovative: "/images/opportunities.jpeg",
      secure: "/images/lock.jpeg",
      IT: "/images/IT.png",
      devops: "/images/devops.jpg",
      security: "/images/unlock.png",
      time: "/images/time.jpeg",
    }),
    []
  );

  const slides = useMemo(
    () => [
      {
        title: "Productive",
        desc:
          "Move faster with optimized workflows, automation, and scalable cloud platforms designed for delivery speed.",
        cta: "Boost productivity",
        img: IMG.productive,
        meta: ["Faster releases", "Less manual ops", "Clear KPIs"],
      },
      {
        title: "Innovative",
        desc:
          "Build future-ready solutions using cloud-native, DevOps, and AI-ready architectures that evolve with your business.",
        cta: "Explore innovation",
        img: IMG.innovative,
        meta: ["Modern architecture", "Reusable components", "Short feedback loops"],
      },
      {
        title: "Secure",
        desc:
          "Enterprise-grade security, compliance controls, and governance embedded into every environment and pipeline.",
        cta: "Strengthen security",
        img: IMG.secure,
        meta: ["IAM + least privilege", "Audit-ready logs", "Secure SDLC"],
      },
    ],
    [IMG.innovative, IMG.productive, IMG.secure]
  );

  const [idx, setIdx] = useState(0);

  const next = () => setIdx((i) => (i + 1) % slides.length);
  const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length);

  // optional auto-play (stops on unmount)
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, [slides.length]);

  const highlights = [
    {
      icon: <FaUsersCog />,
      title: "Experts in high-demand skills",
      desc: "Access niche engineers & architects without long hiring cycles.",
    },
    {
      icon: <FaHandshake />,
      title: "Dedicated delivery teams",
      desc: "Extend your capacity with aligned teams and predictable output.",
    },
    {
      icon: <FaCogs />,
      title: "DevOps & CI/CD excellence",
      desc: "Automated pipelines, IaC, and production-grade delivery practices.",
    },
  ];

  const engagement = [
    {
      icon: <FaBolt />,
      title: "Rapid MVP Squad",
      points: ["1–2 week kickoff", "MVP in sprints", "CI/CD from day 1", "Demo + roadmap"],
    },
    {
      icon: <FaCloud />,
      title: "Platform & SRE Team",
      points: ["SLOs + monitoring", "Incident readiness", "Cost guardrails", "Reliability upgrades"],
    },
    {
      icon: <FaShieldAlt />,
      title: "Security & Compliance Assist",
      points: ["Secure SDLC", "IAM review", "Audit-ready logs", "Policy-aligned deployment"],
    },
  ];

  const benefits = [
    "Ensure IP protection & clean access controls",
    "Seamless collaboration with clear ownership",
    "Strong commitment to SLAs and predictable delivery",
    "Flexibility without sacrificing quality",
    "Reduced operational burden for your core team",
    "Clear reporting with measurable KPIs",
  ];

  return (
    <main className="io-page">
      {/* HERO */}
      <section className="io-hero">
        <div className="io-wrap io-heroGrid">
          <div className="io-heroCopy io-reveal">
            <div className="io-pill">
              <span className="io-pulse" />
              IT Outsourcing • CloudSeals Delivery
            </div>

            <h1 className="io-h1">
              IT Outsourcing that feels like an <span>in-house</span> team — but faster.
            </h1>

            <p className="io-lead">
              Why hire one internal IT person when you can access a full team: cloud engineers, DevOps/SRE,
              security specialists and full-stack developers — aligned to your outcomes.
            </p>

            <div className="io-heroStats">
              <div className="io-stat">
                <FaClock />
                <div>
                  <strong>Fast onboarding</strong>
                  <span>Days, not months</span>
                </div>
              </div>
              <div className="io-stat">
                <FaCheckCircle />
                <div>
                  <strong>Production-ready</strong>
                  <span>CI/CD + monitoring</span>
                </div>
              </div>
              <div className="io-stat">
                <FaShieldAlt />
                <div>
                  <strong>Secure delivery</strong>
                  <span>Controls + audits</span>
                </div>
              </div>
            </div>

            <div className="io-heroCtas">
              <a className="io-btn io-btn--primary" href="/contact">
                Talk to CloudSeals
              </a>
              <a className="io-btn io-btn--ghost" href="#engagement">
                View engagement models
              </a>
            </div>
          </div>

          <div className="io-heroVisual io-reveal">
            <div className="io-heroFrame">
              <img src={IMG.IT} alt="IT outsourcing cloud services" />
              <div className="io-heroShade" />
              <div className="io-heroBadge">
                <FaUnlock />
                <span>Unlock capacity instantly</span>
              </div>
            </div>
          </div>
        </div>

        <div className="io-glow io-glow--a" />
        <div className="io-glow io-glow--b" />
      </section>

      {/* SLIDER */}
      <section className="io-sliderBlock">
        <div className="io-wrap">
          <div className="io-slider io-reveal">
            <button className="io-nav io-nav--left" onClick={prev} aria-label="Previous slide">
              <FaChevronLeft />
            </button>

            <div className="io-slide">
              <div className="io-slideGrid">
                <div className="io-slideImg">
                  <img key={slides[idx].img} src={slides[idx].img} alt={slides[idx].title} />
                </div>

                <div className="io-slideCopy">
                  <h2 className="io-h2">{slides[idx].title}</h2>
                  <p className="io-muted">{slides[idx].desc}</p>

                  <div className="io-miniList">
                    {slides[idx].meta.map((m) => (
                      <div className="io-miniItem" key={m}>
                        <FaCheckCircle />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>

                  <a className="io-slideBtn" href="/contact">
                    {slides[idx].cta} →
                  </a>

                  <div className="io-dots" aria-label="Slide dots">
                    {slides.map((_, i) => (
                      <button
                        key={i}
                        className={`io-dot ${i === idx ? "io-dot--on" : ""}`}
                        onClick={() => setIdx(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        type="button"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <button className="io-nav io-nav--right" onClick={next} aria-label="Next slide">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="io-introBlock">
        <div className="io-wrap io-introGrid">
          <div className="io-introCopy io-reveal">
            <h2 className="io-h2">DevOps-enabled software engineering</h2>
            <p className="io-muted">
              CloudSeals provides economical outsourcing for organizations that need specialized technical capability —
              without heavy investments or losing focus on core business.
            </p>
            <p className="io-muted">
              We embed delivery discipline: clean backlog, sprint goals, CI/CD pipelines, observability and release
              governance — so you get predictable outcomes, not just “hours”.
            </p>

            <div className="io-proofRow">
              <div className="io-proof">
                <strong>Clear scope</strong>
                <span>Stories + acceptance criteria</span>
              </div>
              <div className="io-proof">
                <strong>Visibility</strong>
                <span>Weekly reporting</span>
              </div>
              <div className="io-proof">
                <strong>Stability</strong>
                <span>Monitoring + SLOs</span>
              </div>
            </div>
          </div>

          <div className="io-introImg io-reveal">
            <div className="io-imgFrame">
              <img src={IMG.devops} alt="DevOps team" />
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="io-highlightBlock">
        <div className="io-wrap">
          <div className="io-head io-reveal">
            <h2 className="io-h2">Why teams choose CloudSeals</h2>
            <p className="io-muted">Specialized skills + delivery system + measurable outcomes.</p>
          </div>

          <div className="io-cardRow">
            {highlights.map((h) => (
              <div className="io-miniCard io-reveal" key={h.title}>
                <div className="io-miniIcon">{h.icon}</div>
                <h3 className="io-h3">{h.title}</h3>
                <p className="io-muted">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="io-solutionBlock">
        <div className="io-wrap io-solutionGrid">
          <div className="io-solutionImg io-reveal">
            <div className="io-imgFrame">
              <img src={IMG.security} alt="Software engineering" />
            </div>
          </div>

          <div className="io-solutionCopy io-reveal">
            <h2 className="io-h2">
              Unlock specialized capacity <span className="io-unlockIco"><FaUnlock /></span>
            </h2>

            <p className="io-muted">
              CloudSeals delivers customer-prioritized enhancements, full-stack web/app development, CI/CD automation
              and production support — reducing operational burden while applying modern best practices.
            </p>

            <p className="io-muted">
              For teams that need data engineering or ML enablement, we support pipelines, feature stores and
              deployment patterns — taking prototypes closer to production with confidence.
            </p>

            <div className="io-bullets">
              <div className="io-bullet"><FaCheckCircle /> Full-stack apps + modern UI</div>
              <div className="io-bullet"><FaCheckCircle /> Cloud migration + platform engineering</div>
              <div className="io-bullet"><FaCheckCircle /> CI/CD, IaC, monitoring + alerting</div>
              <div className="io-bullet"><FaCheckCircle /> Security controls + compliance readiness</div>
            </div>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="io-engageBlock" id="engagement">
        <div className="io-wrap">
          <div className="io-head io-reveal">
            <h2 className="io-h2">Engagement models</h2>
            <p className="io-muted">Pick the model that matches your goal and timeline.</p>
          </div>

          <div className="io-engageGrid">
            {engagement.map((e) => (
              <div className="io-engageCard io-reveal" key={e.title}>
                <div className="io-engageTop">
                  <div className="io-engageIcon">{e.icon}</div>
                  <h3 className="io-h3">{e.title}</h3>
                </div>
                <ul className="io-list">
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <a className="io-link" href="/contact">Request this model →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="io-benefitBlock">
        <div className="io-wrap io-benefitBox io-reveal">
          <h2 className="io-h2">Your competitive advantage</h2>
          <p className="io-muted">
            Outsourcing isn’t just cost reduction — it’s execution speed. Build faster, scale safer, and keep your team
            focused on core business.
          </p>

          <div className="io-benefitGrid">
            {benefits.map((b) => (
              <div className="io-benefit" key={b}>
                <FaCheckCircle />
                <span>{b}</span>
              </div>
            ))}
          </div>

          <div className="io-benefitCtas">
            <a className="io-btn io-btn--primary" href="/contact">Start discussion</a>
            <a className="io-btn io-btn--ghost" href="/services/cloud/cloud-services">See services</a>
          </div>
        </div>
      </section>
    </main>
  );
}
