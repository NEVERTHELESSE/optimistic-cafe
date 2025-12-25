import { Link } from "react-router-dom";
import Browse from "./Browse";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="w-full  rounded-xl flex justify-between p-6 items-center">
      <div className="flex  items-center">
        <Link to="/">
          <img src="/logo.png" className="w-10" alt="" />
        </Link>
        <Navigation />
      </div>
      <Browse />
    </header>
  );
}
