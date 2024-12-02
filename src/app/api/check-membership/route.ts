/* eslint-disable no-unreachable */
/* eslint-disable no-console */
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const botToken = process.env.BOT_TOKEN;

  if (!botToken) {
    return NextResponse.json(
      { error: "Telegram bot token is missing" },
      { status: 500 }
    );
  }

  const body = await req.json();
  // const { telegramId, channelUserName } = await req.json();

  return NextResponse.json({ body }, { status: 200 });
};
