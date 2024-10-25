import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/mongodb";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const client = await connectToDatabase();
      const db = client.db("sample_mflix");

      const data = await db.collection("users").find({}).toArray();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch data." });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
