import React from 'react'

import IconUpRight from '../../../icons/icon-up-right';

export default function Recent() {
    return (
        <div className='max-w-7xl mx-auto mt-12 grid grid-cols-2 gap-8'>
            <div className='blog-item'>
                <div className='img-wrapper h-[450px]'>
                    {/* <img src={'https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} className='w-full h-[250px] object-cover' alt='Blog Item 1' /> */}
                </div>
                <div className='blog-head mt-7 flex justify-between items-start'>
                    <h1>
                        Improve Your UI Design Skills and Develop an "Eye" for Design
                    </h1>
                    <IconUpRight />
                </div>
                <p className='description line-clamp-2 mt-3'>
                    The design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product, or process.
                </p>

                <div className='flex gap-2 mt-4'>
                    {
                        Array.from({ length: 3 }).map((_, i) => (
                            <div className='tag' key={i}>Interviews</div>
                        ))
                    }
                </div>
            </div>

            <div className='space-y-8'>
                {
                    Array.from({ length: 3 }).map((_, index) => (
                        <div className='blog-item flex gap-x-8 items-start'>
                            <div className='img-wrapper h-[200px] w-[87rem]'>
                                {/* <img src={'https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} className='w-full h-[250px] object-cover' alt='Blog Item 1' /> */}
                            </div>
                            <div>
                                <p className='mb-2 font-medium text-gray-500'>
                                    Phoenix Baker • 19 Jan 2024
                                </p>
                                <div className='blog-head list flex justify-between items-start'>
                                    <h1 className='line-clamp-2'>
                                        Improve Your UI Design Skills and Develop an "Eye" for Design
                                    </h1>
                                </div>
                                <p className='description line-clamp-2 mt-3'>
                                    The design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product, or process.
                                </p>

                                <div className='flex gap-2 mt-4'>
                                    {
                                        Array.from({ length: 2 }).map((_, i) => (
                                            <div className='tag' key={i}>Interviews</div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
