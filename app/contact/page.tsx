import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h1 className="fw-bold text-rdd-red">
            Contact Us
          </h1>

          <p className="text-muted mb-0">
            Get in touch with the Research & Documentation Directorate.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-5">
        <div className="container">
          <div className="row g-5">

            {/* Contact Information */}
            <div className="col-lg-5">
              <h2 className="fw-bold mb-4">
                Get In Touch
              </h2>

              <p className="text-muted mb-4">
                For enquiries, official correspondence, research
                requests and other matters, please contact the
                Directorate through the channels below.
              </p>

              <div className="d-flex mb-4">
                <div className="me-3 text-rdd-red fs-4">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h5 className="fw-bold mb-1">
                    Office Address
                  </h5>
                  <p className="text-muted mb-0">
                   OFFICE OF THE EXECUTIVE GOVERNOR,
              RESEARCH & DOCUMENTATION DIRECTORATE,
              GOVERMENT HOUSE,KANO STATE
                  </p>
                </div>
              </div>

              <div className="d-flex mb-4">
                <div className="me-3 text-rdd-red fs-4">
                  <FaPhone />
                </div>

                <div>
                  <h5 className="fw-bold mb-1">
                    Phone
                  </h5>
                  <p className="text-muted mb-0">
                    +234 812 110 9999
                  </p>
                </div>
              </div>

              <div className="d-flex">
                <div className="me-3 text-rdd-red fs-4">
                  <FaEnvelope />
                </div>

                <div>
                  <h5 className="fw-bold mb-1">
                    Email
                  </h5>
                  <p className="text-muted mb-0">
                    info@rddkano.gov.ng
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-7">
              <div className="card border-0 shadow-sm rounded-4">
                <div className="card-body p-4 p-lg-5">

                  <h3 className="fw-bold mb-4">
                    Send Us a Message
                  </h3>

                  <form>
                    <div className="row g-3">

                      <div className="col-md-6">
                        <label className="form-label">
                          Full Name
                        </label>

                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your name"
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">
                          Email Address
                        </label>

                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter your email"
                        />
                      </div>

                      <div className="col-12">
                        <label className="form-label">
                          Subject
                        </label>

                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter subject"
                        />
                      </div>

                      <div className="col-12">
                        <label className="form-label">
                          Message
                        </label>

                        <textarea
                          className="form-control"
                          rows={5}
                          placeholder="Write your message..."
                        ></textarea>
                      </div>

                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-rdd px-4"
                        >
                          Send Message
                        </button>
                      </div>

                    </div>
                  </form>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}