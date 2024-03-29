/* eslint-disable tailwindcss/no-custom-classname */

import Image from "next/image";
import Link from "next/link";

import { navLinks } from "@/constants";

const Navbar = () => {
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
          <Link key={link.id} href={link.href}>
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
