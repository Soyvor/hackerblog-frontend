import TopBar from "../components/TopBar";
import { MyProvider } from "../context/MyContext";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <MyProvider>
      <div className="layout">
        <TopBar />
        <main className="main-content">{children}</main>
      </div>
    </MyProvider>
  );
};

export default Layout;
