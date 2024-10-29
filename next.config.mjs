/* eslint-disable import/no-extraneous-dependencies */
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Видалено output: "export", щоб дозволити серверні функції
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.telegram.org",
        pathname: "/file/bot**", // або ** щоб дозволити всі шляхи
      },
    ],
  },
};

export default withNextIntl(nextConfig);
