import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
      <main className="flex flex-col min-h-screen p-0">
        <div className="w-full">
          <h1 className="fixed text-8xl text-white lg:px-14 lg:pt-10 cursor-pointer">
            Kobra-Soft
          </h1>

          <Image src="/logo-nodejs.svg" alt="Next.js Logo" width={300} height={250} 
          className="next-logo-black mt-[750px] mx-auto cursor-pointer pr-9 mb-8"/>

        </div>

        {/* Footer */}
        <footer className="mt-auto bg-[#000000] text-white/85 px-14 py-0 w-full">
          <div className="flex flex-row justify-between py-8">
            {/* LEFTSIDE */}
            <div>
              <div>© 2023 Kobra-Soft Ltd</div>
              <div className="text-[#9b26b6a3] text-center">
                All rights reserved
              </div>
            </div>
            {/* SVG - Icons Row */}
            <div className="flex items-center gap-4">
              <Image src="/next.svg" alt="Next.js Logo" width={50} height={50} className="next-logo-white"/>
              <Image src="/logo-nodejs.svg" alt="Next.js Logo" width={50} height={50} className="next-logo-white"/>
              <Image src="/logo-react.svg" alt="Next.js Logo" width={50} height={50} className="next-logo-white"/>
              <Image src="/logo-github.svg" alt="Next.js Logo" width={50} height={50} className="next-logo-white"/>
              <Image src="/vercel.svg" alt="Next.js Logo" width={50} height={50} className="next-logo-white"/>
            </div>
            {/* RIGHTSIDE */}
            <div className="flex flex-row gap-4 py-3">
              <a href="#" className="hover:underline">
                Home
              </a>
              <a href="#" className="hover:underline">
                About Us
              </a>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </main>
  );
}
