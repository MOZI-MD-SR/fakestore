import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Termekek from './Termekek';

const Admin = () => <div>Admin felület tartalom</div>;

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {/* Publikus oldal */}
                    <Route index element={<Termekek />} />
                    {/* Admin oldal */}
                    <Route path="admin" element={<Admin />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
