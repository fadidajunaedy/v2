import { lazy } from "react";

const Home = lazy(() => import("../components/pages/Home"));
const Projects = lazy(() => import("../components/pages/Projects"));
const DetailProject = lazy(() =>
  import("../components/pages/Projects/DetailProject")
);
const Posts = lazy(() => import("../components/pages/Posts"));
const DetailPost = lazy(() => import("../components/pages/Posts/DetailPost"));

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/projects",
    component: Projects,
  },
  {
    path: "/projects/:key",
    component: DetailProject,
  },
  {
    path: "/posts",
    component: Posts,
  },
  {
    path: "/posts/:key",
    component: DetailPost,
  },
];

export default routes;
