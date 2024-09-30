import React from 'react'
import { GrPhone } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";



function Notificationbar() {
  return (
    <div className='flex flex-col-reverse m-5 border-red-400 text-sm items-end bg-slate-900 text-white'>
      <p className='p-1 flex items-center justify-center gap-2  '><GrPhone /><b>Telefono:</b> 442 173 4280 <MdOutlineEmail /> <b>Correo:</b> ventas@plantasdeluzmex.com</p>
    </div>
  )
}

export default Notificationbar