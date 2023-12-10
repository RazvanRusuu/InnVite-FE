import Link from "next/link";
import { CircleUserRound } from "lucide-react";

export function SingupButton() {
  return (
    <Link
      href={"/signup"}
      className="flex justify-center items-center gap-1 px-2 py-1 bg-slate-900 bg-opacity-50 hover:bg-opacity-80 rounded-sm"
    >
      <span className="text-white text-sm mr-2">Sign up</span>
      <div>
        <CircleUserRound color="white" size={24} />
      </div>
    </Link>
  );
}
