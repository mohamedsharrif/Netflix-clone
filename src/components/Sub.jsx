import React from 'react'

const Sub = () => {
  return (
    <div className='flex text-white mt-5 flex-1 flex-col items-center justify-center text-center sm:px-20'>
      <p className="text-lg">
          Ready to watch? Enter your email to create or restart your membership
        </p>
        <div className="m-4 flex flex-col space-y-6 sm:flex-row sm:space-y-0">
          <input
            className="flex w-full min-w-[400px] py-3 px-4 bg-black bg-opacity-40 rounded text-white focus:outline-none focus:ring-2 focus:ring-red-500 border border-gray-400 sm:max-w-xs"
            type="email"
            placeholder="Enter your email address"
          />
          <button className="flex w-full items-center justify-center bg-[#e50914] text-xl sm:py-0 sm:px-8 font-bold py-2 m-2 rounded">
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
    </div>
  )
}

export default Sub
