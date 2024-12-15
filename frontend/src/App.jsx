import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ChatIcon from '@mui/icons-material/Chat';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';


function App() {
    return (
    <div className=' min-h-screen grid grid-cols-11  gap-4 p-5 bg-gray-300 '>
        <div className='  col-span-2 px-5  bg-white rounded-xl shadow-md '>
            <div className='font-bold  text-3xl text-center p-5 mb-2 '>
                <h1> <span className=' text-emerald-500 '>Zynn</span>Dia</h1>
            </div>
            <ul className='   '>
                <li className='list-content-style ' >
                    <HomeIcon/>
                    <p>Dashboard</p>
                </li >
                <li className=" list-content-style ">
                    <PeopleIcon/>
                    <p>Customer</p>
                </li>
                <li className=" list-content-style ">
                    <InventoryIcon/>
                    <p>Products</p>
                </li>
                <li className=" list-content-style "> 
                    <ShoppingCartIcon/>
                    <p>Orders</p>
                </li>
                <li className=" list-content-style ">
                    <ChatIcon/>
                    <p>Chat</p>
                </li>
                <li className=" list-content-style ">
               < CalendarMonthIcon/>
                    <p>Calender</p>
                </li>
                
            </ul>

            <ul className=' mt-14 '>
                <li className=" list-content-style ">
                    <SettingsIcon/>
                    <p>Setting</p>
                </li>
                <li className=" list-content-style ">
                    <LogoutIcon/>
                    <p>Log Out</p>
                </li>
            </ul>
        </div>
        <div className=' px-5 col-span-9  '>
            <div>

            </div>
        </div>
    </div>
  )
}

export default App
