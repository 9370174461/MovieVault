import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
/* styles/globals.css */
import "bootstrap/dist/css/bootstrap.min.css";
import { Choice } from "@s-r0/choice-js";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Top Movie",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </head>
      <body className={inter.className}>
        <div>
          <Navbar />
        </div>
        {children}
        {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script> */}
      </body>
    </html>
  );
}
