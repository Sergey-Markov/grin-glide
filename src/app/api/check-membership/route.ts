/* eslint-disable no-console */
import axios from "axios";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const botToken = process.env.BOT_TOKEN;

  if (!botToken) {
    return NextResponse.json(
      { error: "Telegram bot token is missing" },
      { status: 500 }
    );
  }

  const { telegramId, channelUserName } = await req.json();

  if (!telegramId || !channelUserName) {
    return NextResponse.json(
      {
        error: `Invalid request: missing telegramId or channelUserName: telID ${telegramId}, ${channelUserName}`,
      },
      { status: 400 }
    );
  }

  let formattedChatId = channelUserName;
  if (!channelUserName.startsWith("@") && !channelUserName.startsWith("-100")) {
    formattedChatId = `${channelUserName}`;
  }

  const url = `https://api.telegram.org/bot${botToken}/getChatMember?chat_id=${formattedChatId}&user_id=${telegramId}`;

  const response = await axios.get(url);
  if (response.data.ok) {
    const { status } = response.data.result;
    const isMember = ["creator", "administrator", "member"].includes(status);
    return NextResponse.json({ isMember }, { status: 200 });
  }
  return NextResponse.json({ response }, { status: 201 });

  //   if (!response.ok) {
  //     const errorText = await response.text();
  //     console.error(`Telegram API error: ${response.status} ${errorText} `);
  //     return NextResponse.json(
  //       {
  //         error: `Telegram API error: ${response.status} ${errorText}`,
  //       },
  //       {
  //         status: 500,
  //       }
  //     );
  //   }

  //   const data = await response.json();

  //   if (data.ok) {
  //     const { status } = data.result;
  //     const isMember = ["creator", "administrator", "member"].includes(status);
  //     return NextResponse.json({ isMember }, { status: 200 });
  //   }

  //   return NextResponse.json(
  //     {
  //       error: `Telegram API returned false: ${JSON.stringify(data)}`,
  //     },
  //     {
  //       status: 500,
  //     }
  //   );
  // } catch (error) {
  //   console.error("Error checking channel membership:", error);
  //   if (error instanceof Error) {
  //     return NextResponse.json(
  //       {
  //         error: `Failed to check channel membership: ${error.message}`,
  //       },
  //       {
  //         status: 500,
  //       }
  //     );
  //   }
  //   return NextResponse.json(
  //     {
  //       error: `An unknown error occurred while checking channel membership`,
  //     },
  //     {
  //       status: 500,
  //     }
  //   );
  // }
};
