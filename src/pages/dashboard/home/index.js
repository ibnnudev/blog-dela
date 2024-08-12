import React from 'react'
import DashboardLayout from '../components/dashboard-layout'

export default function Index() {
    const menu = [
        {
            name: 'Dashboard',
            route: '/dashboard',
        }
    ]
    return (
        <DashboardLayout breadcrumbList={menu}>
            <h1 className="text-2xl font-semibold">Dashboard</h1>
        </DashboardLayout>
    )
}
