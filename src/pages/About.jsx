// eslint-disable-next-line no-unused-vars
import React from 'react'
import brain from '../assets/brian.jpg'
// import men from '../assets/men.jpg'
const About = () => {
  return (
    <>
        <div id='about' className='grid md:grid-cols-2 mt-8'>
                <div className='mx-auto'>
               <h2 className='font-bold text-3xl text-center mt-7 mb-4'>About Us</h2> 
     <span className='text-gray-600 text-2xl mb-4 mt-3'> Able, Ready and Willing</span>

 <p className='text-lg'>CNW Welding  handles design and metal fabrication<br/> for industrial, commercial, 
        civic and residential uses. Any area, <br/>any metal fabrication need. We produce structures that work.</p>
       <h3 className='my-7 font-bold text-lg'> Founder/CEO</h3>
            <img src={brain} className='w-80' />
            
                </div>
                     <div className='mt-7'>
                        <span className='p-5 bg-yellow-600 rounded-s-full mb-4'> Client Reviews</span>
                        <br />
                        <br />
              <p className='p-4'>&quot;I recently hired Mobile Welding  for a custom metal fabrication project,
                 and I couldn&apos;t be happier with the results. 
                 The team&apos;s professionalism and attention to detail were evident from start to finish. 
                 They delivered high-quality work on time and within budget.
                 I highly recommend CNW Welding  for any welding needs!&quot;</p>
                 <span className='float-right text-red-700'>John Smith</span>
                 <br />
                 <hr />
                 

                 <p className='p-4'>
                 &quot; Mobile Welding  provided excellent repair services for our industrial equipment. 
    Their team was knowledgeable, efficient, and very accommodating to our schedule. 
    The quality of their work exceeded our expectations, 
    and their customer service was top-notch. I would definitely use their services again!&quot;
                   
         </p>          
          <span className='float-right text-red-700'>Emily Johnson</span>
                      
                      <br/>  
                             <hr />
                    
                 
                             <p className='p-4'>
                             &quot;  We had a complex structural welding project that required precision and expertise.
                              Mobile Welding came highly recommended, and they did not disappoint. 
                              Their team was incredibly skilled and dedicated to ensuring the job was done right.
                               The project was completed flawlessly and ahead of schedule. 
                             Kudos to Mobile Welding Works for their outstanding work!&quot;
         </p>          
          <span className='float-right text-red-700'>Sarah Davis</span>
                      
                      <br/>  
                             <hr />

                             <p className='p-4'>
                             &quot; Mobile Welding  is my go-to for all welding needs.
                              Their mobile welding service is a game-changer, allowing us to get
                               repairs done on-site without any hassle. The quality of their welds is unmatched,
                                and their prices are very reasonable.
                              I appreciate their commitment to safety and excellence.&quot;
         </p>          
          <span className='float-right text-red-700'>David Martinez</span>
                      
                      <br/>  
                             <hr />
                     </div>
        </div>
          
    </>
  )
}

export default About
