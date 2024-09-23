import { Inter, Merriweather } from "next/font/google";

export const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const merriweather = Merriweather({
  subsets: ["cyrillic", "latin"],
  weight: ["300", "400", "700", "900"],
  style: ["italic", "normal"],
  display: "swap",
  variable: "--font-merriweather",
});
