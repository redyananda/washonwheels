import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <a href="#home" className='navbar-img'>
            <img src="./logo.png" alt="logo-wow" />
        </a>
        <ul className='navbar-nav'>
            <li className='nav-link'>
                <a href="#about">About Us</a>
            </li>
            <li className='nav-link'>
                <a href="#services">Services</a>
            </li>
            <li className='nav-link'>
                <a href="#teams">Teams</a>
            </li>
            <li className='nav-link'>
                <a href="#blog">Blog</a>
            </li>
        </ul>
        <div className='nav-btn-wrapper'>
            <button className='nav-btn'>Login</button>
        </div>
    </div>
  )
}

export default Navbar