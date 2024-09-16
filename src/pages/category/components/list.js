import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import IconUpRight from '../../../icons/icon-up-right'
import IconLeft from '../../../icons/icon-left'

export default function List() {
    return (
        <>
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
        </>
    )
}
