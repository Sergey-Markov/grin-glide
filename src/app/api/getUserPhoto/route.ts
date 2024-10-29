/* eslint-disable consistent-return */
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const botToken = process.env.BOT_TOKEN as string;

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ error: "User ID is required" });
  }

  try {
    const response = await axios.get(
      `https://api.telegram.org/bot${botToken}/getUserProfilePhotos?user_id=${userId}`
    );

    if (
      response.data &&
      response.data.result &&
      response.data.result.photos.length > 0
    ) {
      const photo = response.data.result.photos[0][0].file_id;
      const photoUrl = `https://api.telegram.org/file/bot${botToken}/${photo}`;
      res.status(200).json({ photoUrl });
    } else {
      res.status(404).json({ message: "No photo found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error fetching user profile photo" });
  }
};
