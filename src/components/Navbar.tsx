import { Link } from "react-router";
import "./Navbar.css";
import { useAuth } from "@/lib/auth/store";
import { X, Menu } from 'lucide-react';
import { useState } from "react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className="navbar">
      <Link to="/" className="navbar-img">
        <img src="/logo.png" alt="logo-wow" />
      </Link>
      <ul className={`navbar-nav ${isOpen ? "open" : ""}`}>
        <li className="nav-link">
          <Link to="/about-us" onClick={() => setIsOpen(false)}>About Us</Link>
        </li>
        <li className="nav-link">
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
        </li>
        <li className="nav-link">
          <Link to="/teams" onClick={() => setIsOpen(false)}>Teams</Link>
        </li>
        <li className="nav-link">
          <Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
        </li>
        {!user ? (
          <li className="nav-link nav-auth-mobile">
            <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
          </li>
        ) : (
          <>
            {user.role == "ADMIN" && (
              <li className="nav-link nav-auth-mobile">
                <Link to="/create-blogs" onClick={() => setIsOpen(false)}>Write a Blog</Link>
              </li>
            )}
            <li className="nav-link nav-auth-mobile">
              <Link
                to="/"
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
              >
                Log out
              </Link>
            </li>
          </>
        )}
      </ul>
      <div className="nav-right">
        <div className="nav-btn-wrapper">
          {!user ? (
            <Link to="/login">
              <button className="nav-btn">Login</button>
            </Link>
          ) : (
            <div
              className="nav-avatar"
              onMouseEnter={() => setDropdownIsOpen(true)}
              onMouseLeave={() => setDropdownIsOpen(false)}
            >
              <img src="./avatar.webp" alt="avatar" />

              {dropdownIsOpen && (
                <div className="nav-dropdown-menu">
                  <div className="nav-dropdown-menu-user">
                    <p className="nav-dropdown-menu-user-name">{user.name} ({user.role})<br/></p>
                    <p className="nav-dropdown-menu-user-email">{user.email}</p>
                  </div>
                  <hr className="divider" />
                  {user.role == "ADMIN" && (
                    <Link to="/create-blogs" className="nav-dropdown-menu-list">
                      Write a Blog
                    </Link>
                  )}
                  <Link
                    to="/"
                    className="nav-dropdown-menu-logout"
                    onClick={logout}
                  >
                    Log out
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
