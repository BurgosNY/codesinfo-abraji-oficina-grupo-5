import type { Metadata } from "next";
import { DM_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });
const mono = DM_Mono({ variable: "--font-mono", weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://codesinfo-abraji-oficina-grupo-5.burgos.chatgpt.site"),
  title: "Fronteira em Foco — Radar Paraguai → Brasil",
  description: "Monitor editorial de notícias paraguaias com impacto ou interesse para brasileiros.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Fronteira em Foco",
    description: "Radar editorial de notícias paraguaias com impacto para o Brasil.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Fronteira em Foco — Radar Paraguai para Brasil" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${sans.variable} ${mono.variable}`}>{children}</body></html>;
}
