import React, { useEffect } from "react";


import {
  FaLeaf,
  FaMapMarkerAlt,
  FaSatellite,
  FaShieldAlt,
  FaExclamationTriangle,
  FaCubes,
  FaLink,
  FaChartLine,
  FaRobot,
  FaMagic,
  FaClipboardList,
  FaArrowRight,
} from "react-icons/fa";

export default function CarbonSight() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const els = Array.from(document.querySelectorAll(".cbsReveal"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("isVisible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("isVisible"));
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const advantages = [
    {
      icon: <FaShieldAlt aria-hidden="true" />,
      title: "Audit-ready MRV",
      text: "Evidence trails, provenance, and repeatable outputs suitable for verification and review.",
    },
    {
      icon: <FaRobot aria-hidden="true" />,
      title: "AI-assisted analysis",
      text: "Automates the heavy parts: land cover signals, regressions, patterns, and risk flags.",
    },
    {
      icon: <FaCubes aria-hidden="true" />,
      title: "Granular data allocation",
      text: "Tree-unit segmentation connects field + remote-sensing data to precise geolocated units.",
    },
    {
      icon: <FaExclamationTriangle aria-hidden="true" />,
      title: "Fraud flagging",
      text: "Detect suspicious planting-after-clearing behavior and identify integrity risks early.",
    },
    {
      icon: <FaChartLine aria-hidden="true" />,
      title: "Better decisions",
      text: "Hotspots, trends, and confidence cues help teams prioritize field checks and reporting.",
    },
    {
      icon: <FaMagic aria-hidden="true" />,
      title: "Automation where it matters",
      text: "You don’t need to automate everything — target the steps that remove repetitive manual work.",
    },
  ];



  const portfolio = [
  {
    vertical: "CarbonSight (Bio-Economy)",
    asset: "Reforestation (ARR) & Agroforestry",
    agents: [
      "Bio-Mass Agent: Canopy density & crown sizing",
      "Integrity Agent: Leakage & degradation checks",
    ],
    standard: "Verra / Gold Standard",
  },
  {
    vertical: "Industrial (Geo-Engineering)",
    asset: "Enhanced Rock Weathering (ERW)",
    agents: [
      "Feedstock Agent: 3D volumetric LiDAR audits",
      "Geochem Agent: IoT cation verification",
      "Rainfall Physics Checks: Prevent sensor hallucinations",
    ],
    standard: "Isometric / Puro.earth",
  },
  {
    vertical: "Energy (Methane)",
    asset: "Orphaned Wells & Infrastructure",
    agents: ["Plume Agent: Hyperspectral gas detection", "Thermal Agent: Integrity inspection"],
    standard: "OGMP 2.0",
  },
];

  return (
    <div className="cbsPage">
      {/* HERO */}
      <header className="cbsHero">
        <div className="cbsHero__bg" />
        <div className="cbsContainer cbsHero__inner">
          <div className="cbsReveal">
            <div className="cbsHero__kicker">
              <span className="cbsHero__dot" /> CarbonSight dMRV Platform
            </div>

            <h1 className="cbsHero__title">
             The Agentic AI Infrastructure for the Net Zero Economy
            </h1>

            <p className="cbsHero__lead">
             We don't just estimate carbon. We verify physical reality. From forest canopies to basalt stockpiles,
              CloudSeals orchestrates Drones, Satellites, and IoT to build the world's only immutable ledger of truth.
            </p>

            <div className="cbsHero__badges">
              <span className="cbsHero__badge"><FaMapMarkerAlt /> KML boundaries</span>
              <span className="cbsHero__badge"><FaSatellite /> Historical regression</span>
              <span className="cbsHero__badge"><FaExclamationTriangle /> Fraud flags</span>
              <span className="cbsHero__badge"><FaLink /> Tree-unit blockchain</span>
              <span className="cbsHero__badge"><FaClipboardList /> Evidence packs</span>
            </div>

            <div className="cbsHero__actions">
              <a className="cbsHero__btnPrimary" href="#cbs-how">
                How it works <FaArrowRight />
              </a>
              <a className="cbsHero__btnGhost" href="#cbs-adv">
                Key advantages
              </a>
            </div>
          </div>

          <div className="cbsHero__card cbsReveal">
            <img
              className="cbsHero__img"
              src="/images/carbon site/a1.png"
              alt="CarbonSight hero"
              loading="lazy"
            />
            <div className="cbsHero__cap">
              <FaShieldAlt aria-hidden="true" />
              AI-assisted MRV + verification-friendly traceability
            </div>
          </div>
        </div>
      </header>

      {/* WHAT + WHY */}
      <section className="cbsWhat" id="cbs-what">
        <div className="cbsContainer">
          <div className="cbsWhat__grid">
            <div className="cbsReveal">
              <h2 className="cbsWhat__title">What is CarbonSight?</h2>
              <p className="cbsWhat__text">
                CarbonSight is a dMRV workflow that turns project boundaries (KML) and remote-sensing signals
                into structured monitoring outputs: land cover, maturity cues, tree density indicators,
                degradation context, and integrity flags — with traceability powered by blockchain “tree units”.
              </p>

              <div className="cbsWhat__callout">
                <div className="cbsWhat__calloutIcon"><FaLink /></div>
                <div>
                  <div className="cbsWhat__calloutTitle">Tree-unit concept</div>
                  <div className="cbsWhat__calloutText">
                    1 hectare → split into ~180–300 units (tree equivalents). ODIN data is geolocated and
                    allocated per unit, creating verifiable lineage.
                  </div>
                </div>
              </div>

              <h3 className="cbsWhat__subTitle">Why we use it</h3>
              <ul className="cbsWhat__list">
                <li><FaShieldAlt /> Reduce manual analysis and improve consistency</li>
                <li><FaExclamationTriangle /> Detect integrity risks early (fraud flags)</li>
                <li><FaClipboardList /> Produce evidence trails for audits and verification</li>
              </ul>
            </div>

            <div className="cbsWhat__media cbsReveal">
              <img
                className="cbsWhat__mediaImg"
                src="/images/carbon site/satilite.png"
                alt="KML boundary and zone mapping"
                loading="lazy"
              />
              <div className="cbsWhat__mediaCap">KML boundary → structured analysis inputs</div>
            </div>
          </div>
        </div>
      </section>





<section className="csPage">
  <div className="csContainer">

    {/* SECTION 1 */}
  {/* HERO / FEATURED (Image LEFT, Content RIGHT) */}
<div className="csHero csSection__head--featured csHero--reverse">
  {/* LEFT IMAGE */}
  <div className="csHero__media">
    <div className="csHero__frame">
      <img
        className="csHero__img"
        src="/images/carbon site/digital-twin-hero.png"
        alt="Digital twin visualization of mine and forest with sensor scanning"
        loading="lazy"
      />
      <div className="csHero__glow" />
      <div className="csHero__scan" />
      <div className="csHero__noise" />
    </div>
  </div>

  {/* RIGHT CONTENT */}
  <div className="csHero__content">
    <div className="csSection__kicker csKicker--pill">
      <span className="csKdot" />
      Verified Physical Reality Layer
      <span className="csKicker__shine" />
    </div>

    <h2 className="csH2 csH2--featured">
      The <span className="csH2__grad">Digital Twin</span> Advantage
    </h2>

    <p className="csLead csLead--featured">
      Supply chain platforms track logistics. CloudSeals tracks the{" "}
      <span className="csEm">matter</span>. By creating a voxel-perfect 3D Twin
      of physical assets — whether 6 million tons of rock or 50,000 hectares of
      forest — we provide the ground truth layer behind the world’s most trusted
      ESG reports.
    </p>

    <div className="csTags csTags--hero">
      <span className="csTag csTag--a">
        <span className="csTag__icon" aria-hidden>⬡</span>
        <span className="csTag__text">Voxel-precise</span>
        <span className="csTag__shine" />
      </span>

      <span className="csTag csTag--b">
        <span className="csTag__icon" aria-hidden>✔</span>
        <span className="csTag__text">Audit-ready</span>
        <span className="csTag__shine" />
      </span>

      <span className="csTag csTag--c">
        <span className="csTag__icon" aria-hidden>⟶</span>
        <span className="csTag__text">Sensor → Certificate</span>
        <span className="csTag__shine" />
      </span>
    </div>

    <div className="csHero__meta">
      <div className="csMetaCard">
        <div className="csMetaCard__title">Voxel Twin</div>
        <div className="csMetaCard__sub">3D ground truth layer</div>
      </div>
      <div className="csMetaCard">
        <div className="csMetaCard__title">Sensor Fusion</div>
        <div className="csMetaCard__sub">Space · Air · Ground</div>
      </div>
      <div className="csMetaCard">
        <div className="csMetaCard__title">Evidence Chain</div>
        <div className="csMetaCard__sub">Audit traceability</div>
      </div>
    </div>
  </div>
</div>


    {/* SECTION 2 */}
    <article className="csSection csSection--problem" id="problem">
      <div className="csSection__head">
        <div className="csOverline">
          <span className="csOverline__num">01</span>
          <span className="csOverline__label">Reality Check</span>
          <span className="csOverline__dot" />
          <span className="csOverline__tag">The Data Trap</span>
        </div>

        <h2 className="csH2">The Problem: The Data Trap</h2>
        <p className="csLead">
          The era of <span className="csEm">“estimation”</span> is over. Standard MRV tools rely on manual
          reporting and static satellite images — they answer: <span className="csQuote">“What does the supplier claim?”</span>
          <br />
          CloudSeals answers: <span className="csQuote">“What actually happened?”</span>
        </p>
      </div>

      <div className="csGrid2">
        <div className="csCard">
          <h3 className="csH3">The Gap</h3>
          <p className="csP">Scope 3 emissions are drowning in unverifiable spreadsheets.</p>
          <div className="csPillRow">
            <span className="csPill">Manual reporting</span>
            <span className="csPill">Static imagery</span>
            <span className="csPill">No ground truth</span>
          </div>
        </div>

        <div className="csCard csCard--danger">
          <h3 className="csH3">The Risk</h3>
          <ul className="csList">
            <li>Greenwashing scandals</li>
            <li>Inventory fraud</li>
            <li>“Paper Forests” & phantom assets</li>
          </ul>
        </div>
      </div>

      <div className="csCallout">
        <div className="csCallout__icon">✔</div>
        <div>
          <div className="csCallout__title">The Solution</div>
          <div className="csCallout__text">Moving from “Trust me” to “Show me the Physics.”</div>
        </div>
      </div>
    </article>

    {/* SECTION 3 */}
    <article className="csSection csSection--tech" id="technology">
      <div className="csSection__head">
        <div className="csOverline">
          <span className="csOverline__num">02</span>
          <span className="csOverline__label">Verification Engine</span>
          <span className="csOverline__dot" />
          <span className="csOverline__tag">Universal Supervisor Node</span>
        </div>

        <h2 className="csH2">The Core Technology</h2>
        <p className="csLead">
          Meet the <span className="csEm">Universal Supervisor Node</span>.
          Unlike vertical-specific tools, CloudSeals is a universal verification engine powered by Agentic AI —
          adaptable to any asset class using <span className="csEm">Sensor Fusion</span>.
        </p>
      </div>

      <div className="csGrid3">
        <div className="csCard">
          <div className="csCard__top">
            <span className="csMiniTag">1</span>
            <h3 className="csH3">The Eyes: Multi-Modal Agents</h3>
          </div>
          <p className="csP">We don’t rely on one data source. Agents fuse telemetry from:</p>
          <ul className="csList">
            <li><b>Space:</b> Optical, Radar (NISAR), Hyperspectral Satellites</li>
            <li><b>Air:</b> Autonomous Drone LiDAR & Thermal Imaging</li>
            <li><b>Ground:</b> IoT Lysimeters, Sniffers, Soil Sensors</li>
          </ul>
        </div>

        <div className="csCard">
          <div className="csCard__top">
            <span className="csMiniTag">2</span>
            <h3 className="csH3">The Brain: Behavioral Data Analysis</h3>
          </div>
          <p className="csP">
            Standard AI looks for static numbers. CloudSeals looks for <b>behavior</b>.
          </p>
          <div className="csNote">
            <b>Forestry:</b> We don’t just count trees — we analyze regression maturity signals to distinguish
            monocultures from biodiverse ecosystems.
          </div>
          <div className="csNote">
            <b>ERW:</b> We cross-reference chemical spikes with rainfall physics to prevent sensor hallucinations.
          </div>
        </div>

        <div className="csCard">
          <div className="csCard__top">
            <span className="csMiniTag">3</span>
            <h3 className="csH3">The Proof: Immutable Asset Ledgers</h3>
          </div>
          <p className="csP">
            Every verified event — whether a tree unit or a ton of rock — is minted onto a blockchain-backed ledger
            for full audit traceability.
          </p>
          <div className="csPillRow">
            <span className="csPill">Audit-ready</span>
            <span className="csPill">Tamper-evident</span>
            <span className="csPill">End-to-end lineage</span>
          </div>
        </div>
      </div>
    </article>

    {/* SECTION 4 */}
    <article className="csSection csSection--portfolio" id="portfolio">
      <div className="csSection__head">
        <div className="csOverline">
          <span className="csOverline__num">03</span>
          <span className="csOverline__label">Deployment Spectrum</span>
          <span className="csOverline__dot" />
          <span className="csOverline__tag">Agent Squads</span>
        </div>

        <h2 className="csH2">The Innovation Spectrum</h2>
        <p className="csLead">
          One engine. Infinite applications. We deploy specialized <span className="csEm">Agent Squads</span> for
          the planet’s most critical sectors.
        </p>
      </div>

      <div className="csTableWrap">
        <table className="csTable">
          <thead>
            <tr>
              <th>Vertical</th>
              <th>The Asset</th>
              <th>The Agents</th>
              <th>The Standard</th>
            </tr>
          </thead>
          <tbody>
            {portfolio.map((row) => (
              <tr key={row.vertical}>
                <td><b>{row.vertical}</b></td>
                <td>{row.asset}</td>
                <td>
                  <ul className="csTableList">
                    {row.agents.map((a) => <li key={a}>{a}</li>)}
                  </ul>
                </td>
                <td>{row.standard}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    
    </article>

    {/* SECTION 5 */}
    <article className="csSection csSection--trust" id="trust">
      <div className="csSection__head">
        <div className="csOverline">
          <span className="csOverline__num">04</span>
          <span className="csOverline__label">Confidence Layer</span>
          <span className="csOverline__dot" />
          <span className="csOverline__tag">Security + Physics</span>
        </div>

        <h2 className="csH2">Social Proof & Leadership</h2>
        <p className="csLead">
          Built on defense-grade engineering — adhering to Accountability, Responsibility, and Sustainability.
        </p>
      </div>

      <div className="csGrid2">
        <div className="csCard">
          <h3 className="csH3">Physics-Informed</h3>
          <p className="csP">We validate AI findings against physical laws (Thermodynamics / Geology).</p>
          <div className="csPillRow">
            <span className="csPill">Constraint-checked</span>
            <span className="csPill">Explainable evidence</span>
          </div>
        </div>

        <div className="csCard">
          <h3 className="csH3">Security First</h3>
          <p className="csP">Enterprise-grade encryption, access controls, and compliance-ready architecture.</p>
          <div className="csPillRow">
            <span className="csPill">Encryption</span>
            <span className="csPill">Audit logs</span>
            <span className="csPill">Least privilege</span>
          </div>
        </div>
      </div>
    </article>

  </div>
</section>




      {/* ADVANTAGES */}
      <section className="cbsAdv" id="cbs-adv">
        <div className="cbsContainer">
          <div className="cbsAdv__head cbsReveal">
            <h2 className="cbsAdv__title">Advantages</h2>
            <p className="cbsAdv__sub">
              Faster onboarding, cleaner reporting, lower risk — stronger trust in the data.
            </p>
          </div>

          <div className="cbsAdv__grid">
            {advantages.map((a) => (
              <article className="cbsAdv__card cbsReveal" key={a.title}>
                <div className="cbsAdv__icon">{a.icon}</div>
                <h3 className="cbsAdv__cardTitle">{a.title}</h3>
                <p className="cbsAdv__cardText">{a.text}</p>
              </article>
            ))}
          </div>

          <div className="cbsAdv__ledger cbsReveal">
            <div className="cbsAdv__ledgerText">
              <div className="cbsAdv__ledgerTitle">
                <FaLink aria-hidden="true" /> Blockchain-backed lineage
              </div>
              <div className="cbsAdv__ledgerP">
                Tree-units create a practical structure to attach ODIN datasets to geolocated segments
                — supporting traceability, verification, and evidence pack generation.
              </div>
            </div>

            <div className="cbsAdv__ledgerImgWrap">
              <img
                className="cbsAdv__ledgerImg"
                src="/images/carbon site/block.png"
                alt="Blockchain ledger illustration"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cbsCta" id="cbs-cta">
        <div className="cbsContainer">
          <div className="cbsCta__box cbsReveal">
            <div>
              <h2 className="cbsCta__title">Want a CarbonSight demo for your project?</h2>
              <p className="cbsCta__sub">
                We can map the agentic workflow to your onboarding questions and reporting needs — using your KML and datasets.
              </p>
            </div>
            <a className="cbsCta__btn" href="/contact">
              Talk to us <FaArrowRight />
            </a>
          </div>

         
          
        </div>
      </section>
    </div>
  );
}
