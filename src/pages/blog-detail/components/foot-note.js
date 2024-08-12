import React from 'react'
import IconCopy from '../../../icons/icon-copy'
import IconInstagram from '../../../icons/icon-instagram'
import IconTwitter from '../../../icons/icon-twitter'
import IconFacebook from '../../../icons/icon-facebook'

export default function FootNote() {
    return (
        <div className='max-w-7xl mx-auto mt-8 flex justify-between items-center'>
            <div className='flex items-center gap-4'>
                <img className='w-12 h-12 rounded-full object-cover' alt='author' src='' style={{ backgroundColor: "#152cba" }} />
                <div>
                    <h1 className='font-semibold text-base text-blue-500'>Moh Ibnu A.S</h1>
                    <p className='text-sm font-medium text-blue-500'>Sustainable Architect</p>
                </div>
            </div>
            <div className='flex gap-2 text-sm'>
                <button className='border-2 border-blue-500 px-3 py-2 font-semibold hover:bg-blue-50 rounded-full text-blue-500 flex items-center gap-2'>
                    <IconCopy />
                    Salin tautan
                </button>
                <div className='rounded-full p-2 border-2 border-blue-500'><IconInstagram /></div>
                <div className='rounded-full p-2 border-2 border-blue-500'><IconTwitter /></div>
                <div className='rounded-full p-2 border-2 border-blue-500'><IconFacebook /></div>
            </div>
        </div>
    )
}
