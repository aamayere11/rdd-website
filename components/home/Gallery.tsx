import Image from "next/image";

const gallery = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
  "/gallery6.jpg",
];

export default function Gallery() {
  return (
    <section className="py-5 bg-rdd-light">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold text-rdd-red">
            Photo Gallery
          </h2>

          <p className="text-muted">
            Highlights of our official activities, meetings and events.
          </p>
        </div>

        <div className="row g-4">
          {gallery.map((image, index) => (
            <div className="col-md-4" key={index}>
              <div className="gallery-card">
                <Image
  src={image}
  alt={`Gallery ${index + 1}`}
  width={400}
  height={300}
  className="img-fluid rounded"
  style={{ height: "auto" }}
/>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}