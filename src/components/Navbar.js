import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function Navbar(props) {

    const location = useLocation();
    const { darkMode, mode } = props;

    const [open, setOpen] = useState(false);
    const openNav = () => { if (!open) setOpen(!open); }
    useEffect(() => {

        openNav();
        //eslint-disable-next-line
    }, []);


    return (
        <>
            <div className={`bg-${mode === 'moon' ? 'white' : 'black'}
            text-gray-${mode === 'moon' ? '600' : '300'} 
            font-medium fixed top-0 left-0 right-0 py-3
            transition-all duration-300 ${open ? 'shadow-md' : ''}
            shadow-${mode === 'moon' ? 'black' : 'gray-200'}`}>

                <nav className='md:flex justify-between'>

                    {/* logo and name of the app */}
                    <div className={`flex items-center text-center my-3 lg:ml-11
                    ease-in-out duration-500 md:hover:scale-110 cursor-pointer`}>

                        <img src='logo.svg' alt='.' className='w-10 h-7 mr-1.5' />
                        <Link to='/' className={`text-${mode === 'moon' ? 'black' : 'white'} 
                        ease-in-out duration-200`}>
                            NEWS | MONKEY
                        </Link>

                    </div>

                    <i className={`fa-solid fa-${open ? 'bars' : 'xmark'} 
                    ease-in-out duration-300 cursor-pointer hover:scale-110
                    fixed top-6 right-2 text-${open ? 'xl' : '2xl'} md:hidden 
                    hover:text-${mode === 'moon' ? 'black' : 'white'}`}
                        onClick={() => setOpen(!open)}></i>

                    {/* list of the pages */}
                    <div className={`list absolute md:top-3 
                    md:right-3 transition-all duration-300 lg:mr-11
                    bg-${mode === 'moon' ? 'white' : 'black'} 
                    ${open ? 'activeN' : 'activeY'}`}>


                        <ul className='md:flex md:items-center'>
                            <li className={`hover:text-${mode === 'moon' ? 'black' : 'white'} 
                            ease-in-out duration-300 my-4 mx-5 hover:scale-110 flex justify-center
                            ${location.pathname === '/Home' ? `scale-125
                            text-${mode === 'moon' ? 'black' : 'white'}` : ''}`}
                                onClick={openNav}>
                                <Link to="/Home">Home</Link>
                            </li>
                            
                            <li className={`hover:text-${mode === 'moon' ? 'black' : 'white'} 
                            ease-in-out duration-300 my-4 mx-5 hover:scale-110 flex justify-center
                            ${location.pathname === '/About' ? `scale-125
                            text-${mode === 'moon' ? 'black' : 'white'}` : ''}`}
                                onClick={openNav}>
                                <Link to="/About">About</Link>
                            </li>
                            
                            <li className={`hover:text-${mode === 'moon' ? 'black' : 'white'} 
                            ease-in-out duration-300 my-4 mx-5 hover:scale-110 flex justify-center
                            ${location.pathname === '/Contact' ? `scale-125
                            text-${mode === 'moon' ? 'black' : 'white'}` : ''}`}
                                onClick={openNav}>
                                <Link to="/Contact">Contact</Link>
                            </li>

                            <i className={`fa-solid fa-${mode} px-2 text-lg cursor-pointer 
                            ease-in-out duration-500 hover:scale-110 flex justify-center
                            hover:text-${mode === 'moon' ? 'black' : 'white'} `}
                                onClick={darkMode}></i>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}
