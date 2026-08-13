"use client";

import { FormEvent, useEffect, useState } from "react";

type Publication = {
  _id: string;
  title: string;
  description: string;
  pdf: string;
  createdAt: string;
};

export default function AdminPublicationsPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");
  const [pdf, setPdf] = useState("");

  const [uploading, setUploading] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [publications, setPublications] =
    useState<Publication[]>([]);

  const [loadingPublications, setLoadingPublications] =
    useState(true);

  // ==========================================
  // GET PUBLICATIONS
  // ==========================================

  async function fetchPublications() {
    try {
      setLoadingPublications(true);

      const response =
        await fetch(
          "/api/publications"
        );

      if (!response.ok) {
        throw new Error(
          "Failed to fetch publications"
        );
      }

      const data =
        await response.json();

      setPublications(data);
    } catch (error) {
      console.error(
        "Fetch Publications Error:",
        error
      );
    } finally {
      setLoadingPublications(
        false
      );
    }
  }

  useEffect(() => {
    fetchPublications();
  }, []);

  // ==========================================
  // PDF UPLOAD
  // ==========================================

  async function handlePdfUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file =
      e.target.files?.[0];

    if (!file) return;

    // Only PDF
    if (
      file.type !==
      "application/pdf"
    ) {
      setMessage(
        "Please select a PDF file."
      );

      return;
    }

    setUploading(true);
    setMessage("");

    try {
      const formData =
        new FormData();

      formData.append(
        "file",
        file
      );

      formData.append(
        "upload_preset",
        "rdd_news_upload"
      );

      formData.append(
        "resource_type",
        "raw"
      );

      const response =
        await fetch(
          "https://api.cloudinary.com/v1_1/dypx8zhlf/raw/upload",
          {
            method: "POST",
            body: formData,
          }
        );

      const data =
        await response.json();

      if (!response.ok) {
        console.error(
          "Cloudinary PDF Error:",
          data
        );

        setMessage(
          data.error?.message ||
            "PDF upload failed."
        );

        return;
      }

      setPdf(
        data.secure_url
      );

      setMessage(
        "PDF uploaded successfully!"
      );
    } catch (error) {
      console.error(
        "PDF Upload Error:",
        error
      );

      setMessage(
        "PDF upload failed."
      );
    } finally {
      setUploading(false);
    }
  }

  // ==========================================
  // ADD PUBLICATION
  // ==========================================

  async function handleSubmit(
    e: FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (!pdf) {
      setMessage(
        "Please upload a PDF first."
      );

      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response =
        await fetch(
          "/api/publications",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              title,
              description,
              pdf,
            }),
          }
        );

      const data =
        await response.json();

      if (response.ok) {
        setMessage(
          "Publication added successfully!"
        );

        setTitle("");
        setDescription("");
        setPdf("");

        await fetchPublications();
      } else {
        setMessage(
          data.message ||
            "Failed to add publication."
        );
      }
    } catch (error) {
      console.error(
        "Add Publication Error:",
        error
      );

      setMessage(
        "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  // ==========================================
  // PAGE
  // ==========================================

  return (
    <main className="container py-5">

      {/* ================================= */}
      {/* ADD PUBLICATION */}
      {/* ================================= */}

      <div className="row justify-content-center">

        <div className="col-lg-8">

          <div className="card shadow-sm border-0">

            <div className="card-body p-4 p-md-5">

              <h1 className="fw-bold mb-4">
                Add Publication
              </h1>

              {message && (
                <div className="alert alert-info">
                  {message}
                </div>
              )}

              <form
                onSubmit={
                  handleSubmit
                }
              >

                {/* TITLE */}

                <div className="mb-3">

                  <label className="form-label fw-semibold">
                    Publication Title
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) =>
                      setTitle(
                        e.target.value
                      )
                    }
                    placeholder="Enter publication title"
                    required
                  />

                </div>


                {/* DESCRIPTION */}

                <div className="mb-3">

                  <label className="form-label fw-semibold">
                    Description
                  </label>

                  <textarea
                    className="form-control"
                    rows={6}
                    value={description}
                    onChange={(e) =>
                      setDescription(
                        e.target.value
                      )
                    }
                    placeholder="Write publication description..."
                    required
                  />

                </div>


                {/* PDF */}

                <div className="mb-4">

                  <label className="form-label fw-semibold">
                    Publication PDF
                  </label>

                  <input
                    type="file"
                    accept="application/pdf"
                    className="form-control"
                    onChange={
                      handlePdfUpload
                    }
                    disabled={
                      uploading
                    }
                  />

                  {uploading && (
                    <p className="text-muted mt-2">
                      Uploading PDF...
                    </p>
                  )}

                  {pdf && (
                    <div className="mt-3">

                      <p className="text-success small">
                        PDF uploaded successfully.
                      </p>

                      <a
                        href={pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-success"
                      >
                        View Uploaded PDF
                      </a>

                    </div>
                  )}

                </div>


                {/* SUBMIT */}

                <button
                  type="submit"
                  className="btn btn-success px-4"
                  disabled={
                    loading ||
                    uploading
                  }
                >
                  {loading
                    ? "Adding..."
                    : "Add Publication"}
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>


      {/* ================================= */}
      {/* EXISTING PUBLICATIONS */}
      {/* ================================= */}

      <div className="mt-5">

        <div className="d-flex justify-content-between align-items-center mb-4">

          <h2 className="fw-bold mb-0">
            Existing Publications
          </h2>

          <button
            type="button"
            className="btn btn-outline-success"
            onClick={
              fetchPublications
            }
          >
            Refresh
          </button>

        </div>


        {/* LOADING */}

        {loadingPublications && (
          <div className="text-center py-5">

            <div
              className="spinner-border text-success"
              role="status"
            >
              <span className="visually-hidden">
                Loading...
              </span>
            </div>

          </div>
        )}


        {/* EMPTY */}

        {!loadingPublications &&
          publications.length === 0 && (
            <div className="alert alert-secondary">
              No publications available.
            </div>
          )}


        {/* PUBLICATIONS */}

        {!loadingPublications &&
          publications.length > 0 && (

            <div className="row g-4">

              {publications.map(
                (item) => (

                  <div
                    className="col-md-6 col-lg-4"
                    key={item._id}
                  >

                    <div className="card border-0 shadow-sm h-100">

                      <div className="card-body d-flex flex-column">

                        <div className="mb-3">
                          <i className="bi bi-file-earmark-pdf fs-1 text-danger"></i>
                        </div>

                        <small className="text-muted mb-2">
                          {new Date(
                            item.createdAt
                          ).toLocaleDateString(
                            "en-US",
                            {
                              month:
                                "long",
                              day:
                                "numeric",
                              year:
                                "numeric",
                            }
                          )}
                        </small>

                        <h5 className="fw-bold">
                          {item.title}
                        </h5>

                        <p className="text-muted">
                          {item.description}
                        </p>

                        <a
                          href={item.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-success mt-auto"
                        >
                          View PDF
                        </a>

                      </div>

                    </div>

                  </div>

                )
              )}

            </div>

          )}

      </div>

    </main>
  );
}

