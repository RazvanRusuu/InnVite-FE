import Image from "next/image";
import Navigation from "../../app/(landingPage)/components/Nav";

import { Button } from "./button";
import Link from "next/link";
import { CircleUserRound } from "lucide-react";

export default function Header() {
  return (
    <div className="h-16 flex justify-between p-4 z-10 absolute top-0 right-0 bottom-0 left-0 border-b border-slate-400 bg-black bg-opacity-50">
      <div>
        <Image src={"/logo.png"} width={50} height={50} alt="logo" />
      </div>
      <div className="flex gap-10 self-center items-center">
        <Navigation />
        <Button asChild>
          <Link
            href={"/signup"}
            className="flex justify-center items-center gap-1 px-2 py-1 bg-slate-900 bg-opacity-50 hover:bg-opacity-80 rounded-sm"
          >
            <span className="text-white text-sm mr-2">Sign up</span>
            <div>
              <CircleUserRound color="white" size={24} />
            </div>
          </Link>
        </Button>
      </div>
    </div>
  );
}
