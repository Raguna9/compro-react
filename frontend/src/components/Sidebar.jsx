import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoHome, IoLogOut, } from "react-icons/io5";
import { BsBank, BsChatLeftTextFill } from "react-icons/bs";
import { RiGalleryFill, RiQuestionAnswerLine } from "react-icons/ri";
import { FaBloggerB, FaUserTie, FaUserFriends } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";

const Sidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

    const logout = () => {
        if (window.confirm("Are you sure for logout?")) {
            dispatch(LogOut());
            dispatch(reset());
            navigate("/login");
        } 
    };

    return (
        <div>
            <aside className="menu mt-2 pl-2 has-shadow">
                <span className="menu-label">General</span>

                <ul className="menu-list">
                    <li>
                        <NavLink to={"/dashboard"}>
                            <span style={{ fontSize: '14px' }}>
                                <IoHome /> Dashboard
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/blogs"}>
                            <span style={{ fontSize: '14px' }}>
                                <FaBloggerB /> Blogs
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/inboxs"}>
                            <span style={{ fontSize: '14px' }}>
                                <BsChatLeftTextFill /> Inboxs
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/faqs"}>
                            <span style={{ fontSize: '14px' }}>
                                <RiQuestionAnswerLine /> FAQs
                            </span>
                        </NavLink>
                    </li>
                </ul>
                {user && user.role === "admin" && (
                    <div>
                        <span className="menu-label">Admin</span>
                        <ul className="menu-list">
                            <NavLink to={"/users"}>
                                <span style={{ fontSize: '14px' }}>
                                    <IoPerson /> Users
                                </span>
                            </NavLink>
                            <li>
                                <NavLink to={"/employees"}>
                                    <span style={{ fontSize: '14px' }}>
                                        <FaUserTie /> Employees
                                    </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/externalemployees"}>
                                    <span style={{ fontSize: '14px' }}>
                                        <FaUserFriends /> External Employees
                                    </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/partners"}>
                                    <span style={{ fontSize: '14px' }}>
                                        <BsBank /> Partners
                                    </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/gallerys"}>
                                    <span style={{ fontSize: '14px' }}>
                                        <RiGalleryFill /> Gallery
                                    </span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                )}

                <span className="menu-label">Settings</span>
                <ul className="menu-list">
                    <li>
                        <button onClick={logout} className="button is-white">
                            <span style={{ fontSize: '14px' }}>
                                <IoLogOut /> Logout
                            </span>
                        </button>
                    </li>
                </ul>
            </aside>
        </div>
    );
};

export default Sidebar;