import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import './App.css'
import Footer from "./Components/Footer"
import Navbar from "./Components/NavBar";

function App() {

  return (
    <>
      <Header />
      <Navbar/>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
