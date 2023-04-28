import Link from "next/link";

const About = () => {
  return (
    <section className="about-page">
      <h1>About</h1>
      <h2>What is this ?</h2>
      <p>
        The Rick and Morty API is a REST(ish) and GraphQL API based on the
        television show Rick and Morty. You will have access to about hundreds
        of characters, images, locations and episodes. The Rick and Morty API is
        filled with canonical information as seen on the TV show.{" "}
        <Link href="https://rickandmortyapi.com/documentation">
          Check out the documentation to get started
        </Link>
      </p>
    </section>
  );
};

export default About;
