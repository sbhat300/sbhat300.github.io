import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import AmbientCanvas from '../AmbientCanvas/AmbientCanvas';

const Layout = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <AmbientCanvas />
      <Navbar />

      <div className="page" style={{ position: 'relative', zIndex: 1 }}>
          <Outlet />
      </div>
    </div>
  )
}

export default Layout