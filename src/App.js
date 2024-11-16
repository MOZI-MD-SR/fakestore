import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Termekek from './Public/Termekek';
import TermekekAdmin from './Admin/TermekekAdmin';
import UjTermek from './Admin/UjTermek';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Termekek />} />
        <Route path="admin" element={<TermekekAdmin />} />
        <Route path="admin/uj" element={<UjTermek />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
