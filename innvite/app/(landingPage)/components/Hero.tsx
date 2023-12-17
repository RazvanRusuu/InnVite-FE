import Image from "next/image";

import Header from "@/components/ui/header";
import Socials from "@/components/ui/socials";
import MainSearch from "@/app/(landingPage)/components/main-search";
import { Roboto } from "next/font/google";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MainHeading from "./main-heading";
import HeroBackground from "./hero-background";

const inter = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

export default function Hero() {
  return (
    <section className="min-h-screen relative">
      <HeroBackground />
      <Header />
      <Socials />
      <div
        className={`${inter.className} absolute px-4 top-52 left-1/2 -translate-x-1/2 w-full flex flex-col items-center gap-8`}
      >
        <MainHeading />
        <div className="flex gap-2 items-stretch">
          <Button asChild variant={"default"} size={"lg"} className="font-bold">
            <Link
              href={"/about"}
              className="flex justify-center items-center gap-1 bg-slate-900"
            >
              About us
            </Link>
          </Button>
          <Button
            asChild
            variant={"outline"}
            size={"lg"}
            className="font-bold "
          >
            <Link href={"/sign-in"}>Sign in</Link>
          </Button>
        </div>
      </div>
      <MainSearch />
    </section>
  );
}
