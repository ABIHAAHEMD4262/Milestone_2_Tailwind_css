import React from 'react'

const Contact = () => {
  return (
    <div>
      <section className='border max-w-lg mx-auto my-20 p-8 bg-white shadow-lg rounded-lg'>
        <h1 className='font-bold mb-6 text-center text-2xl text-gray-800' data-aos='fade-up'>Contact Us</h1>
        <form>
          <input type='text' placeholder='Full Name' className='w-full mb-4 py-3 px-4 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400' required/>
          <input type='email' placeholder='Email Address' className='w-full mb-4 py-3 px-4 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400' required/>
          <input type='text' placeholder='Phone Number' className='w-full mb-4 py-3 px-4 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400' required/>
          <textarea placeholder='Your Message' rows={5} required className='w-full mb-4 py-3 px-4 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'></textarea>
          <button type='submit' className='text-white w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-md transition duration-200'>Send Message</button>
        </form>
      </section>
    </div>
  )
}

export default Contact;