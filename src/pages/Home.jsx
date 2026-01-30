
import TimedLoginPopup from "../components/TimedLoginPopup";
import React, { useEffect } from "react";

export default function Home() {

useEffect(() => {
    const els = Array.from(document.querySelectorAll(".vmr-reveal"));

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("vmr-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("vmr-in");
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  
  return (
    <main>
 <TimedLoginPopup initialDelayMs={10000} repeatDelayMs={20000} />
 
      {/* VIDEO DIV STARTS HERE  */}

      <section className="hero">
        <video
          className="hero-video"
          src="/videos/hero.mp4"
          autoPlay
          loop
          muted
        />
        <div className="hero-overlay" />

        <div className="hero-inner">
          <div className="hero-center">
            <h1 className="hero-title">
              Agentic AI for <br /> Safe & Compliant Operations
            </h1>
            <p className="hero-sub">
              CloudSeals builds enterprise-grade AI agents for safety,
              compliance, and automation.
            </p>
            <div className="hero-ctas">
              <a href="#contact" className="btn primary">Get Demo</a>
              <a href="#solutions" className="btn ghost">Explore</a>
            </div>
          </div>
        </div>
      </section>


      <section className="vmr-section">
      <div className="vmr-wrap">
        {/* VISION */}
        <div className="vmr-row vmr-reveal">
          <div className="vmr-media">
            <img
              className="vmr-img"
              src="/images/Home/vision.jpeg"
              alt="CloudSeals vision"
              loading="lazy"
            />
            <div className="vmr-glow vmr-glow--a" />
          </div>

          <div className="vmr-content">
            <div className="vmr-kicker">Vision</div>
            <h2 className="vmr-h2">Leading the Future of Intelligent Technology</h2>
            <p className="vmr-text">
              To position CloudSeals as a global authority in Cloud, Cybersecurity, AI, SaaS,
              and emerging technologies — securing the digital world and enabling enterprises
              to scale fearlessly.
            </p>

            <div className="vmr-badges">
              <span className="vmr-badge">Cloud</span>
              <span className="vmr-badge">Cybersecurity</span>
              <span className="vmr-badge">AI</span>
              <span className="vmr-badge">SaaS</span>
            </div>
          </div>
        </div>

        {/* MISSION */}
        <div className="vmr-row vmr-row--reverse vmr-reveal">
          <div className="vmr-media">
            <img
              className="vmr-img"
              src="/images/Home/mission.jpeg"
              alt="CloudSeals mission"
              loading="lazy"
            />
            <div className="vmr-glow vmr-glow--b" />
          </div>

          <div className="vmr-content">
            <div className="vmr-kicker">Mission</div>
            <h2 className="vmr-h2">Engineering Platforms That Power Growth</h2>
            <p className="vmr-text">
              We architect, build, and scale secure, resilient technology platforms that help
              organizations innovate faster, operate smarter, and grow with confidence.
            </p>
            <p className="vmr-text">
              Our culture of ownership, excellence, and continuous learning empowers our people
              to think globally, act boldly, and deliver lasting impact.
            </p>

            <div className="vmr-points">
              <div className="vmr-point">
                <span className="vmr-dot" />
                Secure-by-design platforms
              </div>
              <div className="vmr-point">
                <span className="vmr-dot" />
                Reliability & performance
              </div>
              <div className="vmr-point">
                <span className="vmr-dot" />
                Continuous improvement culture
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* background accents */}
      <div className="vmr-bg vmr-bg--1" />
      <div className="vmr-bg vmr-bg--2" />
    </section>

      




      
      {/* SOLUTIONS */}
      <section id="solutions" className="solutions-section">
        <div className="solutions-wrapper">
          <div className="solutions-left">
            <p className="small-heading">Our Solutions</p>
            <h2 className="big-heading">Drive Business Value with CloudSeals Solutions</h2>
            <p className="sub-text">
              We deliver enterprise-grade cloud, DevOps and AI solutions that scale and secure your transformation journey.
            </p>
            <ul className="solution-points">

              <li>Cloud Services</li>
              <li>DevOps & SRE</li>
              <li>Full Stack Development</li>

              <li>Security Solutions</li>
              <li>AI / ML Automation</li>
              <li>IT Consulting</li>

            </ul>
          </div>

          <div className="solutions-grid">
            <div className="sol-card c3">
              <img src="/images/cloud.jpg" alt="Cloud" />
              <span>Cloud Services</span>
            </div>

            
            <div className="sol-card c2">
              <img src="/images/devops.jpg" alt="DevOps" />
              <span>DevOps & SRE</span>
            </div>
            
               <div className="sol-card c5">
              <img src="/images/fullstack.jpg" alt="Full Stack" />
              <span>Full Stack Development</span>
            </div>
           

            <div className="sol-card c1">
              <img src="/images/security.jpg" alt="Security" />
              <span>Security Solutions</span>
            </div>

         
            <div className="sol-card c6">
              <img src="/images/aiml.jpg" alt="AI/ML" />
              <span>AI / ML Automation</span>
            </div>
             <div className="sol-card c4">
              <img src="/images/outsourcing.jpg" alt="Outsourcing" />
              <span>IT Consulting</span>
            </div>
          </div>
        </div>
      </section>

      {/* GRID HIGHLIGHTS */}
      <section className="service_highlights grid-version">
        <div className="container">
          <h1 className="text-center heading-space">
            Empowering Businesses with <span>Advanced Cloud &amp; AI Solutions</span>
          </h1>

          <div className="grid-box">
            <div className="highlight_box">
              <i className="fa-solid fa-brain" />
              <h3>AI Automation</h3>
              <p>Transform repetitive tasks into intelligent automated workflows that boost efficiency.</p>
              <a href="#" className="explore-btn">Explore</a>
            </div>

            <div className="highlight_box">
              <i className="fa-solid fa-cloud-arrow-up" />
              <h3>Cloud Modernization</h3>
              <p>Migrate, scale, and optimize your cloud infrastructure with zero downtime.</p>
              <a href="#" className="explore-btn">Explore</a>
            </div>

            <div className="highlight_box">
              <i className="fa-solid fa-shield-halved" />
              <h3>Cyber Security</h3>
              <p>Protect your digital assets with next-gen monitoring, threat detection &amp; prevention.</p>
              <a href="#" className="explore-btn">Explore</a>
            </div>

            <div className="highlight_box">
              <i className="fa-solid fa-chart-line" />
              <h3>Performance Analytics</h3>
              <p>Leverage dashboards &amp; data-driven insights for smarter decision making.</p>
              <a href="#" className="explore-btn">Explore</a>
            </div>

            <div className="highlight_box">
              <i className="fa-solid fa-people-group" />
              <h3>Managed IT Services</h3>
              <p>24/7 expert support ensuring reliability, uptime and smooth business operations.</p>
              <a href="#" className="explore-btn">Explore</a>
            </div>

            <div className="highlight_box">
              <i className="fa-solid fa-gears" />
              <h3>DevOps Acceleration</h3>
              <p>Faster deployments, automation pipelines and optimized development workflows.</p>
              <a href="#" className="explore-btn">Explore</a>
            </div>
          </div>
        </div>
      </section>

      <h2 className="scroll-title">Solving IT Challenges in <br /> Every Industry, Every Day.</h2>

      <section className="infinite-grid">
        <div className="scroll-row">
          {[
            ['fa-building', 'Manufacturing'],
            ['fa-umbrella', 'Insurance'],
            ['fa-user-shield', 'Defence'],
            ['fa-wheat-awn', 'Agriculture'],
            ['fa-graduation-cap', 'Education'],
            ['fa-cart-shopping', 'E-Commerce'],
            ['fa-piggy-bank', 'Finance & Banking'],
            ['fa-notes-medical', 'Healthcare'],
          ].concat(
            [
              ['fa-building', 'Manufacturing'],
              ['fa-umbrella', 'Insurance'],
              ['fa-user-shield', 'Defence'],
              ['fa-wheat-awn', 'Agriculture'],
              ['fa-graduation-cap', 'Education'],
              ['fa-cart-shopping', 'E-Commerce'],
              ['fa-piggy-bank', 'Finance & Banking'],
              ['fa-notes-medical', 'Healthcare'],
            ]
          ).map(([icon, label], idx) => (
            <div key={idx} className="card1">
              <i className={`fa-solid ${icon}`} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* <section className="domains">
        <h1>We Provide</h1>
        <section className="slider">
          <div className="slide"><img src="/images/increase.jpeg" alt="" /></div>
          <div className="slide"><img src="/images/hand3.jpeg" alt="" /></div>
          <div className="slide"><img src="/images/eye.jpeg" alt="" /></div>
          <div className="slide"><img src="/images/secure.jpeg" alt="" /></div>
          <div className="slide"><img src="/images/react.jpeg" alt="" /></div>
        </section>
      </section> */}

      <section className="premium-section">
        <div className="section-header">
          <h2>Empowering Digital Transformation</h2>
          <p>We deliver intelligent cloud, AI, and data-driven solutions for modern enterprises.</p>
        </div>

        <div className="card-grid">
          <div className="premium-card">
            <i className="fa-solid fa-cloud" />
            <h3>Cloud Solutions</h3>
            <p>Secure, scalable and high-performance cloud infrastructure tailored to your business.</p>
          </div>

          <div className="premium-card">
            <i className="fa-solid fa-brain" />
            <h3>AI &amp; Analytics</h3>
            <p>Unlock insights using advanced AI, machine learning and analytics platforms.</p>
          </div>

          <div className="premium-card">
            <i className="fa-solid fa-shield-halved" />
            <h3>Security</h3>
            <p>Enterprise-grade cybersecurity ensuring compliance, trust and protection.</p>
          </div>

          <div className="premium-card">
            <i className="fa-solid fa-database" />
            <h3>Data Engineering</h3>
            <p>Unified, reliable and scalable data architectures powering smart decisions.</p>
          </div>
        </div>
      </section>

      
    
    </main>
  );
}
