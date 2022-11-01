import Footer from "./Footer";
import NavBar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="flex flex-col justify-between w-full h-screen">
        <NavBar />
        <div className="w-full h-full overflow-auto scroll-smooth">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
