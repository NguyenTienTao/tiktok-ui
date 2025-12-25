//layouts
import { HeaderOnlyLayout } from "../components/Layout";

// pages
import Home from "../pages/Home";
import Following from "../pages/Following";
import Profile from "../pages/Profile";
import Search from "../pages/Search";

const publicRoutes = [
    { path: "/", component: Home },
    { path: "/following", component: Following },
    { path: "profile", component: Profile, layout: HeaderOnlyLayout },
    { path: "/search", component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
