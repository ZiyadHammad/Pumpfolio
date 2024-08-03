import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-200 p-4">
      <Link to="/" className="flex flex-col justify-center items-center">
        <img src="/logo.png" alt="logo" className="h-10 w-10" />
        <h2>pumpfolio.</h2>
      </Link>
    </footer>
  );
};

export default Footer;
