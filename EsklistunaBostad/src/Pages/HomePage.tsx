import trees from "../assets/trees.jpg";
import "./css/HomePage.css";
import graduation from "../assets/graduation.jpg";



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
        <section className="grid-1">
    
        </section>
        <section className="grid-3">


        </section>
        <section className="grid-2">


        </section>
      </section>
    </>

  );
}

export default HomePage;
