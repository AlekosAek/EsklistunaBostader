import React from 'react'
import { Link } from "react-router-dom";
import "./css/OmOss.css";
import "./css/Esklistuna.css";
import first from "../assets/Peter.jpg";
import second from "../assets/Linda.jpg";
import third from "../assets/Viktor.jpg";
import fourth from "../assets/William.jpg";
import fifth from "../assets/Marielle.jpg";
import sixth from "../assets/Camilla.jpg";

function OmOss() {
  return (
    <section className = "about">
       <menu className = "menu">
        <aside >
        </aside>
         <aside>
             <Link to="https://www.bostadeskilstuna.se/CM/Templates/Article/general.aspx?cmguid=b57ed27a-9783-48de-b4f9-f05569243779">För fastighetsägare</Link>
         </aside>
           <hr />
         <aside>
             <Link to="https://www.bostadeskilstuna.se/CM/Templates/Article/general.aspx?cmguid=ee3c09a0-9f21-4895-bdc8-81f5cd352b1b">Vår Personuppgiftspolicy</Link>
         </aside>
           <hr />
       </menu>
       <article className="rightmMenu">
        <h1>Om Bostad Eskilstuna</h1>
        
        <h2>Bostad Eskilstuna</h2>
        <p>
        Bostad Eskilstuna är en marknadsplats och en informationskanal för de som söker studentbostad i Eskilstuna.

        Vi har specialiserat oss på att marknadsföra, informera, förmedla och hantera bostadsutbud och -sökande. Vi samarbetar med fastighetsägare, byggföretag, Eskilstuna kommun och andra bostadsaktörer för att på ett effektivt sätt erbjuda intresserade ett nytt boende.

        Bostad Eskilstuna drivs av <Link to="https://www.bostadeskilstuna.se/CM/Templates/Article/general.aspx?cmguid=b57ed27a-9783-48de-b4f9-f05569243779">Bostad Västerås AB</Link> som erbjuder liknande tjänster i Västerås.  
       </p>
        <h2>
        Vi är till för dig
        </h2>
        <p>
        Undrar du över något, är du alltid välkommen att fråga oss. Vi kan det mesta och litet till! Funderar du på att byta bostad eller bara vill informera dig om bostadsmarknaden för studenter i Eskilstuna hör du av dig till oss via e-mail, telefon eller våra sociala medier.
        </p>
        
        <h2>
        Vill du som fastighetsägare ha hjälp?
        </h2>
        <p>
        Här kan du läsa vilken hjälp du kan få.
        </p>
        <p>
            <Link to="https://www.bostadeskilstuna.se/CM/Templates/Article/general.aspx?cmguid=b57ed27a-9783-48de-b4f9-f05569243779">Läs mer</Link>
        </p>
           
       <section className='gallery'>
       
          <figure>
             <img src={first} alt= "Peter Odeheim"  />
            <figcaption>Peter Odeheim</figcaption>
          </figure>
          <figure>
             <img src={second} alt= "Linda Dahlgren"  />
              <figcaption>Linda Dahlgren</figcaption>

          </figure>
          <figure>
             <img src={third} alt="Viktor Persson Bengtsson"  />
              <figcaption>Viktor Persson Bengtsson</figcaption>
          </figure>
          <figure>
             <img src={fourth} alt="William Håkansson
"  />
              <figcaption>William Håkansson</figcaption>
          </figure>
          <figure>
             <img src={fifth} alt="Marielle Mokvist"  />
              <figcaption>Marielle Mokvist</figcaption>
          </figure>
          <figure>
             <img src={sixth} alt="Camilla Toth"  />
               <figcaption>Camilla Toth</figcaption>

          </figure>
       </section>
        
       </article>
    </section>
  )
}

export default OmOss
