import { Link } from 'react-router'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to="/" className='navbar-img'>
            <img src="/logo.png" alt="logo-wow" />
        </Link>
        <ul className='navbar-nav'>
            <li className='nav-link'>
                <Link to="/about-us">About Us</Link>
            </li>
            <li className='nav-link'>
                <Link to="/services">Services</Link>
            </li>
            <li className='nav-link'>
                <Link to="/teams">Teams</Link>
            </li>
            <li className='nav-link'>
                <Link to="/blog">Blog</Link>
            </li>
        </ul>
        <div className='nav-btn-wrapper'>
            <Link to='/login'>
                <button className='nav-btn'>Login</button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar