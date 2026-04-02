import { useAuth } from "../context/AuthContext";

import { NavLink } from "react-router-dom";
export default function Navbar() {
  const { user, logout } = useAuth();
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-brand">
          ShopHub
        </NavLink>
        <div className="navbar-links">
          <NavLink to="/" className="navbar-link">
            Home
          </NavLink>
          <NavLink to="/checkout" className="navbar-link">
            Cart
          </NavLink>
        </div>
        <div className="navbar-auth">
          {!user ? (
            <div className="navbar-auth-links">
              <NavLink to="/auth" className="btn btn-secondary">
                Login
              </NavLink>
              <NavLink to="/auth" className="btn btn-primary">
                Signup
              </NavLink>
            </div>
          ) : (
            <div className="navbar-user">
              <span className="navbar-greeting">{user.name}</span>
              <button className="btn banner-btn" onClick={logout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}