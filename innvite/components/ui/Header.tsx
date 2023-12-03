import Image from "next/image";
import { links } from "@/lib/links";
import Link from "next/link";
import { SingupBtn } from "./SignUp";

export default function Header() {
  return (
    <div className="h-auto bg-transparent flex justify-between p-4">
      <div>
        <Image src={"/logo.png"} width={50} height={50} alt="logo" />
      </div>
      <div className="flex gap-10">
        <nav className="">
          <ul className="flex gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  className="text-slate-300 hover:text-slate-500 hover:border-b-2 hover:border-slate-300 hover:pb-2"
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
