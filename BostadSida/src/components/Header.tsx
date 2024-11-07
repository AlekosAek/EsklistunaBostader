import { NavLink, useLocation } from "react-router-dom";
import "./Header.css"
export default function Header() {
  const location = useLocation(); // Get the current route location


  return (
    <>
       <header className="userLogin">
        <aside></aside>
        <aside >
           Registrera dig 
        </aside>
        <aside>
          Mina sidor - Logga in
        </aside>
       </header>
    </>
  );
}