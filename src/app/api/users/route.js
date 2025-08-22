import { collectionList, database } from "@/libs/database";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const payload = await request.json();

    const collection = await database(collectionList.userCollection);

    const isExist = await collection.findOne({ email: payload.email });

    if (isExist) {
      return NextResponse.json({
        success: true,
        exists: true,
        message: "User already exists",
      });
    }

    const result = await collection.insertOne(payload);

    return NextResponse.json({
      success: true,
      message: "User created successfully",
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
