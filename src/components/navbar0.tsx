"use client";

// import lokkeestudiosWordmarkLogoImage from '@/assets/images/logos/lokkeestudios-wordmark.svg';
import MobileNavigation from "./mobile-navegation";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import useScrollThreshold from "@/hooks/useScrollThreshold";
import { cn } from "@/lib/utils";
import { useState } from "react";

import Link from "next/link";

const links = [
  {
    label: "About Us",
    href: "/home/#about",
  },
  {
    label: "Support",
    href: "/home/#work",
  },
  {
    label: "Pricing",
    href: "/home/#services",
  },
  // {
  //   label: "Blog",
  //   href: "/home/blog",
  // },
] as const;

const GRACE_THRESHOLD = 12;

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isScrollThresholdPassed } = useScrollThreshold({
    threshold: GRACE_THRESHOLD,
  });

  const isBackgroundShown = isScrollThresholdPassed || isMobileMenuOpen;

  return (
    <header aria-label="Primary" className={"fixed top-0 z-40 w-full"}>
      <Container
        className={cn(
          " flex justify-center",
          isBackgroundShown
            ? "bg-[#FFFFFFCC] backdrop-blur-[12px] transition-colors"
            : ""
        )}
      >
        <div
          className={cn(
            "mt-4 rounded-none w-11/12 max-w-7xl 2xl:w-4/5 p-2 py-3 duration-300 transition-all ",
            isBackgroundShown ? "mt-0 " : ""
          )}
        >
          <div className="grid grid-cols-3">
            <div className="flex items-center lg:hidden">
              <MobileNavigation.Toggle
                isOpen={isMobileMenuOpen}
                onIsOpenChange={setIsMobileMenuOpen}
                isBackgroundShown={isBackgroundShown}
              />
            </div>
            <nav
              aria-label="Primary"
              className="ms-4 hidden items-center gap-x-6 lg:flex"
            >
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative flex h-full items-center p-1 text-sm uppercase text-neutrals-50 after:absolute after:inset-x-0 after:bottom-[12.25%] after:h-px after:scale-x-0 after:bg-gradient-to-r after:from-transparent after:via-neutrals-200 after:to-transparent after:transition-transform hover:after:-scale-x-100 focus-visible:after:-scale-x-100",
                    isBackgroundShown ? "text-gray-950" : ""
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center justify-center">
              <Link
                href="/home"
                title="Navigate home"
                className="hover:animate-jiggle text-[1.05rem] max-sm:text-[0.9rem] text-center text-nowrap"
              >
                <img
                  src={
                    isBackgroundShown
                      ? "images/eva-black.png"
                      : "images/eva-white.png"
                  }
                  className="object-cover h-6"
                />
              </Link>
            </div>
            <div className="flex items-center justify-end">
              <Link href={"/home/#contact"}>
                <Button
                  type="button"
                  size="small"
                  isGhost
                  className={cn(
                    "rounded-none",
                    isBackgroundShown ? "text-gray-950 border-gray-950" : ""
                  )}
                >
                  {`CONTACT`}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={links}
      />
      <MobileNavigation.Overlay
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <BottomBorder />
    </header>
  );
}

export default Header;

function BottomBorder() {
  return (
    <hr
      style={{
        backgroundImage:
          "linear-gradient(270deg, rgba(255, 255, 255, 0.00) 0%, #FFF 52.07%, rgba(255, 255, 255, 0.00) 100%)",
      }}
      className="absolute bottom-0 w-full h-[1px] -translate-x-1/2 border-0 opacity-10 left-1/2"
    />
  );
}
