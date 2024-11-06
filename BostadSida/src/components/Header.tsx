import { NavLink, useLocation } from "react-router-dom";
import "./Header.css"
export default function Header() {
  const location = useLocation(); // Get the current route location


  return (
    <>
       <header className="userLogin">
        <aside id="register">
           Registrera dig 
        </aside>
        <aside id="login">
          Mina sidor - Logga in
        </aside>
       </header>
    </>
  );
}
