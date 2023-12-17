import HeroBackground from "@/app/(landingPage)/components/hero-background";
import SignupForm from "./components/SignupForm";

export default async function SingUp() {
  return (
    <section className="min-h-screen relative">
      <HeroBackground />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-2/3">
        <div className="grid grid-cols-2">
          <SignupForm />
          <div>Image</div>
        </div>
      </div>
    </section>
  );
}
