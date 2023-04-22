import Home from "./../pages/Home";
import About from "./../pages/About";
import * as ROUTES from "./../contants/routes";
import Services from "./../pages/Services";
import Menu from "../pages/Menu";

interface RouteType {
  path: string;
  component: any;
  name: string;
  protected: boolean;
}

const routes: RouteType[] = [
  {
    path: ROUTES.HOME_PATH,
    component: Home,
    name: "Portfolio | Kelvin You",
    protected: false,
  },
  {
    path: ROUTES.ABOUT_PATH,
    component: About,
    name: "About",
    protected: false,
  },
  {
    path: ROUTES.SERVICES_PATH,
    component: Services,
    name: "Services",
    protected: false,
  },
  {
    path: ROUTES.MENU_PATH,
    component: Menu,
    name: "Menu",
    protected: false,
  },
];

export default routes;