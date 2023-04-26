import React from 'react'


import {navLinks} from './navItems';
import Link from "next/link";

import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SignpostOutlinedIcon from '@mui/icons-material/SignpostOutlined';
import EditRoadOutlinedIcon from '@mui/icons-material/EditRoadOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import { Interface } from 'readline';



// Function to display an icon depending on the section that it represents
const iconToShow = (text: string) => {
  switch (text) {
    case 'Home':
      return <HomeOutlinedIcon className='nav__content--icon' fontSize="large" />
    case 'Easy Trip':
      return <SignpostOutlinedIcon className='nav__content--icon' fontSize="large" />
    case 'Orders':
      return <LocalMallOutlinedIcon className='nav__content--icon' fontSize="large" />
    case 'Trips':
      return <EditRoadOutlinedIcon className='nav__content--icon' fontSize="large" />
    case 'Drivers':
      return <PersonOutlineOutlinedIcon className='nav__content--icon' fontSize="large" />
    default:
      return <LocalShippingOutlinedIcon className='nav__content--icon' fontSize="large" />
  }
  
};

interface Props {
  open: boolean;
  setOpen(arg: boolean): void;

}


function Sidebar(props: Props) {
  const { open, setOpen } = props;
  const handleSidebar = () => {
    setOpen(!open)
  }
  return (
    <nav className={`nav ${open ? 'notCollapsed' : 'collapsed'}`} >
      <MenuIcon  className='toggler' fontSize="large"
        onClick={handleSidebar}
      />
      {navLinks.map((link, index) => {
          return (
            <ul>
              <Link href={link.path} className='nav__content'>
                {iconToShow(link.name)}
                <li className='nav__content--text'key={index}>{link.name}</li>
              </Link>
            </ul>
          );
        })}
    </nav>
  )
}

export default Sidebar;
