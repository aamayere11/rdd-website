import Link from "next/link";
export default function About() {
  return (
    <section className="py-5">
      <div className="container">

        {/* Section Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-rdd-red">
            About RDD
          </h2>

          <div
            className="mx-auto mt-3"
            style={{
              width: "60px",
              height: "4px",
              backgroundColor: "#198754",
              borderRadius: "5px",
            }}
          />
        </div>

        <div className="row align-items-center g-5">

          {/* About Text */}
          <div className="col-lg-6">
            <h3 className="fw-bold mb-3">
              Research & Documentation Directorate
            </h3>

            <p className="text-muted">
              The Research & Documentation Directorate (RDD) is a
              strategic directorate under the Office of the Executive
              Governor of Kano State. It provides evidence-based
              research, policy analysis, documentation, and advisory
              services that support informed government decision-making.
            </p>

            <p className="text-muted">
              The Directorate conducts research, evaluates public
              policies, monitors socio-economic developments, preserves
              government records, and provides executive briefs to
              improve governance across Kano State.
            </p>

            <Link
  href="/about"
  className="btn btn-success mt-3"
>
  Read More
</Link>
          </div>

          {/* Vision & Mission */}
          <div className="col-lg-6">
            <div className="card shadow border-0 about-card">
              <div className="card-body p-4 p-lg-5">

                <h4 className="text-rdd-red fw-bold mb-3">
                  Vision
                </h4>

                <p className="text-muted">
                  To become a leading source of reliable research,
                  documentation, and strategic knowledge that supports
                  effective governance and sustainable development in
                  Kano State.
                </p>

                <hr className="my-4" />

                <h4 className="text-rdd-red fw-bold mb-3">
                  Mission
                </h4>

                <p className="text-muted mb-0">
                  To provide credible research, accurate documentation,
                  policy insights, and strategic advisory services that
                  strengthen evidence-based decision-making and improve
                  public service delivery.
                </p>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}