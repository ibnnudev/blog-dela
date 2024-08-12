import React from 'react'
import AppLayout from '../../templates/app-layout'
import Header from './components/header'
import Recent from './components/recent'
import List from './components/list'

export default function Kategori() {
    return (
        <AppLayout>
            <Header />
            <Recent />
            <List />
        </AppLayout>
    )
}
