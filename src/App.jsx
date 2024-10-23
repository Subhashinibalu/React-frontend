import Home from "./Pages/Home";
import Support from "./Pages/Support";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import route from "./Routes/Routedata"

let elepath = route.map((ele,i)=>{
  return(
    <Route path={`/${ele.path}`} element={ele.component} key={i}/>
  )
});
console.log(elepath);


const App = () => {
  
  
    return (
    <>
  <BrowserRouter>
  <Routes>
    {elepath}
  
  </Routes>
    </BrowserRouter>
     
     
      
    </>
  );
};

export default App;