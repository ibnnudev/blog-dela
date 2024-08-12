import React from 'react'

import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import { Link } from 'react-router-dom'

export default function Index({ children, breadcrumbList = ['Dashboard'] }) {
    const renderBreadcrumb = breadcrumbList.map((item, index) => {
        if (index < breadcrumbList.length - 1) {
            return (
                <div key={index} className="flex items-center">
                    <Link to={item.route}>
                        {item.name}
                    </Link>
                    <span className="mx-2">/</span>
                </div>
            )
        }
        return (
            <div key={index} className="font-medium">
                <Link to={item.route}>{item.name}</Link>
            </div>
        )
    })

    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="p-4 sm:ml-64 mt-14">
                <div className="bg-gray-50 px-5 py-3 text-sm mb-4 flex">
                    {renderBreadcrumb}
                </div>
                <>
                    {children}
                </>
            </div>
        </>
    )
}
