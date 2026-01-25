import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { href, Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import avatarImg from '../assets/avatar.png'
import { useSelector } from 'react-redux';
import { useAuth } from '../context/AuthContext';

const navigation =[
    {name: "Dashboard", href:'/dashboard'},
    {name: "Orders", href:'/order'},
    {name: "Cart Page", href:'/cart'},
    {name: "Check Out", href:'/checkout'},
]

const Navbar = () => {
    const [isDropdownOpen,setIsDropdownOpen] = useState(false)
    const cartItems = useSelector(state => state.cart.cartItems);
    const {currentUser, logout} = useAuth();

    const handleLogout = () =>{
        logout()
    }

  return (
    <header className='max-w-screen-2xl mx-auto px-4 py-6'>
        <nav className='flex justify-between items-center'>
            <div className='flex items-center md:gap-6 gap-4'>
                <Link to ="/">
                    <FaBars  className='size-6'/>
                </Link>
                <div className='relative sm:w-72 w-40 space-x-2 left-10'>
                    <FaSearch className='absolute inline-block left-2 inset-y-2'/>
                    <input type="text" placeholder='search here' className='bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none' />
                </div>
            </div>


            <div className='relative flex items-center md:space-x-3 space-x-2'> 
                <div>
                    {
                        currentUser? 
                         <>
                            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                <img src={avatarImg} alt="" className={`size-7 rounded-full 
                                    ${currentUser ? 'ring-2 ring-blue-500' : ''}`}/>
                            </button>

                            {
                                isDropdownOpen && (
                                    <div>
                                        <ul>
                                            {
                                                navigation.map((item) => (
                                                     <li key={item.name}>
                                                        <Link to={item.href}>
                                                          {item.name}
                                                        </Link>
                                                    </li>
                                                )
                                                
                                                )
                                            }

                                            <li onClick={handleLogout} className="list-none">
                                        <button className="bg-red-500 hover:bg-red-600
                                         text-white font-semibold py-2 px-4 rounded-lg
                                          shadow-md hover:shadow-lg transition-all duration-300 
                                          active:scale-95 cursor-pointer">
                                            Logout
                                        </button>
                                        </li>
                                        </ul>
                                    </div>
                                )
                            }
                        </> 
                        : 
                        
                      <Link to='/login'><FaUser className='size-6'/> </Link>  
                    }
                </div>
                
                <button className='hidden sm:block'> 
                    <FaRegHeart className='size-6'/> 
                </button>

                <Link to='/cart' className='bg-yellow-300 p-1 sm:px-6 px-2 flex items-center rounded-sm'>
                    <MdOutlineShoppingCart />

                    {
                        cartItems.length > 0 ? <span className='text-sm font-semibold sm:ml-1'>{cartItems.length}</span> :
                        <span className='text-sm font-semibold sm:ml-1'>0</span>
                    }
                    
                </Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar 