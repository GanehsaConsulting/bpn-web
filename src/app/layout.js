import { Lato, Open_Sans, Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/navbar";
import { CustomScrollbar } from "@/components/custom-scrollbar";
import { Footer } from "@/components/footer";
import { ComingSoon } from "@/components/coming-soon";

const r = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"]
});

export const metadata = {
  title: "Bifudo Partner Nusantara",
  description: "Your Reliable Shift Management Partner",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${r.className} antialiased`}
      >
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar>
            {/* {children} */}
            <ComingSoon />
          </Navbar>
          <Footer />
          <CustomScrollbar />
        </ThemeProvider>
      </body>
    </html>
  );
}
