import { Link } from "react-router-dom";

type propsType = {
  title: string;
  description: string;
};

export default function Headline({ title, description }: propsType) {
  return (
    <section className="flex justify-between items-end my-10">
      <div>
        <h3
          className="text-2xl
        text-amber-600 font-bold
        "
        >
          {title}
        </h3>
        <h3 className="my-2 text-4xl leading-14 w-200">{description}</h3>
      </div>
      <Link className="text-2xl mb-2" to="/services">
        View all &rarr;
      </Link>
    </section>
  );
}
