import { Outlet } from "react-router";


import * as style from './default-layout.module.css'

const DefaultLayout = () => {
    return(
        <div className={style['default-layout']}> 
            <Outlet />
        </div>
    )
}

export default DefaultLayout;