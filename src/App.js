import './App.css';
import Kategori from './pages/kategori/index';
import Kontak from './pages/kontak/index';

import Home from './pages/home';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BlogDetail from './pages/blog-detail';
import Login from './pages/auth/login';
import Dashboard from './pages/dashboard/home';
import DashbordKategori from './pages/dashboard/kategori';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/kategori' element={<Kategori />} />
        <Route path='/kontak' element={<Kontak />} />
        <Route path="/detail/:id" element={<BlogDetail />} />
        <Route path='/login' element={<Login />} />

        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/kategori' element={<DashbordKategori />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
