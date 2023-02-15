import Donate from "../Pages/Donate/Donate";
import Events from "../Pages/Events/Events";
import Home from "../Pages/Home/Home";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/events/:id",
        element: <Events />,
        loader: ({ params }) =>
          fetch(`https://ashroy-server.vercel.app/projects/${params.id}`),
      },
      {
        path: "/donate",
        element: <Donate />,
      },
    ],
  },
]);
