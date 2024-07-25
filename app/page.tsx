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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main className="flex flex-col">
      <header className="w-full fixed py-5 px-8 header-footer-background-colour">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl cursor-pointer">Kobra-Soft</h1>
          <button onClick={toggleMenu} className="cursor-pointer">
            {isMenuOpen ? (
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
          </button>
        </div>
      </header>

      {/* // Container for the main content */}
      <div id="section1"
      className="main_container_div px-8 pt-36 bg-[#3d11ff] h-screen w-full">
        <h2 className="">
          Full stack web & mobile application development, specialising in the
          building of bespoke applications.
        </h2>

        <h2 className="">
          Not only do we build applications, we also provide consultancy
          services to help you get the most out of your applications.
        </h2>

        <h2 className="">
          We provide the best possible service to our clients, building long
          lasting relationships with them.
        </h2>

        <h2 className="">
          Our philosophy is to build robust and scalable applications that are
          easy to maintain and update. We do this by developing applications
          using the latest technologies and best practices.
        </h2>

        <h2 className="">
          We strongly believe in the importance of agile development phases.
        </h2>

        <h3 className=" mb-0 pt-0 flex flex-wrap items-center gap-4">
          <ArrowDisplayComponent />
        </h3>
      </div>

      {/* Second Container for additional content */}
      <div id="section2"
      className="second_container_div px-8 pt-36 bg-[#2a0fa2] h-screen w-full">
        <h2>Additional content 2 or sections can go here.</h2>
        <h2>
          Describe more services, showcase projects, or include testimonials.
        </h2>
        <h2>Each section can have its unique content and styling as needed.</h2>
        <h2>
          This setup allows for creating a full-page scrolling experience.
        </h2>
        <h2>
          Consider navigation options for users to easily jump between sections.
        </h2>
      </div>

        {/* Third Container for additional content */}
        <div  id="section3"
        className="third_container_div px-8 pt-36 bg-[#1d0a70] h-screen w-full">
        <h2>Additional content 3 or sections can go here.</h2>
        <h2>
          Describe more services, showcase projects, or include testimonials.
        </h2>
        <h2>Each section can have its unique content and styling as needed.</h2>
        <h2>
          This setup allows for creating a full-page scrolling experience.
        </h2>
        <h2>
          Consider navigation options for users to easily jump between sections.
        </h2>
      </div>

      {/*       <div className="flex justify-center border-t border-[#272727] w-full h-full">
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
      <div className="flex justify-center bg-black/15 border-black w-full">
      <h4>|</h4>
      </div> */}
    </main>
  );
}
