export default function DepartmentsPage() {
  const departments = [
    {
      title: "Research & Policy Analysis",
      text: "Conducts research and policy analysis to provide evidence-based insights for effective government decision-making.",
    },
    {
      title: "Documentation & Archives",
      text: "Manages official records, archives, reports and institutional documentation of the Directorate.",
    },
    {
      title: "Monitoring & Evaluation",
      text: "Monitors government programmes and evaluates implementation, outcomes and performance.",
    },
    {
      title: "Information Management",
      text: "Manages research information, databases and knowledge resources to support governance.",
    },
    {
      title: "Strategic & Executive Advisory",
      text: "Provides strategic reports, executive briefs and advisory support on important government matters.",
    },
    {
      title: "Planning & Development",
      text: "Supports planning, development initiatives and strategic programmes through research and evidence.",
    },
  ];

  return (
    <main>
      {/* Page Header */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h1 className="fw-bold text-rdd-red">
            Our Departments
          </h1>

          <p className="text-muted mb-0">
            Departments and units supporting the mandate of the
            Research & Documentation Directorate.
          </p>
        </div>
      </section>

      {/* Departments */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {departments.map((department, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="mb-3">
                      <span className="badge bg-rdd-green rounded-circle p-3">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h4 className="fw-bold mb-3">
                      {department.title}
                    </h4>

                    <p className="text-muted mb-0">
                      {department.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}