import { NavLink, useLocation } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";

import "./footer.css"
export default function Footer() {
  const location = useLocation(); // Get the current route location


  return (
    <>
    <footer>
        <article>
            
        </article>
        <article>
            <h3>Besöksadress</h3>
            <p>Besöksadress:
            <p>Stora gatan 38 (Bostad Västerås)</p>
            <p>722 12 Västerås</p> 
                 
           </p>
        </article>
        


        <article>
            <h3>Kontakt</h3>
            <p>Tel: 021-17 19 50</p>
            <p>E-post: <a href="mailto:info@bostadeskilstuna.se">info@bostadeskilstuna.se</a></p>
        </article>

        <article>
            <h3>Information</h3>
             <p> <Link to="/bostader">Om Bostad Eskilstuna</Link>
            </p>
            <p><Link to="/eskilstina">Eskilstuna Stad</Link></p>
        </article>
        
    </footer>
    </>
  );
}