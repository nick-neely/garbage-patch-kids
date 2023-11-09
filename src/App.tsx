import "./App.css";
import NavBar from "./components/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import Game1 from "./pages/Game1";
import Game2 from "./pages/Game2";

// Router with routes
const router = createBrowserRouter([
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
    path: 'game2',
    element: <Game2 />,
  },
]);

function App() {
  return (
    <div>
      <NavBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
