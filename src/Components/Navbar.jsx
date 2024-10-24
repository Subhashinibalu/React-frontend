import { useEffect, useState } from "react";
import Email from "./Email";
import { apicalls } from "../Pages/API/Api";

const Navbar = ({navbar, transparent }) => {
  
    const [navbardata, setNavbar] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const api = new apicalls();
            try {
                const data = await api.fetchNavData();
                // Assuming the API returns an array and we want the first object
                setNavbar(data[0]);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, [navbardata]);
// console.log(navbardata);
    // Ensure navbardata is available before rendering components
    if (!navbardata) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Email />
            <nav className= {navbar&&transparent?"p-6 fixed top-12 w-full z-20 bg-transparent text-white shadow-none":"p-6 fixed top-12 w-full z-20 bg-white text-black shadow-sm"}  >
                <div className="container mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <div className=" font-bold">
                        <img
                            className="ms-12 w-36"
                            src={navbardata.logo}
                            alt="PosBytz"
                        />
                    </div>

                    {/* Navbar Links */}
                    <div className="hidden md:flex space-x-8">
                        {navbardata.links.map((ele, index) => (
                            <div key={index} className="relative group hover:border-b-2 pb-3 hover:border-solid hover:border-[#FF8C00]">
                                {ele.withlink.length ? (
                                    <button className="font-bold" style={{ color: transparent && navbar? "white" : "gray" }}>
                                        {ele.name}
                                    </button>
                                ) : (
                                    <a href={`/${ele.link}`}>
                                        <button className="font-bold" style={{ color: transparent &&navbar ? "white" : "gray" }}>
                                            {ele.name}
                                        </button>
                                    </a>
                                )}

                                {/* Dropdown */}
                                <div className="absolute left-0 mt-5 w-48 bg-white text-gray-800 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {ele.withlink.map((item, itemIndex) => (
                                        <div key={itemIndex} className="p-2">
                                            <a href={`/${item.link}`} className="block px-2 text-sm py-2 hover:text-[#FF8C00]">
                                                {item.name}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Button */}
                    <div>
                        <a href="#" className="orng text-white px-5  py-3 me-28 rounded-full ">
                            {navbardata.navButton}
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
