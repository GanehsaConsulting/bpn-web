"use client"
import { useState } from "react";
import { RiCheckFill, RiInformationFill, RiWhatsappLine } from "react-icons/ri";
import { BsFillXCircleFill } from "react-icons/bs";
import { LuPlus } from "react-icons/lu";
import { Button } from "./ui/button";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { DataArticles } from "@/app/system"
import { slugify } from "@/helper/slugify"
import Image from "next/image"
import { Title } from "./title"
import { IoIosArrowBack } from "react-icons/io";

export const ArticleReccomendations = () => {
    const [carouselRef, setCarouselRef] = useState(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const updateCarouselPosition = () => {
        if (carouselRef) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef;
            setIsAtStart(scrollLeft <= 0);
            setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 5);
        }
    };

    const scrollAmount = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth < 640) return 280; // mobile
            if (window.innerWidth < 1024) return 350; // tablet
            return 300; // desktop
        }
        return 300;
    };
    return (
        <section className="my-10 md:my-20">
            <div className="margin !mb-5 flex items-center justify-between group">
                <Title>
                    More Insight From <br /> Our Articles
                </Title>
                <div className="space-x-2">
                    <Button
                        size={"icon"}
                        onClick={() => carouselRef?.scrollBy({ left: -scrollAmount(), behavior: "smooth" })}
                        disabled={isAtStart}
                        className={`
                        ${isAtStart ? '!opacity-50 !cursor-not-allowed' : ''} 
                        cursor-pointer rounded-full shadow-lg w-8 h-8 sm:w-10 sm:h-10 bg-sec-5 dark:bg-sec-4 text-lightColor
                    `}
                    >
                        <IoIosArrowBack className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Button>

                    <Button
                        size={"icon"}
                        className={`
                        ${isAtEnd ? '!opacity-50 !cursor-not-allowed' : ''} 
                        cursor-pointer rounded-full shadow-lg w-8 h-8 sm:w-10 sm:h-10 bg-sec-5 dark:bg-sec-4 text-lightColor
                    `}
                        onClick={() => carouselRef?.scrollBy({ left: scrollAmount(), behavior: "smooth" })}
                        disabled={isAtEnd}
                    >
                        <IoIosArrowBack className="w-4 h-4 sm:w-5 sm:h-5 rotate-180" />
                    </Button>
                </div>

            </div>
            <div
                ref={ref => setCarouselRef(ref)}
                onScroll={updateCarouselPosition}
                className="carousel w-full gap-5"
            >
                {DataArticles.slice(0, 6).map((e, idx) => (
                    <a
                        key={idx}
                        href={`/article/${slugify(e.categories)}/${slugify(e.title)}`}
                    >
                        <div
                            className={`${idx === 0 && "md:ml-10 ml-5"} ${idx === DataArticles.length - 1 && "md:mr-10 mr-5"} md:min-w-[25lvw] min-w-[85lvw] h-[70lvh] rounded-main overflow-hidden group relative brightness-95`}
                        >
                            <Image
                                width={400}
                                height={250}
                                className="object-cover w-full h-full group-hover:scale-105 duration-300"
                                src={e.thumbnailImg}
                                alt={e.title}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                            {e.trending === true && (
                                <div className="absolute top-3 left-3 bg-sec-1 w-fit h-fit py-1.5 px-2 rounded-secondary">
                                    <p className="text-xs font-semibold text-darkColor">
                                        Trending
                                    </p>
                                </div>
                            )}
                            <div className="absolute bottom-3 left-3 right-3 space-y-2">
                                <div className="bg-white/10 dark:bg-darkColor/20 backdrop-blur-[6px] w-fit h-full py-1.5 px-2 border border-muted/30 dark:border-muted-foreground/20 rounded-secondary">
                                    <p className="text-xs font-semibold text-white opacity-80">
                                        {e.categories}
                                    </p>
                                </div>
                                <div className="bg-white/10 dark:bg-darkColor/20 backdrop-blur-[6px] w-auto h-full py-3 px-4 border border-muted/30 dark:border-muted-foreground/20 rounded-secondary">
                                    <h1 className="font-semibold text-lg text-white drop-shadow line-clamp-2">
                                        {e.title}
                                    </h1>
                                    <p className="text-sm text-white line-clamp-1">
                                        {e.exerp}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}