import Link from "./Link";

const Attribution: React.FC<{}> = () => {
  return (
    <section className="font-serif text-sm text-blue-200 grid place-items-center">
      <p>
        Challenge by{" "}
        <Link href="https://www.frontendmentor.io/?ref=challenge">
          Frontend Mentor
        </Link>
        .
      </p>
      <p>
        Coded by <Link href="https://github.com/revuwem">revuwem</Link>.
      </p>
    </section>
  );
};

export default Attribution;
