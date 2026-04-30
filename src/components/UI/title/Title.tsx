interface ITitle { 
    defaultText: string
    gradientText: string
    className?: string
    decorateLine?: boolean
}

export const Title = ({ defaultText, gradientText, className, decorateLine = false }: ITitle) => {
    return (
        <div className="flex flex-col items-center">
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[3.75rem] 2xl:text-[4.2rem] leading-none font-bold text-center ${className}`}>
                {defaultText}{' '} 
                <span className="text-gradient font-poppins text-nowrap">{gradientText}</span>
            </h1>
            {decorateLine && ( <div className="mt-3 md:mt-4 h-1 w-20 md:w-28 rounded-2xl mx-auto bg-[linear-gradient(to_right,var(--color-gradient-start),var(--color-gradient-end))]"/> )}
        </div>
    )
}