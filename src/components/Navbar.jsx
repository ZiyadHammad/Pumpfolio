import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-red-200 flex items-center p-4 gap-10">

      <Link to="/">
        <img src="/logo.png" alt="logo" className="h-10 w-10 rounded-lg" />
      </Link>

      <div className="flex gap-4">
        <Link to="/" className="cursor-pointer">
          Home
        </Link>
        <a href="#exercises" className="cursor-pointer">
          Exercises
        </a>
      </div>

    </nav>
  );
};

export default Navbar;
