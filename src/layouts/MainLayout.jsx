import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <Navbar />
      <div className="min-h-[80vh]" >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
