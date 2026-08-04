import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteShell } from "@/components/layout/site-shell";
import { SITE_URL } from "@/lib/site-config";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const title = "Adegoke Julius — Fullstack Developer";
const description =
  "Adegoke Julius is a Fullstack Developer building complete web applications — responsive React/Next.js interfaces backed by real APIs, databases, and business logic.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: "%s",
  },
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Adegoke Julius",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable}`} suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SiteShell>{children}</SiteShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
