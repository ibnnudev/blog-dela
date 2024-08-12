import React from 'react'
import MenuItem from './menu-item'

import IconDashboard from '../../../icons/icon-dashboard'
import { TbAppsFilled } from 'react-icons/tb'

export default function Index() {
    return (
        <aside
            id="logo-sidebar"
            className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 text-sm"
            aria-label="Sidebar"
        >
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    <li>
                        <MenuItem icon={<IconDashboard />} title={'Dashboard'} linkTo={'/dashboard'} />
                    </li>
                    <li>
                        <MenuItem icon={<TbAppsFilled className='text-xl text-blue-500' />} title={'Kategori'} linkTo='/dashboard/kategori' />
                    </li>
                </ul>
            </div>
        </aside>
    )
}
