import { ISvgSize } from "@//types/SvgSizes"

export const CodeIcon = ({width = 24, height = 24, size}: ISvgSize) => {
    const w = size ?? width
    const h = size ?? height
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={w} height={h} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code text-primary-foreground" data-darkreader-inline-stroke="">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
    )
}
