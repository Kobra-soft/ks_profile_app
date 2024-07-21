"use client";

import Image from "next/image";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const items = ["Plan", "Design", "Develop", "Test", "Deploy", "Maintain"];

const ArrowDisplayComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < items.length - 1 ? prevIndex + 1 : 0
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <span>{item}</span>
          <Image
            src="/arrow-narrow-right-svgrepo-com.svg"
            alt=">"
            width={70}
            height={70}
            style={{
              opacity: index === currentIndex - 1 ? 1 : 0,
              transition: "opacity 0.5s",
            }}
          />
        </React.Fragment>
      ))}
    </>
  );
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-0">
      <div className="w-full">
        <h1 className="text-9xl text-white lg:px-14 lg:pt-8 cursor-pointer">
          Kobra-Soft
        </h1>
        <h2 className=" lg:px-14 lg:pt-16">
          Full stack web & mobile application development, specialising in the
          building of bespoke applications.
        </h2>

        <h2 className=" lg:px-14">
          Not only do we build applications, we also provide consultancy
          services to help you get the most out of your applications.
        </h2>

        <h2 className=" lg:px-14">
          We provide the best possible service to our clients, building long
          lasting relationships with them.
        </h2>

        <h2 className=" lg:px-14">
          Our philosophy is to build robust and scalable applications that are
          easy to maintain and update. We do this by developing applications
          using the latest technologies and best practices.
        </h2>

        <h2 className=" lg:px-14">
          We strongly believe in the importance of agile development phases.
        </h2>

        {/* <h3 className=" text-black lg:px-14 mb-8 pt-8">
          Plan • Design • Develop • Test • Deploy • Maintain
        </h3> */}

        {/* <h3 className="lg:px-14 mb-8 pt-8 flex flex-wrap items-center gap-4">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <div>{item}</div>
          {index < items.length - 1 && (
            <Image
              src="/arrow-narrow-right-svgrepo-com.svg"
              alt=">"
              width={70}
              height={70}
            />
          )}
        </React.Fragment>
      ))}
    </h3> */}

        <h3 className="lg:px-14 mb-0 pt-16 flex flex-wrap items-center gap-4">
          <ArrowDisplayComponent />
        </h3>

        <div className="flex bg-black/15 border-t border-black">
          <Image
            src="/logo-javascript.svg"
            alt="Next.js Logo"
            width={180}
            height={250}
            className="next-logo-black mt-32 mb-32 mx-auto "
          />
          <Image
            src="/logo-react.svg"
            alt="Next.js Logo"
            width={180}
            height={250}
            className="next-logo-black mt-32 mb-32 mx-auto "
          />
          <Image
            src="/logo-html5.svg"
            alt="Next.js Logo"
            width={180}
            height={250}
            className="next-logo-black mt-32 mb-32 mx-auto "
          />
        </div>
        <div className="flex bg-black/15">
          <Image
            src="/logo-android.svg"
            alt="Next.js Logo"
            width={180}
            height={250}
            className="next-logo-black mt-32 mb-32 mx-auto "
          />
          <Image
            src="/logo-npm.svg"
            alt="Next.js Logo"
            width={180}
            height={250}
            className="next-logo-black mt-32 mb-32 mx-auto "
          />
          <Image
            src="/logo-apple.svg"
            alt="Next.js Logo"
            width={180}
            height={250}
            className="next-logo-black mt-32 mb-32 mx-auto "
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="footer mt-auto bg-[#000000] text-white/85 px-14 py-0 w-full">
        <div className="flex flex-row justify-between py-8">
          {/* LEFTSIDE */}
          <div>
            <div className="cursor-default">© 2024 Kobra-Soft</div>
            {/* Divider */}
            <div className="my-0 border-b border-white/85"></div>
            <div className="text-[#700f7d] text-center cursor-default">
              All rights reserved
            </div>
          </div>
          {/* SVG - Icons Row */}
          <div className="flex items-center gap-8">
            <Image
              src="/typescript-svgrepo-com.svg"
              alt="Typescript Logo"
              title="TypeScript"
              width={50}
              height={50}
              className="next-logo-white"
            />
            <Image
              src="/logo-npm.svg"
              alt="Npm Logo"
              title="Node Package Manager"
              width={40}
              height={40}
              className="next-logo-white"
            />
            <Image
              src="/logo-nodejs2.svg"
              alt="NodeJS Logo"
              title="Node JS"
              width={38}
              height={38}
              className="next-logo-white"
            />
            <Image
              src="/logo-javascript.svg"
              alt="JavaScript Logo"
              title="JavaScript"
              width={38}
              height={40}
              className="next-logo-white"
            />
            <Image
              src="/logo-html5.svg"
              alt="Html5 Logo"
              title="HTML 5"
              width={38}
              height={40}
              className="next-logo-white"
            />
            <Image
              src="/logo-css3.svg"
              alt="Css3 Logo"
              title="CSS 3"
              width={38}
              height={40}
              className="next-logo-white"
            />
            <Image
              src="/logo-react.svg"
              alt="React Logo"
              title="React"
              width={38}
              height={40}
              className="next-logo-white"
            />
            <Image
              src="/logo-github.svg"
              alt="Github Logo"
              title="Github"
              width={38}
              height={40}
              className="next-logo-white"
            />
            <Image
              src="/next.svg"
              alt="NextJS Logo"
              title="Next JS"
              width={50}
              height={50}
              className="next-logo-white"
            />
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              title="Vercel"
              width={50}
              height={50}
              className="next-logo-white"
            />
          </div>
          {/* RIGHTSIDE */}
          <div className="flex flex-row gap-5 py-3 text-white/85">
            <a href="#" className="hover:underline hover:text-white/85">
              {/* Home */} Link 1
            </a>
            <a href="#" className="hover:underline hover:text-white/85">
              {/* About Us */} Link 2
            </a>
            <a href="#" className="hover:underline hover:text-white/85">
              {/* Contact */} Link 3
            </a>
            <a href="#" className="hover:underline hover:text-white/85">
              {/* Contact */} Link 4
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
