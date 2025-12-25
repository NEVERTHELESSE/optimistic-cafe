import { Link } from "react-router-dom";

const navigates = [
  { path: "/", title: "Home" },
  { path: "/services", title: "Services" },
  { path: "/about", title: "About" },
  { path: "/contact", title: "Contact" },
];

export default function Navigation() {
  const pathname = window.location.pathname;

  return (
    <nav className="w-[90%] md:pl-14 md:w-[70%] flex justify-between">
      {navigates.map((navigate) => [
        <Link
          key={navigate.title}
          className={`px-2 py-1 lg:py-2 font-bold sm:ml-2 lg:ml-3 rounded-full sm:rounded-lg lg:rounded-xl hover:bg-gray-300 hover:text-black duration-700 lg:px-5
            ${navigate.path == pathname && "bg-primary-50 text-white"}
             `}
          to={navigate.path}
        >
          {navigate.title}
        </Link>,
      ])}
    </nav>
  );
}
