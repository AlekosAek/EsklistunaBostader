import React from 'react'
import { Link } from "react-router-dom";
import "./css/OmOss.css";

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
    </section>
  )
}

export default OmOss
