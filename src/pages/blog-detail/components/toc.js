import React from 'react'

export default function Toc() {

    const tocList = [
        'A quick history',
        'What is Lorem Ipsum?',
        'Why do we use it?',
        'Where does it come from?',
        'Where can I get some?'
    ]

    return (
        <div>
            <label className='font-semibold text-gray-600 text-sm'>Content</label>

            <div className='space-y-3 mt-5'>
                {
                    Array.from({ length: 5 }).map((_, index) => ((
                        <div className={`item font-semibold active py-2.5 px-5 text-base rounded-full ${index === 0 ? 'bg-blue-500 text-white' : 'text-gray-600'}`} key={index}>
                            {tocList[index]}
                        </div>
                    )))
                }
            </div>
        </div >
    )
}
