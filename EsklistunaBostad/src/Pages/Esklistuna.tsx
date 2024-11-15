import PresentbildEskilstuna from "../assets/PresentbildEskilstuna.jpg"
import "./css/Esklistuna.css";


function Esklistuna() {
  return (

    <>
      <section className="esklistunaPage">

        <h2>Esklistuna</h2>
        <img src={PresentbildEskilstuna} alt="Esklistuna" />
        <p>Välkommen till Eskilstuna – en plats i rörelse
          Eskilstuna är en snabbväxande miljösmart stad i hjärtat av Mälardalen.
          En plats som pulserar av liv och aktivitet. Här finns ett starkt föreningsliv och ett växande utbud av
          evenemang – vilket bidrar till goda förutsättningar för ett aktivt liv vid sidan om studierna.
          Eskilstuna är också hem för många företag som kan erbjuda spännande framtida karriärmöjligheter.
          En kort resa från Stockholm erbjuder Eskilstuna en perfekt blandning av storstadens puls och naturen s
          lugn. Här är det aldrig riktigt långt till något – varken till centrum, naturen, andra städer eller
          ut i världen. Här har vi nära till allt, inte minst till varandra.
          På visiteskilstuna.se hittar du artikeln <a href="https://visiteskilstuna.se/aktuellt/2020-08-10-eskilstunaguide-for-nyinflyttade-studenter"
            target="_blank" className="visit">”Eskilstunaguide för nyinflyttade studenter”</a> där
          du som student får tips på vad man kan se och uppleva i Eskilstuna, samt annat smått och
          gott som kan vara bra att känna till om platsen. Där hittar du bland annat information som:</p>
        <ul>
          <li>
            Eskilstunas musik-, idrotts- och kulturliv

          </li>
          <li>

            Evenemang
          </li>
          <li>
            Mat & dryck
          </li>

          <li>
            Friluftsliv
          </li>
          <li>
            Besöksmål och sevärdheter
          </li>
          <li>
            Shopping
          </li>
        </ul >
        <p>            Vill du få full koll på Eskilstunas utbud rekommenderar vi att prenumerera på Destination Eskilstunas månadsvisa nyhetsbrev med evenemangstips och goda Eskilstunanyheter.
        </p>
        <ul>

          <a href="https://form.apsis.one/bV2nkcHTqxryTc0" target="_blank" rel="noopener noreferrer">
            Nyhetsbrev med evenemangstips
          </a>
          <li>
            <a href="https://visiteskilstuna.se/" target="_blank" rel="noopener noreferrer">
              Visiteskilstuna.se
            </a>
          </li>
        </ul >
        <p>Fler länktips</p>
        <ul>
          <li> <a href="https://www.eskilstuna.se/" target="_blank" rel="noopener noreferrer">
            Eskilstuna.se</a></li>
          <li> <a href="https://evenemang.eskilstuna.se/" target="_blank" rel="noopener noreferrer">
            Evenemang.eskilstuna.se</a></li>
          <li> <a href="https://www.eskilstuna.se/forskola-och-skola/vuxenutbildning/studera-i-eskilstuna" target="_blank" rel="noopener noreferrer">  Studera i Eskilstuna</a>
          </li>
        </ul>

        <p>
          Gratis buss mellan Eskilstuna och Västerås för studenter

          Studenter vid MDU åker gratis med buss mellan campus i Eskilstuna och campus i Västerås. Detta gäller måndag – fredag, helgfri dag, under hösttermin och vårtermin. MDU-kortet används som färdbevis. Mer information och tidtabeller finns på mdu.se.
        </p>
        <ul>
          <li> <a href="https://www.mdu.se/student/under-studietiden/campus-och-lokaler/mdu-bussen" target="_blank" rel="noopener noreferrer">    Mdu.se</a>

          </li>
        </ul>
      </section >
    </>
  )
}

export default Esklistuna
