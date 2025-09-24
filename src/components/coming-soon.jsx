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
          src="/banner-img.jpeg"
          alt="Japan-Indonesia Partnership"
          priority
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />

        {/* Text Overlay */}
        <div className="absolute top-6 left-6 right-6 sm:top-8 sm:left-8 sm:right-8 md:top-12 md:left-12 lg:top-16 lg:left-16 xl:top-20 xl:left-20 text-baseColorDark z-10">
          <div className="max-w-2xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight mb-4 sm:mb-5 text-baseColorDark">
              Coming Soon
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl opacity-90 leading-relaxed max-w-xl mb-5">
              Building Bridges of Friendship between Japan and Indonesia for
              Economy, Culture, and Future Generations
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl opacity-90 leading-relaxed max-w-xl">
              「日本とインドネシアの友情の架け橋を築き、経済・文化・次世代へとつなぐ」
            </p>
          </div>
        </div>

        {/* Bottom Card */}
        <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-auto md:bottom-12 md:left-12 lg:bottom-16 lg:left-16 xl:bottom-20 xl:left-20 z-10">
          <div className="bg-black/15 backdrop-blur-lg p-4 sm:p-5 md:p-6 border border-white/20 rounded-third max-w-sm sm:max-w-md text-white shadow-2xl">
            {/* Button ke WhatsApp bisa ditaruh di sini */}
            <div className="flex gap-3 sm:gap-4 items-start">
              <div className="flex flex-col gap-2 flex-1 min-w-0">
                <p className="text-xs sm:text-sm md:text-base opacity-90 leading-relaxed">
                  Stay Connected with BIFUDO
                </p>
                {/* CTA Button */}
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 gap-3.5 bg-green-500 hover:bg-green-600 text-white text-sm sm:text-base font-medium px-4 py-2 rounded-sm shadow-lg transition flex items-center"
                >
                  <BsWhatsapp />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
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
