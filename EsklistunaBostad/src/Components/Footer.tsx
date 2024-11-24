import { Link } from "react-router-dom";
import './Footer.css';
import catchme from "../assets/catchme.png";

function Footer() {
  return (
    <>
      <footer>
        <article>
            <img src = {catchme} className = "catchme" alt="Catch Me"/>
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
          {/*    <Link to="https://www.instagram.com/bostadvasteras/?short_redirect=1"><InstagramIcon /></Link>
             <Link to="https://www.facebook.com/bostadvasteras"><FacebookIcon /></Link> */}
        </figure>
        <hr />
        <article>
          <aside>
            Copyright © 2017 Bostad Västerås AB |
          </aside>
          <aside>
            <Link to="https://www.facebook.com/bostadvasteras">Platskarta </Link> |
          </aside>
          <aside>
            <Link to="https://www.facebook.com/bostadvasteras">Webbplatsinformation</Link>
          </aside>
        </article>
      </footer>
    </>
  )
}

export default Footer