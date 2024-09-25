export default function Header () {
    return (
        <>
            <section className="top-header">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-12">
                            <h1><a href="/">Koi Fish Service</a></h1>
                            <a className="brand" href="/" title="Home"><img alt="Logo" src="https://tse2.mm.bing.net/th?id=OIG1.mc81L5lzI0R_xZBH6vbw&pid=ImgGn" /></a>
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
                            <li><a href="/Login">Login</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}