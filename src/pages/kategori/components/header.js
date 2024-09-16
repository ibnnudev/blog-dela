import React from 'react'

export default function Header() {
    return (
        <div className="boxes max-w-7xl mx-auto mt-12 flex items-center">
            <div className='space-y-2 text-center mx-auto'>
                <div></div>
                <h1 className='heading-title'>
                    Inside Design: Stories and interviews
                </h1>
                <p className='description max-w-3xl'>
                    Subscribe to learn about new product features, the latest in technology, and updates
                </p>
                <br />
                <div className="max-w-md mx-auto">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <input type="search" id="default-search" className="block w-full p-4 text-sm text-gray-900 border border-gray-200 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Cari suka suka..." />
                        <button type="button" className="text-white absolute end-2.5 bottom-2.5 bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-2">Cari</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
