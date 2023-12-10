import Link from "next/link";

import { links } from "@/lib/links";

export default function MainNav() {
  return (
    <nav className="hidden sm:block">
      <ul className="flex gap-4 self-center">
        {links.map((link) => (
          <li
            key={link.href}
            className="relative
                    p-1 
                    overflow-hidden 
                    after:content-[''] 
                    after:block 
                    after:w-0 
                    after:h-0.5 
                    after:bg-white 
                    after:absolute 
                    after:bottom-0 
                    after:left-1/2 
                    after:-translate-x-1/2 
                    hover:after:w-full 
                    after:hover:transition-all 
                    after:hover:duration-300"
          >
            <Link
              className="text-white inline-block transition-transform"
              href={link.href}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
