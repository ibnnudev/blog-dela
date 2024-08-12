import React from 'react'
import Header from '../templates/header';
import Bottom from '../templates/bottom';

export default function AppLayout({ children }) {
    return (
        <>
            <Header />
            <div className='mb-12 min-h-screen'>
                {children}
            </div>
            <Bottom />
        </>
    )
}
