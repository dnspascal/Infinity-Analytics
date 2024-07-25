import {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {useLocation, useNavigate} from "react-router";
import {navbarItems} from "../constants/index.js";

const Navbar = () => {
    const [denis, setNav] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();

    const handleNav = () => {
        setNav(!denis);
    }


    return (<div className='text-white flex justify-between items-center h-24 max-w-[1240px] w-screen mx-auto px-4'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] italic'>INFINITY</h1>
        <ul className='hidden md:flex gap-2 h-8'>
            {navbarItems.map((item, i) => (<li
                    onClick={()=>navigate(item.link)}
                    key={i}
                    className={`${location.pathname === item.link && "border-b-2 border-[#00df9a] text-[#00df9a]"} cursor-pointer p-4 hover:bg-[#00df9a] flex justify-center items-center hover:rounded hover:text-black`}>{item.text}</li>

            ))}
        </ul>
        <div onClick={handleNav} className='md:hidden '>
            {!denis ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}

        </div>
        <div
            className={!denis ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-700' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 italic'>INFINITY</h1>
            <ul className='uppercase p-4'>
                {
                    navbarItems.map((item, i) => (<li key={i}>
                        <li onClick={()=> {
                            navigate(item.link); handleNav()
                        }} key={i} className="p-4 border-b border-gray-600 ">{item.text}</li>

                    </li>))
                }
            </ul>
        </div>
    </div>)
}

export default Navbar
