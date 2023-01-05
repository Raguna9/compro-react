import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import logo from "../assets/logo/adminlogo.png";
import { useDispatch } from "react-redux";
import { LogOut, reset } from "../features/authSlice";
import { useSelector } from "react-redux";

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

    const logout = () => {
        if (window.confirm("Are you sure for logout?")) {
            // lakukan sesuatu jika pengguna mengklik tombol "OK"
            dispatch(LogOut());
            dispatch(reset());
            navigate("/login");
        } else {
            // lakukan sesuatu jika pengguna mengklik tombol "Cancel"
        }
    };
    const website = () => {
        navigate('/');
    };

    return (
        <div>
            <nav
                className="navbar is-fixed-top has-shadow"
                role="navigation"
                aria-label="main navigation"
            >
                <div className="navbar-brand">
                    <NavLink to="/dashboard" className="navbar-item">
                        {/* <img src={logo} width="112" height="28" alt="logo" /> */}
                        <h1 className="title is-hoverable" style={{ fontFamily: "'Sacramento', sans-serif", color: "black" }}><strong>{user && user.role}</strong> panel</h1>
                    </NavLink>

                    <a
                        href="!#"
                        role="button"
                        className="navbar-burger burger"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasicExample"
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <button onClick={website} className="button is-link">
                                    See Website
                                </button>
                                <button onClick={logout} className="button is-light">
                                    Log out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;