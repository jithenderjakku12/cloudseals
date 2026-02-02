import React from "react";
import {
  FaExchangeAlt,
  FaServer,
  FaCloudUploadAlt,
  FaDatabase
} from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

import  {  useState } from "react";
import { Link } from "react-router-dom";


 

const CloudMigration = () => {

const [openCase, setOpenCase] = React.useState(false);
const [activeCase, setActiveCase] = React.useState(null);

const openFullCaseStudy = (slide) => {
  setActiveCase(slide);
  setOpenCase(true);
};

const closeFullCaseStudy = () => {
  setOpenCase(false);
  setActiveCase(null);
};


const slides = [
  {
    id: "enterprise-saas-ingestion",
    pill: "CASE STUDY",
    title: "Data Ingestion Pipeline for Enterprise SaaS",
    desc:
      "A cloud-first enterprise platform enabled real-time decision making using BYOD data ingestion across multiple platforms.",
    cta: "Full Case Study",
    className: "slide-1",

    // ✅ FULL CASE STUDY CONTENT
    full: {
      overview:
        "Built a secure, scalable ingestion layer to unify mobile, web, IoT, and partner feeds into a governed enterprise data plane—enabling near real-time analytics and operational decisioning.",
      highlights: [
        "Event-driven ingestion using streaming + batch pipelines",
        "Schema validation, deduplication, enrichment, and PII handling",
        "Real-time dashboards, alerting, and workflow triggers",
        "End-to-end audit trails, lineage, and role-based access controls",
      ],
      tech: ["Cloud Run / Functions", "Pub/Sub / Kafka", "BigQuery / Data Lake", "Cloud Storage", "IAM + KMS", "CI/CD"],
      outcome:
        "Reduced manual data handling, improved data freshness, and enabled faster decisions across operations, finance, and compliance."
    },
  },
  {
    id: "publishing-giant-cloud-platform",
    pill: "CASE STUDY",
    title: "Centralized Cloud Platform for Publishing Giant",
    desc:
      "Built a centralized cloud-native platform leveraging AWS services, enabling ERP and marketing integrations and driving 15% annual growth.",
    cta: "Full Case Study",
    className: "slide-2",

    full: {
      overview:
        "Modernized legacy integrations into a centralized cloud platform to unify ERP + marketing systems and improve reliability, governance, and time-to-insight.",
      highlights: [
        "Standardized APIs + integration layer for multiple business systems",
        "Automated ETL pipelines and quality checks",
        "Observability: logs, alerts, dashboards, and incident playbooks",
        "Security hardening and compliance-ready controls",
      ],
      tech: ["AWS Lambda", "S3", "EventBridge", "RDS", "IAM", "CloudWatch", "Terraform"],
      outcome:
        "Improved platform stability and integration velocity, supporting measurable growth and faster cross-team execution."
    },
  },
];


  const [idx, setIdx] = useState(0);
  const s = slides[idx];

  const prev = () =>
    setIdx((idx - 1 + slides.length) % slides.length);
  const next = () =>
    setIdx((idx + 1) % slides.length);

  return (
    <div className="cloud-container">

      {/* HERO SECTION */}
     <section className="service-hero">
      <div className="service-hero__content">
        <h1>Cloud Migration</h1>
        <p>Move your workloads, compute &amp; applications to the cloud seamlessly</p>
      </div>
    </section>



      {/* INTRO CARD */}
      <div className="heading1">
        <div className="heading2">
          <h2>Simplify Cloud Migration: Expert Guidance for Seamless Transitions</h2>
          <p>
            Transitioning to the cloud can be a complex undertaking, but with a
            well-defined strategy, organizations can seamlessly migrate their
            applications and data to the cloud while mitigating potential risks.
            Our comprehensive cloud migration services guide you through every
            stage of the migration process.
          </p>
        </div>

        <div className="image1">
          {/* IMPORTANT: public folder image */}
          <img src="/images/cm1.jpeg" alt="Cloud Migration" />
        </div>
      </div>

      {/* OFFERINGS */}
      <section className="offerings">
        <div className="off">

        <div className="p1">Our Offerings</div >
        <p>
          CloudSeals delivers end-to-end cloud migration services, helping enterprises modernize legacy systems
           through structured assessments, secure execution, and continuous post-migration monitoring 
           using AWS and Azure best-practice frameworks.
        </p>
        </div>

        <div className="migration-wrapper">
          <div className="migration-card">
            <div className="migration-flex">

            <div className="icon-box">
              <FaExchangeAlt />
            </div>
            <h3>Application Migration</h3>

            </div>

            <p>
              Migrate your software applications using lift-and-shift or
              refactoring with AWS Elastic Beanstalk, Lambda, or Azure Functions.
            </p>
          </div>

          <div className="migration-card">
            <div className="migration-flex">

            <div className="icon-box">
              <FaServer />
            </div>
            <h3>Platform Migration</h3>
        </div>
            <p>
              Migrate data, applications, and operating systems across platforms
              using Amazon EC2 and Azure VMs.
            </p>
          </div>

         
        </div>
        <div className="migration-wrapper">


          <div className="migration-card">
            <div className="migration-flex">
               <div className="icon-box">
              <FaCloudUploadAlt />
            </div>
            <h3>Infrastructure Migration</h3>

            </div>
           
            <p>
              Reduce physical hardware management by migrating infrastructure
              using AWS Migration Hub and Azure Migrate.
            </p>
          </div>

          <div className="migration-card">
            <div className="migration-flex">

            <div className="icon-box">
              <FaDatabase />
            </div>
            <h3>Data Migration</h3>
            </div>
            <p>
              Move data from on-premise to cloud using AWS DMS and Azure Database
              Migration Service.
            </p>
          </div>
        </div>
      </section>

  <section className={`case-study ${s.className}`}>
      {/* ARROWS */}
      <button className="arrow left" onClick={prev} aria-label="Previous">
        ‹
      </button>
      <button className="arrow right" onClick={next} aria-label="Next">
        ›
      </button>

      {/* CONTENT */}
      <div className="case-inner">
        <span className="pill">{s.pill}</span>

        <h2>{s.title}</h2>

        <p>{s.desc}</p>

      <button
  className="secondary-btn"
  type="button"
  onClick={() => openFullCaseStudy(s)}
>
  {s.cta} &nbsp;›
</button>

      </div>

      {/* DOTS */}
      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === idx ? "active" : ""}`}
          />
        ))}
      </div>
    </section>


      <section className="why-choose">
      <div className="why-inner">
        {/* LEFT */}
        <div className="why-left">
          <h2 className="why-title">
            Why choose Cloudseals as <br />
            your Cloud Migration &amp; <br />
            Modernization Partner?
          </h2>

          <Link to="/contact" className="why-btn" type="button">
            Get A Free Consultation <span className="why-btn-arrow">›</span>
          </Link>
        </div>

        {/* RIGHT */}
        <div className="why-right">
          <div className="why-col">
            <div className="why-item">
              <span className="why-check"><FaCheck /></span>
              <p>End-to-end managed services for cloud adoption and optimization</p>
            </div>

            <div className="why-item">
              <span className="why-check"><FaCheck /></span>
              <p>Certified partner with leading cloud providers AWS, GCP, and Azure</p>
            </div>

            <div className="why-item">
              <span className="why-check"><FaCheck /></span>
              <p>Experienced cloud engineering professionals with AWS/Azure certifications</p>
            </div>
          </div>

          <div className="why-col">
            <div className="why-item">
              <span className="why-check"><FaCheck /></span>
              <p>High-quality procedures, documentation, and structured strategies</p>
            </div>

            <div className="why-item">
              <span className="why-check"><FaCheck /></span>
              <p>Cloud native application development</p>
            </div>

            <div className="why-item">
              <span className="why-check"><FaCheck /></span>
              <p>Hybrid, private, and multi-cloud management experience</p>
            </div>

            <div className="why-item">
              <span className="why-check"><FaCheck /></span>
              <p>Streamlined AI transformation</p>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* CTA */}
     <section className="cta-glass">
  <div className="cta-glass-inner">
    <div className="cta-text">
      <h2>Let’s Build the Future Together</h2>
      <p>
        Partner with us to unlock secure, intelligent, and scalable digital
        transformation for your enterprise.
      </p>
    </div>

    <div className="cta-glass-form">
      
      <Link to="/contact" className="consultation">
        Get a Free Consultation →   
      </Link>
    </div>
  </div>
</section>


{openCase && activeCase && (
  <div className="csModal" role="dialog" aria-modal="true" aria-label="Full case study">
    <div className="csModal__backdrop" onClick={closeFullCaseStudy} />
    <div className="csModal__panel">
      <button className="csModal__close" onClick={closeFullCaseStudy} aria-label="Close">
        ✕
      </button>

      <div className="csModal__pill">{activeCase.pill}</div>
      <h2 className="csModal__title">{activeCase.title}</h2>
      <p className="csModal__overview">{activeCase.full.overview}</p>

      <h3 className="csModal__h3">Key Highlights</h3>
      <ul className="csModal__list">
        {activeCase.full.highlights.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>

      <h3 className="csModal__h3">Tech Stack</h3>
      <div className="csModal__chips">
        {activeCase.full.tech.map((t) => (
          <span className="csModal__chip" key={t}>{t}</span>
        ))}
      </div>

      <div className="csModal__outcome">
        <span className="csModal__outcomeLabel">Outcome</span>
        <p>{activeCase.full.outcome}</p>
      </div>
    </div>
  </div>
)}


    </div>
  );
};


export default CloudMigration;
