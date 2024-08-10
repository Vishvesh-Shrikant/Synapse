import React from 'react'
import logo from '../../assets/logo.png'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';

const Footer = () => {

    const mobiles=["Galaxy A15", "Mi", "Oppo", "Apple", "Techno", "Techno", "Vivo","Lenovo","Lenovo","Samsung", "Realme", "Realme" ]
    let counter=0
    const moreInfo=["Customer Support","About Us","Contact Us", "E-mail Support", "Community", "Give Feedback", "Service and Warranty"]

  return (
    <div className='w-full h-full relative bg-[#013047D9] text-center font-texts '>
        <div className='opacity-10 w-full h-full absolute ' >
            <img src="https://s3-alpha-sig.figma.com/img/e4c3/a1de/8f5274f5dda305074d7321aed4d094b4?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cq9R23MS~BFc2g9rk~EijPL6M0Jf1kTgh3rnAQosW6mxwVhyrlCLtLBiMqia6G09VUgIoIr651dHLp1VMx-E3HOxSjHMfJzrsIwE4~NL7BIuNL-7HpJWqGpcsYLrsdoatbcGd0Fd9E619ckLERUO7skWbZE98G3NgXKmVZWA8C3RQZID2plbZbmra96SfTlxkbwZ4UBTIf4WtnCA4He8Smbfjip9Fbd4LnBDhcgoMEbFM09uaLgNRfIB2UMH4tJ1qG4j-E5UcZ~bk2iguhD0yqX~7mCp-bg5vwN4KkK8Ak3kqkRIz1AChPgqAaTZsBrFxWaYSCbvm~Y1NwpBByHwQw__" className='w-full h-full'></img>
        </div>
       
        <div className='w-full flex justify-between items-center px-16 py-10'>
            <div className=' flex flex-col justify-center items-start w-1/3'> 
                <img src={logo} className='w-1/3'></img>
                <p className='text-2xl text-[#FB8500] my-4 font-semibold'>New Mobile Phones</p>
                <div className='grid grid-cols-3 w-full gap-5 text-start'>
                    {
                        mobiles.map((mob)=>(
                            <p className='text-white text-xl font-semibold'>{mob}</p>
                        ))
                    }
                </div>
            </div>     

            <div className='flex flex-col justify-center items-center text-start '>
                <p className='text-2xl text-[#FB8500] my-4 font-semibold'>More Information</p>
                <div>
                {
                    moreInfo.map((info)=>(
                        <p className='text-white my-1 font-semibold text-lg'>{++counter}. {info}</p>
                    ))
                }
                </div>
            </div>   

            <div className=' flex flex-col justify-center items-start w-1/3'>
                <div className='w-1/2 text-2xl text-[#FB8500] flex justify-between items-center cursor-pointer mb-5'>
                    <FacebookOutlinedIcon fontSize='large' />
                    <TwitterIcon fontSize='large'/>
                    <InstagramIcon fontSize='large'/>
                </div>
                

                <div className='w-3/5 bg-white/15 text-white text-2xl flex flex-col justify-center items-center p-7 rounded-xl '>
                    <p>Contact us immediately to receive further details</p>
                    <div className=' text-white bg-[#FB8500] p-2 rounded-full my-2 w-12'>
                        <CallOutlinedIcon/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer