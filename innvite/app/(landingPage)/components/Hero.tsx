import Image from "next/image";

import Header from "@/components/ui/header";
import Socials from "@/components/ui/socials";
import MainSearch from "@/app/(landingPage)/components/main-search";
import { Cardo } from "next/font/google";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const inter = Cardo({ weight: ["400", "700"], subsets: ["latin"] });

export default function Hero() {
  return (
    <section className="min-h-screen relative">
      <div className="top-0 left-0 h-full">
        <Image
          src={"/hero.jpg"}
          alt="hero image"
          className="object-cover object-center"
          fill
        />
      </div>
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-black opacity-80"></div>
      <Header />
      <Socials />
      <div
        className={`${inter.className} sm:hidden absolute px-4 top-52 left-1/2 -translate-x-1/2 w-full flex flex-col items-center gap-8`}
      >
        <h1 className="text-zinc-300 text-[28px] text-center">
          Find your perfect place to stay
        </h1>
        <Button asChild variant={"default"} size={"lg"}>
          <Link
            href={"/about"}
            className="flex justify-center items-center gap-1 bg-slate-900"
          >
            About us
          </Link>
        </Button>
      </div>
      <div className="clip-section absolute bottom-0 md:hidden h-32 bg-slate-200 w-full rounded-tr-[100px] rounded-tl-[100px]"></div>
      <MainSearch />
    </section>
  );
}
