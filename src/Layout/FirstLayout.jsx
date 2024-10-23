import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";

const FirstLayout = ({children,transparent}) => {
 
  const [navbar, setNavbar] = useState(1)
  // console.log(transparent);
   
  window.addEventListener("scroll", ()=>{

    if (window.scrollY >= 10 && transparent ) {
        setNavbar(0)
      } 
else {
    setNavbar(1)
  }
  })   
    return (
        <div>
            <Navbar  navbar={navbar} transparent={transparent}/>
            {children}
            <Footer/>
        </div>
    );
};

export default FirstLayout;