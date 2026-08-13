import Image from "next/image";

export default function LeadershipPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h1 className="fw-bold text-rdd-red">
            Leadership
          </h1>

          <p className="text-muted mb-0">
            Leadership of the Research & Documentation Directorate,
            Kano State.
          </p>
        </div>
      </section>

      {/* Leadership Content */}
      <section className="py-5">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="fw-bold">
              Director General
            </h2>

            <p className="text-muted">
              The Research & Documentation Directorate is led by
              the Director General, who provides strategic direction
              and leadership for the Directorate.
            </p>
          </div>

          {/* Director General */}
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="card border-0 shadow-sm text-center">

                <div className="card-body p-4">

                  <div className="leadership-photo mx-auto mb-4">
                    <Image
                      src="/dg.jpg"
                      alt="Dr. Asma'u Nana Jibrin"
                      width={350}
                      height={450}
                      className="img-fluid rounded"
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </div>

                  <h3 className="fw-bold">
                    Dr. Asma'u Nana Jibrin
                  </h3>

                  <p className="text-rdd-red fw-semibold fs-5">
                    Director General
                  </p>

                  <p className="text-muted">
                    Provides strategic leadership and overall
                    direction for the Research & Documentation
                    Directorate, supporting research, documentation,
                    policy analysis and evidence-based governance.
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