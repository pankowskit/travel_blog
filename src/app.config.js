import Blog from "./views/blog";
import Comingsoon from "./views/comingsoon";
import Error from "./views/error";
import Home from "./views/home";
import Place from "./views/place";
import Privacy from "./views/privacy";

const ERRORS = {
    "401":{
        backLink: "/",
        backName:"Home",
        code:"401",
        text: "You are not authorized to access this resource"
    },
    "404":{
        backLink: "/",
        backName:"Home",
        code:"404",
        text: "Page not found"
    }
}

const PATHS = [
    {menuItem:true,menuName:"Home",path:"/",component:<Home/>},
    {menuItem:true,menuName:"Place",path:"/place",component:<Place/>},
    {menuItem:true,menuName:"Blog",path:"/",component:<Blog/>},
    {menuItem:false,menuName:"",path:"/comingsoon",component:<Comingsoon/>},
    {menuItem:false,menuName:"",path:"/privacy",component:<Privacy/>},
    {menuItem:false,menuName:"",path:"*",component:<Error errorData={ERRORS['404']}/>}
];

export {
    ERRORS,
    PATHS
}