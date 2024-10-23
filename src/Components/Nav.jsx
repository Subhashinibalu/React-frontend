import data from "../datas.json"
import { useState } from 'react';
import { Transition } from '@headlessui/react'; // For smooth transitions
import Email from "./Email";

const Navbar = ({navbar,transparent}) => {
    
   
    const [isDropdownOpen, setIsDropdownOpen] = useState(null);

    const handleDropdownToggle = (index) => {
        setIsDropdownOpen(isDropdownOpen === index ? null : index);
    };

    return (
<div>

    
<Email/>
      <nav className=" p-6 fixed top-12 w-full  z-20" style={{background: navbar && transparent ? "transparent":"white", boxShadow: navbar && transparent ? "0px" :"10px"}}>
            <div className="container mx-auto flex items-center justify-around ">
                {/* Logo */}
                <div className=" text-2xl font-bold">
                    {navbar && transparent ?      <img
            className=" ms-20"
            src="https://posbytz.com/wp-content/uploads/2021/09/logo_light.svg"
            srcSet="https://posbytz.com/wp-content/uploads/2021/09/logo_light_2x.svg 2x"
            alt="PosBytz"
          />   :<img
          className=" ms-20"
          src="https://posbytz.com/wp-content/uploads/2021/09/logo_default.svg"
          srcSet="https://posbytz.com/wp-content/uploads/2021/09/logo_default_2x.svg 2x"
          alt="PosBytz"
        />  }
                 
                </div>

                {/* Navbar Links */}
                <div className="hidden md:flex space-x-8">
                    {/* Dropdown 1 */}


                    {data.navbar.links.map((ele,index)=>{
                        return(
<div key={index} className="relative group hover:border-b-2 hover:border-solid hover:border-amber-600" >
             {ele.items.length ?  <button
                            onClick={() => handleDropdownToggle(index)}
                            
                            className=" font-bold " style={{color: navbar && transparent ? "white":"gray"}}
                        >
                            {ele.name}
                        </button> : <a href={`/${ele.link}`}>  <button
                            onClick={() => handleDropdownToggle(index)}
                            
                            className=" font-bold "  style={{color: navbar && transparent ? "white":"gray"}}
                        >
                            {ele.name}
                        </button></a> }         
                            
                        <Transition
                            as="div"
                            show={isDropdownOpen === index}
                            className="absolute left-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-lg"
                            enter="transition ease-out duration-200"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition duration-800"
                          
                        >
                            
                                { ele.items.length ?(ele.withlink.map((item)=>{
                                    return(
                                        <div key={index} className="p-2">
<a href={`/${item.link}`}  className="block px-4 py-2 hover:bg-gray-200">{item.name}</a>
</div>  )
                                })) : null}
                                
                           
                        </Transition>
                    </div>
                        )
                    })}
                    

                  



                


                    
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
