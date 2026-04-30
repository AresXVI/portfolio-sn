// 'use client'

// import { Title } from '../../UI/title/Title'
// import { useTranslations } from 'next-intl'
// import { DescriptionType } from '@//types/AboutMe'
// import { MINI_CARDS_ABOUT_ME, technologies } from './data'

// export const AboutMe = ({id}: {id: string}) => {
//     const t = useTranslations('aboutMePage')
//     const descriptions: DescriptionType[] = [
//         { id: 1, text: "mainCard.mySpecialize" },
//         { id: 2, text: "mainCard.myWebBuild" },
//         { id: 3, text: "mainCard.forMe" }
//     ]

//     return (
//         <section id={id} className="bg-(--color-second-background) px-8 py-20 border-b-[0.5px] border-(--color-border-color)">
//             <div className="max-w-[1280px] w-full h-full flex flex-col items-center mx-auto">
//                 <Title defaultText={t('title.default')} gradientText={t('title.gradient')} decorateLine/>
//                 <div className="w-full flex justify-between mt-16 gap-8">
//                     <div className="max-w-[616px] border-[0.5px] rounded-2xl p-8 flex flex-col gap-6 border-(--color-border-color)  shadow-xl shadow-cyan-700/50 transition-all duration-200 hover:scale-105 hover:shadow-md">
//                         <h1 className="text-[1.5rem] text-(--primary)">{t('mainCard.title')}</h1>
//                         <div className="flex flex-col gap-4">
//                             {descriptions.map( desc => (
//                                 <p key={desc.id}>{t(desc.text)}</p>
//                             ) )}
//                         </div>
//                         <div className="w-full h-[2px] rounded-xl bg-[linear-gradient(to_right,var(--color-gradient-start),var(--color-gradient-end))]"/>
//                         <div className="flex flex-col gap-4">
//                             <h1 className="text-lg text-(--primary)">{t("mainCard.mainTechnologies")}</h1>
//                             <div className="flex flex-wrap gap-3">
//                                 {technologies?.map((item, index) => (
//                                     <span key={index} className="px-3 py-1 rounded-2xl bg-(--primary)/20 text-sm h-min transition-all duration-200 hover:scale-105 hover:bg-(--primary)/40">{item}</span>
//                                 ))}
//                             </div>
//                         </div>
//                     </div> 
//                     <div className='max-w-[616px] w-full flex flex-col gap-4'>
//                         {MINI_CARDS_ABOUT_ME?.map(( item ) => {
//                             const Icon = item.icon
//                             return (
//                                 <div key={item.id} className="w-full border-[0.5px] rounded-2xl p-6 flex gap-3 border-(--color-border-color) shadow-xl shadow-cyan-700/50 transition-all duration-200 hover:shadow-md hover:scale-105 hover:bg-(--primary)/5">
//                                     <div className='flex justify-center items-center w-12 h-12 bg-[linear-gradient(to_right,var(--color-gradient-start),var(--color-gradient-end))] rounded-xl'>
//                                         <Icon />
//                                     </div>
//                                     <div>
//                                         <h1 className='text-lg font-semibold text-(--primary) mb-2'>{t(item.title)}</h1>
//                                         <p>{t(item.desc)}</p>
//                                     </div>
//                                 </div>
//                             )
//                         })}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

'use client'

import { Title } from '../../UI/title/Title'
import { useTranslations } from 'next-intl'
import { DescriptionType } from '@//types/AboutMe'
import { MINI_CARDS_ABOUT_ME, technologies } from './data'

export const AboutMe = ({id}: {id: string}) => {
    const t = useTranslations('aboutMePage')
    const descriptions: DescriptionType[] = [
        { id: 1, text: "mainCard.mySpecialize" },
        { id: 2, text: "mainCard.myWebBuild" },
        { id: 3, text: "mainCard.forMe" }
    ]

    return (
        <section 
            id={id} 
            className="bg-[var(--color-second-background)] px-4 sm:px-6 lg:px-8 xl:px-12 py-16 md:py-20 lg:py-24 border-b-[0.5px] border-[var(--color-border-color)]"
        >
            <div className="max-w-[1280px] w-full mx-auto">
                <div className="flex flex-col items-center text-center mb-12 md:mb-16">
                    <Title 
                        defaultText={t('title.default')} 
                        gradientText={t('title.gradient')} 
                        decorateLine 
                    />
                </div>
                <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12">
                    <div className="flex-1 max-w-full lg:max-w-[616px] border border-[var(--color-border-color)] 
                                    rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col gap-6 
                                    shadow-xl shadow-cyan-700/30 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                        <h1 className="text-2xl sm:text-3xl font-semibold text-[var(--primary)]">
                            {t('mainCard.title')}
                        </h1>
                        <div className="flex flex-col gap-4 text-[var(--color-desc)] leading-relaxed">
                            {descriptions.map(desc => (
                                <p key={desc.id} className="text-base sm:text-lg">
                                    {t(desc.text)}
                                </p>
                            ))}
                        </div>
                        <div className="w-full h-[2px] rounded-xl bg-gradient-to-r from-[var(--color-gradient-start)] to-[var(--color-gradient-end)] my-2" />
                        <div className="flex flex-col gap-4">
                            <h1 className="text-lg sm:text-xl text-[var(--primary)] font-medium">
                                {t("mainCard.mainTechnologies")}
                            </h1>
                            <div className="flex flex-wrap gap-3">
                                {technologies?.map((item, index) => (
                                    <span key={index} className="px-3 py-1 rounded-2xl bg-(--primary)/20 text-sm h-min transition-all duration-200 hover:scale-105 hover:bg-(--primary)/40">{item}</span>
                                ))}
                            </div>
                        </div>
                    </div> 

                    <div className="flex-1 flex flex-col gap-4 lg:gap-5 w-full">
                        {MINI_CARDS_ABOUT_ME?.map((item) => {
                            const Icon = item.icon
                            return (
                                <div 
                                    key={item.id} 
                                    className="w-full border border-[var(--color-border-color)] rounded-3xl p-6 sm:p-7 
                                                flex gap-5 transition-all duration-300 hover:shadow-xl 
                                                hover:scale-[1.02] hover:bg-[var(--primary)]/5 group"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 flex justify-center items-center 
                                                    bg-gradient-to-br from-[var(--color-gradient-start)] to-[var(--color-gradient-end)] 
                                                    rounded-2xl shadow-md text-white">
                                        <Icon />
                                    </div>
                                    <div className="flex-1">
                                        <h1 className="text-lg sm:text-xl font-semibold text-[var(--primary)] mb-2 group-hover:text-white transition-colors">
                                            {t(item.title)}
                                        </h1>
                                        <p className="text-[var(--color-desc)] text-base leading-relaxed">
                                            {t(item.desc)}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
