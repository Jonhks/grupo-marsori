import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="container mx-auto px-4 md:px-2 py-0 ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
