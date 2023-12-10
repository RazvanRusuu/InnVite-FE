import { PropertySearchForm } from "./PropertySearchForm";

export default async function MainSearch() {
  const locations = await fetch(
    "http://localhost:3000/dummy-data/locations.json",
    { cache: "no-store" }
  );
  const { data } = await locations.json();

  return (
    <div className="absolute right-0  bottom-0 w-4/6 backdrop-blur-sm bg-slate-700 bg-opacity-20 rounded-tl-lg ">
      <div>
        <PropertySearchForm locations={data} propertyTypes={[]} />
      </div>
    </div>
  );
}
