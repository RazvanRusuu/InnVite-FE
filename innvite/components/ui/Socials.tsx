import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
export default function Socials() {
  return (
    <div className="absolute top-1/2 left-4 -translate-y-1/ flex flex-col gap-2">
      <Link
        href={"/"}
        className="p-1 border-2 border-sm rounded-md inline-block"
      >
        <Facebook color="#fff" size={20} />
      </Link>
      <Link
        href={"/"}
        className="p-1 border-2 border-sm rounded-md inline-block"
      >
        <Instagram color="#fff" size={20} />
      </Link>
      <Link
        href={"/"}
        className="p-1 border-2 border-sm rounded-md inline-block"
      >
        <Twitter color="#fff" size={20} />
      </Link>
    </div>
  );
}
