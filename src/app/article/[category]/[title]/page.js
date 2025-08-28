import { DataArticles } from "@/app/system"
import { formatDate } from "@/helper/formatDateTime";
import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";

export default function ArticleDetail() {
    const d = DataArticles[7];
    return (
        <>
            <section className="mx-5 md:mx-70 my-3">
                <div className="mb-3 bg-white/10 dark:bg-darkColor/20 backdrop-blur-lg w-auto p-4 border border-muted-foreground/10 dark:border-muted-foreground/20 rounded-secondary text-white flex gap-2">
                    <div className="flex flex-col gap-2 text-darkColor dark:text-lightColor text-center">
                        <div className="flex items-center justify-center gap-2">
                            <p className="bg-sec-1 w-fit h-fit py-1.5 px-2 rounded-secondary text-xs font-semibold text-darkColor">
                                {d.categories}
                            </p>
                            <p className="bg-darkColor/60 dark:bg-lightColor/50 border border-muted/30 w-fit h-fit py-1.5 px-2 rounded-secondary text-xs font-semibold text-lightColor">
                                Published, {formatDate(d.date)}
                            </p>
                        </div>
                        <h3 className="font-semibold text-3xl">
                            {d.title}
                        </h3>
                        <p className="text-sm opacity-90 line-clamp-2">
                            {d.exerp}
                        </p>

                    </div>
                </div>
                <div className="relative overflow-hidden rounded-main">
                    <Image
                        width={800}
                        height={400}
                        className="object-cover w-full h-[80vh] rounded-main"
                        src={d.thumbnailImg}
                        alt={d.title}
                    />
                </div>
            </section>

            <section className="margin md:!mx-70 flex items-center justify-center">
                <div className="space-y-5 ">
                    <div className="prose prose-xl" dangerouslySetInnerHTML={{ __html: d.content }}></div>
                </div>
            </section>
        </>
    )
}