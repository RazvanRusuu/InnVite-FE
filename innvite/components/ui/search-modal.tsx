import { MainSearchForm } from "@/app/(landingPage)/components/main-search-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SearchIcon } from "lucide-react";

export async function SearchModal() {
  const locations = await fetch(
    "http://localhost:3000/dummy-data/locations.json",
    { cache: "no-store" }
  );
  const { data } = await locations.json();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex justify-center items-center gap-1 px-2 py-1 bg-slate-900 bg-opacity-50 hover:bg-opacity-80 rounded-sm sm:hidden">
          <span className="text-white text-sm mr-2">Search</span>
          <SearchIcon color="white" size={24} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]  backdrop-blur-sm border-none bg-slate-900 bg-opacity-70 rounded-tl-lg">
        <DialogOverlay className="bg-transparent hidden" />
        <MainSearchForm locations={data} propertyTypes={[]} />
      </DialogContent>
    </Dialog>
  );
}
