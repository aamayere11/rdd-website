"use client";

import Link from "next/link";
import Image from "next/image";
import { news } from "@/data/news";

export default function AdminNewsPage() {
  return (
    <main className="min-vh-100 bg-light py-5">
      <div className="container">

        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-5">
          <div>
            <h1 className="fw-bold text-rdd-green mb-2">
              Manage News
            </h1>

            <p className="text-muted mb-0">
              Research & Documentation Directorate, Kano State
            </p>
          </div>

          <Link
            href="/admin"
            className="btn btn-outline-secondary"
          >
            <i className="bi bi-arrow-left me-2"></i>
            Dashboard
          </Link>
        </div>

        {/* Notice */}
        <div className="alert alert-success shadow-sm">
          <i className="bi bi-info-circle me-2"></i>

          News are currently managed directly from{" "}
          <strong>data/news.ts</strong>.
        </div>

        {/* News count */}
        <div className="mb-4">
          <h3 className="fw-bold">
            Existing News
          </h3>

          <p className="text-muted">
            Total News: {news.length}
          </p>
        </div>

        {/* News */}
        <div className="row g-4">

          {news.map((item) => (
            <div
              className="col-md-6 col-lg-4"
              key={item.id}
            >
              <div className="card border-0 shadow-sm h-100 overflow-hidden">

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
                    className="object-fit-cover"
                  />
                </div>

                {/* Content */}
                <div className="card-body">

                  <small className="text-rdd-red">
                    {new Date(
                      item.createdAt
                    ).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </small>

                  <h5 className="fw-bold mt-2">
                    {item.title}
                  </h5>

                  <p className="text-muted">
                    {item.content}
                  </p>

                </div>
              </div>
            </div>
          ))}

        </div>

        {/* How to add */}
        <div className="card border-0 shadow-sm mt-5">
          <div className="card-body p-4">

            <h4 className="fw-bold text-rdd-green">
              How to Add New News
            </h4>

            <p className="text-muted mb-2">
              Open:
            </p>

            <code>
              data/news.ts
            </code>

            <p className="text-muted mt-3 mb-0">
              Add a new news object inside the{" "}
              <strong>news</strong> array and place
              its image inside{" "}
              <strong>public/images/</strong>.
            </p>

          </div>
        </div>

      </div>
    </main>
  );
}