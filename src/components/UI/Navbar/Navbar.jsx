import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../../../context';

const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const logout = () => {
    localStorage.removeItem("auth")
    setIsAuth(false)
  }
  return (
    <div className="navbar">
        <div className="navbar__links">
          <Link className="navbar__link" to="/about">About</Link>
          <Link className="navbar__link" to="/posts">Posts</Link>
          {isAuth ? <Link onClick={logout} className="navbar__link" to="/login">Logout</Link> : null}          
        </div>
      </div>
  )
}

export default Navbar