import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../stores/slices/authSlice'; 
import { useNavigate } from "react-router-dom";

export default function Header() {
    const dispatch = useDispatch();
    const { token, username } = useSelector((state) => state.auth); 
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/")
    };

    return (
        <>
            <section className="top-header">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-12">
                            <h1><a href="/">Koi Fish Service</a></h1>
                            <a className="brand" href="/" title="Home">
                                <img alt="Logo" src="https://tse2.mm.bing.net/th?id=OIG1.mc81L5lzI0R_xZBH6vbw&pid=ImgGn" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <header id="header">
                <div className="container">
                    <nav id="nav-menu-container">
                        <ul className="nav-menu">
                            <li className="menu-active"><a href="/">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="/Service">Services</a></li>
                            <li><a href="/Contact">Contact</a></li>
                            {token ? (
                                <li className="dropdown">
                                <a href="#" className="dropbtn">{username}</a>
                                <div className="dropdown-content">
                                    <a href={`/User/${token}`}>View Profile</a> 
                                    <a href="#" onClick={handleLogout}>Logout</a>
                                </div>
                            </li>
                            ) : (
                                <li><a href="/Login">Login</a></li>
                            )}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}
