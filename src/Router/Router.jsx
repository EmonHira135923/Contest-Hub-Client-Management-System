import { createBrowserRouter } from "react-router";
import Root from "../layout/Root.jsx";
import Login from "../Pages/auth/Login.jsx";
import Registration from "../Pages/auth/Registration.jsx";
import Home from "../Pages/Home.jsx";
import AuthLayout from "../layout/AuthLayout.jsx";
import ErrorPage from "../Pages/ErrorPage.jsx";
import AllContest from "../Pages/AllContest.jsx";
import WhyJoin from "../Pages/WhyJoin.jsx";
import AllProbleam from "../Pages/AllProbleam.jsx";
import Blog from "../Pages/Blog.jsx";
import Dashboard from "../Pages/Dashboard/Dashboard.jsx";
import CreateContest from "../Pages/Dashboard/CreateContest.jsx";
import PrivateRouter from "./PrivateRouter.jsx";
import DashboardLayout from "../layout/DashboardLayout.jsx";
import ForbiddenPage from "../Componets/Shared/ForbiddenPage.jsx";

const Router = createBrowserRouter([
  // Root Layout
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: Home },
      { path: "/all-contests", Component: AllContest },
      { path: "/why-join", Component: WhyJoin },
      { path: "/all-problems", Component: AllProbleam },
      { path: "/create-contest", Component: CreateContest },
      { path: "/blog", Component: Blog },
    ],
  },
  // Auth Layout
  {
    path: "/auth",
    Component: AuthLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Registration,
      },
    ],
  },
  // Dashboard
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <DashboardLayout />
      </PrivateRouter>
    ),
    errorElement: <ForbiddenPage />,
    children: [{ index: true, Component: Dashboard }],
  },
]);

export default Router;
