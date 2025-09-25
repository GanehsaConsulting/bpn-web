import Link from "next/link";

export const Footer = () => {
    return (
        <>
            <footer className="mx-5 md:mx-10  my-5 relative">
                <div className="absolute -z-50 -bottom-10 -left-30  h-50  bg-gradient-to-t from-sec-1/20 via-sec-1/10 to-sec-1/5 rounded-full"></div>
                {/* <div className="grid sm:grid-cols-6 gap-4 mb-17">
                    <div className="col-span-3 flex flex-col">
                        <h1 className="font-[850] font-montserrat tracking-widest uppercase text-[22px] bg-gradient-to-br from-main-1 dark:from-white from-10% dark:from-5% via-baseColorDark dark:via-baseColorLight via-40% dark:via-60% to-main-3 dark:to-main-1 to-99% bg-clip-text text-transparent">
                            Anantara
                        </h1>
                        <p className="mt-2 text-sm text-muted-foreground max-w-xs">
                            Experience unparalleled luxury and tranquility at our seaside resort, where every moment is crafted to perfection.
                        </p>
                    </div>
                    <div className="col-span-3 grid sm:grid-cols-3 gap-4">
                        <div className="flex flex-col gap-1">
                            <p className="text-xs uppercase font-semibold">
                                Quick Links
                            </p>
                            {["Home", "About Us", "Services", "Contact", "Blog"].map((el) => (
                                <Link key={el} href=""
                                    className="link text-sm link-hover"
                                >
                                    {el}
                                </Link>
                            ))}
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-xs uppercase font-semibold">
                                Quick Links
                            </p>
                            {["Home", "About Us", "Services", "Contact", "Blog"].map((el) => (
                                <Link key={el} href=""
                                    className="link text-sm link-hover"
                                >
                                    {el}
                                </Link>
                            ))}
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-xs uppercase font-semibold">
                                Quick Links
                            </p>
                            {["Home", "About Us", "Services", "Contact", "Blog"].map((el) => (
                                <Link key={el} href=""
                                    className="link text-sm link-hover"
                                >
                                    {el}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div> */}
                <hr className="border-t border-muted-foreground/30 my-5" />
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0 text-center sm:text-left flex flex-col gap-2">
                        <h2 className="text-xl font-bold">Bifudo Partner Nusantara</h2>
                        <p className="text-sm">© 2025 BPN. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-4 text-sm">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Terms of Service</a>
                        <a href="#" className="hover:underline">Contact Us</a>
                    </div>
                </div>
            </footer>
        </>
    );
}