import React from 'react'

const Dropdowns = () => {
  return (
    <div className='h-28 flex items-center justify-center bg-[#013047D9] text-xl font-texts text-white mb-20'>
        <div className='mx-5 w-1/6 flex justify-center items-center outline-none border-2 border-white rounded-xl'>
            <select className='w-full bg-[#D9D9D91A] p-3 outline-none'>
                <option>Price Range</option>
            </select>
        </div>
        <div className='mx-5 w-1/6 flex justify-center items-center outline-none border-2 border-white rounded-xl'>
            <select className='w-full bg-[#D9D9D91A] p-3 outline-none'>
                <option>Brand</option>
            </select>
        </div>
        <div className='mx-5 w-1/6 flex justify-center items-center outline-none border-2 border-white rounded-xl'>
            <select className='w-full bg-[#D9D9D91A] p-3 outline-none'>
                <option>Feature</option>
            </select>
        </div>
        <div className='mx-5 w-1/6 bg-[#219EBC] flex justify-center items-center rounded-xl'>
            <button className='w-full outline-none p-3'>Search</button>
        </div>
    </div>
  )
}

export default Dropdowns