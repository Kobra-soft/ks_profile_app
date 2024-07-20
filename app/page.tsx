import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
      <main className="flex flex-col min-h-screen p-0">
        <div className="w-full">
          <h1 className="text-9xl text-white lg:px-14 lg:pt-8 cursor-pointer">
            Kobra-Soft
          </h1>
          <h2 className=" lg:px-14 lg:pt-16 text-5xl">
            Full stack web & mobile application development, specialising in the building of bespoke applications. 
          </h2>

          <h2 className=" lg:px-14 lg:pt-5 text-5xl">
            Not only do we build applications, we also provide consultancy services to help you get the most out of your applications.
          </h2>

          <h2 className=" lg:px-14 lg:pt-5 text-5xl">
           We provide the best possible service to our clients, building long lasting relationships with them.
          </h2>

          <h2 className=" lg:px-14 lg:pt-5 text-5xl">
           Our philosophy is to build robust and scalable applications that are easy to maintain and update. We do this by 
           developing applications using the latest technologies and best practices.
          </h2>

          <h2 className=" lg:px-14 lg:pt-5 text-5xl">
          We strongly believe in the importance of agile development phases.
          </h2>

          <h3 className=" text-black lg:px-14 lg:pt-5 text-5xl">
          Plan • Design • Develop • Test • Deploy • Maintain
          </h3>



          <Image src="/logo-nodejs.svg" alt="Next.js Logo" width={300} height={250} 
          className="next-logo-black mt-32 mb-32 mx-auto pr-9"/>

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
