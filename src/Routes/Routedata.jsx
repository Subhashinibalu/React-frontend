import AboutUs from "../Pages/AboutUs";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ContactUs from "../Pages/ContactUs";
import Support from "../Pages/Support";

 const route=[{
"component":<Home/>,
"path":"/"
},
{
    "component":<Login/>,
    "path":"/login"
},
 {
        "component":<Register/>,
        "path":"/register"
    },

{
    "component":<AboutUs/>,
    "path":"/about"
},
{
    "component":<ContactUs/>,
    "path":"/contact"
},
{
    "component":<Support/>,
    "path":"/support"
}]

export default route;