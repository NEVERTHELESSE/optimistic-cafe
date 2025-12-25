import Theme from "./Theme";

export default function Browse() {
  return (
    <div className="md:flex w-[20%] lg:w-[15%] justify-around items-center hidden">
      <img src="whatsapp.png" className="w-8 h-8 lg:w-10 lg:h-10" />
      <Theme />
      <img src="svgs/search.svg" className="w-8 h-8 lg:w-10 lg:h-10" />
    </div>
  );
}
