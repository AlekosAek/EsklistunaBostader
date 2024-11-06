import { createBrowserRouter } from "react-router-dom";
import App from "./components/App.tsx";
import { Home } from "./pages/Home";
// import { NotFound } from "./pages/NotFound.tsx";




export const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      // home page
      {
        index: true,
        element: <Home />,
      },
   
     ],
   },
]);
