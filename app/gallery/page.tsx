import Image from "next/image";

export default function GalleryPage() {
 const images = [
  {
    src: "/gallery1.jpg",
    title: "Directorate Activities",
  },
  {
    src: "/gallery2.jpg",
    title: "Research and Documentation",
  },
  {
    src: "/gallery3.jpg",
    title: "Official Engagement",
  },
];
  return (
    <main>
      {/* Page Header */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h1 className="fw-bold text-rdd-red">
            Gallery
          </h1>

          <p className="text-muted mb-0">
            Photos and highlights from the activities of the
            Research & Documentation Directorate.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {images.map((image, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card border-0 shadow-sm overflow-hidden h-100">
                  <div style={{ height: "250px", position: "relative" }}>
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-fit-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  <div className="card-body text-center">
                    <h5 className="fw-bold mb-0">
                      {image.title}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}