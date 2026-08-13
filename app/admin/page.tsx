"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();

  async function handleLogout() {
    try {
      await fetch("/api/admin/logout", {
        method: "POST",
      });

      router.push("/admin/login");
      router.refresh();
    } catch (error) {
      console.error("Logout Error:", error);
    }
  }

  return (
    <main className="min-vh-100 bg-light py-5">
      <div className="container">

        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-5">
          <div>
            <h1 className="fw-bold text-rdd-green">
              Admin Dashboard
            </h1>

            <p className="text-muted mb-0">
              Research & Documentation Directorate, Kano State
            </p>
          </div>

          {/* Header Buttons */}
          <div className="d-flex gap-2">
            <Link
              href="/"
              className="btn btn-outline-secondary"
            >
              <i className="bi bi-house me-2"></i>
              Website
            </Link>

            <button
              type="button"
              onClick={handleLogout}
              className="btn btn-danger"
            >
              <i className="bi bi-box-arrow-right me-2"></i>
              Logout
            </button>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="row g-4">

          {/* News */}
          <div className="col-md-6 col-lg-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">

                <div className="fs-1 text-rdd-green mb-3">
                  <i className="bi bi-newspaper"></i>
                </div>

                <h4 className="fw-bold">
                  News
                </h4>

                <p className="text-muted">
                  Manage RDD news and announcements.
                </p>

                <Link
                  href="/admin/news"
                  className="btn btn-success"
                >
                  <i className="bi bi-pencil-square me-2"></i>
                  Manage News
                </Link>

              </div>
            </div>
          </div>

          {/* Publications */}
          <div className="col-md-6 col-lg-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">

                <div className="fs-1 text-rdd-green mb-3">
                  <i className="bi bi-journal-text"></i>
                </div>

                <h4 className="fw-bold">
                  Publications
                </h4>

                <p className="text-muted">
                  Manage RDD publications and documents.
                </p>

                <Link
                  href="/admin/publications"
                  className="btn btn-success"
                >
                  <i className="bi bi-pencil-square me-2"></i>
                  Manage Publications
                </Link>

              </div>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}