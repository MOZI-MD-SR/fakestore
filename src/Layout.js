import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header style={{ padding: '10px 20px', backgroundColor: '#f8f9fa', borderBottom: '1px solid #ccc' }}>
                <h1 style={{ margin: 0 }}>Webáruház</h1>
            </header>
            <nav style={{ padding: '10px 20px', backgroundColor: '#343a40' }}>
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', gap: '20px' }}>
                    <li>
                        <Link
                            to="/"
                            style={{ textDecoration: 'none', color: '#ffffff' }}
                        >
                            Áruház
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/admin"
                            style={{ textDecoration: 'none', color: '#ffffff' }}
                        >
                            Admin felület
                        </Link>
                    </li>
                </ul>
            </nav>
            <main style={{ padding: '20px' }}>
                {/* Az aktuális útvonal tartalma ide töltődik be */}
                <Outlet />
            </main>
            <footer style={{ padding: '10px 20px', backgroundColor: '#f8f9fa', borderTop: '1px solid #ccc', marginTop: '20px', textAlign: 'center' }}>
                <p>© 2024 Webáruház. Minden jog fenntartva.</p>
            </footer>
        </>
    );
};

export default Layout;
