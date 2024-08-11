"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import NpmLogo from "./components/icons/NpmLogo";
import TypescriptLogo from "./components/icons/TypescriptLogo";
import NodejsLogo from "./components/icons/NodejsLogo";
import ReactLogo from "./components/icons/ReactLogo";
import NextLogo from "./components/icons/NextLogo";
import VercelLogo from "./components/icons/VercelLogo";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main className="flex flex-col">
      <header
        className="header z-50 w-full fixed top-0 
      py-5 px-8 header-footer-background-colour"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-3xl cursor-pointer">Kobra-Soft</h1>
          <button onClick={toggleMenu} className="cursor-pointer">
            <div className="w-7 h-7 flex items-center justify-center">
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="white"
                  viewBox="0 0 16 16"
                  className="transition-transform duration-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.707 1.293a1 1 0 010 1.414L9.414 8l5.293 5.293a1 1 0 01-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 01-1.414-1.414L6.586 8 1.293 2.707a1 1 0 011.414-1.414L8 6.586l5.293-5.293a1 1 0 011.414 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="white"
                  viewBox="0 0 16 16"
                  className="transition-transform duration-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              )}
            </div>
          </button>
        </div>
      </header>

      {/* // Container for the main content */}
      <div
        id="section1"
        className="main_container_div pt-80 
      bg-black h-screen w-full px-8 lg:pl-[12.5rem]"
      >
        <h2 className="text-[50px] md:text-[50px] lg:text-[120px] mb-2.5 cursor-pointer">
          SOLUTIONS
        </h2>

        <h3
          className="text-[20px] md:text-[20px] lg:text-[33px] font-extralight text-[#cbced3]
        md:w-[60%]  xl:w-[45%]"
        >
          We empower brands with{" "}
          <span className="">innovative digital solutions</span>, crafting
          <span className=""> user-centric experiences </span>
          that enhance <span className="">brand prescence </span>and drive
          <span className=""> business growth.</span>
        </h3>
      </div>

      {/* Second Container for additional content */}
      <div
        id="section2"
        className="second_container_div px-12 pt-36 bg-[#ffffff] h-screen w-full text-4xl"
      >
        <h4>Additional content 2 or sections can go here.</h4>
        <h4>
          Describe more services, showcase projects, or include testimonials.
        </h4>
        <h4>Each section can have its unique content and styling as needed.</h4>
        <h4>
          This setup allows for creating a full-page scrolling experience.
        </h4>
        <h4>
          Consider navigation options for users to easily jump between sections.
        </h4>
      </div>

      {/* Third Container for additional content */}
      <div
        id="section3"
        className="third_container_div px-12 pt-36 bg-[#000000] h-screen w-full text-4xl"
      >
        <h3>Additional content 3 or sections can go here.</h3>
        <h3>
          Describe more services, showcase projects, or include testimonials.
        </h3>
        <h3>Each section can have its unique content and styling as needed.</h3>
        <h3>
          This setup allows for creating a full-page scrolling experience.
        </h3>
        <h3>
          Consider navigation options for users to easily jump between sections.
        </h3>
      </div>

      {/* <div className="flex flex-col items-center w-full bg-[#ffffff]">
        <div className="flex justify-center border-t  border-[#272727] w-full ">
          <Image
            src="/logo-javascript.svg"
            alt="JavaScript Logo"
            width={180}
            height={250}
            className="next-logo-black my-32 mx-auto"
          />
          <Image
            src="/logo-npm.svg"
            alt="NPM Logo"
            width={180}
            height={250}
            className="next-logo-black my-32 mx-auto"
          />
          <Image
            src="/logo-html5.svg"
            alt="HTML5 Logo"
            width={180}
            height={250}
            className="next-logo-black my-32 mx-auto"
          />
        </div>
        <div className="flex justify-center bg-black/15 w-full">
          <Image
            src="/logo-android.svg"
            alt="Android Logo"
            width={180}
            height={250}
            className="next-logo-black my-32 mx-auto"
          />
          <Image
            src="/logo-react.svg"
            alt="React Logo"
            width={180}
            height={250}
            className="next-logo-black my-32 mx-auto"
          />
          <Image
            src="/logo-apple.svg"
            alt="Apple Logo"
            width={180}
            height={250}
            className="next-logo-black my-32 mx-auto"
          />
        </div>
      </div> */}

      {/* // TESTING MIDDLE SCREEN POSITIONER | REMOVE LATER */}
      {/* <div className="flex justify-center bg-black/15 border-black w-full">
        <h4>|</h4>
      </div> */}

      {/* <footer className="footer mt-auto text-white/75 px-20 py-10 w-full header-footer-background-colour">
        <div className="flex justify-between items-center h-full">

          <div className="flex flex-col justify-center items-center">
            <div className="cursor-default mb-0 text-md">
              © 2024{" "}
              <a
                href="https://github.com/Kobra-soft"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mx-0.5 cursor-pointer hover:text-[#ff0479] text-[#ffffff]/75">
                  Kobra-Soft ™
                </span>
              </a>
            </div>
            <h5 className="footer_2nd_font text-[#636364] self-start ml-3.5 cursor-default -mt-1 text-md">
              All rights reserved
            </h5>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="flex gap-10 items-center">
              <NpmLogo />
              <TypescriptLogo />
              <NodejsLogo />
              <ReactLogo />
              <NextLogo />
              <VercelLogo />
            </div>
          </div>

          <div className="flex flex-row gap-6 items-center text-white/75">
            <a href="#" className=" hover:text-[#ff0479] hover-underline">
              About
            </a>
            <a href="#" className=" hover:text-[#ff0479] hover-underline">
              Cookies
            </a>
            <a href="#" className=" hover:text-[#ff0479] hover-underline">
              Privacy
            </a>
            <a href="#" className=" hover:text-[#ff0479] hover-underline">
              Contact Us
            </a>
          </div>
        </div>
      </footer> */}
    </main>
  );
}
