import Image from "next/image";
import Header from "./Header";
import Socials from "./Socials";
import MainSearch from "./Search";

export default function Hero() {
  return (
    <div className="min-h-screen relative">
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
      <MainSearch />
    </div>
  );
}
