import Image from "next/image";

export default function HeroBackground() {
  return (
    <>
      <Image
        src={"/hero.jpg"}
        alt="hero image"
        className="object-cover object-center -z-[1]"
        fill
      />
      <div className="absolute top-0 -z-[1] right-0 bottom-0 left-0 bg-black opacity-80"></div>
    </>
  );
}
