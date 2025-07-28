import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import Clients from "./pages/Clients/Clients";
import Home from "./pages/Home";


const router = createBrowserRouter([
    {
    path: '/',
    element: <Home/>,
    },
    {
        path:'/jobproposaldashboard',
        element:<DashboardLayout />,
        children:[
            {
               index: true,
              element:<DashboardPage />,
              index:true
            },
            {
                path:'clients',
                element:<Clients />
            },
              {
              path:'proposals',
              element:<DashboardPage />
            },
        ]
    }
])

export default router;