import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import Clients from "./pages/Clients/Clients";
import TeamMeMberProfile from "./pages/Teammemberprofile/TeamMeMberProfile";


const router = createBrowserRouter([
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
            {
              path:'profile',
              element:<TeamMeMberProfile />
            },
        ]
    }
])

export default router;