import { FaFilePdf, FaDownload } from "react-icons/fa";
import Link from "next/link";

const publications = [
  {
    title: "Annual Research Report 2025",
    description: "Comprehensive research activities and policy recommendations.",
  },
  {
    title: "Policy Brief on Economic Development",
    description: "Strategic recommendations for sustainable economic growth.",
  },
  {
    title: "Governance Performance Report",
    description: "Assessment of government programmes and implementation.",
  },
];

export default function Publications() {
  return (
    <section className="py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold text-rdd-red">
            Publications & Reports
          </h2>

          <p className="text-muted">
            Access research reports, policy briefs and official publications.
          </p>
        </div>

        <div className="row g-4">
          {publications.map((item, index) => (
            <div className="col-lg-4" key={index}>
              <div className="publication-card">

                <FaFilePdf size={45} className="text-danger mb-3" />

                <h5>{item.title}</h5>

                <p>{item.description}</p>

                <Link
  href="/publications/annual-research-report-2025.pdf"
  className="btn btn-rdd"
  target="_blank"
>
  <FaDownload className="me-2" />
  Download
</Link>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}