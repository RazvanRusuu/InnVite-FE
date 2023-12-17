export default function MainHeading() {
  return (
    <div className="text-center">
      <h1 className="relative text-white  font-extrabold">
        <span
          className="relative text-8xl tracking-[.2em]
                    bg-[url('/hero.jpg')] 
                    bg-clip-text text-black 
                    text-opacity-20
                    after:content-[''] 
                    after:block   
                    after:bg-slate-50 
                    after:absolute 
                    after:w-[120%]
                    after:-skew-x-12
                    after:h-full
                    after:left-0
                    after:bottom-0
                    after:-translate-x-[10%]
                    after:-z-10
                    "
        >
          INN
        </span>
        <span className="inline-block -ml-2 tracking-wider text-3xl first-letter:text-black">
          Vite
        </span>
      </h1>

      <p className="mt-10 text-slate-200 text-2xl">
        Take your renting experience to the new level
      </p>
    </div>
  );
}

// p-1
// overflow-hidden
// after:content-['']
// after:block
// after:w-0
// after:h-0.5
// after:bg-white
// after:absolute
// after:bottom-0
// after:left-1/2
// after:-translate-x-1/2
// hover:after:w-full
// after:hover:transition-all
// after:hover:duration-300"
