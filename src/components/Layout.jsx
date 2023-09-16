import Header from "./Header";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="site-wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
