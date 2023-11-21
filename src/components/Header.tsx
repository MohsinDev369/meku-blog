export default function Header() {
  return (
    <header className=" border-2 border-black">
      <div
        id="header-wraper"
        className="flex justify-between items-center container    "
      >
        <nav>
          <ul className="flex">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <h3>LOGO</h3>
        <div>Button</div>
      </div>
    </header>
  );
}
