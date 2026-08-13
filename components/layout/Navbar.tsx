"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
const pathname = usePathname();

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container">

        {/* Brand */}
        <Link
          href="/"
          className="navbar-brand d-flex align-items-center gap-3"
        >
          <Image
            src="/logos/kano.jpg"
            alt="Kano State Government"
            width={60}
            height={60}
            className="logo-img"
          />

          <div>
            <h5 className="mb-0 fw-bold text-rdd-red">
              Research & Documentation Directorate
            </h5>

            <small className="text-muted">
              Office of the Executive Governor, Kano State
            </small>
          </div>

          <Image
            src="/logos/rdd.jpg"
            alt="RDD Logo"
            width={55}
            height={55}
            className="logo-img"
          />
        </Link>

        {/* Toggle */}
       <button
  className="navbar-toggler"
  type="button"
  onClick={() => setIsOpen((prev) => !prev)}
  aria-controls="navbarNav"
  aria-expanded={isOpen}
  aria-label="Toggle navigation"
>
  <span className="navbar-toggler-icon"></span>
</button>
        {/* Menu */}
       <div
  className={`mobile-menu ${isOpen ? "show" : ""}`}
  id="navbarNav"
>
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
  <Link
    href="/"
    className={`nav-link ${pathname === "/" ? "active" : ""}`}
    onClick={() => setIsOpen(false)}
  >
    Home
  </Link>
</li>

           <li className="nav-item">
  <Link
    href="/about"
    className={`nav-link ${pathname === "/about" ? "active" : ""}`}
    onClick={() => setIsOpen(false)}
  >
    About
  </Link>
</li>

            <li className="nav-item">
  <Link
    href="/leadership"
    className={`nav-link ${
      pathname === "/leadership" ? "active" : ""
    }`}
    onClick={() => setIsOpen(false)}
  >
    Leadership
  </Link>
</li>
<li className="nav-item">
  <Link
    href="/departments"
    className={`nav-link ${
      pathname === "/departments" ? "active" : ""
    }`}
    onClick={() => setIsOpen(false)}
  >
    Departments
  </Link>
</li>

            <li className="nav-item">
  <Link
    href="/news"
    className={`nav-link ${
      pathname === "/news" ? "active" : ""
    }`}
    onClick={() => setIsOpen(false)}
  >
    News
  </Link>
</li>
<div className="text-center mt-5">
  <Link
    href="/news"
    className="btn btn-rdd px-4"
  >
    View All News
  </Link>
</div>
           <li className="nav-item">
  <Link
    href="/publications"
    className={`nav-link ${
      pathname === "/publications" ? "active" : ""
    }`}
    onClick={() => setIsOpen(false)}
  >
    Publications
  </Link>
</li>

            <li className="nav-item">
  <Link
    href="/gallery"
    className={`nav-link ${
      pathname === "/gallery" ? "active" : ""
    }`}
    onClick={() => setIsOpen(false)}
  >
    Gallery
  </Link>
</li>

            <li className="nav-item">
  <Link
    href="/contact"
    className={`nav-link ${
      pathname === "/contact" ? "active" : ""
    }`}
    onClick={() => setIsOpen(false)}
  >
    Contact
  </Link>
</li>


          </ul>
        </div>

      </div>
    </nav>
  );
}