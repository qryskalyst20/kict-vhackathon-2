import React from "react";
import Hero3 from "../public/images/hero3.webp";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image
        src={Hero3}
        style={{ width: "100vw", height: "100vh", resize: "cover" }}
      />
    </main>
  );
}
