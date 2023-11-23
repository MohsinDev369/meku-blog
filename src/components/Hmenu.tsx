import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

// import ScrollToView from "@/components/ScrollToView";

const Hmenu = () => {
  return (
    <div className="sm:hidden border-2 border-black px-2 h-9 rounded-md flex">
      {/* humbarger menu start */}
      <Sheet>
        <SheetTrigger>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </SheetTrigger>
        <SheetContent size={"lg"}>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>
              <ul className="flex flex-col gap-4 items-center">
                {/* <ScrollToView id="about"> */}
                <Link href={"#about"}>
                  <SheetClose asChild>
                    <li>About</li>
                  </SheetClose>
                </Link>
                {/* </ScrollToView> */}
                {/* <ScrollToView id="servicesSection"> */}
                <Link href={"#servicesSection"}>
                  <SheetClose asChild>
                    <li>Services</li>
                  </SheetClose>
                </Link>
                {/* </ScrollToView> */}
                {/* <Link href={"/projects"}>
                  <SheetClose asChild>
                    <li>Projects</li>
                  </SheetClose>
                </Link> */}
                {/* <ScrollToView id="reviewsSection"> */}
                <Link href={"#reviewsSection"}>
                  <SheetClose asChild>
                    <li>Reviews</li>
                  </SheetClose>
                </Link>
                {/* </ScrollToView> */}
                <Link href={"/contacts"} prefetch={false}>
                  <SheetClose asChild>
                    <li>Contacts</li>
                  </SheetClose>
                </Link>
              </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Hmenu;
