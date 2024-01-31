"use client";

import { ChevronRight, Menu, X } from "lucide-react";
import { collectAppConfig } from "next/dist/build/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setSetscrolled] = useState(false);

  const handleScroll = () => {
    let yPos = window.pageYOffset;
    if (yPos > 100) {
      setSetscrolled(true);
    } else {
      setSetscrolled(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        className={`w-full min-h-[80px] px-8 ${
          scrolled ? "fixed bg-primary-text" : "relative bg-primary"
        } lg:relative text-white flex transition-all justify-between z-[999999] items-center`}
      >
        <div>
          <Image
            src="./assets/logo.svg"
            alt="Logo"
            height={140}
            width={140}
            className={`${
              open ? "hidden" : "visible"
            } transition-all ease-linear duration-200`}
          />
        </div>
        <div className="lg:flex gap-x-10 font-medium hidden">
          <Link href="/" className="hover:underline">
            Download
          </Link>
          <Link href="/" className="hover:underline">
            Nitro
          </Link>
          <Link href="/" className="hover:underline">
            Discover
          </Link>
          <Link href="/" className="hover:underline">
            Safety
          </Link>
          <Link href="/" className="hover:underline">
            Support
          </Link>
          <Link href="/" className="hover:underline">
            Blog
          </Link>
          <Link href="/" className="hover:underline">
            Careers
          </Link>
        </div>
        <div className="flex justify-center items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-bold py-2 px-4 bg-white text-not-quite-black rounded-full transition-all ease-linear hover:text-primary hover:shadow-xl"
          >
            Login
          </Link>
          <Menu
            onClick={() => setOpen(true)}
            size={30}
            className="cursor-pointer lg:hidden"
          />
        </div>
      </nav>
      <div
        className={`fixed h-screen bg-white top-0 ${
          open ? "w-[350px] visible " : "w-[0px] invisible"
        }  rounded-tl-xl right-0 overflow-hidden rounded-bl-xl duration-200 p-6 transition-all ease-linear z-[999999] lg:hidden`}
      >
        <div className="flex justify-between items-center">
          <Image
            src="./assets/logo.svg"
            alt="Logo"
            height={140}
            width={140}
            className="invert"
          />
          <X onClick={() => setOpen(false)} className="text-not-quite-black" />
        </div>
        <div className="w-full h-[1px] bg-gray-200 my-6"></div>
        <div className="flex flex-col">
          <div className="text-not-quite-black flex flex-col text-lg child:py-2 child:px-4 font-medium">
            <Link href={"/"} className="hover:underline">
              Download
            </Link>
            <Link href={"/"} className="hover:underline">
              Nitro
            </Link>
            <Link
              href={"/"}
              className="hover:underline flex justify-between items-center"
            >
              Safety
              <ChevronRight />
            </Link>
            <Link href={"/"} className="hover:underline">
              Support
            </Link>
            <Link href={"/"} className="hover:underline">
              Blog
            </Link>
            <Link href={"/"} className="hover:underline">
              Careers
            </Link>
          </div>
          <Link
            href={"/"}
            className="bg-primary rounded-full font-medium w-full mt-40 py-2 text-center flex justify-center items-center gap-3"
          >
            <Image
              src="./assets/download.svg"
              height={25}
              width={25}
              alt="download"
            />
            Download
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
