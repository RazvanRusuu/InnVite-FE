import Image from "next/image";
import Navigation from "./Nav";

import { SingupButton } from "./SignUp";

export default function Header() {
  return (
    <div className="h-16 flex justify-between p-4 z-10 absolute top-0 right-0 bottom-0 left-0 border-b border-slate-400 bg-black bg-opacity-50">
      <div>
        <Image src={"/logo.png"} width={50} height={50} alt="logo" />
      </div>
      <div className="flex gap-10 self-center items-center">
        <Navigation />
        <SingupButton />
      </div>
    </div>
  );
}
