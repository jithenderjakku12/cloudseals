import React, { useEffect, useMemo, useState } from "react";
// import "./Insights.css";

import {
  FaSearch,
  FaArrowRight,
  FaCalendarAlt,
  FaTag,
  FaBookOpen,
  FaShieldAlt,
  FaRobot,
  FaLeaf,
  FaCloud,
  FaChartLine,
  FaBolt,
  FaExclamationTriangle,
} from "react-icons/fa";

export default function Insights() {
  const categories = useMemo(
    () => [
      { key: "all", label: "All", icon: <FaBookOpen aria-hidden="true" /> },
      { key: "safety", label: "AI Safety & Compliance", icon: <FaShieldAlt aria-hidden="true" /> },
      { key: "agentic", label: "Agentic AI", icon: <FaRobot aria-hidden="true" /> },
      { key: "cloud", label: "Cloud & SRE", icon: <FaCloud aria-hidden="true" /> },
      { key: "dmrv", label: "Carbon dMRV", icon: <FaLeaf aria-hidden="true" /> },
      { key: "analytics", label: "Ops Analytics", icon: <FaChartLine aria-hidden="true" /> },
    ],
    []
  );

  const allPosts = useMemo(
    () => [
      {
        slug: "complisight-cctv-safety-compliance",
        title: "Complisight: AI safety & compliance platform on top of CCTV + operational data",
        excerpt:
          "Reduce noisy alerts by combining vision detections with context: zones, shift rules, permits, KPIs — and agent workflows like FacilityWatch, DriverGuard, and FSRGuard.",
        date: "Jan 2026",
        tag: "Safety",
        category: "safety",
        icon: <FaShieldAlt aria-hidden="true" />,
        image: "/images/complisight/images/complisight-hero.png",
      },
      {
        slug: "loadsight-agentic-ai-yards-terminals",
        title: "Loadsight Agentic AI: safer yards, smarter terminals, lower load/coil risk",
        excerpt:
          "A per-decision model: Vision → Anomaly → Alert → Review → Report. Integrates with YMS/TMS/WMS and existing CCTV infrastructure.",
        date: "Jan 2026",
        tag: "Agentic AI",
        category: "agentic",
        icon: <FaRobot aria-hidden="true" />,
        image: "/images/loadsight/loadsight-hero.png",
      },
      {
        slug: "carbonsight-dmrv-kml-regression-tree-units",
        title: "CarbonSight dMRV: KML boundaries, historical regression, fraud flags, tree-unit traceability",
        excerpt:
          "Turn boundaries into audit-ready MRV outputs with automation where it matters — including hectare → 180–300 tree-units allocation and evidence pack generation.",
        date: "Jan 2026",
        tag: "dMRV",
        category: "dmrv",
        icon: <FaLeaf aria-hidden="true" />,
        image: "/images/carbonsight/carbonsight-hero.png",
      },
      {
        slug: "cloud-sre-observability-playbook",
        title: "Cloud + SRE basics: observability that prevents incidents (not just dashboards)",
        excerpt:
          "Practical patterns for metrics, logs, traces, SLOs, alert hygiene, and incident response — built for product teams shipping weekly.",
        date: "Dec 2025",
        tag: "Cloud & SRE",
        category: "cloud",
        icon: <FaCloud aria-hidden="true" />,
        image: "/images/insights/insight-cloud.jpg",
      },
      {
        slug: "reduce-false-positives-vision-alerts",
        title: "How to reduce false positives in CCTV AI alerts (zones + rules + evidence)",
        excerpt:
          "Vision alone is not enough. Add zone mapping, role rules, and review workflows to keep alerts actionable and audit-friendly.",
        date: "Dec 2025",
        tag: "Safety",
        category: "safety",
        icon: <FaShieldAlt aria-hidden="true" />,
        image: "/images/insights/insight-safety.jpg",
      },
      {
        slug: "ops-analytics-hotspots-kpis",
        title: "Ops Analytics: hotspots, repeat violations, closure time, and continuous improvement",
        excerpt:
          "Turn events into outcomes: trend lines by site/zone, repeat offender patterns, and SLA closure insights that leadership understands.",
        date: "Nov 2025",
        tag: "Analytics",
        category: "analytics",
        icon: <FaChartLine aria-hidden="true" />,
        image: "/images/insights/insight-analytics.jpg",
      },
    ],
    []
  );

  const featuredSlugs = useMemo(
    () =>
      new Set([
        "complisight-cctv-safety-compliance",
        "loadsight-agentic-ai-yards-terminals",
        "carbonsight-dmrv-kml-regression-tree-units",
      ]),
    []
  );

  const featured = useMemo(() => allPosts.filter((p) => featuredSlugs.has(p.slug)), [allPosts, featuredSlugs]);

  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allPosts.filter((p) => {
      const inCat = cat === "all" ? true : p.category === cat;
      const inQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tag.toLowerCase().includes(q);
      return inCat && inQuery;
    });
  }, [allPosts, query, cat]);

  const capabilityCards = useMemo(
    () => [
      { front: "AI Pattern Mining", back: "Detects complex hidden trends across cloud, security & business signals." },
      { front: "Anomaly Detection", back: "Spots operational issues early — before systems fail or SLAs degrade." },
      { front: "Forecast Engines", back: "Predicts cost, risk & performance trajectories to guide planning and decisions." },
    ],
    []
  );

  const timeline = useMemo(
    () => [
      { n: "01", t: "Collect Cloud & Security Data" },
      { n: "02", t: "Correlate Using AI Engines" },
      { n: "03", t: "Generate Real-Time Intelligence" },
      { n: "04", t: "Drive Strategic Decisions" },
    ],
    []
  );

  const stories = useMemo(
    () => [
      {
        title: "Cloud Cost Revival",
        text: "Reduced enterprise cloud waste by 47% using predictive usage analytics.",
        img: "/images/insights/insight-cloud.jpg",
      },
      {
        title: "Threat Containment",
        text: "Detected suspicious patterns earlier using anomaly correlation and evidence-first reporting.",
        img: "/images/insights/insight-safety.jpg",
      },
      {
        title: "Operations Momentum",
        text: "Improved decision speed with KPI hotspots, repeat patterns, and closure-time insights.",
        img: "/images/insights/insight-analytics.jpg",
      },
    ],
    []
  );

  /**
   * ✅ FIX for your issue:
   * When you switch tabs, React renders NEW cards with class "csiReveal" (opacity: 0).
   * But your old IntersectionObserver was created only once (on mount) and never observes new nodes.
   * Result: new cards stay hidden => looks "blank" until refresh.
   *
   * This effect re-attaches the observer whenever filters change.
   */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const els = Array.from(document.querySelectorAll(".csiReveal:not(.isVisible)"));
    if (!els.length) return;

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("isVisible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("isVisible");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    els.forEach((el) => io.observe(el));

    // Make items already in viewport visible immediately (prevents “blank” feeling)
    requestAnimationFrame(() => {
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.92) el.classList.add("isVisible");
      });
    });

    return () => io.disconnect();
  }, [cat, query, filtered.length]);

  return (
    <div className="csiPage">
      {/* HERO */}
      <header className="csiHero">
        <div className="csiHero__bg" />
        <div className="csiWrap csiHero__inner">
          <div className="csiReveal">
            <div className="csiHero__kicker">
              <span className="csiHero__dot" />
              CloudSeals Insights
            </div>

            <h1 className="csiHero__title">
              Practical guidance for AI safety, compliance, agentic operations, and carbon MRV.
            </h1>

            <p className="csiHero__sub">
              Learn how we build and deploy real-world platforms:
              <b> Complisight</b> (CCTV safety + compliance), <b> Loadsight</b> (agentic yard/terminal safety),
              and <b> CarbonSight</b> (dMRV with traceability).
            </p>

            <div className="csiHero__stats">
              <div className="csiStat">
                <div className="csiStat__num">3</div>
                <div className="csiStat__lbl">Core platforms</div>
              </div>
              <div className="csiStat">
                <div className="csiStat__num">5</div>
                <div className="csiStat__lbl">Agent patterns</div>
              </div>
              <div className="csiStat">
                <div className="csiStat__num">End-to-end</div>
                <div className="csiStat__lbl">Detect → Decide → Report</div>
              </div>
            </div>
          </div>

          <div className="csiHeroCard csiReveal">
            <img className="csiHeroCard__img" src="/images/insights/insights-hero.jpg" alt="CloudSeals Insights" loading="lazy" />
            <div className="csiHeroCard__cap">
              <FaBolt aria-hidden="true" />
              Actionable playbooks — not theory
            </div>
          </div>
        </div>
      </header>

      {/* INSIGHT CAPABILITIES (FLIP) */}
      <section className="csiFlip" id="capabilities">
        <div className="csiWrap">
          <div className="csiFlip__head csiReveal">
            <h2 className="csiH2">Insight Capabilities</h2>
            <p className="csiP">Built to convert operational noise into clarity — for engineers and leadership.</p>
          </div>

          <div className="csiFlip__grid">
            {capabilityCards.map((c) => (
              <div className="csiFlipCard csiReveal" key={c.front}>
                <div className="csiFlipCard__inner">
                  <div className="csiFlipCard__front">{c.front}</div>
                  <div className="csiFlipCard__back">{c.back}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="csiWorkflow" id="workflow">
        <div className="csiWrap csiWorkflow__grid">
          <div className="csiWorkflow__text csiReveal">
            <h2 className="csiH2">How CloudSeals converts signals into strategy</h2>
            <p className="csiP">
              We capture telemetry from cloud platforms, security engines, applications and user behavior, then apply AI
              models to transform scattered signals into executive-ready intelligence.
            </p>
            <ul className="csiBullets">
              <li>Unified Data Ingestion</li>
              <li>AI Correlation Engines</li>
              <li>Actionable Decision Layers</li>
            </ul>
          </div>

          <div className="csiWorkflow__media csiReveal">
            <img src="/images/insights/insight-cloud.jpg" alt="Cloud workflow" loading="lazy" />
            <div className="csiMediaCap">Telemetry → correlation → decisions</div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="csiTimeline" id="journey">
        <div className="csiWrap">
          <div className="csiTimeline__head csiReveal">
            <h2 className="csiH2">The Insight Journey</h2>
            <p className="csiP">A simple loop that keeps teams ahead of incidents and risks.</p>
          </div>

          <div className="csiTimeline__grid">
            {timeline.map((t) => (
              <div className="csiTimelineCard csiReveal" key={t.n}>
                <span className="csiTimelineCard__num">{t.n}</span>
                <div className="csiTimelineCard__text">{t.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="csiAbout" id="who-we-are">
        <div className="csiWrap csiAbout__grid">
          <div className="csiAbout__text csiReveal">
            <h2 className="csiH2">Who we are</h2>
            <p className="csiP">
              CloudSeals is a next-generation IT solutions company helping businesses securely adopt cloud, AI, and modern
              digital technologies. We specialize in Cloud Services, DevOps, Cybersecurity, Quality AI, Data Engineering,
              and IT Outsourcing.
            </p>
          </div>

          <div className="csiAbout__media csiReveal">
            <img src="/images/insights/insight-analytics.jpg" alt="CloudSeals" loading="lazy" />
          </div>
        </div>
      </section>

      {/* EMPOWER */}
      <section className="csiAbout csiAbout--alt" id="how-we-empower">
        <div className="csiWrap csiAbout__grid csiAbout__grid--reverse">
          <div className="csiAbout__text csiReveal">
            <h2 className="csiH2">How we empower businesses</h2>
            <p className="csiP">
              With automation, security-by-design, and customer-centric engineering at our core, CloudSeals enables
              enterprises to modernize applications, streamline operations, and protect critical data.
            </p>
          </div>

          <div className="csiAbout__media csiReveal">
            <img src="/images/insights/insight-safety.jpg" alt="Digital growth" loading="lazy" />
          </div>
        </div>
      </section>

      {/* STORIES */}
      <section className="csiStories" id="stories">
        <div className="csiWrap">
          <div className="csiStories__head csiReveal">
            <h2 className="csiH2">Insight Stories</h2>
            <p className="csiP">Short examples of outcomes driven by intelligence and automation.</p>
          </div>

          <div className="csiStories__grid">
            {stories.map((s) => (
              <article className="csiStory csiReveal" key={s.title}>
                <img className="csiStory__img" src={s.img} alt={s.title} loading="lazy" />
                <div className="csiStory__layer">
                  <h3 className="csiStory__title">{s.title}</h3>
                  <p className="csiStory__text">{s.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="csiFeatured" id="featured">
        <div className="csiWrap">
          <div className="csiFeatured__head csiReveal">
            <h2 className="csiFeatured__title">Featured</h2>
            <p className="csiFeatured__sub">
              The most important reads to understand how CloudSeals approaches safety, operations, and MRV.
            </p>
          </div>

          <div className="csiFeatured__grid">
            {featured.map((p) => (
              <article className="csiFCard csiReveal" key={p.slug}>
                <div className="csiFCard__media">
                  <img src={p.image} alt={p.title} loading="lazy" />
                  <div className="csiFCard__tag">
                    <FaTag aria-hidden="true" /> {p.tag}
                  </div>
                </div>

                <div className="csiFCard__body">
                  <div className="csiFCard__meta">
                    <span className="csiFCard__icon">{p.icon}</span>
                    <span className="csiFCard__date">
                      <FaCalendarAlt aria-hidden="true" /> {p.date}
                    </span>
                  </div>

                  <h3 className="csiFCard__title">{p.title}</h3>
                  <p className="csiFCard__text">{p.excerpt}</p>

                  <a className="csiFCard__link" href={`/insights/${p.slug}`}>
                    Read more <FaArrowRight aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SEARCH + FILTER */}
      <section className="csiControls">
        <div className="csiWrap">
          <div className="csiControls__bar csiReveal">
            <div className="csiSearch">
              <FaSearch aria-hidden="true" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search insights: PPE, zones, agentic AI, dMRV, SRE…"
                aria-label="Search insights"
              />
            </div>

            <div className="csiCats" role="tablist" aria-label="Insight categories">
              {categories.map((c) => (
                <button
                  key={c.key}
                  className={`csiCat ${cat === c.key ? "isActive" : ""}`}
                  onClick={() => setCat(c.key)}
                  type="button"
                >
                  <span className="csiCat__icon">{c.icon}</span>
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <div className="csiControls__meta csiReveal">
            <span>
              Showing <b>{filtered.length}</b> insights
            </span>
            <span className="csiHint">Tip: try “false positives”, “exclusion zones”, “tree units”, “SLO”.</span>
          </div>

          {filtered.length === 0 && (
            <div className="csiEmpty csiReveal" role="status" aria-live="polite">
              <div className="csiEmpty__icon">
                <FaExclamationTriangle aria-hidden="true" />
              </div>
              <div>
                <div className="csiEmpty__title">No results</div>
                <div className="csiEmpty__text">Try another category or clear the search.</div>
              </div>
              <button
                className="csiEmpty__btn"
                type="button"
                onClick={() => {
                  setQuery("");
                  setCat("all");
                }}
              >
                Reset
              </button>
            </div>
          )}
        </div>
      </section>

      {/* GRID LIST */}
      <section className="csiList">
        <div className="csiWrap">
          <div className="csiList__head csiReveal">
            <h2 className="csiList__title">All insights</h2>
            <p className="csiList__sub">
              Safety + compliance, agentic AI, cloud/SRE, carbon MRV — with practical implementation notes.
            </p>
          </div>

          <div className="csiList__grid">
            {filtered.map((p) => (
              <article className="csiCard csiReveal" key={p.slug}>
                <div className="csiCard__top">
                  <div className="csiCard__chip">
                    <span className="csiCard__chipIcon">{p.icon}</span>
                    {p.tag}
                  </div>
                  <div className="csiCard__date">
                    <FaCalendarAlt aria-hidden="true" /> {p.date}
                  </div>
                </div>

                <h3 className="csiCard__title">{p.title}</h3>
                <p className="csiCard__text">{p.excerpt}</p>

                <a className="csiCard__link" href={`/insights/${p.slug}`}>
                  Open <FaArrowRight aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT INSIGHT STRIP */}
      <section className="csiProductStrip" id="products">
        <div className="csiWrap">
          <div className="csiProductStrip__head csiReveal">
            <h2 className="csiProductStrip__title">From product to practice</h2>
            <p className="csiProductStrip__sub">
              These platforms drive the patterns you’ll see across our insights — context-aware alerts, agent workflows,
              and evidence-first reporting.
            </p>
          </div>

          <div className="csiProductStrip__grid">
            <div className="csiProd csiReveal">
              <div className="csiProd__icon">
                <FaShieldAlt aria-hidden="true" />
              </div>
              <div className="csiProd__name"><a href="/complisight">Complisight</a></div>
              <div className="csiProd__text">
                AI safety & compliance on top of CCTV + operational data (zones, roles, permits, KPIs). Agents:
                FacilityWatch, DriverGuard, FSRGuard.
              </div>
            </div>

            <div className="csiProd csiReveal">
              <div className="csiProd__icon">
                <FaRobot aria-hidden="true" />
              </div>
              <div className="csiProd__name"><a href="/loadsight">Loadsight</a>  </div>
              <div className="csiProd__text">
                Agentic AI for yards/terminals and coil/load safety. Per-decision model: vision → anomaly → alert → review
                → report.
              </div>
            </div>

            <div className="csiProd csiReveal">
              <div className="csiProd__icon">
                <FaLeaf aria-hidden="true" />
              </div>
              <div className="csiProd__name"><a href="/carbonsight">CarbonSight</a></div>
              <div className="csiProd__text">
                dMRV using KML boundaries, historical regression, fraud flags, and hectare → tree-unit traceability for
                audit-ready evidence packs.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="csiCta">
        <div className="csiWrap">
          <div className="csiCta__box csiReveal">
            <div>
              <h2 className="csiCta__title">Want weekly insights in your inbox?</h2>
              <p className="csiCta__sub">
                Short, practical notes on safety automation, agentic AI, cloud reliability, and carbon MRV workflows.
              </p>
            </div>

            <a className="csiCta__btn" href="/contact">
               Contact <FaArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
