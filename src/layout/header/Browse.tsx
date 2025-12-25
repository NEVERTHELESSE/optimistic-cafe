import Theme from "./Theme";

export default function Browse() {
  return (
    <div className="flex w-[15%] justify-around">
      <img src="whatsapp.png" className="w-10" />
      <Theme />
      <img src="svgs/search.svg" className="w-10" />
    </div>
  );
}
