import React from 'react'
import logo from "./assets/logo.png"
const App = () => {
  return (
    <nav className=' h-20 w-screen flex items-center gap-1 border flex-grow border-slate-950 '>
       <div className=' w-3/6 h-4/5 flex gap-16 justify-end flex-shrink'> 
            <div className=' flex items-center '><img src={logo} alt="" className='size-10' /></div>
            <div className='h-full w-1/8 border-black  flex justify-center items-center active:border-b-2 '>Home</div>

            <div className='h-full w-1/8 border-black  flex justify-center items-center   border-b-2'>Gift</div>

            <div className='h-full w-1/8 border-black  flex justify-center items-center  border-b-2'>Order</div>

            <div className='h-full w-1/8 border-black  flex justify-center items-center  border-b-2'>Pay</div>

            <div className='h-full w-1/8 border-black  flex justify-center items-center  border-b-2'>Store</div>
       </div>
       <div className='border-black border w-3/6 h-4/5 flex items-center justify-center gap-20'>
        <div className='w-64 h-8 border border-black'>  <input type="text" /></div>
       <i className="fa-regular fa-user border-b-black border h-6"></i>

       </div>
    
    
    </nav>
  )
}

export default App