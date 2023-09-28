/* eslint-disable no-undef */
import { useState } from 'react';
import { CgMenuRightAlt , CgClose } from 'react-icons/cg';

const NavBar = () => {
    const [open , setOpen] = useState(false)
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Products", path: "/products" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Dashboard", path: "/dashboard" }
    ];
    return (
        <nav className="bg-orange-800 py-5">
            <div className=' md:hidden text-2xl' onClick={()=>setOpen(!open)}>
                { 
                    open === true ? <CgClose></CgClose> : <CgMenuRightAlt ></CgMenuRightAlt>
                }
                
            
            </div>
            <ul className={` md:flex absolute duration-1000 py-5  md:static
            ${ open ? 'top-12' : '-top-60'}  bg-orange-400`}>
                {
                    routes.map(route =>
                        <li className="mr-10 hover:bg-orange-800 px-5" key={route.id} >
                            <a href={route.path}>
                                {route.name}</a></li>)
                }
            </ul>

        </nav>
    );
};

export default NavBar;