
import Image from "next/image";
import Link from "next/link";
import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";

type NewsItem = {
  _id: ObjectId;
  title: string;
  content: string;
  image: string;
  createdAt: Date;
};

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function NewsDetails({
  params,
}: Props) {
  const { id } = await params;

  // Check MongoDB ID
  if (!ObjectId.isValid(id)) {
    notFound();
  }

  try {
    const client = await clientPromise;

    const db = client.db("rddwebsite");

    const news = await db
      .collection<NewsItem>("news")
      .findOne({
        _id: new ObjectId(id),
      });

    // News not found
    if (!news) {
      notFound();
    }

    return (
      <main className="py-5">
        <div className="container">

          {/* Back Button */}
          <div className="mb-4">
            <Link
              href="/"
              className="btn btn-outline-success"
            >
              ← Back to News
            </Link>
          </div>

          {/* News Card */}
          <article className="card border-0 shadow-sm">

            {/* Image */}
            <div className="position-relative">
              <Image
                src={news.image}
                alt={news.title}
                width={1200}
                height={600}
                className="w-100"
                style={{
                  maxHeight: "600px",
                  objectFit: "cover",
                }}
                priority
              />
            </div>

            {/* Content */}
            <div className="card-body p-4 p-md-5">

              {/* Date */}
              <small className="text-muted">
                {new Date(
                  news.createdAt
                ).toLocaleDateString(
                  "en-US",
                  {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  }
                )}
              </small>

              {/* Title */}
              <h1 className="fw-bold mt-2 mb-4 text-rdd-red">
                {news.title}
              </h1>

              {/* Content */}
              <div
                className="text-muted"
                style={{
                  fontSize: "1.05rem",
                  lineHeight: "1.9",
                  whiteSpace: "pre-line",
                }}
              >
                {news.content}
              </div>

              {/* Back */}
              <div className="mt-5">
                <Link
                  href="/"
                  className="btn btn-rdd"
                >
                  ← Back to News
                </Link>
              </div>

            </div>
          </article>

        </div>
      </main>
    );
  } catch (error) {
    console.error(
      "News Details Error:",
      error
    );

    notFound();
  }
}

