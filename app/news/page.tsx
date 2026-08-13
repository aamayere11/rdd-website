export default function NewsPage() {
  const news = [
    {
      title: "RDD Strengthens Research and Policy Support",
      date: "10 August 2026",
      category: "Directorate News",
      text: "The Research & Documentation Directorate continues to strengthen research, policy analysis and strategic support for effective governance in Kano State.",
    },
    {
      title: "Directorate Reviews Strategic Research Activities",
      date: "05 August 2026",
      category: "Activities",
      text: "The Directorate reviews ongoing research activities and documentation processes to improve the quality of information available for decision-making.",
    },
    {
      title: "New Documentation Initiative Launched",
      date: "28 July 2026",
      category: "Announcement",
      text: "A new initiative aimed at improving the preservation and management of official government records has been introduced.",
    },
  ];

  return (
    <main>
      {/* Page Header */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h1 className="fw-bold text-rdd-red">
            Latest News
          </h1>

          <p className="text-muted mb-0">
            Latest updates, activities and announcements from the
            Research & Documentation Directorate.
          </p>
        </div>
      </section>

      {/* News */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {news.map((item, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <article className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="badge bg-rdd-green">
                        {item.category}
                      </span>

                      <small className="text-muted">
                        {item.date}
                      </small>
                    </div>

                    <h4 className="fw-bold mb-3">
                      {item.title}
                    </h4>

                    <p className="text-muted">
                      {item.text}
                    </p>

                    <button className="btn btn-rdd mt-2">
                      Read More
                    </button>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}