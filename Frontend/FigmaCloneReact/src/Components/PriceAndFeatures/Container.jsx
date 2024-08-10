import React from 'react'
import android from '../../assets/android.png'
import bg2 from '../../assets/bg2.png'
import storage from '../../assets/storage.png'
import largedisplay from '../../assets/largedisplay.png'
import wirelesscharging from '../../assets/wirelesscharging.png'
import recording from '../../assets/recording.png'
import ram from '../../assets/ram.png'
import camera2 from '../../assets/camera2.png'
import spen from '../../assets/spen.png'


const Container = () => {

    const features=[{id:1, img:android, text:"Android"},{id:2, img:storage, text:"Storage"}, {id:3, img:largedisplay, text:"Large Display"}, {id:4, img:wirelesscharging, text:"Wireless Charging"}, {id:5, img:recording, text:"4K Video Recording"}, {id:6, img:ram, text:"RAM"}, {id:7, img:camera2, text:"Camera"}, {id:8, img:spen, text:"S Pen Support"} ]

  return (
    <div className='py-16 px-10 font-texts flex'>
        <div className='w-1/5 bg-[#DFDFDF] p-5 rounded-lg'>
            <div className='bg-white flex flex-col justify-center items-center p-2 text-center my-3 rounded-2xl'>
                <img src='https://s3-alpha-sig.figma.com/img/813f/136f/5607643fba88fde91fe89c69f19aa186?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T15Gu7DwC2XofUKxoRJUnEMZHyq1pEbZmBqoK9wa52JkyISuMvzfhfErqg22SHdej~v-zd8j-33dmNEY-dp7XaacT~oA6n6HGduUlhURsBPZRv1~5EDGk9Roz2020C0Z-9fGfKgbilBbiAAXexhyp7VGz9Hzi01OaDU3Vr0zm-iVbVnp0MxZo~dtx-ncktwBZz-6XfrXbTkVqsBMSfR8BmcEZUSHe~yvPbdCVfYGAq6LgA52w09HCQrW7mXjwFczkpbIhq88Ceg4gxZucHG3dsHRFinNVOhfVHkccvc7Nqb07DLlBn1Bx3aBvMBJwJHkuycZdi-Qym61pGOP4HDFTg__'></img>
                <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className='bg-white flex flex-col justify-center items-center p-2 text-center my-3 rounded-2xl'>
                <img src='https://s3-alpha-sig.figma.com/img/813f/136f/5607643fba88fde91fe89c69f19aa186?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T15Gu7DwC2XofUKxoRJUnEMZHyq1pEbZmBqoK9wa52JkyISuMvzfhfErqg22SHdej~v-zd8j-33dmNEY-dp7XaacT~oA6n6HGduUlhURsBPZRv1~5EDGk9Roz2020C0Z-9fGfKgbilBbiAAXexhyp7VGz9Hzi01OaDU3Vr0zm-iVbVnp0MxZo~dtx-ncktwBZz-6XfrXbTkVqsBMSfR8BmcEZUSHe~yvPbdCVfYGAq6LgA52w09HCQrW7mXjwFczkpbIhq88Ceg4gxZucHG3dsHRFinNVOhfVHkccvc7Nqb07DLlBn1Bx3aBvMBJwJHkuycZdi-Qym61pGOP4HDFTg__'></img>
                <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className='bg-white flex flex-col justify-center items-center p-2 text-center my-3 rounded-2xl'>
                <img src='https://s3-alpha-sig.figma.com/img/813f/136f/5607643fba88fde91fe89c69f19aa186?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T15Gu7DwC2XofUKxoRJUnEMZHyq1pEbZmBqoK9wa52JkyISuMvzfhfErqg22SHdej~v-zd8j-33dmNEY-dp7XaacT~oA6n6HGduUlhURsBPZRv1~5EDGk9Roz2020C0Z-9fGfKgbilBbiAAXexhyp7VGz9Hzi01OaDU3Vr0zm-iVbVnp0MxZo~dtx-ncktwBZz-6XfrXbTkVqsBMSfR8BmcEZUSHe~yvPbdCVfYGAq6LgA52w09HCQrW7mXjwFczkpbIhq88Ceg4gxZucHG3dsHRFinNVOhfVHkccvc7Nqb07DLlBn1Bx3aBvMBJwJHkuycZdi-Qym61pGOP4HDFTg__'></img>
                <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className='bg-white flex flex-col justify-center items-center p-2 text-center my-3 rounded-2xl'>
                <img src='https://s3-alpha-sig.figma.com/img/813f/136f/5607643fba88fde91fe89c69f19aa186?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T15Gu7DwC2XofUKxoRJUnEMZHyq1pEbZmBqoK9wa52JkyISuMvzfhfErqg22SHdej~v-zd8j-33dmNEY-dp7XaacT~oA6n6HGduUlhURsBPZRv1~5EDGk9Roz2020C0Z-9fGfKgbilBbiAAXexhyp7VGz9Hzi01OaDU3Vr0zm-iVbVnp0MxZo~dtx-ncktwBZz-6XfrXbTkVqsBMSfR8BmcEZUSHe~yvPbdCVfYGAq6LgA52w09HCQrW7mXjwFczkpbIhq88Ceg4gxZucHG3dsHRFinNVOhfVHkccvc7Nqb07DLlBn1Bx3aBvMBJwJHkuycZdi-Qym61pGOP4HDFTg__'></img>
                <p>Lorem ipsum dolor sit amet</p>
            </div>

        </div>

        <div className='w-4/5 mx-5 flex flex-col'>
            <p className='text-2xl font-semibold'>Find with Price range</p>

            <div className=' flex justify-center items-start w-full'>
                <div className=' flex flex-col w-2/3'>
                    <div className='flex items-center w-full'>
                        <div className='w-1/3 h-80 bg-cover bg-center mr-5 rounded-2xl flex items-end justify-center text-center' style={{backgroundImage:'url("https://s3-alpha-sig.figma.com/img/2c8c/0fb0/eae0cd21c45cff6c69509041afb00fee?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V234blBXZQxgiEzc67Vmnsl-K5Xe9I0Y1esGm9NKbJ6lhwpN72M8S8qiIVGtyt851NPPTDBDifQ2I4KaHHd3lPFa~9K7DLnKK6hLUILJG3ePEVR-bccLKPsQLiyyazv4G0cOGN9dy-JnT48dOSNg1zccPwVDeG7hl4fG~JuQ9K081LSpkoQUA3hEqxhwipAT5u~Na8WcmqcF0D-zfCgbQsuwsuwn0fKtmO6Gp79ZqgbvSbtTnrc~0pB2OgAJRK3RlHL2~nJvJrGHLeHLPsxh6KADXJS5vuk-n2Q-06ONdoSid3G4djJHdJyHKpgPkxF65xY3GyJCexmPaOHZVfWwug__")'}}>
                        
                        
                            <p className='bg-[#FAFAFA4D] font-semibold w-5/6 mb-5 p-2 rounded-xl'>Under 30,000</p>
                        </div>

                        <div className='w-1/2 h-80 bg-cover bg-center ml-5 rounded-2xl flex items-end justify-center text-center' style={{backgroundImage:'url("https://s3-alpha-sig.figma.com/img/e8b7/f30e/c1d6b32af52de51a546d62f76a554cd4?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JolNnRqqnT87yTd~aYW74cqsNwu6RvRwUoG-80FYZri7MROcrTJm9iwH1qT9g9J5jSkcplKh9ZgpmfjSMGVPfKm5eE389xewinRFPBS5w751KoXdzVPkDw7pjW6MpREMoUyrUiJxb5OZzdjIMGUYby5wzdPBdC-429mElfJPTpRPNLgsQbS0dbRrtxsLSCeWXSo7q7Zre36R20d8jVVWKR4Iet48oumEx~ZOfRqhS1bwUOpdIddgQpH03HEHZIL7qG7DvdHlhdWAEyND9CfE9Kird2gU9dKXNWWCLWrN050Yeh2mXqEmi6AKNFOzJ9tEIRObLBt32lZtL7Gz~AjeTg__")'}}>
                        
                        
                        <p className='bg-[#FAFAFA4D] font-semibold w-5/6 mb-5 p-2 rounded-xl'>Under 10,000</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-end w-full flex-row-reverse my-5'>
                        <div className='w-1/3 h-80 bg-cover bg-center ml-5 rounded-2xl flex items-end justify-center text-center' style={{backgroundImage:'url("https://s3-alpha-sig.figma.com/img/fa48/0e96/b77b38358e0ee143b36448e3dad29384?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CSjQIsItBFNDbBKnuh3nawRvxk~YH1Pvmy8LOKRRJdxfHsEP7B9gxCkM6DWN6COL7hazbDra6SWPqLyTh9DmF42kuOnp87h0cyB7JxOlRvg265QguHstrro7XTLUcx8M-WB3MmRp6AreL2EcnH~iVeYKgkyBd6Z~300Dt8g~wXOvJvCSnRkzSvwHu2VkMu2mjdPA~n5leZBEKYRxeiprRdUUtubQPrGuTde9ZYRPYa7yl8cmRy4teixFZSI6Pfu5o0uPQUTz5vny~7Sssq~Jlf-Vs8YclZEDTh2HgFQD6ZjgK6~v-ozn2WBSrxoqmrCMlFW0Tp172EfxTiA-kBh0WA__")'}}>
                        
                        <p className='bg-[#FAFAFA4D] font-semibold w-5/6 mb-5 p-2 rounded-xl'>Under 40,000</p>
                        </div>

                        <div className='w-1/2 h-80 bg-cover bg-center mr-5 rounded-2xl flex items-end justify-center text-center' style={{backgroundImage:'url("https://s3-alpha-sig.figma.com/img/1a04/d576/79ef82f84c0fae66218dbd8fde38d262?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iPszLbUHXFaVGkLnFW0mPWLgFre7fHlkeugjZ0UGhYj8mQoujJKLf5ZITKC3QaQuqpt-q8XLl6YFpLwMHOC742Dh5kYufc6qt9gZH0MvA4fPgNPcjeP2iuZzLujQlrKvMXB2ZEZy1YXNqpPZDgtHCht-B5rqIy9C3kyvmeT7ZknFLPljRv0op6MnhHAmh4MKFNd-WBlGtCsXccD9u0-5ryeMgTEC4njPzPLkCr2jw5fksavEeYWapgYoA-z4-JaUvQVjlqX0iSg0Rb168~hZB1WxCJ3Xijx2GM9qdBWEs-6aEUhxTn~U7f9p2R-gMVIi~lBz8~UAWLP~PpjLG9dYvQ__")'}}>
                        
                        <p className='bg-[#FAFAFA4D] font-semibold w-5/6 mb-5 p-2 rounded-xl'>Under 20,000</p>
                        </div>
                    </div>
                </div>

                <div className=' w-1/3 h-[41.25rem] bg-cover bg-center rounded-2xl flex justify-center items-end text-center' style={{backgroundImage:'url("https://s3-alpha-sig.figma.com/img/a8af/ea11/82445a34f7676685a1587090cae30d81?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RmZJiSrT5xxEuY7KKQug03jcTrGEZxuoNJBhdb0a7hcfCYsOWitFK3pbRjoP5hDql12Ckfk9K9LhCIwQp1EvF6gumYU0NmgPCOiaIL8M74CWFRN1mC97YajEBwn2S91RPJiqh0QpA1kvr36uyPfGXydzXlw9YKmrF6zz-zpobc-0rml12BsgoTlPwJ4cvj3GdwKV3tYaileRZl0tEv-u-r1TJeTsBCRtFjcdyxabfmlEN2Ri~K3H733bl4A~ZzPCDSjQqdHZb37e8rLOCfi4wqzwURgiiwgeGigvHYV2Fr0eOJLCpKHxl~yeqbcUDccs4x-ivoLd2T6n5BEbkRp-aQ__")'}}>


                <p className='bg-[#FAFAFA4D] font-semibold w-5/6 mb-5 p-2 rounded-xl'>Under 30,000</p>
                </div>
            </div>


            <div className=' mt-5 flex-col'>
                <p className='text-2xl font-semibold'>Find with Popular features</p>

                <div className='w-full grid grid-cols-4 gap-6 mt-5'>
                    {
                        features.map((feature)=>(
                        <div className='flex flex-col justify-center items-center p-5 rounded-lg drop-shadow-sm' style={{backgroundImage:`url(${bg2})`}} key={feature.id}>
                            <img src={feature.img}></img>
                            <p className='font-semibold my-3'>{feature.text}</p>
                        </div>

                        ))
                    }
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Container