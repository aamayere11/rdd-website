
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";

// ==========================================
// DELETE NEWS
// ==========================================

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid news ID",
        },
        { status: 400 }
      );
    }

    const client = await clientPromise;

    const db = client.db("rddwebsite");

    const result = await db
      .collection("news")
      .deleteOne({
        _id: new ObjectId(id),
      });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "News not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "News deleted successfully",
    });
  } catch (error) {
    console.error(
      "Delete News Error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete news",
      },
      { status: 500 }
    );
  }
}


// ==========================================
// UPDATE NEWS
// ==========================================

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid news ID",
        },
        { status: 400 }
      );
    }

    const body = await request.json();

    const title = body.title?.trim();
    const content = body.content?.trim();
    const image = body.image?.trim();

    if (!title || !content) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Title and content are required",
        },
        { status: 400 }
      );
    }

    const client = await clientPromise;

    const db = client.db("rddwebsite");

    const result = await db
      .collection("news")
      .updateOne(
        {
          _id: new ObjectId(id),
        },
        {
          $set: {
            title,
            content,
            ...(image
              ? { image }
              : {}),
            updatedAt: new Date(),
          },
        }
      );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "News not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "News updated successfully",
    });
  } catch (error) {
    console.error(
      "Update News Error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update news",
      },
      { status: 500 }
    );
  }
}

