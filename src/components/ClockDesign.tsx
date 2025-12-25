import { useEffect, useState } from "react";

export default function ClockDesign() {
  const infos = [
    "Coreldraw",
    " Photoshop",
    "Adobe-Illustration",
    "Inkscape",
    "gimp",
    "excel",
    "paint",
    "chrome",
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => prev + 1);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-col text-center">
      {infos.map((info, index) => (
        <h4
          key={index}
          className={`text-[6rem]
            ${index == active && "font-extrabold"}
            `}
        >
          {info}
        </h4>
      ))}
    </div>
  );
}
