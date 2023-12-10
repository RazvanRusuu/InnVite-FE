import { formData } from "@/app/(landingPage)/components/main-search-form";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function objectToQueryString(obj: formData): string {
  let queryString = "";

  Object.keys(obj).forEach((key) => {
    const typeKey = key as keyof formData;
    if (obj[typeKey]) {
      queryString += `${encodeURIComponent(key)}=${encodeURIComponent(
        obj[typeKey]
      )}&`;
    }
  });

  return queryString.slice(0, -1);
}
