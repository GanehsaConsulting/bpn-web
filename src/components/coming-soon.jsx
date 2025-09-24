import Image from "next/image";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";

export const ComingSoon = () => {
  return (
    <section className="mx-3 mt-3 min-h-screen">
      {/* Main Hero Container */}
      <div className="relative w-full h-[calc(100vh-6rem)] min-h-[500px] rounded-main overflow-hidden">
        <Image
          fill
          className="object-cover"
          src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Japan-Indonesia Partnership"
          priority
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-2xl">
            <h1 className="text-2xl md:text-8xl font-extrabold leading-tight mb-4 sm:mb-5">
              Coming Soon
            </h1>
            <p className="text-md opacity-90 leading-relaxed mb-5">
              Building Bridges of Friendship between Japan and Indonesia for
              Economy, Culture, and Future Generations
            </p>
            <p className="text-md opacity-90 leading-relaxed">
              「日本とインドネシアの友情の架け橋を築き、経済・文化・次世代へとつなぐ」
            </p>
          </div>
        </div>


        {/* Decorative element */}
        <div className="absolute top-1/2 right-6 sm:right-8 md:right-12 lg:right-16 xl:right-20 transform -translate-y-1/2 hidden lg:block">
          <div className="w-1 h-20 bg-white/30 rounded-full" />
        </div>
      </div>
    </section>
  );
};
