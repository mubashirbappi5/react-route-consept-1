import { useState } from "react";
import Nav from "./Nav";
import { FaBars } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";


const Navber = () => {
  const[open, setopen] = useState(false)
    const navbarRoutes = [
        {
          id: 1,
          name: 'Home',
          path: '/',
        },
        {
          id: 2,
          name: 'About Us',
          path: '/about',
        },
        {
          id: 3,
          name: 'Products',
          path: '/products',
        },
        {
          id: 4,
          name: 'Services',
          path: '/services',
        },
        {
          id: 5,
          name: 'Contact',
          path: '/contact',
        },
      ];
    return (
      <>
     
      
      
      
        <div className="bg-red-500"> 
         <div className="btn  md:hidden bg-transparent border-none " onClick={()=>setopen(!open)}>
        {
          open === true ? <IoIosCloseCircle className="text-2xl" />:<FaBars  />
        }
        </div>
         <div className={`   md:flex justify-center duration-1000 absolute md:static ${open===true?"p-4 rounded-md shadow-md ml-6 bg-red-600   top-30":" rounded-md shadow-md -top-60 bg-red-500 p-4"}`}>
          {
              navbarRoutes.map(nav =><Nav key={nav.id} nav={nav}/>)
          }
          </div>
          
      </div>
          
      
      
        
        <div>
          <h1>hi this is me  </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem recusandae consequuntur nostrum commodi unde error libero officiis, incidunt quam, sed nisi quae nam est ad repudiandae odio quisquam sunt ea.</p>
        </div>
        </>
    );
};

export default Navber;