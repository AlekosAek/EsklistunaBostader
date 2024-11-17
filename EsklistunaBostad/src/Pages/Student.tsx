import PresentStudent from "../assets/PresentbildEskilstuna.jpg"
import { Link } from "react-router-dom";
import "./css/Student.css";


function Student() {
  return (
    <>
      <section className="Student">
        <h2>Student</h2>
        <img src={PresentStudent} alt="Esklistuna Image" />
        <h3 >Välkommen till Esklistuna</h3>
        <p>Hos oss hittar du allt som har med Studentbostäder att göra.
          Här kan du se vilka bostadsområden som finns och vilka lägenheter som är lediga just nu.
          Inte nog med att vi samlat alla bostäder på ett ställe, vi har dessutom en bostadsgaranti
          för de studenter som kommer utifrån och som ska börja studera på Mälardalens universitet.
          Men även du som kommer från Eskilstuna och som studerar på Mälardalens universitet kan få
          en studentbostad. Mer information om vilka regler som gäller finns på nedanstående länkar.
        </p>
        <div className="merInformation">
          <h3>Mer information</h3>
          <p>Bostadsgarantin Söka studentbostad Mälardalens universitet</p>
          <ul>
            <li>
              <Link to="/LedigaStudentlägenhet" >
                Lediga studentlägenhet
              </Link>
            </li>
            <li>
              <Link to="/Studentområden" >
                Våra studentområden
              </Link>
            </li>
            <li>
              <Link to="/Bostadsgarantin">
                Bostadsgarantin
              </Link>
            </li>
            <li>
              <Link to="/Studentbostad">
                Söka studentbostad
              </Link>
            </li>
            <li>
              <Link to="/MälardalensUniversitet">
                Mälardalens universitet
              </Link>
            </li>
          </ul>        </div>
      </section>
      <aside>

      </aside>
    </>
  )
}

export default Student
