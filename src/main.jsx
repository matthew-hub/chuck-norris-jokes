import ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./views/Home/Home.jsx";
import AboutChuck from "./views/AboutChuck/AboutChuck.jsx";
import ErrorPage from "./error-page";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" id="root" element={<App />} errorElement={<ErrorPage />}>
      <Route path="" element={<Home />} />
      <Route path="about-chuck-norris" element={<AboutChuck />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
