import data from "../datas.json";
import { useState } from 'react';
import { Transition } from '@headlessui/react'; // For smooth transitions
import Email from "./Email";

const Navbar = ({navbar, transparent}) => {
    return (
        <div>
            <Email />
            <nav className="p-6 fixed top-12 w-full z-20" style={{background: navbar && transparent ? "transparent" : "white", boxShadow: navbar && transparent ? "0px" : "10px"}}>
                <div className="container mx-auto flex items-center justify-around">
                    {/* Logo */}
                    <div className="text-2xl font-bold">
                        {navbar && transparent ? 
                            <img
                                className="ms-20"
                                src="https://posbytz.com/wp-content/uploads/2021/09/logo_light.svg"
                                srcSet="https://posbytz.com/wp-content/uploads/2021/09/logo_light_2x.svg 2x"
                                alt="PosBytz"
                            /> 
                            : 
                            <img
                                className="ms-20"
                                src="https://posbytz.com/wp-content/uploads/2021/09/logo_default.svg"
                                srcSet="https://posbytz.com/wp-content/uploads/2021/09/logo_default_2x.svg 2x"
                                alt="PosBytz"
                            />
                        }
                    </div>

                    {/* Navbar Links */}
                    <div className="hidden md:flex space-x-8">
                        {/* Dropdown 1 */}
                        {data.navbar.links.map((ele, index) => (
                            <div key={index} className="relative group hover:border-b-2 hover:border-solid hover:border-amber-600">
                                {ele.items.length ? (
                                    <button
                                        className="font-bold"
                                        style={{color: navbar && transparent ? "white" : "gray"}}
                                    >
                                        {ele.name}
                                    </button>
                                ) : (
                                    <a href={`/${ele.link}`}>
                                        <button
                                            className="font-bold"
                                            style={{color: navbar && transparent ? "white" : "gray"}}
                                        >
                                            {ele.name}
                                        </button>
                                    </a>
                                )}
                                
                                <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {ele.items.length ? (
                                        ele.withlink.map((item, itemIndex) => (
                                            <div key={itemIndex} className="p-2">
                                                <a href={`/${item.link}`} className="block px-4 py-2 hover:bg-gray-200">{item.name}</a>
                                            </div>
                                        ))
                                    ) : null}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Button */}
                    <div>
                        <a
                            href="#"
                            className="orng text-white py-2 px-4 rounded-full"
                        >
                            {data.navbar.navButton}
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
