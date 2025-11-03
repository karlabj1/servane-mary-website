import * as React from "react"
import { Link } from "gatsby"

const Header = ({ isExhibitionOpen, toggleExhibitionMenu }) => (
  <header>
    <nav>
      <Link to="/" className="nav-logo">
        Servane Mary
      </Link>
      <div className="menu">
        <Link to="/artworks" className="nav-link">
          Works
        </Link>
        <button className="exhibition-btn" onClick={toggleExhibitionMenu}>
          Selected Exhibition
        </button>
        <ul className={`exhibition-sub-menu ${isExhibitionOpen ? "open" : "closed"}`}>
          <li>
            <Link to="/exhibitions/realms">Realms, A Palazzo Gallery, Brescia, Italy, May 29 – October 31, 2025</Link>
          </li>
          <li>
            <Link to="/exhibitions/couch-paintings">Couch Paintings, Canada Gallery, April 18 – May 24, 2025</Link>
          </li>
          <li>
            <Link to="/exhibitions/r-u-still-painting">R U Still Painting?, organized by Falcon Art Collective, 520 8th Ave, New York, May 6 – 31, 2025</Link>
          </li>
          <li>
            <Link to="/exhibitions/cristal-medium">Cristal Medium Green, Everybody Gallery, Tucson, Arizona, February 10 – April 6, 2024</Link>
          </li>
          <li>
            <Link to="/exhibitions/boothill-express">Boothill Express, Marc LeBlanc Gallery, Chicago, November 16, 2024 – January 11, 2025</Link>
          </li>
          <li>
            <Link to="/exhibitions/nine-paintings-milan-bank">Nine Paintings, Banca Mediolanum Palazzo Biandra, Milano, Italy, January 5, 2023 – January 31, 2024</Link>
          </li>
          <li>
            <Link to="/exhibitions/in-themselves-exhibit">In Themselves, organized by Ugo Rondinone, 39 Great Jones (window), New York, February 1 – March 31, 2022</Link>
          </li>
          <li>
            <Link to="/exhibitions/strange-attractors">Strange Attractors, The Anthology of Interplanetary Folk Art Vol. 3: Lost in Space, organized by Bob Nickas, A Palazzo Gallery, Brescia, Italy, May 21 – September 18, 2022</Link>
          </li>
          <li>
            <Link to="/exhibitions/greater-new-york">Greater New York, MoMA PS1, Long Island City, October 7, 2021 – April 18, 2022</Link>
          </li>
          <li>
            <Link to="/exhibitions/glitches-exhibit">Glitches, San Carlo, Cremona, Italy, September 15, 2021 – February 4, 2022</Link>
          </li>
          <li>
            <Link to="/exhibitions/we-gave-a-party-for-the-gods-and-all-the-gods-came">We gave a party for the gods and the gods all came, Servane Mary, John Giorno, Ugo Rondinone, A Palazzo Gallery, Brescia, Italy, September 8 – November 20, 2020</Link>
          </li>
          <li>
            <Link to="/exhibitions/remakes">Remakes 2006-2018, organized by Linda Norden and Summer Guthery, Joan, Los Angeles, March 2 - April 14, 2019</Link>
          </li>
          <li>
            <Link to="/exhibitions/tuscon-arizona">Untitled (Tucson, AZ), 2018, Everybody Gallery, Tucson, Arizona, January 26 - February 25, 2018</Link>
          </li>
          <li>
            <Link to="/exhibitions/wythe-avenue">41 Wythe Avenue Exhibition, with Olivier Mosset and Virginia Overton, May 10 – 18, 2018</Link>
          </li>
          <li>
            <Link to="/exhibitions/defamiliarization-reactivation">Defamiliarization / Reactivation, A Palazzo Gallery, Brescia, Italy, March 25 - May 13, 2017</Link>
          </li>
          <li>
            <Link to="/exhibitions/babybliss">Babyliss, Triple V Gallery, Paris, France, September 8 - November 5, 2016</Link>
          </li>
          <li>
            <Link to="/exhibitions/mary-mosset">Mary a Mosset, La Capelleta Cultural Space, Carrer de la Come Gelada, Mosset, France, July 9 – 31, 2016</Link>
          </li>
          <li>
            <Link to="/exhibitions/americancowgirls">American Cowgirls of the 40's, Kayne Griffin Corcoran Gallery, Los Angeles, September 10 - October 24, 2015</Link>
          </li>
          <li>
            <Link to="/exhibitions/mmmo-triple-v">Mary / Miller / Mosset / Overton, Triple V Gallery, Paris, France, January 17 - March 14, 2015</Link>
          </li>
          <li>
            <Link to="/exhibitions/servane-mary-virginia-overton-olivier-mosset">Servane Mary / Virginia Overton / Olivier Mosset, A Palazzo Gallery, Brescia, Italy, May 23 - September 15, 2014</Link>
          </li>
          <li>
            <Link to="/exhibitions/thingsarewhattheyseem">Things Are What They Seem, Triple V Gallery, Paris, France, September 14 - October 27, 2013</Link>
          </li>
          <li>
            <Link to="/exhibitions/piston-head-miami">Piston Head, Venus Over Manhattan, 111 Lincoln Road, Miami, FL, December 3 - 8, 2013</Link>
          </li>
          <li>
            <Link to="/exhibitions/hymns-suzuki">Hymns For Mr.Suzuki, curated by Karen Archey, Abrons Center, New York, Sept 6 - Oct 6, 2013</Link>
          </li>
          <li>
            <Link to="/exhibitions/lat417nlong7219w">LAT. 41° 7ʹ′ N. LONG. 72° 19ʹ′ W., organized by Bob Nickas, Martos Gallery summer location, East Marion, NY, July 13 - September 2, 2013</Link>
          </li>
          <li>
            <Link to="/exhibitions/galaxie-swiss-institute">Galaxie 500, Jacob Kassay / Servane Mary / Olivier Mosset, organized by Gianni Jetzer, Swiss Institute, New York, February 15 - 17, 2013</Link>
          </li>
          <li>
            <Link to="/exhibitions/god-dies">God Dies, Martos Gallery, New York, February 17 - March 17, 2012</Link>
          </li>
          <li>
            <Link to="/exhibitions/blue-lagoon-bridgehampton">Creatures from The Blue Lagoon, curated by Bob Nickas, Bridgehampton, New York, July 21- September, 2012</Link>
          </li>
          <li>
            <Link to="/exhibitions/black-dawn">Black Dawn, Maisonneuve Gallery, Paris, France, April 12 - May 10, 2008</Link>
          </li>
        </ul>
        <Link to="/biography" className="nav-link">
          Biography
        </Link>
        <a href="mailto:servane@servanemary.com" className="nav-link">
          Contact
        </a>
      </div>
    </nav>
  </header>
)

export default Header
