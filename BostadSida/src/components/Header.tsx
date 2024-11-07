import { NavLink, useLocation } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";

import "./Header.css"
export default function Header() {
  const location = useLocation(); // Get the current route location


  return (
    <>
       <header className="userLogin">
        <aside></aside>
        <aside >
          <Link to="/register">
           Registrera dig 
          </Link>
        </aside>
        <aside>
        <Link to="/login">
          Mina sidor - Logga in
        </Link>
        </aside>
       </header>
    </>
  );
}