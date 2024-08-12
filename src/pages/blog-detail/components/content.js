import React from 'react'
import Search from './search'
import Toc from './toc'
import NewLetter from './news-letter'
import FootNote from './foot-note'

export default function Content() {
    return (
        <div className='grid grid-cols-12 max-w-7xl mx-auto gap-24'>
            <div className='col-span-4'>
                <Search />
                <Toc />
                <NewLetter />
            </div>
            <div className='col-span-8'>
                <FootNote />
            </div>
        </div>
    )
}
