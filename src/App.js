import "./css/style.css";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App(){

    return(
        <Router>
             <main>
                <Header />
                <Nav />
                   <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                   </Routes>
                <Footer />
            </main>
        </Router>
       
    );
}


export default App;
