import Headline from "../../components/Headline";
import Image from "../../components/Image";
import PrimaryButton from "../../components/PrimaryButton";
import { services } from "../../data/services";

export default function Feature() {
  return (
    <section className="my-18 overflow-hidden">
      <Headline
        title="Feature Headline"
        description="Check out our professional works, with good quality and quantity"
      />

      {/* <main className="flex w-[90vw] h-200">
        {services.map((service) => (
          <div
            key={service.id}
            className="w-100 m-2 h-100 rounded-xl hidden bg-amber-300"
          >
            <img
              //   src={service.src}
              src="img.jpg"
              className="w-full h-full object-cover "
              alt=""
            />
          </div>
        ))}
      </main> */}
      <main className="flex ">
        {services.slice(0, 4).map((service) => (
          <div
            key={service.id}
            className="min-w-120 mx-2 h-120 bg-amber-400 rounded-lg overflow-hidden shadow-lg relative flex  "
          >
            <Image src={service.src} alt={service.title} />
            <div className="absolute w-full  bg-[rgba(0,0,0,0.64)] text-white p-7 top-0 left-0 flex h-full justify-end flex-col">
              <PrimaryButton title={service.title} />
              <h3 className="text-2xl ">{service.description}</h3>
              <h2 className="text-2xl">{service.price}</h2>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
}
