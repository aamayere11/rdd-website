
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-5">
        <div className="row g-4">

          {/* About */}
          <div className="col-lg-4">
            <h4 className="fw-bold mb-3">
              RDD Kano
            </h4>

            <p className="text-white-50">
              Research & Documentation Directorate, Office of the
              Executive Governor of Kano State.
            </p>

            <p className="text-white-50 mb-0">
              Providing research, documentation, policy analysis and
              strategic advisory support for effective governance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-6 col-lg-2">
            <h5 className="fw-bold mb-3">
              Quick Links
            </h5>

            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  href="/"
                  className="text-white-50 text-decoration-none"
                >
                  Home
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  href="/about"
                  className="text-white-50 text-decoration-none"
                >
                  About
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  href="/departments"
                  className="text-white-50 text-decoration-none"
                >
                  Departments
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  href="/publications"
                  className="text-white-50 text-decoration-none"
                >
                  Publications
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  href="/news"
                  className="text-white-50 text-decoration-none"
                >
                  News
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-white-50 text-decoration-none"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-md-6 col-lg-3">
            <h5 className="fw-bold mb-3">
              Contact Information
            </h5>

            <p className="text-white-50">
              <FaMapMarkerAlt className="me-2" />
              OFFICE OF THE EXECUTIVE GOVERNOR,
              RESEARCH & DOCUMENTATION DIRECTORATE,
              GOVERNMENT HOUSE, KANO STATE
            </p>

            <p className="text-white-50">
              <FaPhone className="me-2" />
              +234 812 110 9999
            </p>

            <p className="text-white-50">
              <FaEnvelope className="me-2" />
              info@rddkano.gov.ng
            </p>
          </div>

          {/* Social Media */}
          <div className="col-lg-3">
            <h5 className="fw-bold mb-3">
              Follow Us
            </h5>

            <div className="d-flex gap-2 flex-wrap">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1HcVVxwsqe/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light rounded-circle"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>

              {/* Twitter / X */}
              <a
                href="https://x.com/KanoRDD"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light rounded-circle"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/kanordd?igsh=dGxhenJqN3ZtcWk="
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light rounded-circle"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@RDDkano"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light rounded-circle"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/2348121109999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light rounded-circle"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>

            </div>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="border-top border-secondary">
        <div className="container py-3 text-center">

          <div>
            © {new Date().getFullYear()} Research & Documentation
            Directorate, Kano State. All Rights Reserved.
          </div>

          {/* Developer Credit */}
          <div className="mt-2">
            Website Designed & Developed by{" "}
            <a
  href="https://wa.me/2349074618047"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white fw-semibold text-decoration-none"
  title="Contact MAYERETECH on WhatsApp"
>
  MAYERETECH
</a>
   </div>

        </div>
      </div>
    </footer>
  );
}

