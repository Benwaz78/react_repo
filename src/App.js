import React from "react";
import "./Style.css";
import Header from "./Header";
import Nav from "./Nav";
import Main from "./MainContent";
import Aside from "./Aside";
import Footer from "./Footer";

function App(){
  return(
      <main>
        <Header />
        <Nav />
        <section>
          <Main />
          <Aside />
        </section>
        <Footer />
      </main>

  )
}

export default App;