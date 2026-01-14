import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logo0.png";

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);

    const navItem = (label) => (
        <li className="text-center cursor-pointer group">
            <p className="py-1 transition-colors group-hover:text-secondary">
                {label}
            </p>
            <hr className="border-none h-0.5 bg-secondary w-3/5 mx-auto opacity-0 group-hover:opacity-100 transition-all" />
        </li>
    );

    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md border-b border-gray-200 z-50">
            <div className="mx-4 sm:mx-[10%] flex items-center justify-between h-16">

                {/* Logo */}
                <img
                    onClick={() => navigate("/")}
                    className="w-36 cursor-pointer"
                    src={logo}
                    alt="logo"
                />

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8 font-semibold text-sm tracking-wide">
                    <NavLink to="/" end>
                        {({ isActive }) => (
                            <li className="text-center cursor-pointer">
                                <p className={`py-1 ${isActive ? "text-secondary" : ""}`}>HOME</p>
                                <hr
                                    className={`border-none h-0.5 bg-secondary w-3/5 mx-auto transition-all
                  ${isActive ? "opacity-100" : "opacity-0"}`}
                                />
                            </li>
                        )}
                    </NavLink>

                    <NavLink to="/about-us">
                        {({ isActive }) => (
                            <li className="text-center cursor-pointer">
                                <p className={`py-1 ${isActive ? "text-secondary" : ""}`}>ABOUT US</p>
                                <hr
                                    className={`border-none h-0.5 bg-secondary w-3/5 mx-auto transition-all
                  ${isActive ? "opacity-100" : "opacity-0"}`}
                                />
                            </li>
                        )}
                    </NavLink>

                    <NavLink to="/products-services">
                        {({ isActive }) => (
                            <li className="text-center cursor-pointer">
                                <p className={`py-1 ${isActive ? "text-secondary" : ""}`}>
                                    PRODUCTS & SERVICES
                                </p>
                                <hr
                                    className={`border-none h-0.5 bg-secondary w-3/5 mx-auto transition-all
                  ${isActive ? "opacity-100" : "opacity-0"}`}
                                />
                            </li>
                        )}
                    </NavLink>

                    <NavLink to="/projects">
                        {({ isActive }) => (
                            <li className="text-center cursor-pointer">
                                <p className={`py-1 ${isActive ? "text-secondary" : ""}`}>PROJECTS</p>
                                <hr
                                    className={`border-none h-0.5 bg-secondary w-3/5 mx-auto transition-all
                  ${isActive ? "opacity-100" : "opacity-0"}`}
                                />
                            </li>
                        )}
                    </NavLink>

                    {/* CTA Button */}
                    <NavLink to="/contact">
                        {({ isActive }) => (
                            <li
                                className={`px-5 py-2 rounded-full font-semibold transition-all text-white
                ${isActive
                                        ? "bg-black shadow-md"
                                        : "bg-secondary hover:bg-black hover:text-white"
                                    }`}
                            >
                                CONTACT
                            </li>
                        )}
                    </NavLink>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex flex-col gap-1.5"
                    onClick={() => setShowMenu(!showMenu)}
                >
                    <span className="w-6 h-0.5 bg-black"></span>
                    <span className="w-6 h-0.5 bg-black"></span>
                    <span className="w-6 h-0.5 bg-black"></span>
                </button>
            </div>

            {/* Mobile Menu */}
            {showMenu && (
                <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
                    <ul className="flex flex-col items-center gap-6 py-6 font-semibold">
                        {[
                            { path: "/", label: "HOME" },
                            { path: "/about-us", label: "ABOUT US" },
                            { path: "/products-services", label: "PRODUCTS & SERVICES" },
                            { path: "/projects", label: "PROJECTS" },
                            { path: "/contact", label: "CONTACT" },
                        ].map(({ path, label }) => (
                            <NavLink key={path} to={path} end onClick={() => setShowMenu(false)}>
                                {({ isActive }) => (
                                    <span
                                        className={`px-4 py-2 rounded-lg transition
                    ${isActive
                                                ? "bg-secondary text-white"
                                                : "text-gray-700 hover:text-secondary"
                                            }`}
                                    >
                                        {label}
                                    </span>
                                )}
                            </NavLink>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;


// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import logo from "../../assets/logo/logo2.png";

// const linkClass = ({ isActive }) =>
//     `relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-primary after:transition-all after:duration-300
//    ${isActive ? "after:w-full text-primary" : "after:w-0 hover:after:w-full"}`;

// const Navbar = () => {
//     const navigate = useNavigate();
//     const [showMenu, setShowMenu] = useState(false);

//     return (
//         <nav className="fixed top-0 left-0 w-full bg-white shadow-md border-b border-gray-200 z-50">
//             <div className="mx-4 sm:mx-[10%] flex items-center justify-between h-16">
//                 {/* Logo */}
//                 <img
//                     onClick={() => navigate("/")}
//                     className="w-18 cursor-pointer"
//                     src={logo}
//                     alt="logo"
//                 />

//                 {/* Desktop Menu */}
//                 <ul className="hidden md:flex items-center gap-6 font-medium text-sm">
//                     <NavLink to="/" className={linkClass}>HOME</NavLink>
//                     <NavLink to="/about-us" className={linkClass}>ABOUT US</NavLink>
//                     <NavLink to="/products-services" className={linkClass}>
//                         PRODUCTS & SERVICES
//                     </NavLink>
//                     <NavLink to="/projects" className={linkClass}>PROJECTS</NavLink>
//                     <NavLink to="/contact" className={linkClass}>CONTACT</NavLink>
//                 </ul>

//                 {/* Mobile Menu Button */}
//                 <button
//                     className="md:hidden flex flex-col gap-1"
//                     onClick={() => setShowMenu(!showMenu)}
//                 >
//                     <span className="w-6 h-0.5 bg-black"></span>
//                     <span className="w-6 h-0.5 bg-black"></span>
//                     <span className="w-6 h-0.5 bg-black"></span>
//                 </button>
//             </div>

//             {/* Mobile Menu */}
//             {showMenu && (
//                 <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
//                     <ul className="flex flex-col items-center gap-6 py-6 font-medium">
//                         <NavLink to="/" onClick={() => setShowMenu(false)} className={linkClass}>
//                             HOME
//                         </NavLink>
//                         <NavLink to="/about-us" onClick={() => setShowMenu(false)} className={linkClass}>
//                             ABOUT US
//                         </NavLink>
//                         <NavLink to="/products-services" onClick={() => setShowMenu(false)} className={linkClass}>
//                             PRODUCTS & SERVICES
//                         </NavLink>
//                         <NavLink to="/projects" onClick={() => setShowMenu(false)} className={linkClass}>
//                             PROJECTS
//                         </NavLink>
//                         <NavLink to="/contact" onClick={() => setShowMenu(false)} className={linkClass}>
//                             CONTACT
//                         </NavLink>
//                     </ul>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;
