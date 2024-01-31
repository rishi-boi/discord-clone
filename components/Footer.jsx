import React from "react";
import Wrapper from "./Wrapper";
import {
  ChevronRight,
  Facebook,
  Instagram,
  Music2,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <Wrapper className="bg-not-quite-black text-white">
      <div className="md:lg:flex gap-x-16">
        <div>
          <label
            htmlFor="languages"
            className="mb-10 flex cursor-pointer items-center"
          >
            English
            <ChevronRight />
          </label>
          <div className="flex gap-x-4 mb-10">
            <Link href="/" className="cursor-pointer">
              <Twitter />
            </Link>
            <Link href="/" className="cursor-pointer">
              <Instagram />
            </Link>
            <Link href="/" className="cursor-pointer">
              <Facebook />
            </Link>
            <Link href="/" className="cursor-pointer">
              <Youtube />
            </Link>
            <Link href="/" className="cursor-pointer">
              <Music2 />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 w-full">
          <div className="flex flex-col gap-y-5">
            <p className="text-primary-text">Product</p>
            <div className="flex flex-col gap-y-3">
              <Link href="/" className="hover:underline">
                Download
              </Link>
              <Link href="/" className="hover:underline">
                Nitro
              </Link>
              <Link href="/" className="hover:underline">
                Status
              </Link>
              <Link href="/" className="hover:underline">
                App Directory
              </Link>
              <Link href="/" className="hover:underline">
                New Mobile Experience
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <p className="text-primary-text">Company</p>
            <div className="flex flex-col gap-y-3">
              <Link href="/" className="hover:underline">
                About
              </Link>
              <Link href="/" className="hover:underline">
                Jobs
              </Link>
              <Link href="/" className="hover:underline">
                Brand
              </Link>
              <Link href="/" className="hover:underline">
                Newsroom
              </Link>
              <Link href="/" className="hover:underline">
                Fall Release
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <p className="text-primary-text">Resources</p>
            <div className="flex flex-col gap-y-3">
              <Link href="/" className="hover:underline">
                College
              </Link>
              <Link href="/" className="hover:underline">
                Support
              </Link>
              <Link href="/" className="hover:underline">
                Safety
              </Link>
              <Link href="/" className="hover:underline">
                Blog
              </Link>
              <Link href="/" className="hover:underline">
                Feedback
              </Link>
              <Link href="/" className="hover:underline">
                StreamerKit
              </Link>
              <Link href="/" className="hover:underline">
                Creators
              </Link>
              <Link href="/" className="hover:underline">
                Community
              </Link>
              <Link href="/" className="hover:underline">
                Developers
              </Link>
              <Link href="/" className="hover:underline">
                Gaming
              </Link>
              <Link href="/" className="hover:underline">
                Official 3rd Party Merch
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <p className="text-primary-text">Policies</p>
            <div className="flex flex-col gap-y-3">
              <Link href="/" className="hover:underline">
                Terms
              </Link>
              <Link href="/" className="hover:underline">
                Privacy
              </Link>
              <Link href="/" className="hover:underline">
                Cookie Settings
              </Link>
              <Link href="/" className="hover:underline">
                Guidelines
              </Link>
              <Link href="/" className="hover:underline">
                Acknowledgements
              </Link>
              <Link href="/" className="hover:underline">
                Licenses
              </Link>
              <Link href="/" className="hover:underline">
                Company Information
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-primary-text my-10"></div>
      <div className="flex justify-between items-center">
        <Image src="./assets/logo.svg" alt="Logo" height={140} width={140} />
        <Link
          href={"/"}
          className="text-white bg-primary py-2 px-4 rounded-full font-semibold text-sm"
        >
          Download
        </Link>
      </div>
    </Wrapper>
  );
};

export default Footer;
