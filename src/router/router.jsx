import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";
import App from "../App";
import SiteInfo from "../pages/SiteInfo";
import LoginPage from "../pages/LoginPage";
import DesignerPanel from "../pages/DesignerPanel";

const appRouter  = createBrowserRouter([
    {
        path: '/',
        element:  <App/> ,
        children:[
            {
                path:'/',
                element:<Landing/>
            },
            {
                path:'/home',
                element:<DesignerPanel/>
            },
            {
                path:'/loginPage',
                element:<LoginPage/>
            }
        ]
         
    } 
]);


export default appRouter;