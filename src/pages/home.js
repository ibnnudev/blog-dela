import React from 'react'

import IconLeft from '../icons/icon-left'
import IconUpRight from '../icons/icon-up-right'
import ScrollAnimation from 'react-animate-on-scroll'

import "animate.css/animate.compat.css"
import AppLayout from '../templates/app-layout'

export default function Home() {
    return (
        <AppLayout>
            {/* HEADER */}
            <div className="boxes max-w-7xl mx-auto mt-12 flex items-center">
                <div className='space-y-2'>
                    <div className='category'>Monologue</div>
                    <h1 className='heading-title'>Di Suatu Kota, Aku Terbakar Sendirian!</h1>
                    <p className='description max-w-3xl'>
                        Kau tahu, belakangan aku merasa muntah pada daur peristiwa yang ada di sekitarku. Rasa-rasanya tak henti rajam ranjau waktu yang di tanam dunia modern membuat huru-hara di dalam dada-kepalaku
                    </p>
                </div>
            </div>
            {/* END HEADER */}

            {/* MAIN CONTENT */}
            <div className='content-container max-w-7xl mx-auto mt-12'>
                <div className='content'>
                    <h1 className='title max-w-4xl'>
                        Hidup adalah serangkaian kebetulan. 'Kebetulan' adalah takdir yang menyamar.
                    </h1>
                    <div className='grid grid-cols-3 items-end'>
                        <div className='description col-span-2 line-clamp-3'>
                            Kau tahu, belakangan aku merasa muntah pada daur peristiwa yang ada di sekitarku. Rasa-rasanya tak henti rajam ranjau waktu yang di tanam dunia modern membuat huru-hara di dalam dada-kepalaku. Kau tahu, belakangan aku merasa muntah pada daur peristiwa yang ada di sekitarku.
                        </div>
                        <div className='flex gap-8 ml-5 justify-end h-fit'>
                            <div className='border-l-[3px] border-l-white pl-4'>
                                <p className='author font-medium text-sm mb-2'>Ditulis oleh</p>
                                <p className='font-semibold'>Moh Ibnu A.S</p>
                            </div>
                            <div className='border-l-[3px] border-l-white pl-4'>
                                <p className='author font-medium text-sm mb-2'>Di unggah pada</p>
                                <p className='font-semibold'>22 April 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* END MAIN CONTENT */}

            {/* LIST CONTENT */}
            <div className='max-w-7xl mx-auto grid grid-cols-3 gap-x-8 gap-y-12 mt-12'>
                {
                    Array.from({ length: 6 }).map((_, index) => (
                        <ScrollAnimation animateIn='fadeIn' animateOnce={true} key={index}>
                            <div className='blog-item'>
                                <div className='img-wrapper h-[250px]'>
                                    {/* <img src={'https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} className='w-full h-[250px] object-cover' alt='Blog Item 1' /> */}
                                </div>
                                <div className='blog-head mt-7 flex justify-between items-start'>
                                    <h1>
                                        Improve Your UI Design Skills and<br />Develop an "Eye" for Design
                                    </h1>
                                    <IconUpRight />
                                </div>
                                <p className='description line-clamp-2 mt-3'>
                                    The design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product, or process.
                                </p>

                                <div className='flex gap-2 mt-4'>
                                    {
                                        Array.from({ length: 3 }).map((_, i) => (
                                            <div className='tag' key={i}>Design</div>
                                        ))
                                    }
                                </div>
                            </div>
                        </ScrollAnimation>
                    ))
                }
            </div>
            {/* END LIST CONTENT */}

            {/* PAGINATION */}
            <div className='max-w-7xl mx-auto my-14 flex justify-between items-center pagination text-sm font-semibold'>
                <div className='flex items-center gap-2'>
                    <IconLeft />&nbsp; Sebelumnya
                </div>
                <div className='flex items-center gap-2'>
                    Halaman 1 dari 10
                </div>
                <div className='flex items-center gap-2'>
                    Selanjutnya &nbsp;<IconLeft isRight={true} />
                </div>
            </div>
            {/* END PAGINATION */}
        </AppLayout>
    )
}
