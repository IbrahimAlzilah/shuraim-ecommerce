import { Geist_Mono } from "next/font/google"
import localFont from "next/font/local"

/**
 * The single UI font for the whole app — headings and body text, Arabic and
 * English alike. Only two real weights exist in the source files (the
 * "Medium" file shipped by the foundry is byte-identical to Regular).
 */
export const kufi = localFont({
  src: [
    { path: "./fonts/kufi-regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/kufi-bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
})

/** Numeric/code display only (OTP codes, countdown timers) — needs
 * fixed-width digits, which Kufi doesn't provide. */
export const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})
