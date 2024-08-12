import React from 'react'

export default function TableHeader({ title, description, children }) {
    return (
        <div className="relative overflow-hidden bg-white dark:bg-gray-800 sm:rounded-lg mb-4">
            <div className="flex-row items-center justify-between p-4 space-y-3 sm:flex sm:space-y-0 sm:space-x-4">
                <div>
                    <h5 className="mr-3 font-semibold dark:text-white">{title}</h5>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{description}</p>
                </div>
                {children}
            </div>
        </div>
    )
}
