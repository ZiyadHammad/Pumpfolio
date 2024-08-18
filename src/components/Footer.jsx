import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="p-4">
      <Link to="/" className="flex flex-col justify-center items-center">
        <FontAwesomeIcon
          icon={faDumbbell}
          bounce
          size="xl"
          style={{ color: "#23f207" }}
        />
        <h2 className="text-black font-semibold text-xl">Pumpfolio.</h2>
      </Link>
    </footer>
  );
};

export default Footer;