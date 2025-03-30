"use client";
import React, { useEffect, useState } from "react";
import NavLinks from "./nav-links";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={` ${
        isHomePage
          ? "relative w-full h-[500px] bg-cover bg-center bg-[url('/hotel-banner-2.jpg')]"
          : " bg-gray-400 p-[40px]  w-full"
      } ${isScrolled} : 'bg-black bg-opacity-70 backdrop-blur-md' : ''`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-x-4 z-5">
        <div className="fixed top-6 flex items-center justify-between space-x-6 ">
          <NavLinks />
        </div>

        {isHomePage && (
          <>
            <div className="absolute top-0 inset-0 w-full bg-black/50 -z-10 "></div>

            <div className="">
              <h2 className="text-5xl text-white mb-4">
                Welcome to Sancalo hotels
              </h2>
            </div>

            <Link href={"/menu"}>
              <button className="bg-orange-500 rounded-md p-3 text-white hover:bg-orange-600">
                View menu
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
