import {
  FaBuilding,
  FaSearch,
  FaFolderOpen,
  FaChartBar,
  FaDesktop,
  FaUsers,
} from "react-icons/fa";

const departments = [
  {
    icon: <FaBuilding />,
    title: "Administration",
    description:
      "Manages personnel, office administration and general services.",
  },
  {
    icon: <FaSearch />,
    title: "Research",
    description:
      "Conducts research on political, economic and social issues.",
  },
  {
    icon: <FaFolderOpen />,
    title: "Documentation & Archives",
    description:
      "Maintains government records, archives and official documents.",
  },
  {
    icon: <FaChartBar />,
    title: "Monitoring & Evaluation",
    description:
      "Tracks government programmes and evaluates policy implementation.",
  },
  {
    icon: <FaDesktop />,
    title: "ICT & MEDIA",
    description:
      "Provides digital services, databases and information systems.",
  },
  {
    icon: <FaUsers />,
    title: "Policy Analysis",
    description:
      "Provides strategic policy advice and executive briefing support.",
  },
];

export default function Departments() {
  return (
    <section className="py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold text-rdd-red">
            Our Departments
          </h2>

          <p className="text-muted">
            The Directorate operates through specialized departments
            that support research, documentation and effective governance.
          </p>
        </div>

        <div className="row g-4">
          {departments.map((department, index) => (
            <div
              className="col-md-6 col-lg-4"
              key={index}
            >
              <div className="department-card h-100">

                <div className="department-icon mb-3">
                  {department.icon}
                </div>

                <h4>{department.title}</h4>

                <p>{department.description}</p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}