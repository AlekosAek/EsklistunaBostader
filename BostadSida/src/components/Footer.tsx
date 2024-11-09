import React from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import star from '../assets/eskilstuna-star.png';

import "./footer.css";
export default function Footer() {
const location = useLocation(); // Get the current route location


  return (
    <>
    <footer>
        <article>
            
        </article>
        <article>
            <h3>Besöksadress</h3>
            <p>Besöksadress:</p> 
            <p>Stora gatan 38 (Bostad Västerås)</p>
            <p>722 12 Västerås</p> 
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
        <figure>
             <Link to="https://www.instagram.com/bostadvasteras/?short_redirect=1"><InstagramIcon /></Link>
             <Link to="https://www.facebook.com/bostadvasteras"><FacebookIcon /></Link>
        </figure>
        
    </footer>
    </>
  );
}