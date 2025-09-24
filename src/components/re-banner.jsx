import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export const ReBanner = () => {
    return (
        <section className="mx-3 !mt-3 relative overflow-hidden">
            <div className="absolute -top-5 left-10 flex gap-2">
                <div className=" w-24 h-20 bg-sec-3 rounded-main"></div>
                <div className=" w-40 h-30 bg-main-2/60 rounded-main"></div>
                <div className=" w-24 h-40 bg-main-4 rounded-main"></div>
            </div>
            <div className="w-full h-[50vh] bg-lightColor dark:bg-darkColor rounded-main flex items-center gap-24 px-24">
                <div>
                    <h1 className="px-5 py-3 bg-sec-1 text-darkColor rounded-main text-4xl font-semibold">Contact Us</h1>
                </div>
                <div className="">
                    <p className="mt-2 text-lg text-muted-foreground">We would love to hear from you!</p>
                    <div className="flex gap-4 mt-4 p-2">

                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-main-1 hover:bg-blue-600 text-white transition"
                            aria-label="Facebook"
                        >
                            <FaFacebookF size={24} />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-main-1 hover:bg-sky-500 text-white transition"
                            aria-label="Twitter"
                        >
                            <FaTwitter size={24} />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-main-1 hover:bg-pink-400 text-white transition"
                            aria-label="Instagram"
                        >
                            <FaInstagram size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}