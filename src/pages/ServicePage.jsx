import { useParams } from "react-router-dom";

export default function ServicePage() {
  const { slug } = useParams();

  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">
          Service: {slug.replaceAll("-", " ")}
        </h1>
        <p className="section-lead">
          This page represents the service details for {slug}.
        </p>
      </div>
    </section>
  );
}
