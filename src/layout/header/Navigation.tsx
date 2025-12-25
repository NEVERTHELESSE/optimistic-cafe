import { Link } from "react-router-dom";

const navigates = [
  { path: "/", title: "Home" },
  { path: "/services", title: "Services" },
  { path: "/about", title: "About" },
  { path: "/contact", title: "Contact" },
];

export default function Navigation() {
  return (
    <nav className="pl-14 w-[50%] flex justify-around">
      {navigates.map((navigate) => [
        <Link
          key={navigate.title}
          className={` py-3 font-bold ml-3 rounded-xl hover:bg-gray-300 hover:text-black duration-700 px-10
            ${navigate.path == "/" && "bg-primary-50 text-white"}
             `}
          to={navigate.path}
        >
          {navigate.title}
        </Link>,
      ])}
    </nav>
  );
}
