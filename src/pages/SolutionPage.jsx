import { useParams } from "react-router-dom";

export default function SolutionPage() {
  const { slug } = useParams();

  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">
          Solution: {slug.replaceAll("-", " ")}
        </h1>
        <p className="section-lead">
          This page represents the solution overview for {slug}.
        </p>
      </div>
    </section>
  );
}
