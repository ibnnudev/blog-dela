import React, { useContext } from 'react'
import MenuItem from './menu-item'

import IconDashboard from '../../../icons/icon-dashboard'
import { TbAppsFilled, TbLogout2 } from 'react-icons/tb'
import { AuthContext } from '../../../context/auth-context'

export default function Index() {
    const { logout } = useContext(AuthContext);

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
                    <li>
                        <button onClick={() => logout()} className="w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 group">
                            <TbLogout2 className='text-xl text-blue-500' />
                            <span className="ms-3">Logout</span>
                        </button>
                    </li>
                </ul>
            </div>
        </aside>
    )
}
