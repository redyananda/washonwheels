import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <a href="/" className='navbar-img'>
            <img src="./logo.png" alt="logo-wow" />
        </a>
        <ul className='navbar-nav'>
            <li className='nav-link'>
                <a href="/about-us">About Us</a>
            </li>
            <li className='nav-link'>
                <a href="/services">Services</a>
            </li>
            <li className='nav-link'>
                <a href="/teams">Teams</a>
            </li>
            <li className='nav-link'>
                <a href="#blog">Blog</a>
            </li>
        </ul>
        <a className='nav-btn-wrapper' href='/login'>
            <button className='nav-btn'>Login</button>
        </a>
    </div>
  )
}

export default Navbar