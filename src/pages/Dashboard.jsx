import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import GitFooter from "../components/GitFooter";

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <GitFooter />
    </>
  );
};

export default Dashboard;
