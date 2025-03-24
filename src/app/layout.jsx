import Footer from "@/components/Footer";
import Header from "../components/header-comp/Header";
import "./globals.css";
import {Poppins} from "next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200','300', '400', '600','700','800'],
  variable: '--font-poppins',
});


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="font-body">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
