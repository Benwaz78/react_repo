
import { Link } from "react-router-dom";

function Nav(){

    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        <button>Home</button>
                    </Link>
                   
                </li>
                <li>
                    <Link to="/about">
                        <button>About</button>
                    </Link>
                </li>
                <li>
                    <Link to="/service">
                        <button>Service</button>
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        <button>Contact</button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;