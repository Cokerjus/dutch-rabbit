import { Link } from "react-scroll";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

function SideBar() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu color="white" size={40} />
      </SheetTrigger>
      <SheetContent>
        <div className="h-full justify-center items-center flex-col flex text-xl gap-8">
          <SheetClose asChild>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="home"
              className="text-black dark:text-white hover:underline capitalize decoration-2 underline-offset-4 cursor-pointer"
            >
              Home
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <a
              href="https://poocoin.app/tokens/0x48a510a3394c2a07506d10910ebeff3e25b7a3f1"
              className="text-black dark:text-white hover:underline capitalize decoration-2 underline-offset-4 cursor-pointer"
            >
              buy
            </a>
          </SheetClose>
          <SheetClose asChild>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="roadmap"
              className="text-black dark:text-white hover:underline capitalize decoration-2 underline-offset-4 cursor-pointer"
            >
              Roadmap
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="tokemonic"
              className="text-black dark:text-white hover:underline capitalize decoration-2 underline-offset-4 cursor-pointer"
            >
              tokemonic
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <a
              href="https://dutch-rabbit.gitbook.io/dutch-rabbit"
              className="text-black dark:text-white hover:underline capitalize decoration-2 underline-offset-4 cursor-pointer"
            >
              whitepaper
            </a>
          </SheetClose>
          <SheetClose asChild>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="utilities"
              className="text-black dark:text-white hover:underline capitalize decoration-2 underline-offset-4 cursor-pointer"
            >
              utilities
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="mission"
              className="text-black dark:text-white hover:underline capitalize decoration-2 underline-offset-4 cursor-pointer"
            >
              mission
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="disclaimer"
              className="text-black dark:text-white hover:underline capitalize decoration-2 underline-offset-4 cursor-pointer"
            >
              Disclaimer
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <div className="text-black dark:text-white hover:underline capitalize decoration-2 underline-offset-4 cursor-pointer">
              contract
            </div>
          </SheetClose>
          <SheetClose asChild>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="footer"
              className="text-black dark:text-white hover:underline capitalize decoration-2 underline-offset-4 cursor-pointer"
            >
              contact us
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default SideBar;
