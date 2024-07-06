// eslint-disable-next-line no-unused-vars
import React from 'react'

const Contact = () => {
  return (
    <>
    <div id='contact' className='text-center mx-auto mt-10'>
    <h3 className='text-2xl font-bold text-center'>Contact Mobile Welding Work  Ltd</h3>
     <p className='p-4'>Our quality services and experienced staff are always available for your next project.
      Please fill out the contact form below to discuss your requirements with us today.</p>
      
      </div>
 <section  className="flex items-center justify-center min-h-screen ">
    
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">Contact Us</h2>
               
<form action="" method="post">
        <div className="space-y-4">
          <div>
            <label htmlFor="field1" className="block mb-2 text-sm font-medium text-gray-600">
             Name:
            </label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 bg-gray-100 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />

          </div>
          <div>
            <label htmlFor="field1" className="block mb-2 text-sm font-medium text-gray-600">
             Phone number:
            </label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 bg-gray-100 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div>
            <label htmlFor="field2" className="block mb-2 text-sm font-medium text-gray-600">
             Message:
            </label>
            
      <textarea name="" id="" rows={4} className="w-full px-3 py-2 bg-gray-100 border rounded-md focus:outline-none focus:ring focus:border-blue-300">

           </textarea>
               </div>
          
          <br />
                    <button className='px-4 mx-auto bg-black text-white rounded-lg py-2'>Send</button>
                   </div>
                      </form>
</div>

</section>

    </>
  )
}

export default Contact
