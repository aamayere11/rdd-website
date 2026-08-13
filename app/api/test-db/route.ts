import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const uri = process.env.MONGODB_URI;

export async function GET() {
  if (!uri) {
    return NextResponse.json(
      {
        success: false,
        message: "MONGODB_URI is missing",
      },
      { status: 500 }
    );
  }

  const client = new MongoClient(uri);

  try {
    await client.connect();

    const db = client.db("rddwebsite");

    await db.command({ ping: 1 });

    return NextResponse.json({
      success: true,
      message: "MongoDB connected successfully!",
    });
  } catch (error) {
    console.error("MongoDB Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}