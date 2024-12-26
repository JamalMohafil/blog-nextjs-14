import { cx } from "@/src/utils";
import "./globals.css";
import { Inter, Manrope } from "next/font/google";
import Header from "@/src/components/Header";
import Footer from "../components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
});
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cx(
          inter.variable,
          manrope.variable,
          "font-in bg-light "
        )}
      >
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}