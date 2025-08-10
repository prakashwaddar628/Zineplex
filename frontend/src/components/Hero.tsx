import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-white min-h-[90vh]">
      <Image
        src="/assets/bg.jpg"
        alt="Hero Image"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      
      <div className="relative z-10 text-center p-4">
        <div className="text-4xl font-bold mb-4">Welcome to Zineplex</div>
        <div className="text-lg">Your favorite movie streaming platform</div>
      </div>
    </div>
  );
};

export default Hero;