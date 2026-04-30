import { ISvgSize } from "@//types/SvgSizes"

export const DownArrowIcon = ({width = 24, height = 24, size, className}: ISvgSize) => {
    const w = size ?? width
    const h = size ?? height
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={w} height={h} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-arrow-down sm:mx-auto ${className}`} data-darkreader-inline-stroke="">
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
        </svg>
    )
}
