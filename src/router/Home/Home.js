import HeadPage from "../../components/BodyPage/ThirdSec/HeadPage";
import About from "../../pages/About/About";
import HomePage from "../../pages/HomePage/HomePage";
import NewsPage from "../../pages/NewsPage/NewsPage";

export const routes = [
    {
    path : "/",
    element :HomePage(),
    children : [
    {
    path : "",
    element :HomePage() ,
    },{
        path:"/about",
        element:About()
    },
   {
    path:"/news",
    element:NewsPage()
   }
]}
]