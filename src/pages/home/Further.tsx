import ClockDesign from "../../components/ClockDesign";
import Headline from "../../components/Headline";

export default function Further() {
  return (
    <section>
      <Headline title="Further More" description="Expertise in " />
      <div className="relative">
        <h2 className="graphic">GRAPHICS DESIGN</h2>
        <div className="flex justify-around px-10">
          <div className="w-160 duration-700 h-160 -top-28 relative bg-blue-500 ">
            <img src="/graphics.jpg" alt="" className="w-full h-full " />
          </div>
          <div className="w-[50%] mx-10 h-160 bg-amber-400 overflow-hidden">
            <ClockDesign />
          </div>
        </div>
        <h2 className="graphics absolute top-0 left-0 graphics">
          GRAPHICS DESIGN
        </h2>
      </div>
    </section>
  );
}
