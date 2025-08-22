import { collectionList, database } from "@/libs/database";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = await params;

  try {
    const collection = await database(collectionList.productCollection);
    const result = await collection.findOne({ _id: new ObjectId(id) });
    return NextResponse.json({
      success: true,
      message: "Product retrived successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error adding product:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to add product",
        error: error.message || "Unknown error occurred",
      },
      { status: 500 }
    );
  }
}
