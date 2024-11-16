import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Termekek from './Public/Termekek';
import Admin from './pages/Admin.js'
import NoPage from "./pages/NoPage.js";



const App = () => {
    console.log('App.js betöltve');
    return (
      <div className="container">
        <header className="">
          <h1>FakeStore Webáruház</h1>
        </header>
  
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Public />} />
              <Route path="admin" element={<Admin />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  };

export default App;
