import { Button, Navbar } from 'flowbite-react'
import Logo from '../assets/logo.png'
import IconUpload from '../icons/icon-upload'
import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Header() {
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();

  return (
    <>
      {/* NAVBAR */}
      <Navbar rounded className='max-w-7xl px-0 mx-auto bg-transparent py-5'>
        <Navbar.Brand href="https://flowbite-react.com">
          <img src={Logo} alt="Flowbite React" className="h-8" />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button onClick={() => {
            navigate('/login')
          }} color='blue' className='rounded-full'>Unggah tulisan-mu&nbsp;&nbsp;<IconUpload /></Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link className='navbar-link' active>
            <div className='menu'>
              <Link to={'/'}>Beranda</Link>
              <div className={`${pathname === '/' ? 'link-active' : ''}`}></div>
            </div>
          </Navbar.Link>
          <Navbar.Link href="#" className='navbar-link'>
            <div className='menu'>
              <Link to={'/kategori'}>Jelajah</Link>
              <div className={`${pathname === '/kategori' ? 'link-active' : ''}`}></div>
            </div>
          </Navbar.Link>
          <Navbar.Link href="#" className='navbar-link'>
            <div className='menu'>
              <Link to={'/kontak'}>Kontak</Link>
              <div className={`${pathname === '/kontak' ? 'link-active' : ''}`}></div>
            </div>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      {/* END NAVBAR */}
    </>
  )
}
