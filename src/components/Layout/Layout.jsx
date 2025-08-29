import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import AmbientCanvas from '../AmbientCanvas/AmbientCanvas';
import './Layout.scss'

const Layout = () => {
  return (
  <div className="layout-container" style={{ position: 'relative', overflow: 'hidden' }}>
      <AmbientCanvas />
      <Navbar />

      <div className="page" style={{ position: 'relative', zIndex: 1 }}>
          <Outlet />
      </div>
    </div>
  )
}

export default Layout