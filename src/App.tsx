import "./App.css";
import NavBar from "./components/NavBar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import Game1 from "./pages/Game1";
import Game3 from "./pages/Game3";
import TetrisGame from "./pages/TetrisGame";

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

// Router with routes
const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "game1",
        element: <Game1 />,
      },
      {
        path: "tetris",
        element: <TetrisGame />,
      },
      {
        path: "game3",
        element: <Game3 />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
    <div></div>
}

export default App;
