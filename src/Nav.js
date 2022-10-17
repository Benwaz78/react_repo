import { Link } from "react-router-dom";
import Home from "./Home";
import Post from "./Post";
import Contact from "./Contact";


function Nav(){

    return(
        <nav>
            <Link to="/" element={<Home />}>
                <button>Home</button>
            </Link>
            <Link to="/post" element={<Post />}>
                <button>Post</button>
            </Link>
            <Link to="/contact" element={<Contact />}>
                <button>Contact</button>
            </Link>
          
        </nav>
    )
}

export default Nav;