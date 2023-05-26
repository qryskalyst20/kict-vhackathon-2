import React from "react";
import Hero3 from "../public/images/hero3.webp";
import Image from "next/image";
import localFont from "next/font/local";

const AltoneBold = localFont({
  src: "../public/fonts/altone/Altone Bold.ttf",
  display: "swap",
});

export default function Home() {
  return (
    <main>
      <section className="min-h-screen relative">
        <div className="relative z-[1]">
          <Image
            src={Hero3}
            style={{
              width: "100vw",
              height: "100vh",
              resize: "cover",
            }}
          />
        </div>

        <div className="absolute z-[2] top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col w-screen">
            <p
              className={`${AltoneBold.className} text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-yellow-300 `}
            >
              Ideate · Innovate · Ignite
            </p>
            <p
              className={`${AltoneBold.className} leading-[1] text-center text-5xl md:text-8xl font-bold`}
            >
              Varsity Hackathon 2023
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
