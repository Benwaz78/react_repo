
import athena from "./images/athena.png";
import forth from "./images/forth.jpg";
import woman from "./images/woman.jpg";
import theIceKing from "./images/the-ice-king.jpg";
import Aside from "./Aside";

function Home(){

    return(
        <section>
            <div id="mainContent" className="home">
                <div className="product">
                    <div className="img-div">
                        <img src={ athena } alt="Athena" />
                    </div>
                    <div className="content-div">
                        <h2>Athena </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <a href="detail.html">Readmore >></a>
                    </div>
                </div>
                <div className="product">
                    <div className="img-div">
                        <img src={ forth } alt="Forth" />
                    </div>
                    <div className="content-div">
                        <h2>Forth Somebody </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <a href="detail.html">Readmore >></a>
                    </div>
                </div>
                <div className="product">
                    <div className="img-div">
                        <img src={ woman } alt="Woman" />
                    </div>
                    <div className="content-div">
                        <h2>Woman Fighter </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <a href="detail.html">Readmore >></a>
                    </div>
                </div>
                <div className="product">
                    <div className="img-div">
                        <img src={ theIceKing } alt="The Ice King" />
                    </div>
                    <div className="content-div">
                        <h2>The Ice King </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <a href="detail.html">Readmore >></a>
                    </div>
                </div>
            </div>
            <Aside />
        </section>
       
    )
}

export default Home;