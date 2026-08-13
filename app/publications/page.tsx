import Link from "next/link";
import clientPromise from "@/lib/mongodb";
export const dynamic = "force-dynamic";
type Publication = {
  _id: string;
  title: string;
  description: string;
  pdf: string;
  createdAt: Date;
};

export default async function PublicationsPage() {
  const client = await clientPromise;

  const db = client.db("rddwebsite");

  const publications = await db
    .collection("publications")
    .find({})
    .sort({ createdAt: -1 })
    .toArray();

  return (
    <main>

      {/* ================================= */}
      {/* PAGE HEADER */}
      {/* ================================= */}

      <section className="py-5 bg-light">

        <div className="container text-center">

          <h1 className="fw-bold text-rdd-red">
            Publications
          </h1>

          <p className="text-muted mb-0">
            Research reports, policy briefs and
            strategic publications from the
            Research & Documentation Directorate.
          </p>

        </div>

      </section>


      {/* ================================= */}
      {/* PUBLICATIONS */}
      {/* ================================= */}

      <section className="py-5">

        <div className="container">

          {publications.length === 0 ? (

            <div className="text-center py-5">

              <div
                className="mb-3"
                style={{ fontSize: "3rem" }}
              >
                📚
              </div>

              <h4 className="fw-bold">
                No Publications Available
              </h4>

              <p className="text-muted">
                Publications will appear here
                when they are added by the
                Directorate.
              </p>

            </div>

          ) : (

            <div className="row g-4">

              {publications.map(
                (publication) => (

                  <div
                    className="col-md-6"
                    key={publication._id.toString()}
                  >

                    <div className="card h-100 border-0 shadow-sm">

                      <div className="card-body p-4 d-flex flex-column">

                        {/* PDF ICON */}

                        <div
                          className="mb-3"
                          style={{
                            fontSize: "2.5rem",
                          }}
                        >
                          📄
                        </div>


                        {/* DATE */}

                        <small className="text-muted mb-2">
                          {new Date(
                            publication.createdAt
                          ).toLocaleDateString(
                            "en-US",
                            {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            }
                          )}
                        </small>


                        {/* TITLE */}

                        <h4 className="fw-bold mb-3">
                          {publication.title}
                        </h4>


                        {/* DESCRIPTION */}

                        <p className="text-muted">
                          {publication.description}
                        </p>


                        {/* BUTTONS */}

                        <div className="mt-auto pt-3 d-flex gap-2 flex-wrap">

                          <a
                            href={publication.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-rdd"
                          >
                            Read Publication
                          </a>

                          <a
                            href={publication.pdf}
                            download
                            className="btn btn-outline-success"
                          >
                            Download PDF
                          </a>

                        </div>

                      </div>

                    </div>

                  </div>

                )
              )}

            </div>

          )}

        </div>

      </section>

    </main>
  );
}

