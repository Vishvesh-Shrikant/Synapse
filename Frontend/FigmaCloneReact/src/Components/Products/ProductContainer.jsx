import React from 'react'
import Dropdowns from './Dropdowns'
import Filters from './Filters'
import SingleProduct from './SingleProduct'
import prod1 from '../../assets/prod1.png'
import prod2 from '../../assets/prod2.png'
import prod3 from '../../assets/prod3.png'
import prod4 from '../../assets/prod4.png'


const ProductContainer = () => {

  const images=[prod1, prod2, prod3, prod4]



  return (
    <>  
        <div className='w-full pb-16'>
            <Dropdowns/>
            <div className='w-full px-10 flex mb-8'>
              <div className='w-1/3'>
                <Filters/>
              </div>
              <div className='w-2/3 grid grid-cols-2 gap-6'>
              {
                  images.map((img)=>(
                    <SingleProduct image={img}/>
                  ))
              }
              </div>
            </div>
            <div className='flex justify-end items-center px-10 text-xl font-texts font-semibold '> 
              <p className='hover:underline cursor-pointer'>View All</p></div>
        </div>
        
    </>
  )
}

export default ProductContainer