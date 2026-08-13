import {
  FaSearch,
  FaFileAlt,
  FaChartLine,
  FaBalanceScale,
  FaDatabase,
  FaUsers,
} from "react-icons/fa";

export default function CoreMandate() {
  const mandates = [
    {
      icon: <FaSearch size={40} />,
      title: "Policy Research",
      text: "Conduct research on political, economic, social and governance issues.",
    },
    {
      icon: <FaFileAlt size={40} />,
      title: "Documentation",
      text: "Maintain government records, archives and official documentation.",
    },
    {
      icon: <FaChartLine size={40} />,
      title: "Policy Analysis",
      text: "Provide evidence-based policy advice to support executive decisions.",
    },
    {
      icon: <FaBalanceScale size={40} />,
      title: "Monitoring & Evaluation",
      text: "Monitor government programmes and evaluate policy implementation.",
    },
    {
      icon: <FaDatabase size={40} />,
      title: "Information Management",
      text: "Develop and maintain reliable government databases and archives.",
    },
    {
      icon: <FaUsers size={40} />,
      title: "Executive Advisory",
      text: "Prepare executive briefs and strategic reports for the Governor.",
    },
  ];

  return (
    <section className="py-5 bg-rdd-light">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold text-rdd-red">
            Our Core Mandate
          </h2>

          <p className="text-muted">
            Delivering quality research, policy analysis and documentation
            for effective governance.
          </p>
        </div>

        <div className="row g-4">
          {mandates.map((item, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card mandate-card h-100 border-0 shadow-sm">

                <div className="card-body text-center p-4">

                  <div className="icon-box mb-3">
                    {item.icon}
                  </div>

                  <h5 className="fw-bold">
                    {item.title}
                  </h5>

                  <p className="text-muted">
                    {item.text}
                  </p>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}