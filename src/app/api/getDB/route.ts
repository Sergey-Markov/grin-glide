/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const client = await connectToDatabase();
    const db = client.db("telegram-miniapp");

    const collections = await db.listCollections().toArray();
    res.status(200).json({ collections });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
}
