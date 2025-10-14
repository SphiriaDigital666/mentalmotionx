import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "./Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Mental Motion X - Fitness App",
  description: "The App That'll Get Your Head Right and Your Rig Tight. Builds Muscle, Mind, and a Bit of Mayhem.",
  icons: {
    icon: '/Hero/Favicon.png',
    shortcut: '/Hero/Favicon.png',
    apple: '/Hero/Favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body className={`${roboto.className} bg-black text-white`}>
        <div className="relative overflow-hidden">
           {/* Background Circles */}
          <div className="absolute inset-0 -z-10" style={{ willChange: 'transform' }}>
            <div className="absolute top-0 left-[-40rem] h-[30rem] w-[30rem] md:h-[60rem] md:w-[60rem] bg-[#5494BC]/40 rounded-full blur-3xl" />
            <div className="absolute top-[50rem] right-[-10rem] h-[30rem] w-[30rem] md:h-[60rem] md:w-[60rem] bg-[#5494BC]/40 rounded-full blur-3xl" />
            <div className="absolute top-[100rem] left-[-15rem] h-[30rem] w-[30rem] md:h-[60rem] md:w-[60rem] bg-[#5494BC]/40 rounded-full blur-3xl" />
            <div className="absolute top-[150rem] right-[-45rem] h-[30rem] w-[30rem] md:h-[60rem] md:w-[60rem] bg-[#5494BC]/40 rounded-full blur-3xl" />
            <div className="absolute top-[200rem] left-[-40rem] h-[30rem] w-[30rem] md:h-[60rem] md:w-[60rem] bg-[#5494BC]/40 rounded-full blur-3xl" />
            <div className="absolute top-[230rem] right-[-10rem] h-[30rem] w-[30rem] md:h-[60rem] md:w-[60rem] bg-[#5494BC]/40 rounded-full blur-3xl" />
            
          </div>
          
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
