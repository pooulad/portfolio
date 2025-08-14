import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home/Home";
import NotFound from "../../pages/notFound/NotFound";
import Root from "../../layouts/root/Root";
import About from "../../pages/about/About";
import Resume from "../../pages/resume/Resume";
import Project from "../../pages/project/Project";
import Github from "../../pages/github/Github";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/github",
        element: <Github />,
      },
    ],
  },
]);
