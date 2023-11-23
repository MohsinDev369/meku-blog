import Link from "next/link";
import { Button } from "./ui/button";
import Hmenu from "./Hmenu";
// import ScrollToView from "@/components/ScrollToView";
const Header = () => {
  return (
    <header className="p-4 sticky top-0 z-[12]  mt-2 rounded-xl border-2 border-black shadow-btn bg-white">
      <nav className="flex justify-between items-center">
        <div className="flex justify-between items-center mr-4">
          <Link href={"/"}>
            <div className="flex group items-center justify-center whitespace-pre">
              {/* <div className="-rotate-45 group-hover:rotate-6 duration-75">
                  ✌️
                </div>{" "} */}
              <h1 className="">LOGO</h1>
            </div>
          </Link>
        </div>
        <div className="flex items-center max-sm:hidden">
          {/* <ScrollToView id="about"> */}
          <Link href="/#about" replace>
            <Button variant={"link"} className="max-md:text-sm">
              About
            </Button>
          </Link>
          {/* </ScrollToView> */}
          {/* <ScrollToView id="projectsSection">
                <Button
                  variant={"link"}
                  className="text-primary-foreground text-base max-md:text-sm"
                >
                  Projects
                </Button>
              </ScrollToView> */}
          {/* <ScrollToView id="reviewsSection"> */}
          <Link href="/#reviewsSection" replace>
            <Button variant={"link"} className="max-md:text-sm">
              Reviews
            </Button>
          </Link>
          {/* </ScrollToView> */}
          {/* <ScrollToView id="servicesSection"> */}
          <Link href="/#servicesSection" replace>
            <Button variant={"link"} className="max-md:text-sm">
              Services
            </Button>
          </Link>
          {/* </ScrollToView> */}
        </div>
        <div className="flex gap-2 items-center whitespace-pre">
          <Link href={"/contacts"}>
            <Button className="max-sm:hidden">Subscribe </Button>
            <Button className="sm:hidden" size={"sm"}>
              Subscribe
            </Button>
          </Link>
          <Hmenu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
