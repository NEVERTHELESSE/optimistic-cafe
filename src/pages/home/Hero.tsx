import PrimaryButton from "../../components/PrimaryButton";
import Time from "../../components/Time";
import { heroServices } from "../../data/HeroService";

export default function Hero() {
  return (
    <section className="flex justify-between">
      <div className="w-[50%] mr-2 overflow-hidden  bg-amber-500 shadow rounded-xl h-200 relative">
        <img
          src="printer.jpg"
          className="w-full bg-contain
         h-full"
          alt="printer"
        />
        <div className="absolute top-0 p-8">
          <PrimaryButton title="Printing" />
          <h5>Sharp Colored and Black & White Printing</h5>
          <Time minutes={2} />
        </div>
      </div>
      <div className="w-[50%] mx-2  h-200 flex flex-wrap ">
        {heroServices.map(({ title, url }, index) => (
          <div
            key={title}
            className={`w-[48%]  shadow overflow-hidden ${
              index < 2 ? "mb-[1%]" : "mt-[1%]"
            } mx-[1%]  rounded-xl h-[49%] bg-blue-400`}
          >
            <div className="w-full h-80 overflow-hidden">
              <img
                className="w-full h-full object-cover hover:scale-110 duration-700 shadow"
                src={url}
                alt={title}
              />
            </div>
            <div className="h-20 w-full bg-white p-3">
              <PrimaryButton title={title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
