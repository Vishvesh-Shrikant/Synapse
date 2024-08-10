import React from 'react'
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';

const Filters = () => {
  const offers=['Lorem Ipsum Dolor','Lorem Ipsum Dolor','Lorem Ipsum Dolor','Lorem Ipsum Dolor']
  const price=['Under 50,000','Under 1,00,000','Under 2,00,000','Above 2,00,000']
  const display=['5.0"- 5.9"', '6.0"-6.9"','7.0"-7.9"','Abobve 8.0"']
  const storage=["32GB", "64GB", "128GB", "256GB"]
  const camera=["Dual Camera", "Triple Camera", "Quad Camera"]
  return (
    <>
      <div className='w-full bg-white font-texts pl-12 py-8 pr-10 rounded-3xl drop-shadow-md'> 
          <div className='flex justify-start items-center p-2 border-b-2 border-gray-300'>
            <TuneOutlinedIcon/>
            <p className='mx-3 font-semibold text-2xl'>Filters:</p>
          </div>
          {/*OFFERS */}
          <div className='flex flex-col justify-center items-start px-2 py-5 border-b-2 border-gray-300 mb-5'>
              <p className='font-semibold text-2xl'>Offers</p>
              <div className='flex flex-col justify-center items-start my-2'>
                {
                  offers.map((offer)=>(
                    <div className='flex'>
                      <input type='radio'></input>
                      <label className='mx-3 text-[#7D7D7D]'> {offer}</label>
                    </div>
                  ))
                }
              </div>
          </div>

          <div className='flex flex-col justify-center items-start px-2 py-5 border-b-2 border-gray-300 mb-5'>
              <p className='font-semibold text-2xl'>Price</p>
              <div className='flex flex-col justify-center items-start my-2'>
                {
                  price.map((price)=>(
                    <div className='flex'>
                      <input type='radio'></input>
                      <label className='mx-3 text-[#7D7D7D]'> {price}</label>
                    </div>
                  ))
                }
              </div>
          </div>

          <div className='flex flex-col justify-center items-start px-2 py-5 border-b-2 border-gray-300 mb-5'>
              <p className='font-semibold text-2xl'>Display Size</p>
              <div className='flex flex-col justify-center items-start my-2'>
                {
                  display.map((display)=>(
                    <div className='flex'>
                      <input type='radio'></input>
                      <label className='mx-3 text-[#7D7D7D]'> {display}</label>
                    </div>
                  ))
                }
              </div>
          </div>

          <div className='flex flex-col justify-center items-start px-2 py-5 border-b-2 border-gray-300 mb-5'>
              <p className='font-semibold text-2xl'>Display Size</p>
              <div className='flex flex-col justify-center items-start my-2'>
                {
                  storage.map((storage)=>(
                    <div className='flex'>
                      <input type='radio'></input>
                      <label className='mx-3 text-[#7D7D7D]'> {storage}</label>
                    </div>
                  ))
                }
              </div>
          </div>

          <div className='flex flex-col justify-center items-start px-2 py-5 border-b-2 border-gray-300'>
              <p className='font-semibold text-2xl'>Camera</p>
              <div className='flex flex-col justify-center items-start my-2'>
                {
                  camera.map((cam)=>(
                    <div className='flex'>
                      <input type='radio'></input>
                      <label className='mx-3 text-[#7D7D7D]'> {cam}</label>
                    </div>
                  ))
                }
              </div>
          </div>
      </div>
    </>
  )
}

export default Filters