import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Termekek from './Public/Termekek';

const Admin = () => {
    console.log('Admin felület betöltve');
    return <div>Admin felület tartalom</div>;
};

const App = () => {
    console.log('App.js betöltve');
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Termekek />} />
                    <Route path="admin" element={<Admin />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
