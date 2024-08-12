import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function MenuItem({ icon, title, linkTo = '' }) {
    const location = useLocation()
    const isActive = location.pathname === linkTo

    return (
        <Link
            to={linkTo}
            className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 group ${isActive ? 'bg-gray-100' : ''}`}
        >
            {icon}
            <span className="ms-3">
                {title}
            </span>
        </Link>
    )
}
