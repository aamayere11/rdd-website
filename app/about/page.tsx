export default function AboutPage() {
  return (
    <main>
      <section className="py-5">
        <div className="container">

          <div className="text-center mb-5">
            <h1 className="fw-bold text-rdd-red">
              About the Directorate
            </h1>

            <p className="text-muted">
              Research & Documentation Directorate, Kano State
            </p>
          </div>

          <div className="row g-5">

            <div className="col-lg-8">
              <h2 className="fw-bold mb-3">
                Research & Documentation Directorate
              </h2>

              <p>
                The Research & Documentation Directorate (RDD) is a
                strategic directorate under the Office of the Executive
                Governor of Kano State.
              </p>

              <p>
                The Directorate provides research, policy analysis,
                documentation, information management and strategic
                advisory services to support evidence-based decision-making
                and effective governance.
              </p>

              <p>
                Through research and reliable documentation, the
                Directorate contributes to policy development, programme
                monitoring and the preservation of important government
                records and institutional knowledge.
              </p>
            </div>

            <div className="col-lg-4">
              <div className="card border-0 shadow-sm rounded-4">
                <div className="card-body p-4">

                  <h4 className="fw-bold text-rdd-red mb-3">
                    Our Vision
                  </h4>

                  <p className="text-muted">
                    To be a trusted source of research, knowledge and
                    strategic information for effective governance and
                    sustainable development in Kano State.
                  </p>

                  <hr />

                  <h4 className="fw-bold text-rdd-red mb-3">
                    Our Mission
                  </h4>

                  <p className="text-muted mb-0">
                    To provide credible research, accurate documentation
                    and strategic insights that support informed
                    government decision-making.
                  </p>

                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}