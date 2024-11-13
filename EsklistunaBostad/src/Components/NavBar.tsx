import { Link } from "react-router-dom";
import './Navbar.css'


function NavBar() {
  return (
    <>
      <section className="Navlink" >
        <nav>
          <ul>
            <li>
              <Link to="/" >
                Hem
              </Link>
            </li>
            <li>
              <Link to="/Student">
                Student
              </Link>
            </li>
            <li>
              <Link to="/Esklistuna">
                Eskilstuna
              </Link>
            </li>
            <li>
              <Link to="/mina-sidor">
                Mina sidor
              </Link>
            </li>
            <li>
              <Link to="/om-oss">
                Om oss
              </Link>
            </li>
          </ul>
        </nav>
      </section>

    </>
  )
}

export default NavBar
