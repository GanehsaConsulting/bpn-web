import { DataArticles } from "@/app/system"
import Image from "next/image"
import { IoArrowForward } from "react-icons/io5";

export const ArticleBanner = () => {
    const main = DataArticles[0]
    return (
        <section className="mx-3 mt-3 mb-3" style={{ height: "calc(100vh - 5.35rem)" }}>
            <div className="grid grid-cols-10 gap-3 h-full">
                {/* Left Hero */}
                <div className="relative col-span-6 rounded-main overflow-hidden">
                    <Image
                        fill
                        className="object-cover"
                        src={main.thumbnailImg}
                        alt={main.title}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-b h-[30%] from-black/20 via-black/5 to-transparent"></div>

                    <div className="absolute top-5 left-5">
                        <h1 className="text-white text-2xl drop-shadow">
                            Recent Articles
                        </h1>
                    </div>
                    
                    {/* Small Card Bottom Left */}
                    <div className="absolute bottom-2 left-2 right-2 bg-white/10 backdrop-blur-lg w-auto p-4 border border-muted/30 rounded-secondary text-white flex gap-2">
                        <div className="flex flex-col gap-2">
                            <h3 className="font-semibold text-2xl">
                                {main.title}
                            </h3>
                            <p className="text-sm opacity-90">
                                {main.exerp}
                            </p>
                            <button
                                className="flex items-center gap-2 group w-fit px-4 py-2 text-darkColor bg-white hover:bg-main-1 rounded-full text-sm mt-2 duration-300"
                            >
                                Read More <IoArrowForward />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="col-span-4 flex flex-col gap-3">
                    {DataArticles.slice(1, 3).map((el, idx) => (
                        <div className="relative flex-1 rounded-main overflow-hidden group">
                            <Image
                                fill
                                className="object-cover"
                                src={el.thumbnailImg}
                                alt="Sidebar Menu"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                            <div className="absolute bottom-2 left-2 right-2 bg-white/10 backdrop-blur-[6px] w-auto p-4 border border-muted/30 rounded-secondary text-white flex gap-2">
                                <div className="flex flex-col gap-2">
                                    <h3 className="font-semibold text-lg">
                                        {el.title}
                                    </h3>
                                    <p className="text-sm opacity-90">
                                        {el.exerp}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}