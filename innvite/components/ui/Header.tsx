import Image from "next/image";
import { SingupBtn } from "./SignUp";
import Link from "next/link";
import { links } from "@/lib/links";

export default function Header() {
  return (
    <div className="h-16 flex justify-between p-4 z-10 absolute top-0 right-0 bottom-0 left-0 border-b border-slate-400 bg-black bg-opacity-50">
      <div>
        <Image src={"/logo.png"} width={50} height={50} alt="logo" />
      </div>
      <div className="flex gap-10 self-center">
        <nav>
          <ul className="flex gap-4 self-center">
            {links.map((link) => (
              <li
                key={link.href}
                className="relative p-1 overflow-hidden after:content-[''] after:block after:w-0 after:h-0.5 after:bg-white after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 hover:after:w-full after:hover:transition-all after:hover:duration-300"
              >
                <Link
                  className="text-white inline-block transition-transform"
                  href={link.href}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <SingupBtn />
      </div>
    </div>
  );
}
