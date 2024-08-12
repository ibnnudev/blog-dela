import React from 'react'

export default function IconLeft({ isRight = false }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={20} height={20} style={{
            transform: isRight ? 'rotate(180deg)' : 'rotate(0deg)',
        }}>
            <path
                fill="#152cba"
                fillRule="evenodd"
                d="M10.53 5.47a.75.75 0 010 1.06l-4.72 4.72H20a.75.75 0 010 1.5H5.81l4.72 4.72a.75.75 0 11-1.06 1.06l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 011.06 0z"
                clipRule="evenodd"
            ></path>
        </svg>
    )
}
