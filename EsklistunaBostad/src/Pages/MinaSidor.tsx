import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./css/MinaSidor.css";
import "./css/Esklistuna.css";

// MinaSidor-komponenten
function MinaSidor() {
  // Ställ in state för användarnamn och lösenord
  const [userNumber, setUserNumber] = useState('');
  const [password, setPassword] = useState('');

  // Hantera formulärets inlämning
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Här kan du lägga till logik för att hantera inloggningen, t.ex. API-anrop
    console.log('Inloggningsuppgifter:', userNumber, password);
  };

  return (
    <section className="about">
      <menu className="menu">
        <aside>
        </aside>
        <aside>
          <Link to="/* https://www.bostadeskilstuna.se/CM/Templates/Article/general.aspx?cmguid=0932b6fa-b98a-472b-a4de-c1197112c06e */">Mina sidor</Link>
        </aside>
        <hr />
        <aside>
          <Link to="/* https://www.bostadeskilstuna.se/User/register.aspx?cmguid=ff08b233-22a0-46d7-82c5-16f091f7aa48 */">Registrera dig</Link>
        </aside>
        <hr />
        <aside>
          <Link to="/* https://www.bostadeskilstuna.se/User/SendPassword.aspx?cmguid=98fdc2a3-f769-4183-ad2e-927c1dc4f33a */">Glömt lösenord</Link>
        </aside>
        <hr />
      </menu>

      <article className="right">
        <h2>Mina sidor</h2>
        <p>Här är din personliga sida där du på ett enkelt sätt kan uppdatera eller komplettera din ansökan.</p>
        <p>Du kan även:</p>
        <ul>
          <li>Anmäla dig på önskad bostad</li>
          <li>Tacka ja eller nej till bostadserbjudande</li>
          <li>Ändra dina personuppgifter eller din ansökan. Information om hur vi behandlar dina personuppgifter finns här.</li>
          <li>Avregistrera dig som sökande och makulera dina personuppgifter</li>
        </ul>
      </article>

      {/* Login form */}
      <aside className="login">
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="userNumber">Person-/Organisationsnr</label>
            <br />
            <input
              type="text"
              id="userNumber"
              value={userNumber}
              onChange={(e) => setUserNumber(e.target.value)}
              required
            />
          </section>
        
          <section>
            <label htmlFor="password">Lösenord</label>
            <br />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </section>
           <br />
          <button type="submit">Logga in</button>
        </form>
      </aside>
    </section>
  );
}

export default MinaSidor;