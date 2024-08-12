import React from 'react'
import IconCopy from '../../../icons/icon-copy'
import IconInstagram from '../../../icons/icon-instagram'
import IconFacebook from '../../../icons/icon-facebook'
import IconTwitter from '../../../icons/icon-twitter'

export default function Header() {
    return (
        <>
            {/* HEADER */}
            <div className="max-w-7xl mx-auto mt-12 flex items-center">
                <div className='space-y-2'>
                    <div className='category'>Monologue</div>
                    <h1 className='heading-title leading-tight max-w-4xl'>
                        A Continually Unfolding History - Hillview by Made by Hand Architecture
                    </h1>
                </div>

            </div>
            <div className='max-w-7xl mx-auto border-b border-blue-500 mt-4 w-full'></div>

            <div className='max-w-7xl flex justify-end items-start mt-7 gap-5 mx-auto'>
                <div className='w-4 h-4 bg-blue-500 rounded-full mt-1'></div>
                <div className='max-w-4xl p-0 m-0 description'>Kau tahu, belakangan aku merasa muntah pada daur peristiwa yang ada di sekitarku. Rasa-rasanya tak henti rajam ranjau waktu yang di tanam dunia modern membuat huru-hara di dalam dada-kepalaku</div>
            </div>

            <img className='bg-blue-500 max-w-7xl mx-auto mt-8 h-[30rem] w-full object-cover object-center' alt='header' src='https://images.unsplash.com/photo-1722764171390-1241d1ca9e20?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
            {/* END HEADER */}

            {/* AUTHOR */}
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

            <div className='max-w-7xl mx-auto border-b border-blue-500 my-12 w-full'></div>
            {/* END AUTHOR */}
        </>
    )
}
