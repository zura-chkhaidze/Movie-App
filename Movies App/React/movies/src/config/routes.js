import appRoutes from "../constants/routes";
import Home from "../pages/home/Home";
import NotFound from "../pages/not-found/NotFound";
import Signin from "../pages/signin/Signin";
import Signup from "../pages/signup/Signup";
import Movies from "../../src/pages/movies/Movies";
import Contact from "../pages/contact/Contact";
import AuthGuard from "../Guard/AuthGuard";
import GustGuard from "../Guard/GustGuard";
const routes = [
  {
    path: appRoutes.home,
    Component: Home,
    Guard: AuthGuard,
  },
  {
    path: appRoutes.signin,
    Component: Signin,
    Guard: GustGuard,
  },
  {
    path: appRoutes.signup,
    Component: Signup,
    Guard: GustGuard,
  },
  {
    path: appRoutes.contact,
    Component: Contact,
    Guard: AuthGuard,
  },
  {
    path: "*",
    Component: NotFound,
  },
  {
    path: appRoutes.movies,
    Component: Movies,
    Guard: AuthGuard,
  },
];
export default routes;
