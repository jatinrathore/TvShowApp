import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Dashboard;
