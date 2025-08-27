"use client"
import Image from "next/image";
import Link from "next/link";
import ThemeSwitch from "./theme-switch";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MegaMenuNavbar } from "./mega-menu";
import { ServiceMenu } from "./service-menu";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { LuSearch } from "react-icons/lu";

const Logo = () => (
    <Link href="/" className="flex items-center z-999 ml-3">
        {/* <Image
            width={70}
            height={70}
            src="/icon.png"
            alt="Ganapatih Logo"
            className="dark:brightness-125 -ml-2"
        /> */}
        <h1 className="font-[850] font-montserrat tracking-widest uppercase text-[22px] -ml-1 bg-gradient-to-br from-main-1 dark:from-white from-10% dark:from-5% via-baseColorDark dark:via-baseColorLight via-40% dark:via-60% to-main-3 dark:to-main-1 to-99% bg-clip-text text-transparent">
            Anantara
        </h1>
    </Link>
)

const LinkItem = ({ href, children, isActive }) => (
    <Link
        href={href}
        className={`!z-999 px-3 py-1 rounded-main transition-all duration-300 text-sm relative hover:underline decoration-[1.5px] underline-offset-3 hover:!font-medium hover:text-darkColor dark:text-lightColor
        ${isActive ? "underline !font-medium text-darkColor dark:text-lightColor" : "text-muted-foreground"}
    `}
    >
        {children}
    </Link>
)

export const Navbar = ({ children }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [expandedId, setExpandedId] = useState(null)

    const path = usePathname()

    const whitePaths = ["/", "/post"];

    const isActive = (href) => {
        return href === "/" ? path === "/" : path.startsWith(href)
    };

    // Check if current page is a service page
    const isServicePage = path.startsWith("/services") || path === "/services";

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {isScrolled && (
                <>
                    <div className="md:sticky mx-2 top-2 left-2 right-2 w-auto rounded-main h-[52px] z-30 backdrop-blur-lg" />
                </>
            )}
            <div className={`navbar z-50 sticky top-2 left-2 right-2 w-auto mx-2 px-2 rounded-main !min-h-13 !h-13
              ${expandedId && "!bg-lightColor dark:!bg-darkColor"}
              ${isScrolled ? "bg-lightColor/70 dark:bg-darkColor/70 shadow-custom border border-neutral-300/30 dark:border-secondaryGray/10" : "bg-lightColor dark:bg-darkColor mt-2"}`}
            >
                <div className="navbar-start">
                    <Logo />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex items-center gap-1 text-sm">
                        <li className="z-50">
                            <LinkItem href="/" isActive={isActive("/")}>
                                Home
                            </LinkItem>
                        </li>
                        <li className="z-50">
                            <LinkItem href="/about-us" isActive={isActive("/about-us")}>
                                About Us
                            </LinkItem>
                        </li>
                        <li>
                            <div className="relative">
                                <MegaMenuNavbar
                                    id="service"
                                    title="Services"
                                    expandedId={expandedId}
                                    setExpandedId={setExpandedId}
                                    className="absolute"
                                    isActive={isServicePage} // Pass isActive prop
                                >
                                    <ServiceMenu
                                        onClose={() => setExpandedId(null)}
                                        expandedId={expandedId}
                                    />
                                </MegaMenuNavbar>
                            </div>
                        </li>
                        <li className="z-50">
                            <LinkItem href="/article" isActive={isActive("/article")}>
                                Article
                            </LinkItem>
                        </li>
                        <li className="z-50">
                            <LinkItem href="/contact" isActive={isActive("/contact")}>
                                Contact
                            </LinkItem>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end space-x-2 z-50">
                    <div className="hidden md:flex items-center gap-2">
                        <Input
                            className={"w-60"}
                            placeholder="Search here..."
                        />
                        <Button
                            variant={""}
                            size={"icon"}
                        >
                            <LuSearch />
                        </Button>
                    </div>
                    <ThemeSwitch />
                </div>
            </div>

            <div className={`md:flex hidden fixed top-0 transition-opacity duration-300 z-10 bg-black/50 dark:bg-white/50
                ${expandedId
                    ? "opacity-100 backdrop-blur-none md:backdrop-blur-[4px] w-screen h-screen"
                    : "opacity-0 pointer-events-none"
                } 
            `} />

            {/* Main Content */}
            <div className={`${expandedId ? 'pointer-events-none md:scale-105' : ''} md:duration-300 md:ease-in-out`}>
                {children}
            </div>
        </>
    );
}