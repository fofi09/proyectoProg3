import React from 'react'
import { Link } from 'react-router-dom';
function Menu(){
    return(
       <nav className='bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg'>
        <Link to="/">
        <h1 className='text-2xl font-bold text-white'>menu principal</h1>
        </Link>
        <ul className='flex gap-x-2'>
            {/* <li><a href="#">Home</a></li> */}
        <li className='text-white'>
            <Link to='/perfil'>perfil</Link>
        </li>
        <li className='text-white'>
            <Link to='/registroSecretarias'>registroSecretaria</Link>
        </li>
        </ul>
       </nav>
    )
}
export default Menu;