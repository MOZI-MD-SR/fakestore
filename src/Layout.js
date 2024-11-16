import { Outlet, Link } from "react-router-dom";
import "./App.css";
import { Nav } from "react-bootstrap";

const Layout = () => {
  return (
    <>
      <header>
        <h1>Webáruház</h1>
      </header>
      
      <Nav defaultActiveKey="/" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/">Áruház</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/admin">Admin felület</Nav.Link>
        </Nav.Item>
        
      </Nav>
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
