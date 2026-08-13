import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

// ==========================================
// GET ALL PUBLICATIONS
// ==========================================

export async function GET() {
  try {
    const client = await clientPromise;

    const db = client.db("rddwebsite");

    const publications = await db
      .collection("publications")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(
      publications
    );
  } catch (error) {
  console.error(
    "Publications GET Error:",
    error
  );

  return NextResponse.json(
    {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Unknown database error",
    },
    { status: 500 }
  );
}
}


// ==========================================
// ADD PUBLICATION
// ==========================================

export async function POST(
  request: Request
) {
  try {
    const body =
      await request.json();

    const title =
      body.title?.trim();

    const description =
      body.description?.trim();

    const pdf =
      body.pdf?.trim();

    if (
      !title ||
      !description ||
      !pdf
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Title, description and PDF are required",
        },
        { status: 400 }
      );
    }

    const client =
      await clientPromise;

    const db =
      client.db("rddwebsite");

    const result =
      await db
        .collection("publications")
        .insertOne({
          title,
          description,
          pdf,
          createdAt:
            new Date(),
        });

    return NextResponse.json(
      {
        success: true,
        message:
          "Publication added successfully",
        id: result.insertedId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(
      "Publications POST Error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to add publication",
      },
      { status: 500 }
    );
  }
}

