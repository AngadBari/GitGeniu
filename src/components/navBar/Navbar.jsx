import React from 'react'
import logo from '../../assets/images/Einstein.png'

const Navbar = () => {
  return (
    <>
      <nav>
        <div className=' bg-white h-20  w-full shadow-lg flex justify-between fixed top-0 left-0 z-20' > 

            <div className=' flex justify-between items-center overflow-hidden px-2 md:px-20 lg:px-20  md:gap-5 lg:gap-5'>
                <p className=' font-mono text-[15px] md:font-bold md:text-2xl  lg:font-bold lg:text-2xl'> GitGenius</p>
                <img className=' h-30 w-fit object-cover ' src={logo} alt="" />
            </div>

            <div className=' flex justify-between items-center gap-5 px-10 md:px-20 lg:px-20'>
               <a href="https://github.com/AngadBari"> <p className=' md:text-2xl  lg:text-2xl'><i className="ri-github-line"></i></p></a>
                <a href="https://x.com/Angad_Bari"><p className=' md:text-2xl  lg:text-2xl'><i className="ri-twitter-x-line"></i></p></a>
                <a href="https://www.instagram.com/angad_bari_01/"><p className=' md:text-2xl  lg:text-2xl'><i className="ri-instagram-line"></i></p></a>
            </div>

        </div>
      </nav>
    </>
  )
}

export default Navbar