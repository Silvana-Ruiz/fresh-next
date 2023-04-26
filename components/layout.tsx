import React from 'react'
import { ReactNode } from "react";
import { useState } from 'react'; 

import Sidebar from './sidebar'

interface Props {
  children: ReactNode;
}
function Layout({children}: Props) {
  const [open, setOpen] = useState(true);
  
  return (
    <div className='grid-container'>
      <Sidebar open={open} setOpen={setOpen}/>
      <section className={`main-content ${open ? 'main-content_large' : 'main-content_small'}`}>{children} </section>
    </div>
  )
}

export default Layout
