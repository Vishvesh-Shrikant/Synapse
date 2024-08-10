import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import headerbg from '../../assets/headerbg.png'
import logo from '../../assets/logo.png'
import heroImg from '../../assets/heroImg.png'

const Header = () => {
    console.log(headerbg)
  return (
    <>
        <div className='w-full h-full'>
            <div className='h-10 flex justify-center items-center bg-[#013047] text-[#FCFCFC] font-texts'>
                <div className='flex justify-center items-center mx-2'>
                    <WhatsAppIcon fontSize='small'/>
                    <p className='text-sm mx-2'>(845) 652-8592</p>
                </div>
                <div className='flex justify-center items-center mx-2'>
                    <EmailOutlinedIcon fontSize='small'/>
                    <p  className='text-sm mx-2'>Husnain@gmail.com</p>
                </div>
            </div>

            <div className='w-full relative h-full'>
                {/*BACKGROUND */}
                <div className='w-full absolute -z-30 top-0 left-0 h-full'>
                    <img src={headerbg} className='w-full opacity-20 h-full' />
                </div>
                {/*LOGO */}
                <div className='h-24 absolute -top-8 left-10'>
                    <img src={logo} className='h-full' />
                </div>
                {/*HEADER */}
                <div className='w-full h-14 z-10 px-20 py-10 flex justify-end items-center font-texts '>
                    {/*NAVS */}
                    <div className='w-3/5 flex justify-between items-center mx-10'>
                        <div className='flex justify-center items-center border-2 border-black rounded-full px-8 py-2 font-semibold cursor-pointer'>
                            <p>Home</p>
                        </div>
                        <div className='flex justify-center items-center px-8 py-2 text-[#7D7D7D] cursor-pointer'>
                            <p>About</p>
                        </div>
                        <div className='flex justify-center items-center px-8 py-2 text-[#7D7D7D] cursor-pointer'>
                            <p>Customer Support</p>
                        </div>
                        <div className='flex justify-center items-center px-8 py-2 text-[#7D7D7D] cursor-pointer'>
                            <p>Explore More </p>
                        </div>
                    </div>  
                    {/*CONTACT US */}
                    <div className='bg-[#219EBC] mx-10 px-8 py-2 flex justify-center items-center rounded-full text-[#FCFCFC] cursor-pointer'>
                        <p>Contact Us</p>
                    </div>
                </div>

                {/* HERO SECTION */}
                <div className='w-full px-20 flex justify-evenly items-center font-texts font-semibold text-6xl'>
                    <div className='w-1/2'>
                        <p>Your Destination for Cutting-Edge Mobile Devices</p>
                    </div>
                    <div className='w-2/5'>
                        <img src={heroImg} className='w-full'/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header