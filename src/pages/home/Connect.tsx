export default function Connect() {
  const communities = [
    { src: "user.png", username: "Adeyemo Afeez" },
    { src: "user.png", username: "Adeyemo Usman" },
    { src: "user.png", username: "Ogedengbe Emmanuel" },
    { src: "user.png", username: "Micheal" },
  ];

  return (
    <div className="w-screen h-screen my-5 mr-16  flex justify-center items-center flex-col">
      <h5>Stay up to date and never miss out</h5>
      <form className="w-160 my-14 relative flex items-center">
        <input
          type="email"
          className="border w-full p-4 rounded-lg text-2xl"
          placeholder="Your Email"
        />

        <button className="bg-orange-600 px-8 py-2 rounded-lg absolute right-2">
          Subscribe
        </button>
      </form>
      <div className="flex items-center">
        <>
          {communities.map(({ username }, index) => (
            <div
              key={index}
              title={username}
              className="w-20 border-2 border-white h-20 bg-amber-500 rounded-full -ml-4"
            ></div>
          ))}
        </>
        <h4 className="ml-10 text-3xl font-extrabold">
          Join the Communities 🤝
        </h4>
      </div>
    </div>
  );
}
