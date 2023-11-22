import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="border-b-2 border-black shadow-small bg-white">
      <div
        id="header-wraper"
        className="flex justify-between items-center container h-16"
      >
        <h3>LOGO</h3>
        <nav>
          <ul className="flex list-none">
            <li>Home</li>
          </ul>
        </nav>
        <Button size={"sm"}>
          Subscribe
        </Button>
      </div>
    </header>
  );
}
