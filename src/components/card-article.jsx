import { DataArticles } from "@/app/system"
import { slugify } from "@/helper/slugify"
import Image from "next/image"

export const CardArticle = () => {
    return (
        <section className="margin !my-5">
            <div className="grid grid-cols-4 gap-3">
                {DataArticles.map((e, idx) => (
                    <a
                        key={idx}
                        href={`/article/${slugify(e.categories)}/${slugify(e.title)}`}
                    >
                        <div
                            className="relative rounded-main overflow-hidden group h-[70vh]"
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