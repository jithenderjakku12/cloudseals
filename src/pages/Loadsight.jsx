import React, { useEffect } from "react";

import {
  FaVideo,
  FaRobot,
  FaBolt,
  FaShieldAlt,
  FaChartLine,
  FaProjectDiagram,
  FaLink,
  FaTruck,
  FaShip,
  FaIndustry,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

/**
 * Loadsight Agentic AI Page (CloudSeals)
 * Put images in: /public/images/loadsight/
 */

export default function Loadsight() {
  // Scroll reveal animation
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".lsReveal"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("isVisible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("isVisible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const pillars = [
    {
      icon: <FaVideo aria-hidden="true" />,
      title: "Vision + Context",
      text: "AI vision on CCTV + yard context (zones, assets, SOP rules) to reduce noisy alerts.",
    },
    {
      icon: <FaRobot aria-hidden="true" />,
      title: "Per-decision Agentic Model",
      text: "Each action bundles: vision → anomaly detection → alerting → review → reporting.",
    },
    {
      icon: <FaBolt aria-hidden="true" />,
      title: "Real-time Safety Actions",
      text: "Near-miss & hazard alerts for restricted zones, unsafe loading, crowding, wrong-way movement.",
    },
    {
      icon: <FaShieldAlt aria-hidden="true" />,
      title: "Audit-ready Evidence",
      text: "Evidence packs, timelines, and KPIs for compliance, investigations, and continuous improvement.",
    },
  ];

  const agents = [
    {
      icon: <FaTruck aria-hidden="true" />,
      name: "YardOps Agent",
      text: "Monitors truck queues, congestion, unsafe parking, wrong-way movement, and gate flow.",
    },
    {
      icon: <FaShip aria-hidden="true" />,
      name: "TerminalOps Agent",
      text: "Tracks terminal movement, crane-to-truck coordination risks, and hazard-zone breaches.",
    },
    {
      icon: <FaIndustry aria-hidden="true" />,
      name: "Coil / Load Guard Agent",
      text: "Detects risky load handling, sling/hook anomalies, exclusion-zone breaches, and near-miss patterns.",
    },
    {
      icon: <FaChartLine aria-hidden="true" />,
      name: "Reporting Agent",
      text: "Turns events into dashboards: hotspots, repeat violations, and shift/site trend insights.",
    },
  ];

  const integrations = [
    { icon: <FaLink aria-hidden="true" />, title: "YMS", text: "Slots, appointments, gate-in/gate-out, yard events." },
    { icon: <FaLink aria-hidden="true" />, title: "TMS", text: "Trips, ETAs, driver IDs, carriers & routes." },
    { icon: <FaLink aria-hidden="true" />, title: "WMS", text: "Dock scheduling, inventory moves, task signals." },
    { icon: <FaLink aria-hidden="true" />, title: "Existing CCTV", text: "RTSP/ONVIF cameras + current infrastructure." },
    { icon: <FaLink aria-hidden="true" />, title: "Ops Data", text: "Permits, access logs, work orders, maintenance." },
    { icon: <FaLink aria-hidden="true" />, title: "Alerts & Workflow", text: "Teams/Slack/email + ticketing for review & closure." },
  ];

  const industryCards = [
    {
      icon: <FaIndustry aria-hidden="true" />,
      tag: "Manufacturing & Coils",
      title: "Coil / load safety with real-time guardrails",
      text: "Prevent exclusion-zone breaches and risky handling during lifts, loading, and staging.",
      img: "/images/loadsite/coil saftey.jpeg",
      points: ["Exclusion-zone enforcement", "Near-miss patterns", "Evidence timeline"],
    },
    {
      icon: <FaTruck aria-hidden="true" />,
      tag: "Yards & Warehouses",
      title: "Safer yards with faster turnaround",
      text: "Reduce congestion and unsafe movement patterns with continuous monitoring and smarter alerts.",
      img: "/images/loadsite/yard saftey.jpeg",
      points: ["Queue & congestion signals", "Driver safety cues", "Hotspot analytics"],
    },
    {
      icon: <FaShip aria-hidden="true" />,
      tag: "Ports & Terminals",
      title: "Terminal visibility across cranes & lanes",
      text: "Monitor safety zones, asset movement, and coordination risks across high-traffic terminals.",
      img: "/images/loadsite/crane visibility.jpeg",
      points: ["Hazard-zone alerts", "Asset coordination", "Shift KPIs"],
    },
    {
      icon: <FaProjectDiagram aria-hidden="true" />,
      tag: "Ops Command",
      title: "One view for alerting, review, and reporting",
      text: "A single operational cockpit for investigations, close-outs, and weekly performance reviews.",
      img: "/images/loadsite/one view.png",
      points: ["Review workflow", "Automated reports", "Trend analysis"],
    },
  ];

  return (
    <div className="lsPage">
      {/* HERO */}
      <section className="lsHero">
        <div className="lsHero__bg" aria-hidden="true" />
        <div className="lsContainer lsHero__inner">
          <div className="lsHero__copy lsReveal">
            <div className="lsKicker">
              <span className="lsDot" />
              Loadsight Agentic AI
            </div>

            <h1 className="lsH1">Agentic AI for yards, terminals, and coil / load safety.</h1>

            <p className="lsLead">
              Loadsight is an AI safety & operations platform on top of{" "}
              <b>existing CCTV + operational data</b>. It integrates with <b>YMS/TMS/WMS</b> and runs a
              <b> per-decision model</b>: vision → anomaly detection → alerting → review → reporting.
            </p>

            <div className="lsHero__badges">
              <span className="lsBadge">
                <FaRobot aria-hidden="true" /> Per-decision model
              </span>
              <span className="lsBadge">
                <FaShieldAlt aria-hidden="true" /> Compliance-ready evidence
              </span>
              <span className="lsBadge">
                <FaChartLine aria-hidden="true" /> KPI insights
              </span>
            </div>

            <div className="lsHero__actions">
              <a className="lsBtn lsBtn--primary" href="#what">
                Explore Loadsight <FaArrowRight aria-hidden="true" />
              </a>
              <a className="lsBtn lsBtn--ghost" href="#integrations">
                Integrations
              </a>
            </div>
          </div>

          <div className="lsHero__media lsReveal">
            <div className="lsHeroCard">
              <img src="/images/loadsite/m1.png" alt="Loadsight hero visual" />
              <div className="lsHeroCard__cap">
                <FaCheckCircle aria-hidden="true" />
                Live monitoring • Smart alerts • Review-ready evidence
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT */}
      <section className="lsSection" id="what">
        <div className="lsContainer">
          <div className="lsSection__head lsReveal">
            <h2 className="lsH2">What is Loadsight?</h2>
            <p className="lsSub">
              Loadsight is an <b>Agentic AI layer</b> for Industry 4.0 operations — it converts CCTV and operational
              signals into actionable safety decisions, without replacing your existing tools.
            </p>
          </div>

          <div className="lsGrid4">
            {pillars.map((p) => (
              <article className="lsCard lsReveal" key={p.title}>
                <div className="lsCard__icon">{p.icon}</div>
                <h3 className="lsH3">{p.title}</h3>
                <p className="lsP">{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      

      {/* AGENTS */}
      <section className="lsSection lsSection--alt" id="agents">
        <div className="lsContainer">
          <div className="lsSplit">
            <div className="lsReveal">
              <h2 className="lsH2">Agentic AI that works like a team</h2>
              <p className="lsSub">
                Specialized agents monitor different risk areas — each agent can detect, analyze, decide, act,
                and produce evidence for review.
              </p>

              <div className="lsAgentList">
                {agents.map((a) => (
                  <div className="lsAgent lsReveal" key={a.name}>
                    <div className="lsAgent__icon">{a.icon}</div>
                    <div>
                      <div className="lsAgent__name">{a.name}</div>
                      <div className="lsAgent__text">{a.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="lsPanel lsReveal">
              <div className="lsPanel__title">
                <FaRobot aria-hidden="true" /> Per-decision model
              </div>
              <ol className="lsSteps">
                <li>
                  <b>Vision</b>: detect people, vehicles, loads, zones
                </li>
                <li>
                  <b>Anomaly</b>: validate risk patterns + signals
                </li>
                <li>
                  <b>Alert</b>: notify the right team immediately
                </li>
                <li>
                  <b>Review</b>: human-in-the-loop close-out
                </li>
                <li>
                  <b>Report</b>: KPIs, hotspots, and evidence packs
                </li>
              </ol>
              <div className="lsPanel__note">
                Designed for <b>yard safety</b>, <b>terminal flow</b>, and <b>load/coil risk reduction</b>.
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="lsSection" id="industries">
        <div className="lsContainer">
          <div className="lsSection__head lsReveal">
            <h2 className="lsH2">Where we use it (Industries 4.0)</h2>
            <p className="lsSub">
              Industry 4.0 = connected operations in real time. Loadsight adds the missing layer:{" "}
              <b>real-time safety + decision intelligence</b> from CCTV + operational systems.
            </p>
          </div>

          <div className="lsIndustryGrid">
            {industryCards.map((c) => (
              <article className="lsIndustry lsReveal" key={c.title}>
                <div className="lsIndustry__left">
                  <div className="lsIndustry__tag">
                    {c.icon} {c.tag}
                  </div>
                  <h3 className="lsH3">{c.title}</h3>
                  <p className="lsP">{c.text}</p>
                  <ul className="lsBullets">
                    {c.points.map((pt) => (
                      <li key={pt}>
                        <FaCheckCircle aria-hidden="true" /> {pt}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lsIndustry__right">
                  <div className="lsImgFrame">
                    <img src={c.img} alt={c.tag} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

           {/* ADVANTAGES */}
<section className="lsSection" id="advantages">
  <div className="lsContainer">
    <div className="lsSection__head lsReveal">
      <h2 className="lsH2">Advantages of Loadsight Agentic AI</h2>
      <p className="lsSub">
        A practical safety + operations layer for yards and terminals — built to reduce risk, speed up
        decisions, and generate audit-ready evidence.
      </p>
    </div>

    <div className="lsAdvGrid">
      <article className="lsAdvCard lsReveal">
        <div className="lsAdvIcon">{/* icon */}🛡️</div>
        <h3 className="lsH3">Fewer incidents</h3>
        <p className="lsP">
          Detect unsafe behavior early (zones, near-miss, PPE, load risk) and trigger immediate alerts.
        </p>
        <ul className="lsAdvList">
          <li>Near-miss detection</li>
          <li>Exclusion zone enforcement</li>
          <li>Real-time escalation</li>
        </ul>
      </article>

      <article className="lsAdvCard lsReveal">
        <div className="lsAdvIcon">⚡</div>
        <h3 className="lsH3">Faster turnaround</h3>
        <p className="lsP">
          Reduce bottlenecks with smarter flow: queue visibility, slot guidance, and anomaly-based routing.
        </p>
        <ul className="lsAdvList">
          <li>Yard flow optimization</li>
          <li>Congestion alerts</li>
          <li>Faster dispatch cycles</li>
        </ul>
      </article>

      <article className="lsAdvCard lsReveal">
        <div className="lsAdvIcon">📉</div>
        <h3 className="lsH3">Lower cost of operations</h3>
        <p className="lsP">
          Reduce manual checks and rework with automatic detection, evidence capture, and prioritization.
        </p>
        <ul className="lsAdvList">
          <li>Less manual monitoring</li>
          <li>Reduced damage + claims</li>
          <li>Efficient staffing</li>
        </ul>
      </article>

      <article className="lsAdvCard lsReveal">
        <div className="lsAdvIcon">📊</div>
        <h3 className="lsH3">Audit-ready reporting</h3>
        <p className="lsP">
          Every alert produces review + closure tracking and evidence packs for compliance and KPIs.
        </p>
        <ul className="lsAdvList">
          <li>Evidence packs per event</li>
          <li>Hotspot analytics</li>
          <li>SLA & closure tracking</li>
        </ul>
      </article>

      <article className="lsAdvCard lsReveal">
        <div className="lsAdvIcon">🔌</div>
        <h3 className="lsH3">Works with existing systems</h3>
        <p className="lsP">
          Integrates with your CCTV + YMS/TMS/WMS so you can deploy without replacing infrastructure.
        </p>
        <ul className="lsAdvList">
          <li>CCTV-first deployment</li>
          <li>API integrations</li>
          <li>Role-based notifications</li>
        </ul>
      </article>

      <article className="lsAdvCard lsReveal">
        <div className="lsAdvIcon">🤖</div>
        <h3 className="lsH3">Per-decision automation</h3>
        <p className="lsP">
          Each agent action includes detection → validation → alert → review → report (end-to-end flow).
        </p>
        <ul className="lsAdvList">
          <li>Human-in-the-loop reviews</li>
          <li>Less false positives</li>
          <li>Continuous improvement</li>
        </ul>
      </article>
    </div>

    <div className="lsAdvStrip lsReveal">
      <span className="lsAdvStrip__pill">Yard Safety</span>
      <span className="lsAdvStrip__pill">Terminal Operations</span>
      <span className="lsAdvStrip__pill">Coil / Load Risk</span>
      <span className="lsAdvStrip__pill">Compliance Evidence</span>
    </div>
  </div>
</section>

      {/* INTEGRATIONS */}
      <section className="lsSection lsSection--alt" id="integrations">
        <div className="lsContainer">
          <div className="lsSection__head lsReveal">
            <h2 className="lsH2">Integrations</h2>
            <p className="lsSub">
              Loadsight integrates with your existing CCTV and ops systems — no need to replace YMS/TMS/WMS.
            </p>
          </div>

          <div className="lsGrid3">
            {integrations.map((it) => (
              <article className="lsMini lsReveal" key={it.title}>
                <div className="lsMini__icon">{it.icon}</div>
                <div className="lsMini__title">{it.title}</div>
                <div className="lsMini__text">{it.text}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

 


      {/* CTA */}
      <section className="lsSection">
        <div className="lsContainer">
          <div className="lsCta lsReveal">
            <h2 className="lsH2">Ready to make your yard safer and faster?</h2>
            <p className="lsSub">
              We can map Loadsight to your camera layout, zones, and workflows — and integrate with YMS/TMS/WMS for measurable outcomes.
            </p>
            <a className="lsBtn lsBtn--primary" href="/contact">
              Talk to us <FaArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
