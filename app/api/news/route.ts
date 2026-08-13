import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;

    const db = client.db("rddwebsite");

    const news = await db
      .collection("news")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(news);
  } catch (error) {
    console.error("========== NEWS API ERROR ==========");
    console.error(error);
    console.error("====================================");

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch news",
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const client = await clientPromise;

    const db = client.db("rddwebsite");

    const news = {
      title: body.title,
      content: body.content,
      image: body.image || "",
      createdAt: new Date(),
    };

    const result = await db
      .collection("news")
      .insertOne(news);

    return NextResponse.json(
      {
        success: true,
        message: "News added successfully",
        id: result.insertedId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST News Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to add news",
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 }
    );
  }
}