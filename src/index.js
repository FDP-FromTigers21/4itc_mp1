import React from "react";
import ReactDOM from "react-dom";
import "../src/style.css";
import logo from "./logo.png";
import pic from "./25_franko.jpg";
/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
- Using flexbox, line up the nav items horizontally, and
  put them inline with the React logo.
- Change the image styling to happen in CSS instead of in-line
  For practice, add a new class to the image in order to style it
*/


function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={logo} className="nav-logo" />
        <ul className="nav-items">
          <li>My Curriculum Vitae</li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <small><center>© All rights reserved. This is an output made by Franko Deomar D. Padulla.</center></small>
    </footer>
  );
}

function MainContent() {
  return (
    <div>

      <div class = "dshbrd">
      <img src={pic}/>
      <h3>Franko Deomar De Leon Padulla</h3>
      </div>

      <p class = "title">About Me</p>

      <ul>
        <li>Birthday: May 28, 1999</li>
        <li>Birthplace: Manila</li>
        <li>Address: Fairview, Quezon City</li>
        <li>Hobbies: Drawing, News Searching</li>
      </ul>


      <p class = "title">Education</p>

      <ol>
        <li style={{color: "rgb(255, 255, 0)"}}>University of Santo Tomas - Tertiary</li>
        <li style={{color: "rgb(255, 255, 0)"}}>University of Santo Tomas Senior High School - Senior High School</li>
        <li style={{color: "#00fd22"}}>Remnant International Christian School - Junior High School</li>
      </ol>

      <p class = "title">Certifications</p>
      <p class ="certif">IP Certification Exam (PhilNITS) Passer</p>

      
    </div>
  );
}

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
