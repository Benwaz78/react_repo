import "./css/style.css";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import ProductDetail from "./ProductDetail";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App(){

    return(
        <Router>
             <main>
                <Header />
                <Nav />
                   <Routes>
                        <Route path="/" exact element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/product" exact element={<Product />} />
                        <Route path="/product/:id" element={<ProductDetail />} />

                   </Routes>
                <Footer />
            </main>
        </Router>
       
    );
}


export default App;
