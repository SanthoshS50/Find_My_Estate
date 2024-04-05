import React from 'react'

function Footer() {
  return (
        <footer class="bg-slate-200 shadow-md">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                        <span className='text-slate-500'>Find My </span>
                        <span className='text-slate-500'>&nbsp;</span> 
                        <span className='text-slate-700'>Estate</span>
                    </h1>                    
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="/about" class="hover:underline me-4 md:me-6 text-slate-700">About</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6 text-slate-700">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6 text-slate-700">Licensing</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline text-slate-700">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 " />
                <span class="block text-sm sm:text-center text-slate-700">© 2024 <a href="#" class="hover:underline">Find My Estate™</a>. All Rights Reserved.</span>
            </div>
        </footer>
  )
}

export default Footer