import { Outlet, Link } from 'react-router-dom';
import './App.css';

const Layout = () => {
    return (
        <>
            <header>
                <h1>Webáruház</h1>
            </header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Áruház</Link>
                    </li>
                    <li>
                        <Link to="/admin">Admin felület</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>© 2024 Webáruház. Minden jog fenntartva.</p>
            </footer>
        </>
    );
};

export default Layout;
