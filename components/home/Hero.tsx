import Link from "next/link";
export default function Hero() {
  return (
    <section
      className="d-flex align-items-center text-white"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "90vh",
      }}
    >
      <div
        className="w-100 hero-overlay"
        style={{
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8">

              <span className="badge bg-rdd-green px-3 py-2 mb-3">
                Official Government Website
              </span>

              <h1 className="display-3 fw-bold mb-4 hero-title">
                Research & Documentation Directorate
              </h1>

              <h4 className="mb-4">
                Office of the Executive Governor, Kano State
              </h4>

              <p className="lead mb-4 hero-text">
                Providing quality research, policy analysis,
                documentation, and strategic advisory services to
                support effective governance in Kano State.
              </p>

              <div className="d-flex gap-3">
                <div className="d-flex gap-3 flex-wrap">
  <Link
    href="/about"
    className="btn btn-rdd btn-lg"
  >
    Learn More
  </Link>

  <Link
    href="/contact"
    className="btn btn-rdd-outline btn-lg"
  >
    Contact Us
  </Link>
</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}