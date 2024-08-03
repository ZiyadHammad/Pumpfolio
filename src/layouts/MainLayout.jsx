import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="p-4 bg-[#0F1117]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
