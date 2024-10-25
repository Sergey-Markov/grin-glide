/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
// import { NextRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export default async function handler(req: NextRequest, res: NextResponse) {
  try {
    const client = await connectToDatabase();
    const db = client.db("sample_mflix");
    if (!db) {
      NextResponse.json("db not supported 111", { status: 222 });
    }

    const collections = await db.listCollections().toArray();
    return NextResponse.json({ collections });
  } catch (error) {
    console.error("An error occurred while fetching data from MongoDB:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
