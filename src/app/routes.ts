import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import MyVisits from "./pages/MyVisits";
import VisitDetails from "./pages/VisitDetails";
import DoctorList from "./pages/DoctorList";
import DoctorProfile from "./pages/DoctorProfile";

export const router = createBrowserRouter(
  [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/doctors",
    Component: DoctorList,
  },
  {
    path: "/doctors/:id",
    Component: DoctorProfile,
  },
  {
    path: "/visits",
    Component: MyVisits,
  },
  {
    path: "/visit/:id",
    Component: VisitDetails,
  },
],
  // У dev BASE_URL = '/', на продакшені (build) = '/dctr/'
  { basename: (import.meta.env.BASE_URL || '/').replace(/\/$/, '') || '/' }
);
