import React from 'react'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';

const SingleProduct = ({image}) => {
  return (
    <div className='w-full font-texts rounded-3xl bg-white px-8 pt-6 mx-6 drop-shadow-md'>
        <div className=' flex justify-center items-end my-3'>
          {/*RADIO */}
          <div className='w-1/4 flex flex-col items-center justify-center -mt-10'>
              <div className='w-4 h-4 rounded-full border border-gray-600 flex justify-center items-center'>
                <div className='w-2 h-2 rounded-full bg-gray-400 my-2'></div>
              </div>
              <div className='w-2 h-2 rounded-full bg-[#000573] my-2'></div>
              <div className='w-2 h-2 rounded-full bg-[#E8E8E8] my-2'></div>
              <div className='w-2 h-2 rounded-full bg-[#303030] my-2'></div>
          </div>
          {/*IMAGE */}
          <div className='w-3/5'>
            <img src={image}></img>
          </div>
        </div>

        <div className='flex flex-col mt-8'>
            <p className='text-lg'>Mobile Name</p>
            <div className=' w-full flex justify-between items-center'>
                <p className='text-xl font-semibold'>Rs. 32,799.00</p>
                <div className='text-[#FB8500] text-sm flex justify-center items-center'>
                  <StarOutlinedIcon fontSize='small'/>
                  <p>4.5</p>
                </div>
            </div>
            <ul className=' list-disc mx-9 text-[#7D7D7D] text-sm my-2'>
              <li>Lorem ipsum dolor </li>
              <li>sitamet  consectetu</li>
              <li>Id dui duis morbi nullam </li>
            </ul>

            <div className='w-full flex justify-between items-center my-3'>
              <button className='text-white w-1/2 bg-[#219EBC] py-2 rounded-full'>Order Now</button>
              <div className=' text-white bg-[#FB8500] p-2 rounded-full'>
                <CallOutlinedIcon/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct