import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layout/defaultLayout/DefaultLayout";
import { AppArea } from "../../shared";
import { HomePage, NewAnimal, OurAnimals } from "../../features/zoo/components";
import loadArticle from "../../features/zoo/components/HomePage/loadArticle";



const router = createBrowserRouter([
    {
        path: '/',
        element: < DefaultLayout />,
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
                        element: <OurAnimals/>

                    },
                ]
            },
            {
                path:'ujallat',
                element: <AppArea />,
                children: [
                    {
                        index:true,
                        element: <NewAnimal/>

                    },
                ]
            }
        ]
    }
]);

export default router;