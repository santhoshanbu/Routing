import React from 'react';
import {Link} from "react-router-dom";
function Routers(){
    return(
        <div className='menu-container'>
            <Link to="/Home"><div className='menu-home'>HOME</div></Link>
            <Link to="/Games"><div className='menu-games'>GAMES</div></Link>
            <Link to="/Books"><div className='menu-books'>BOOKS</div></Link>
            <Link to="/Mobiles"><div className='menu-mobiles'>MOBILES</div></Link>
            <Link to="/Grosary"><div className='menu-grosary'>GROSARYS</div></Link>
        </div>
    )
}
export default Routers;