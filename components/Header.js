import Link from "next/link";

const Header = () => {
  return (
    <header className="Header">
      <section className="navbar">
        <Link href="/">
          {" "}
          <img
            src="https://i.pinimg.com/originals/5d/32/76/5d32768cfb240ef4875c712f4b2f08ba.jpg"
            alt="morty"
          />
        </Link>

        <nav className="category">
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/episodes">
            <li>Episodes</li>
          </Link>
          <Link href="/locations">
            {" "}
            <li>Locations</li>
          </Link>
        </nav>
      </section>
      <section className="title">
        <Link href="/">
          <p>The Rick and Morty</p>
        </Link>
      </section>
    </header>
  );
};

export default Header;
