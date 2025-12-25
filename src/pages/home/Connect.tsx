export default function Connect() {
  const communities = [
    { src: "user.png", username: "Adeyemo Afeez" },
    { src: "user.png", username: "Adeyemo Usman" },
    { src: "user.png", username: "Ogedengbe Emmanuel" },
    { src: "user.png", username: "Micheal" },
  ];

  return (
    <div className="w-screen h-screen my-5 p-4 md:pr-16  flex justify-center items-center flex-col">
      <h2 className="text-2xl leading-12 md:leading-24  sm:text-3xl my-6  md:text-[4rem] text-center">
        Stay up to date and never miss out
      </h2>
      <form className="w-full md:w-160 my-14 relative flex items-center">
        <input
          type="email"
          className="border w-full p-4 rounded-lg text-2xl"
          placeholder="Your Email"
        />

        <button className="bg-orange-600 px-8 py-2 rounded-lg absolute right-2">
          Subscribe
        </button>
      </form>
      <div className="md:flex w-full justify-center items-center">
        <div className="flex justify-center">
          {communities.map(({ username }, index) => (
            <div
              key={index}
              title={username}
              className="w-20 border-2 border-white h-20 bg-amber-500 rounded-full -ml-4"
            ></div>
          ))}
        </div>
        <h4 className="ml-10 my-8 text-3xl font-extrabold">
          Join the Communities 🤝
        </h4>
      </div>
    </div>
  );
}
