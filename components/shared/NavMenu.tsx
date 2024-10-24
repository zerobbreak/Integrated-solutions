import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const Navbar = () => {
  const menu = [
    { name: "How it Works", link: "/how-it-works" },
    { name: "Advertisers", link: "/advertisers" },
    { name: "Commuters", link: "/commuters" },
    { name: "Operators", link: "/operators" },
    { name: "Contact Us", link: "/contact-us" },
  ];

  return (
    <>
      <header className="flex flex-col justify-between w-full bg-white dark:bg-gray-950 shadow-sm">
        <div className="flex items-center justify-between h-16 px-4 md:px-6 py-10">
          <Link
            href="/"
            className="flex items-center text-black text-3xl font-bold"
            prefetch={false}
          >
            Synconex
            <span className="sr-only">Acme Inc</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {menu.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="text-md font-medium hover:underline"
                prefetch={false}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <HamburgerMenuIcon />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col items-start gap-6 p-6">
                {menu.map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    className="text-sm font-medium hover:underline"
                    prefetch={false}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
};

export default Navbar;
