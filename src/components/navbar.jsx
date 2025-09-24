"use client";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitch from "./theme-switch";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MegaMenuNavbar } from "./mega-menu";
import { ServiceMenu } from "./service-menu";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { LuSearch } from "react-icons/lu";
import { AlertDialogComponent } from "./ui/alert-dialog";

const Logo = () => (
  <Link href="/" className="flex items-center z-999 ml-3">
    <h1 className="font-[850] font-montserrat tracking-widest uppercase text-[22px] -ml-1 bg-gradient-to-br from-main-1 dark:from-white from-10% dark:from-5% via-baseColorDark dark:via-baseColorLight via-40% dark:via-60% to-main-3 dark:to-main-1 to-99% bg-clip-text text-transparent">
      Anantara
    </h1>
  </Link>
);

const LinkItem = ({ href, children, isActive }) => {
  const isHome = href === "/";
  if (isHome) {
    return (
      <Link
        href={href}
        className={`!z-999 px-3 py-1 rounded-main transition-all duration-300 text-sm relative hover:underline decoration-[1.5px] underline-offset-3 hover:!font-medium hover:text-darkColor dark:text-lightColor
                    ${
                      isActive
                        ? "underline !font-medium text-darkColor dark:text-lightColor"
                        : "text-muted-foreground"
                    }`}
      >
        {children}
      </Link>
    );
  }

  return (
    <AlertDialogComponent
      img="/maintenance.svg"
      title={`${children} Page Under Maintenance`}
      desc={`The ${children} Page temporarily unavailable as we perform updates.Please check back later.`}
      triggerClassName={`cursor-pointer !z-999 px-3 py-1 rounded-main transition-all duration-300 text-sm relative hover:underline decoration-[1.5px] underline-offset-3 hover:!font-medium hover:text-darkColor dark:text-lightColor ${
        isActive
          ? "underline !font-medium text-darkColor dark:text-lightColor"
          : "text-muted-foreground"
      }`}
      triggerText={children}
    />
  );
};

export const Navbar = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedId, setExpandedId] = useState(null);

  const path = usePathname();
  const isActive = (href) =>
    href === "/" ? path === "/" : path.startsWith(href);
  const isServicePage = path.startsWith("/services") || path === "/services";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isScrolled && (
        <>
          <div className="md:fixed top-0 left-0 right-0 h-20 z-40 pointer-events-none linear-blur-navbar" />
          <div
            className={`${
              isScrolled && "mx-10"
            } duration-300 md:sticky mx-2 top-2 left-2 right-2 w-auto rounded-main h-[52px] z-30 backdrop-blur-[4px]`}
          />
        </>
      )}
      <div
        className={`navbar z-50 sticky top-2 left-2 right-2 w-auto mx-2 px-2 rounded-main !min-h-13 !h-13 duration-300 ease-in-out
              ${expandedId && "!bg-lightColor dark:!bg-darkColor"}
              ${
                isScrolled
                  ? "mx-10 bg-lightColor/60 dark:bg-darkColor/40 shadow-custom border border-neutral-300/50 dark:border-secondaryGray/10"
                  : "bg-lightColor dark:bg-darkColor mt-2"
              }`}
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
            <li className="z-50">
              <LinkItem href="/services" isActive={isActive("/about-us")}>
                Services
              </LinkItem>
            </li>
            {/* <li>
              <div className="relative">
                <MegaMenuNavbar
                  id="service"
                  title="Services"
                  expandedId={expandedId}
                  setExpandedId={setExpandedId}
                  className="absolute"
                  isActive={isServicePage}
                  isScrolled={isScrolled}
                >
                  <ServiceMenu
                    onClose={() => setExpandedId(null)}
                    expandedId={expandedId}
                  />
                </MegaMenuNavbar>
              </div>
            </li> */}
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
            <Input className={"w-60"} placeholder="Search here..." />
            <Button variant={""} size={"icon"}>
              <LuSearch />
            </Button>
          </div>
          <ThemeSwitch />
        </div>
      </div>

      <div
        className={`md:flex hidden fixed top-0 transition-opacity duration-300 z-10 bg-black/50 dark:bg-white/50
                ${
                  expandedId
                    ? "opacity-100 backdrop-blur-none md:backdrop-blur-[4px] w-screen h-screen"
                    : "opacity-0 pointer-events-none"
                } 
            `}
      />

      {/* Main Content */}
      <div
        className={`${
          expandedId ? "pointer-events-none md:scale-105" : ""
        } md:duration-300 md:ease-in-out`}
      >
        {children}
      </div>
    </>
  );
};
