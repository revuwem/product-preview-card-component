import Link from "./Link";

const Attribution: React.FC<{}> = () => {
  return (
    <section>
      <p className="font-serif text-blue-200">
        Challenge by{" "}
        <Link href="https://www.frontendmentor.io/?ref=challenge">
          Frontend Mentor
        </Link>
        .
      </p>
      <p className="font-serif text-blue-200">
        Coded by <Link href="https://github.com/revuwem">revuwem</Link>.
      </p>
    </section>
  );
};

export default Attribution;
