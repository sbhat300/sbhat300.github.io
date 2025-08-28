import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Navbar />

        <div className="page">
            <Outlet />
        </div>
    </div>
  )
}

export default Layout