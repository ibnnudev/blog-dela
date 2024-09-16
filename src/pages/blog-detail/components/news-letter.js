import React from 'react'

export default function NewLetter() {
    return (
        <div className='bg-gray-100 rounded-lg px-4 py-6 mt-6 shadow-sm'>
            <h1 className='text-lg font-semibold text-gray-600 mb-2'>
                Weekly Newsletter
            </h1>
            <p className='text-gray-400 font-medium mb-4'>One email per week with the latest posts</p>

            <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter your emali' required />

            <button type='button' className='bg-blue-500 text-white font-semibold text-sm rounded-full px-4 py-3 mt-4 w-full'>
                Subcribe
            </button>
        </div>
    )
}
