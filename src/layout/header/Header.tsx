import { Link } from "react-router-dom";
import Browse from "./Browse";
import Navigation from "./Navigation";
import Theme from "./Theme";

export default function Header() {
  return (
    <header className="w-full rounded-full lg:rounded-xl flex justify-between p-2  sm:p-3  lg:p-4 items-center">
      <div className="flex items-center w-full  justify-between">
        <Link to="/" className="hidden md:flex">
          <img src="/logo.png" className="w-8 lg:w-10" alt="" />
        </Link>
        <Navigation />
        <Theme />
      </div>
    </header>
  );
}
