import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

function useQueryParam(name) {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search).get(name) || "", [search, name]);
}

export default function SearchResults() {
  const q = useQueryParam("q").trim().toLowerCase();

  const pages = useMemo(
    () => [
      { title: "Complisight", desc: "AI safety & compliance on CCTV", path: "/complisight" },
      { title: "Loadsight", desc: "Agentic AI for yards & terminals", path: "/loadsight" },
      { title: "CarbonSight", desc: "dMRV + tree-unit traceability", path: "/carbonsight" },

      { title: "Cloud Migration", desc: "Migrate workloads securely", path: "/services/cloud/cloud-migration" },
      { title: "Cloud Services", desc: "Operate & optimize cloud", path: "/services/cloud/cloud-services" },
      { title: "DevOps Services", desc: "CI/CD, automation, SRE", path: "/services/cloud/devops-services" },

      { title: "Application Development", desc: "Build modern apps", path: "/services/application_development" },
      { title: "Data Analytics", desc: "Dashboards + insights", path: "/services/data-analytics" },
      { title: "IT Consulting", desc: "Architecture + delivery", path: "/services/it-consulting" },
      { title: "Insights", desc: "Playbooks and articles", path: "/insights" },
      { title: "Industries 4.0", desc: "Use cases by industry", path: "/industries" },
    ],
    []
  );

  const results = useMemo(() => {
    if (!q) return pages;
    return pages.filter((p) => `${p.title} ${p.desc}`.toLowerCase().includes(q));
  }, [pages, q]);

  return (
    <div style={{ padding: "90px 0" , marginTop:"60px"}}>
      <div style={{ width: "min(1100px, 92%)", margin: "0 auto" }}>
        <h1>Search</h1>
        <p style={{ opacity: 0.8 }}>
          Keyword: <b>{q || "—"}</b> • Results: <b>{results.length}</b>
        </p>

        {results.length === 0 ? (
          <div style={{ marginTop: 18, padding: 16, border: "1px solid rgba(0,0,0,.15)", borderRadius: 12 }}>
            No results found. Try another keyword.
          </div>
        ) : (
          <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 14 }}>
            {results.map((r) => (
              <Link
                key={r.path}
                to={r.path}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  padding: 16,
                  border: "1px solid rgba(0,0,0,.12)",
                  borderRadius: 14,
                }}
              >
                <div style={{ fontWeight: 900, marginBottom: 6 }}>{r.title}</div>
                <div style={{ opacity: 0.8, lineHeight: 1.5 }}>{r.desc}</div>
                <div style={{ marginTop: 10, fontWeight: 800 }}>Open →</div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
