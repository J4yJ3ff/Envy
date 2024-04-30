/* eslint-disable tailwindcss/no-custom-classname */

// import Image from "next/image";
import Link from "next/link";

import { navLinks } from "@/constants";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Navbar = () => {
  return (
    <footer className=" mx-auto flex max-w-4xl flex-col gap-4 px-6 py-[35px] text-secondary-100 md:max-w-3xl lg:max-w-5xl">
      <div className="mx-auto flex flex-col gap-12 py-12 sm:items-center md:gap-6 lg:flex-row">
        <h1 className="text-2xl">Get new blog posts directly in your inbox</h1>

        <div className="flex w-full max-w-lg space-x-2">
          <Input type="email" placeholder="Email" />
          <Button type="submit">Subscribe</Button>
        </div>
      </div>
      {/* <div>
        <Link href="/" className="flex items-center gap-4">
          <Image src="/Vector.png" alt="Boltzshift" height={60} width={60} />

          <p className="font-spaceGrotesk text-2xl max-md:hidden">
            Boltz<span className="text-primary-200">shift</span>
          </p>
        </Link>
      </div> */}
      <div className=" flex flex-col gap-4 pb-12 md:flex-row md:gap-8 md:pb-8">
        {navLinks.map((link) => (
          <Link key={link.id} href={link.href}>
            {link.name}
          </Link>
        ))}
      </div>
      <hr />

      <div className="flex flex-col justify-center gap-2 py-4 md:flex-row md:justify-between">
        <p>© 2024 J4y J3ff. All rights reserved</p>
        <p className="text-sm font-bold ">Powered by Next JS</p>
      </div>
    </footer>
  );
};

export default Navbar;
