/* eslint-disable tailwindcss/no-custom-classname */
"use client";

import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { Button } from "./primitives/Button";

const Navbar = () => {
  /* ---------------------------------------------- */
  const NavContent = () => {
    const pathname = usePathname();

    return navLinks
      .filter((link) => link.name !== "Home")
      .map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.id}
            href={link.href}
            className={`${
              isActive ? "bg-primary-400 text-secondary-950" : ""
            } mb-8 flex w-full flex-col items-center rounded-2xl py-2 text-2xl text-secondary-300 hover:text-primary-200`}
          >
            {link.name}
          </Link>
        );
      });
  };

  /* ---------------------------------------------- */

  return (
    <nav className="text- flex items-center justify-between px-6 py-[35px] text-secondary-100">
      <div>
        <Link href="/" className="flex items-center gap-4">
          <Image src="/Vector.png" alt="Boltzshift" height={60} width={60} />

          <p className="font-spaceGrotesk text-2xl max-md:hidden">
            Boltz<span className="text-primary-200">shift</span>
          </p>
        </Link>
      </div>
      <div className="flex items-center gap-8">
        {navLinks.map((link) => (
          <Link key={link.id} href={link.href} className="max-sm:hidden">
            {link.name}
          </Link>
        ))}

        <Button
          variant="outline"
          label="Hire Us"
          type="button"
          styles="hover:bg-primary-400 hover:text-secondary-950"
        />

        <Sheet>
          <SheetTrigger asChild>
            <HamburgerMenuIcon width={30} height={30} className="sm:hidden" />
          </SheetTrigger>
          <SheetContent side="top" className="border-none text-secondary-100">
            <SheetClose asChild className="pb-16">
              <Link href="/" className="flex items-center gap-4">
                <Image
                  src="/Vector.png"
                  alt="Boltzshift"
                  height={60}
                  width={60}
                />

                <p className="font-spaceGrotesk text-2xl">
                  Boltz<span className="text-primary-200">shift</span>
                </p>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <NavContent />
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
