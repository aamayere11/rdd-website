import Image from "next/image";
import Link from "next/link";

export default function DGMessage() {
  return (
    <section className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold text-rdd-red">
            Message from the Director General
          </h2>
          <p className="text-muted">
            Welcome to the Research & Documentation Directorate.
          </p>
        </div>

        <div className="row align-items-center g-5">

          <div className="col-lg-4 text-center">
            <div className="dg-image-wrapper">
              <Image
  src="/dg.jpg"
  alt="Director General"
  width={350}
  height={450}
  className="img-fluid rounded shadow"
  style={{ height: "auto" }}
/>
            </div>
          </div>

          <div className="col-lg-8">

            <h3 className="fw-bold">
              Dr.  Asma'u Nana Jibrin
            </h3>

            <h5 className="text-rdd-green mb-4">
              Director General
            </h5>

            <blockquote className="border-start border-4 border-danger ps-3 fst-italic">
              "Research, knowledge and evidence remain the foundation
              of good governance and sustainable development."
            </blockquote>

            <p className="mt-4">
              Welcome to the official website of the Research &
              Documentation Directorate (RDD), Office of the Executive
              Governor, Kano State.
            </p>

            <p>
              We remain committed to providing quality research,
              documentation and strategic policy advice that supports
              effective governance and sustainable development.
            </p>

            <Link
  href="/leadership"
  className="btn btn-rdd mt-3"
>
  Read Full Message
</Link>

          </div>

        </div>

      </div>
    </section>
  );
}