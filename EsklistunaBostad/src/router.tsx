import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import HomePage from "./Pages/HomePage";
import NotFound from "./Pages/NotFoundPage";
import Student from "./Pages/Student";
import Esklistuna from "./Pages/Esklistuna";
import MinaSidor from "./Pages/MinaSidor";
import OmOss from "./Pages/OmOss";




export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} errorElement={<NotFound />}>
        <Route index element={<HomePage />} />
        <Route path="/Student" element={<Student/>} />
        <Route path="/Esklistuna" element={<Esklistuna />} />
        <Route path="/MinaSidor" element={<MinaSidor />} />
        <Route path="/OmOss" element={<OmOss/>} />
        <Route path="/mina-sidor" element={<MinaSidor/>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </>
  )
);
