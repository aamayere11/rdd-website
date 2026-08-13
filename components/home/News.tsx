"use client";

import Image from "next/image";
import { news } from "@/data/news";

export default function News() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-rdd-green">
            Latest News
          </h2>

          <p className="text-muted mb-0">
            Latest activities, updates and developments from
            the Research and Documentation Directorate.
          </p>
        </div>

        {/* News Cards */}
        <div className="row g-4">
          {news.map((item) => (
            <div className="col-md-6 col-lg-4" key={item.id}>
              <article className="card h-100 border-0 shadow-sm overflow-hidden">
                {/* Image */}
                <div
                  style={{
                    position: "relative",
                    height: "220px",
                  }}
                >
                 <Image
  src={item.image}
  alt={item.title}
  fill
  loading="eager"
  className="object-fit-cover"
/>
                </div>

                {/* Content */}
                <div className="card-body d-flex flex-column">
                  <small className="text-rdd-red mb-2">
                    {new Date(item.createdAt).toLocaleDateString(
                      "en-GB",
                      {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      }
                    )}
                  </small>

                  <h5 className="fw-bold">
                    {item.title}
                  </h5>

                  <p className="text-muted">
                    {item.content}
                  </p>

                  <button
                    type="button"
                    className="btn btn-rdd mt-auto align-self-start"
                  >
                    Read More
                  </button>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}