// eslint-disable-next-line no-unused-vars
import React from 'react'
import city from '../assets/city.jpg'
const Hero = () => {
  return (
    <>
          <div id='home' >
             <div className=''>
                    <img src={city} alt='weld' className='w-1000 h-1/2 mx-auto mb-5'/>
                  </div>
                  <div className='grid md:grid-cols-2 mt-3'>
                <div className='text-lg'>
                        <h1 className=' text-4xl font-bold text-white'>
                            <span className=' animate-pulse'>Welcome</span> to Mobile Welding</h1>
                            <p className='p-4'>
                            where precision meets durability in every weld. As a leading provider of welding solutions in UK, 
                            we specialize in delivering high-quality craftsmanship tailored to meet the unique needs of our clients.
                            </p>
                            <p className='p-4'>At Mobile Welding Work, we understand that welding isn&apos;t just about joining metal—it&apos;s 
                                about building foundations, creating structures that last, and innovating solutions that stand the test of time. 
                                With years of experience and a passion for excellence, our team of skilled welders and fabricators is
                                 committed to delivering superior results, 
                                whether for residential, commercial, or industrial projects.</p>
                    </div>
                       <div>

                       <hr/>
                     <p className='p-4 text-lg'>Bid farewell to welding problems</p>
                      <hr/>

                    </div>
                </div>
            </div>
              
         
    </>
  )
}

export default Hero
