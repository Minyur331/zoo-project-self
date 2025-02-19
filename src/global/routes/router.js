import { createBrowserRouter } from "react-router-dom";

import { AppArea } from "../../shared";
import { HomePage, NewAnimal, OurAnimals } from "../../features/zoo/components";
import loadArticle from "../../features/zoo/components/HomePage/loadArticle";
import loadAnimals from "../../features/zoo/components/OurAnimals/loadAnimals";
import loadCaretakers from "../../features/zoo/components/NewAnimal/loadCaretakers";
import DefaultLayout from "../layout/defaultLayout/DefaultLayout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>,
                loader:loadArticle
            },
            {
                path:'allataink',
                element: <AppArea />,
                children: [
                    {
                        index:true,
                        element: <OurAnimals/>,
                        loader:loadAnimals
                    }
                ]
            },
            {
                path:'ujallat',
                element: <AppArea />,
                children: [
                    {
                        index:true,
                        element: <NewAnimal/>,
                        loader: loadCaretakers

                    },
                ]
            }
        ]
    }
]);

export default router;