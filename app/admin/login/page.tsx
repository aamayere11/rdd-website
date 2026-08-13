"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        router.push("/admin");
        router.refresh();
      } else {
        setMessage(
          data.message || "Invalid email or password."
        );
      }
    } catch (error) {
      console.error("Login Error:", error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        background:
          "linear-gradient(135deg, #f8f9fa, #e8f5e9)",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-10 col-md-7 col-lg-5">

            <div className="card border-0 shadow-lg">
              <div className="card-body p-4 p-md-5">

                {/* Logo / Icon */}
                <div className="text-center mb-4">
                  <div
                    className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: "70px",
                      height: "70px",
                      backgroundColor: "#0B7A3E",
                      color: "white",
                      fontSize: "30px",
                    }}
                  >
                    <i className="bi bi-shield-lock"></i>
                  </div>

                  <h2 className="fw-bold text-rdd-green mb-2">
                    Admin Login
                  </h2>

                  <p className="text-muted mb-0">
                    Research & Documentation Directorate
                  </p>
                  <p className="text-muted">
                    Kano State
                  </p>
                </div>

                {/* Message */}
                {message && (
                  <div className="alert alert-danger">
                    {message}
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleLogin}>

                  {/* Email */}
                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Email Address
                    </label>

                    <input
                      type="email"
                      className="form-control form-control-lg"
                      value={email}
                      onChange={(e) =>
                        setEmail(e.target.value)
                      }
                      placeholder="Enter admin email"
                      required
                      autoComplete="email"
                    />
                  </div>

                  {/* Password */}
                  <div className="mb-4">
                    <label className="form-label fw-semibold">
                      Password
                    </label>

                    <input
                      type="password"
                      className="form-control form-control-lg"
                      value={password}
                      onChange={(e) =>
                        setPassword(e.target.value)
                      }
                      placeholder="Enter admin password"
                      required
                      autoComplete="current-password"
                    />
                  </div>

                  {/* Login Button */}
                  <button
                    type="submit"
                    className="btn btn-success btn-lg w-100"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                        ></span>
                        Logging in...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-box-arrow-in-right me-2"></i>
                        Login
                      </>
                    )}
                  </button>

                </form>

                {/* Back to Website */}
                <div className="text-center mt-4">
                  <a
                    href="/"
                    className="text-decoration-none text-muted"
                  >
                    <i className="bi bi-arrow-left me-1"></i>
                    Back to Website
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}