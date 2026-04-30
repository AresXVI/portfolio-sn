import { ISvgSize } from '@//types/SvgSizes'
import React from 'react'

export const InstagramIcon = ({width = 24, height = 24, size}: ISvgSize) => {
    const w = size ?? width
    const h = size ?? height
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={w} height={h} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram" data-darkreader-inline-stroke="">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
        </svg>
    )
}
