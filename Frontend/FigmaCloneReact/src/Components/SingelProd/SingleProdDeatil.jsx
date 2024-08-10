import React from 'react'
import bg1 from '../../assets/bg1.png'


import battery from '../../assets/battery.png'
import camera from '../../assets/Camera.png'
import display from '../../assets/Display.png'
import memory from '../../assets/Memory.png'
import singleBrand from '../../assets/singleBrand.png'

const SingleProdDeatil = () => {

    const prodInfo=[ {id:1, img:battery, text:"Battery"},{id:2, img:camera, text:"Camera"}, {id:3, img:memory, text:"Memory"}, {id:4,img:display, text:"Display"}, {id:6, img:singleBrand, text:"Brand"}]

  return (
    <div className='w-full h-full relative bg-[#013047CC] text-center font-texts'>
        <div className=' opacity-20 w-full h-full absolute ' >
            <img src={bg1} className='w-full h-full'></img>
        </div>
        <div className='w-full flex justify-center items-center'>
            <p className='text-6xl font-texts p-10 text-white w-3/5'>Lorem ipsum dolor sit amet</p>
        </div>
        
        <div className='w-full flex justify-center items-center py-10 px-20'>
            <div className='w-1/4 flex flex-col justify-center items-start'>
                {
                    prodInfo.map((prod)=>(
                        <div className='flex justify-between items-center w-full my-6 font-texts' key={prod.id}>
                            <img src={prod.img}/>
                            <div className='flex flex-col justify-center items-start'>
                                <p className='text-2xl font-semibold text-white'>{prod.text}</p>
                                <p className='text-sm'>Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='w-2/3 h-full flex flex-col justify-center items-center'>
                <img src="https://s3-alpha-sig.figma.com/img/a824/ea35/777d0374e3c90f288dd7d46f6c6f7d2c?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kIn9R3Zq1IQJhu7DeNz1iRQFunlnkdQTdAEG-KIdVOqFe77mHrwZPFP0h6z5ZLfjcKfb9VT94~MtuFABXMQf8YlajlqIJbH5~fmyBYgJ2sZWn7qQQUuJ6Pn7jG6EHZJgdUg5HSZIzIR7bickprWQwy2hQGi7Eie1gjMFkR~HqUQtaTUQoOaEyKtreuWJmX6p-oWS1jIGwC~hg9AlWPbWV27MrQmimsD4f3p~JLOwM1Xr8Aja-~6Om~SQ6U3WLpPlygAcaulzC-oFMaL0ZNbLzXfU7CNtY1T0I~4NdbOamjLKwE9QgQ~jbcQDFp3eWweW2k6y2lM5~oDjNjIxsjhLcA__">
                </img>

                <div className=' grid grid-cols-4 gap-8'>
                    <div className='w-16 h-16 bg-cover' style={{backgroundImage:`url("https://s3-alpha-sig.figma.com/img/b0df/cf52/e99b040fdd4b3f6806b8ff24255889b8?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WAz0~SBhKfh0RnQQ5sZixsDdvyB~sAB6Dy~fRmABCdfopEAWQgUSHderPDLMkRkgmCzG5Ga2u9hTDxdOq89ODBwYG-EeTR-YMN-5Op15Mjmk4DXVH4V7-zgf-gfKEVugOFK0BjJbdz-Rh8A48CwnCbCtRLao~v~dGLbTLrzSMqlIrV-Q~3VqsMAgnDGz71V8ER344f6eWAeZWlScgzZ3CV3dHEJu56rSyTUc98pX6~8xeo8Z8YOr1jf0KDt6cYeWDkYEN2cU~c6DGpaefKdCkdW7zZeV91lj2yopFMCiKG4sFnErgz-D1Z-qYn4~wBW95oMcAocPqG24PemGIsceHw__")`}}>
                    </div>

                    <div className='w-16 h-16 bg-cover' style={{backgroundImage:`url("https://s3-alpha-sig.figma.com/img/e926/3b75/f4794fca607b8527c30c9685d1c63012?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pIZEpSnaAfJ2hZ1w9pwylUBCRZhrrJBGqggXJp~nvnPfzHVOiJkbOW4PPX5M8UxGnm7M-WoeRnnDOq0ApzNn42SI1H3HnwN60xz8BDyVsem5ubL8tJk6l7jSzABdIDgcmABoSB5dBhVvJ2WYzqsTL5OgPWQbHh5X5yHhDSVvxrLCLXlh3KPa86tefQQgPehONa4BowkHVVjWQ88Gblq36vcre8XyJd9WugMqr2QbFIy3BPXTwIbS-LTtqvkMgHJHFcHMtcarO4~zoOPFUsWhJSu05FASimMjD2awnALrWvd5GRXD7CqYUgFIRUrfPoWJA2hOZINxHYmhKbnhqV2UnQ__")`}}>
                    </div>
                    
                    <div className='w-16 h-16 bg-cover' style={{backgroundImage:`url("https://s3-alpha-sig.figma.com/img/dfe5/d0f0/96dff41620a1c5e577d360f38b79360b?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KB9v3n-fQaoGkrPUak5BlCtw4Muv93LPFGWs8i58zWr0K6bNTutmYS6dvysGdSk3SZpAoyRcCNbB-SfXfz6QY3fMuhc5c~ZrkU84SHMGDlyXIUtWDcAuNntnGfLGBp1xitAShmmRiaJ3t8wMVmwqWU6cpjTAN6syzJBuvwtsbXrlTbHhy96r7a186HomHmMK9D7nPRs365~ueTKeVKRf4rvok3M~dRAeq8Ma8UJ6OSmjELmDy8MrQPQCsSy1Rm-5iDAs-MwCynfyEnObBIYbxdsTIjkQA-gk2aNVpSstAKmR9sY4cvZZQWfjmAXq9aUCbg8IpX3qv~7jJYE7j-n3eQ__")`}}>
                    </div>
                    
                    <div className='w-16 h-16 bg-cover' style={{backgroundImage:`url("https://s3-alpha-sig.figma.com/img/5f7b/3b16/2fbf5047dd2808e13f1f7c59d38f1049?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AFyyPTzkBJ-fgA4zACIhK0lZxA~eavLqZuybZlDfR0K~AE6o6V2mcehSClxTWHBYAeiOpiy6AHIsQeINRn-FyBCjKYwl~c8ywZlGVzfSZqK~D0XYCBeNmjDii7ntoZZVd8jGro~-AEBzbVljr2ok-CTvH2o~w6SM31I3NyKz3JHyuiw6Rqr0FBYaqdIlx3nQ9pwN1Vpluoozr3jgHPF3oCP7wiGb09PQE3EMd0QJR1DVmApnyzPe0y20JkIlbofTDja5bAhS7PwwHcJ~1RfnOLejqkTRc-nv1kDLOaR3lryihecHa6Qk4T2WRgnQtE8R3qd3A-bE0RE2ymaALFhJ7g__")`}}>
                    </div>
                    
                </div>

            </div>

            <div className='w-1/4 flex flex-col justify-center items-start text-start'> 
                <div className='flex flex-col justify-center items-start '>
                    <p className='text-3xl text-white'>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit ame Lorem ipsum dolor sit ametLorem ipsum dolor sit amet</p>
                </div>
                <div className='flex flex-col justify-center items-start my-6 '>
                    <p className='text-3xl text-white'>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit ame Lorem ipsum dolor sit ametLorem ipsum dolor sit amet</p>
                </div>

                <button className='bg-[#FB8500] text-white w-2/3 p-3 rounded-full'>Order Now</button>
            </div>
        </div>
    </div>
  )
}

export default SingleProdDeatil