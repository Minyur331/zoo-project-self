import { Link } from "react-router-dom";

const NavElement = () => {
    return (
        <nav className="navbar">
            <div className="container px-2">
                <ul className="navbar-nav w-100 d-flex justify-content-md-evenly align-items-md-center flex-column flex-lg-row gap-2">
                    <li className="nav-item">
                        <Link className="nav-link px-3 py-2 bg-primary rounded-1 text-white text-center" to={'/allataink'}>
                            Állataink
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link px-3 py-2 bg-warning rounded-1 text-dark text-center" to={'/ujallat'}>
                            Újlakó felvétele
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavElement;

