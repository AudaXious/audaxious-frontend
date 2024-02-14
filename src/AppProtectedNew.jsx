import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import Header from "./pages/newAuth-user/Header";
import Layout from "./pages/newAuth-user/Layout";
import Dashboard from "./pages/newAuth-user/Dashboard";
import EngagePortals from "./pages/newAuth-user/EngagePortal";

const AppProtectedNew = () => {
  const location = useLocation();
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/dashboard"} replace="true" />} />
      <Route path="/dashboard" element={<Layout />}>
        <Route index={true} element={<Dashboard />} />
        <Route path="engage-portal" element={<EngagePortals />} />
        <Route />
      </Route>
    </Routes>
  );
};

export default AppProtectedNew;