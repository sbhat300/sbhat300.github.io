import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import AmbientCanvas from '../AmbientCanvas/AmbientCanvas';
import './Layout.scss'
import VerticalNavbar from '../VerticalNavbar/VerticalNavbar';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Layout = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const onNavbarClose = () => {
    setIsNavbarOpen(false);
  }

  return (
  <div className="layout-container" style={{ position: 'relative', overflow: 'hidden' }}>
      <AmbientCanvas />
      <Navbar />
      <div className="hamburger-icon-container" onClick={() => {setIsNavbarOpen(true)}}>
        <FontAwesomeIcon icon={faBars} size="2x"/>
      </div>
      {isNavbarOpen && <VerticalNavbar onNavbarClose={onNavbarClose}/>}

      <div className="page" style={{ position: 'relative', zIndex: 1 }}>
          <Outlet />
      </div>
    </div>
  )
}

export default Layout