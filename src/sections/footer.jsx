import React from 'react'

const footer = () => {
  return (
    <footer className="w-full h-50 bg-gradient-to-r from-slate-600 via-gray-500 via-blue-500 to-blue-900 text-white p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

        <div className="flex flex-col items-center p-1  rounded-lg shadow-lg  mx-auto ">
          <div className="flex flex-col items-center mb p-2 border  rounded-lg ">
            <img src='./code-svgrepo-com.svg' alt='Logo' className='w-10 h-16' />
            <span className="text-2xl font-bold text-gray-50">NetDevCore</span>
          </div>
          <p className="text-sm text-gray-50">&copy; 2025 Nethononda Nyandano</p>
        </div>



        <div className="flex flex-col items-start">
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Movies</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>


        <div className="flex flex-col items-start">
          <h3 className="font-semibold mb-2">Resources</h3>
          <a href="#" className="hover:underline">Blog</a>
          <a href="#" className="hover:underline">FAQs</a>
          <a href="#" className="hover:underline">Support</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>


        <div className="flex flex-col items-start">
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/nethononda.nyandano.3" className="hover:text-gray-200">
              <img src="./facebook-svgrepo-com (1).svg" alt="" srcset="" className='w-6' />
            </a>
            <a href="
instagram.com/nya_ndano" className="hover:text-gray-200">
              <img src="./instagram-svgrepo-com (1).svg" alt="" srcset="" className='w-6' />
            </a>
            <a href="www.linkedin.com/in/nyandano-nethononda-a425a9294" className="hover:text-gray-200">
              <img src="./linkedin-svgrepo-com (1).svg" alt="" srcset="" className='w-6' />
            </a>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default footer