import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/auth/login';
import Kontak from './pages/contact/index';
import BlogDetail from './pages/blog-detail';
import Kategori from './pages/category';
import Dashboard from './pages/dashboard/home';
import { AuthProvider } from './context/auth-context';
import DashbordKategori from './pages/dashboard/category';
import ProtectedRoute from './components/protected-route';

import 'react-toastify/dist/ReactToastify.css';

import './App.css';

function App() {
  const toastOptions = {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  }

  return (
    <BrowserRouter>
      <ToastContainer {...toastOptions} />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/kategori' element={<Kategori />} />
          <Route path='/kontak' element={<Kontak />} />
          <Route path="/detail/:id" element={<BlogDetail />} />
          <Route path='/login' element={<Login />} />

          <Route path='/dashboard' element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>} />
          <Route path='/dashboard/kategori' element={
            <ProtectedRoute>
              <DashbordKategori />
            </ProtectedRoute>
          } />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
