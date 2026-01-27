import React from 'react'
import  {  useState } from "react";
import { TbZoomScan } from "react-icons/tb";


// Use like:


function DataAnalytics() {

const tabs = [
  {
    id: "descriptive",
    label: "Descriptive ",
    title: "Descriptive Analytics",
    heading: "Establishing a Clear Business Landscape",
    what: "Descriptive analytics provides a foundational understanding of your current business environment.",
    approach:
      "We leverage data visualization tools to deliver clear and concise reports and dashboards showcasing key performance indicators (KPIs) like sales figures, customer demographics, website traffic, and operational performance.",
    advantage:
      "Gain a comprehensive perspective of your current performance, enabling the identification of potential areas for optimization.",
    bullets: [
     "Executive KPI dashboards & scorecards",
      "Operational reporting by site / shift / region",
      "Trends over time (WoW / MoM / YoY)",
      "Segmentation by customer, product, and channel",
      "Automated scheduled reports (email/BI)",
      "Data quality checks for reliable reporting",
    ],
  },
  {
    id: "diagnostic",
    label: "Diagnostic",
    title: "Diagnostic Analytics",
    heading: "Delving Deeper for Root Cause Analysis",
    what:
      "Diagnostic analytics investigates past trends and patterns to identify the underlying causes behind specific events or trends.",
    approach:
      "We utilize sophisticated techniques such as data segmentation, correlation analysis, and drill-down capabilities to pinpoint factors influencing critical metrics. For example, we might analyze customer churn data to understand the reasons behind customer departures and recommend improvements to your product or service.",
    advantage:
      "Uncover the root causes influencing your successes and failures, allowing for targeted adjustments and improvements.",
    bullets: [
     "Root cause analysis (RCA) & drivers",
      "Cohort analysis (retention, churn, behavior)",
      "Funnel & conversion drop-off analysis",
      "Correlation & contribution analysis",
      "Anomaly investigation with context",
      "Drill-down from KPI → segment → event level",
    ],
  },
  {
    id: "predictive",
    label: "Predictive",
    title: "Predictive Analytics",
    heading: "Foresight Through Data-Driven Insights",
    what:
      "Predictive analytics leverages historical data and machine learning models to forecast future trends and potential outcomes.",
    approach:
      "Our data scientists utilize advanced algorithms and artificial intelligence (AI) to analyze vast datasets and predict future market trends, customer behavior, and potential risks. This can include forecasting sales figures, identifying potential customer churn, and anticipating market fluctuations.",
    advantage:
      "Gain a competitive edge by proactively preparing for future scenarios and making data-driven decisions for optimal resource allocation.",
    bullets: [
        "Forecasting (sales, demand, revenue, volume)",
      "Churn prediction & retention scoring",
      "Risk scoring (fraud, failure, delay, downtime)",
      "Early warning alerts from model signals",
      "Customer lifetime value (CLV) prediction",
      "Model monitoring (drift, accuracy, retraining)",
    ],
  },
  {
    id: "prescriptive",
    label: "Prescriptive",
    title: "Prescriptive Analytics",
    heading: "Optimizing Your Path to Success",
    what:
      "Prescriptive analytics goes beyond predictions, suggesting specific actions and recommendations to maximize future outcomes based on data insights.",
    approach:
      "By combining our findings from all previous stages, we utilize AI-powered simulations and optimization techniques to recommend the most effective strategies for achieving your business goals. This can include tailoring marketing campaigns, optimizing operational processes, or dynamically adjusting pricing strategies.",
    advantage:
      "Make data-driven decisions with confidence, allowing you to maximize efficiency, profitability, and overall business success.",
    bullets: [
    "What-if simulations & scenario planning",
      "Optimization for cost, margin, and efficiency",
      "Recommended next-best actions (NBA)",
      "Resource allocation & capacity planning",
      "Dynamic pricing / offer optimization",
      "Policy/constraint-based decisions with guardrails",
    ],
  },
];


  const [active, setActive] = useState(tabs[0].id);
  const activeTab = tabs.find((t) => t.id === active);



  return (
   <div>
  {/* HERO SECTION */}
     <section className="service-hero">
      <div className="service-hero__content">
        <h1>Data Analytics</h1>
        <p>Transform data into actionable intelligence</p>
      </div>
    </section>


   {/* INTRO CARD */}
      <div className="heading11">
          <div className="image11">
          {/* IMPORTANT: public folder image */}
          <img src="/images/DATA.jpeg" alt="Cloud Migration" />
        </div>
        <div className="heading21">
          <h2>Unlocking Actionable Insights: Transforming Data into Strategic Decisions</h2>
          <p>
           In today’s data-driven landscape, unlocking actionable insights from your
            information is crucial for success. Our data analytics services empower
             businesses to harness the full potential of their data, making it readily
              accessible on a unified platform. We then extract meaningful insights that
               inform strategic decision-making and optimize your day-to-day operations. 
          </p>
        </div>
      </div>

      {/* other topic */}
      <div className="data1">
        <h1>Unleashing the Power of Data Through Comprehensive Analytics</h1>
        <p>Cloudseals offers a robust data analytics solution encompassing the 
            entire spectrum of data analysis – Descriptive, Diagnostic, Predictive, and Prescriptive. 
            We move beyond simply reporting data to unlocking actionable insights that drive informed 
            decision-making and propel your business forward. </p>
      </div>

{/* TABS SECTION STARTS HERE */}


 <section className="section glassSection" id="analytics-tabs">
  <div className="container">
    <div className="glassHeader">
      <h2 className="h2" style={{ margin: 0 }}>
        Analytics Spectrum
      </h2>
      <p className="p-muted" style={{ marginTop: 10 }}>
        Switch between the four analytics layers. Each one solves a different business question.
      </p>
    </div>

    <div className="glassTabsCard">
      {/* Tabs */}
      <div className="tabsTop">
        <div className="tabsList" role="tablist" aria-label="Analytics Tabs">
          {tabs.map((t) => {
            const isActive = t.id === active;
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${t.id}`}
                id={`tab-${t.id}`}
                className={`tabBtn ${isActive ? "isActive" : ""}`}
                onClick={() => setActive(t.id)}
              > 
                <span className="tabLabel"> {t.label} </span>
                <span className="tabHint">{t.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Panel */}
      <div
        className="tabPanel"
        role="tabpanel"
        id={`panel-${activeTab.id}`}
        aria-labelledby={`tab-${activeTab.id}`}
      >
        <div className="panelGrid">
          {/* LEFT CONTENT */}
          <div className="panelLeft">
            <h3 className="panelTitle">{activeTab.heading}</h3>

            <div className="panelBlock">
              <div className="panelLabel">1. What is it?</div>
              <p className="panelBody">{activeTab.what}</p>
            </div>

            <div className="panelBlock">
              <div className="panelLabel">2. Our Approach</div>
              <p className="panelBody">{activeTab.approach}</p>
            </div>

            <div className="panelBlock">
              <div className="panelLabel">3. Your Advantage</div>
              <p className="panelBody">{activeTab.advantage}</p>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="panelRight">
            <div className="glassMiniCard">
              <div className="miniTitle">What you get</div>
              <ul className="miniList">
                {activeTab.bullets?.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom glow */}
      <div className="glassGlow" aria-hidden="true" />
    </div>
  </div>
</section>




{/* ASK US  */}

  <section className="service-hero1">
      <div className="service-hero__content1">
        <h1>Ready to Stop Guessing and Start Knowing?</h1>
        <p>Leverage Data for Business Growth with Our Expertise</p>
        <button className='ask'>Ask us how →  </button>
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
      <input placeholder="Full Name*" />
      <input placeholder="Business Email*" />
      <button>
        Get a Free Consultation →
      </button>
    </div>
  </div>
</section>

    

    
   </div>
  )
}

export default DataAnalytics