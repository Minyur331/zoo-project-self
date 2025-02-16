import { createBrowserRouter, Outlet } from "react-router-dom";
import DefaultLayout from "../layout/defaultLayout/DefaultLayout";
import { AppArea } from "../../shared";
import { Homepage, SpiceSelectionPage } from "../../features/spices/pages";
import { SpiceArticle, UnderConstruction } from "../../features/spices/components";
import loadSpiceArticle from "../../features/spices/loader/loadSpiceArticle";



const router = createBrowserRouter([
    {
        path: '/',
        element: < DefaultLayout />,
        children: [
            {
                index: true,
                element: <Homepage />
            },
            {
                path:'spices',
                element: <AppArea />,
                children: [
                    {
                        index:true,
                        element: <SpiceSelectionPage />,
                        loader: loadSpiceCards,
                    },
                    {
                        path:':spiceSlug',
                        element: <SpiceArticle />,
                        loader: loadSpiceArticle,
                        
                    }
                ]
            },
            {
                path:'spicology',
                element: <UnderConstruction />
            },
        ]
    }
]);

export default router;