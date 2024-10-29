/* eslint-disable no-console */
/* eslint-disable consistent-return */
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const botToken = process.env.BOT_TOKEN as string;

export const GET = async (req: NextRequest) => {
  const userId = req.nextUrl.searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
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
      return NextResponse.json({ photoUrl }, { status: 200 });
    }
    return NextResponse.json({ message: "No photo found" }, { status: 404 });
  } catch (error) {
    console.error("Error fetching user profile photo:", error);
    return NextResponse.json(
      { error: "Error fetching user profile photo" },
      { status: 500 }
    );
  }
};
