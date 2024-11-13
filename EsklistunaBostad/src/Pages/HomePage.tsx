import trees from "../assets/trees.jpg";
import "./css/HomePage.css";
import graduation from "../assets/graduation.jpg";
import EskilstunaBakgrund from "../assets/EskilstunaBakgrund.jpg";

function HomePage() {
  return (
    <>
      <section className="homePageSection">
        <img src={trees} alt="Trees" />
        <div className="overlayText">
          <h1>Välkommen till Bostad Eskilstuna</h1>
          <h3>Dags att söka studentbostad? Vi hjälper dig!</h3>

        </div>
      </section>
      <section className="secondPartHomePage">
        <section className="graduationSection1" >
          <img src={graduation} alt="graduation" />
          <p>Lediga studentlägenheter 66</p>
        </section>
        <section className="graduationSection2" >
          <img src={graduation} alt="graduation" />
          <p>Logga in på</p>
          <p>Mina sidor</p>
        </section>
        <section className="graduationSection3" >
          <img src={graduation} alt="graduation" />
          <p>Registera</p>
        </section>
        <section
          className="grid-1"
          style={{
            backgroundImage: `url(${EskilstunaBakgrund})`,
            backgroundSize: 'cover',
          }}
        >
          <h3>För att söka en studentbostad</h3>
          <p>Registera dig som sökande på vår hemsida</p>
          <p>2. Maila in ditt antagningsbesked till</p>
          <p>(bifoga den PDF-fil som du kan ladda ner på antagning.se)</p>
        </section>

        <section className="grid-3">
          <div className="e">
            <p>Nynyggda studentlägenheter  nära till högskolan</p>
            <h2>NORDSTJÄRNAN</h2>
          </div>
          <div className="f">
            <h2>Vem kan söka</h2>
            <p>Läs om vilka som har mölighet att söka studentlägenhet</p>
          </div>
          <div className="g">
            <p>Våra studentområden i Eskilstuna</p>
          </div>
        </section>
        <section className="grid-2">
          <div className="a">
            <p>Erbjudande</p>
          </div>
          <div className="b">
            <p>Så söker du</p>
          </div>
        </section>

      </section>
    </>
  );
}

export default HomePage;
