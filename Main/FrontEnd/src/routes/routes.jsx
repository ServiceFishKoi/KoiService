import { Route, Routes } from "react-router-dom";

import PrivateRoute from "./PrivateRoutes";
import Home from "../pages/HomePage/Home";
import Service from "../pages/HomePage/components/Service";
import Login from "../pages/Auth/Login/Login";
import NotFound from "../components/NotFound";
import Contact from "../pages/Contact/Contact";
import ViewProfilePage from "../pages/Auth/Profile/ViewProfilePage";
const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Service" element={<Service />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/User/:id" element={<ViewProfilePage />} />
    <Route
      path="/admin"
      element={<PrivateRoute>Private page here</PrivateRoute>}
    />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default routes;
