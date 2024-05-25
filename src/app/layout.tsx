import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";

// import { webData } from "@/data/website";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
// import { AuthContextProvider } from "./context/AuthContext";

const karla = Karla({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: webData.title,
//   description: webData.description,
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${karla.className} antialiased`}>
        <div className="flex w-screen h-screen">
          <Sidebar/>
          <div className="ml-[240px] w-full">
            <Navbar/>
            <div className='mt-[48px] md:mt-[84px] w-full text-black'>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
