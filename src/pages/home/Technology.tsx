import Headline from "../../components/Headline";
import Image from "../../components/Image";

export default function Technology() {
  return (
    <main className="w-full">
      <Headline title="Technology" description="Advance Technology System" />
      <div className="flex justify-between">
        <div className="w-[24%] shadow-lg rounded-lg ">
          <div className="w-full  overflow-hidden h-125 rounded-t-lg mb-5 bg-orange-500">
            <Image src="computer.jpg" alt="programming" />
          </div>
          <div className="w-full h-20 px-2">
            <h3 className="text-2xl">
              Simplifying life with Clever Tech Solutions
            </h3>
          </div>
        </div>

        <div className="w-[50%] relative rounded-lg h-150 bg-orange-500 overflow-hidden">
          <Image src="programming.jpg" alt="programming" />
          <div className="absolute top-0 w-full px-8 py-14 text-white">
            <h5>Exploring the Programming Innovations</h5>
          </div>
        </div>
        <div className="w-[24%] shadow-lg rounded-lg ">
          <div className="w-full overflow-hidden h-125 rounded-t-lg mb-5 bg-orange-500">
            <Image src="training.jpg" alt="training" />
          </div>
          <div className="w-full h-20 px-2">
            <h3 className="text-2xl">
              Transforming Industries with Blockchain Tech
            </h3>
          </div>
        </div>
      </div>
    </main>
  );
}
