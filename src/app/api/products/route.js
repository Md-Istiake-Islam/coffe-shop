import { collectionList, database } from "@/libs/database";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const payload = await request.json();
    const collection = await database(collectionList.productCollection);

    const result = await collection.insertOne(payload);
    return NextResponse.json({
      success: true,
      message: "Product added successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error parsing request:", error);
    return NextResponse.json(
      { success: false, error: "Invalid request format" },
      { status: 400 }
    );
  }
}

export async function GET(request) {
  try {
    const collection = await database(collectionList.productCollection);
    const result = await collection.find().toArray();
    return NextResponse.json({
      success: true,
      message: "Product added successfully",
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
