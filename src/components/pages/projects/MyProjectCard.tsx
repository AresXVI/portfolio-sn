'use client'

import { IMyProjects } from '@//types/MyProject'
import Image from 'next/image'
import { DownArrowIcon } from '../../UI/svg/down-arrow'
import { useTranslations } from 'next-intl'

export const MyProjectCard = ({ project }: { project: IMyProjects }) => {
    const t = useTranslations('projectsPage.projects')

    return (
        <div className="w-full flex flex-col rounded-3xl overflow-hidden 
                        bg-black/10 border border-[var(--color-border-color)] 
                        shadow-xl shadow-cyan-700/40 transition-all duration-300
                        ">
            <div className="relative w-full aspect-video overflow-hidden">
                <Image 
                    src={project.img} 
                    alt={t(project.title)} 
                    fill 
                    className="object-cover object-top" 
                />
            </div>
            <div className="flex-1 flex flex-col p-5 sm:p-7 lg:p-8">
                <h1 className="font-poppins text-[var(--primary)] text-xl sm:text-2xl mb-3">
                    {t(project.title)}
                </h1>

                <p className="text-[15px] sm:text-base text-[var(--color-desc)] leading-relaxed mb-2.5 sm:mb-4">
                    {t(project.desc)}
                </p>
                <ul className="list-disc pl-3.5 sm:pl-5 text-[15px] sm:text-base text-[var(--color-desc)] marker:text-[var(--primary)] mb-4 sm:mb-6 flex-1">
                    {project.tasks?.map((task, index) => (
                        <li key={index} className="mb-1">{t(task.text)}</li>
                    ))}
                </ul>
                <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-5">
                        {project.technologies?.map((technology, index) => (
                            <span key={index} className="px-3 py-1 rounded-2xl bg-(--primary)/20 text-sm h-min transition-all duration-200 hover:scale-105 hover:bg-(--primary)/40">{technology.text}</span>
                        ))}
                    </div>
                    <a 
                        href={project.link} 
                        target="_blank"
                        className="flex items-center justify-center gap-2 w-full sm:w-auto sm:min-w-[140px] 
                                    h-10 px-5 rounded-2xl border border-[var(--color-border-color)] 
                                    text-[var(--primary)] hover:bg-[var(--primary)]/10 
                                    transition-all duration-200 hover:border-[var(--color-border-color-hover)] active:scale-95"
                    >
                        <span className="text-sm font-medium">{t('viewProject')}</span>
                        <div className="rotate-225">
                            <DownArrowIcon size={18} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

// export const MyProjectCard = ({ project }: { project: IMyProjects }) => {
//     const t = useTranslations('projectsPage.projects')

//     return (
//         <div className="w-full flex flex-col rounded-3xl overflow-hidden 
//                         bg-black/10 border border-[var(--color-border-color)] 
//                         shadow-xl shadow-cyan-700/40 transition-all duration-300
//                         ">
//             <div className="relative w-full aspect-video overflow-hidden">
//                 <Image 
//                     src={project.img} 
//                     alt={t(project.title)} 
//                     fill 
//                     className="object-cover object-top" 
//                 />
//             </div>
//             <div className="flex-1 flex flex-col p-4 sm:p-7 lg:p-8">
//                 <h1 className="font-poppins text-[var(--primary)] text-[18.5px] sm:text-2xl mb-3">
//                     {t(project.title)}
//                 </h1>

//                 <p className="text-[13px] sm:text-base text-[var(--color-desc)] leading-relaxed mb-2.5 sm:mb-4">
//                     {t(project.desc)}
//                 </p>
//                 <ul className="list-disc pl-3 sm:pl-5 text-[13px] sm:text-base text-[var(--color-desc)] marker:text-[var(--primary)] mb-4 sm:mb-6 flex-1">
//                     {project.tasks?.map((task, index) => (
//                         <li key={index} className="mb-1">{t(task.text)}</li>
//                     ))}
//                 </ul>
//                 <div className="mt-auto">
//                     <div className="flex flex-wrap gap-2 mb-3.5 sm:mb-5">
//                         {project.technologies?.map((technology, index) => (
//                             <span key={index} className="px-3 py-1 rounded-2xl bg-(--primary)/20 text-xs sm:text-sm h-min transition-all duration-200 hover:scale-105 hover:bg-(--primary)/40">{technology.text}</span>
//                         ))}
//                     </div>
//                     <a 
//                         href={project.link} 
//                         target="_blank"
//                         className="flex items-center justify-center gap-2 w-full sm:w-auto sm:min-w-[140px] 
//                                     h-10 px-5 rounded-2xl border border-[var(--color-border-color)] 
//                                     text-[var(--primary)] hover:bg-[var(--primary)]/10 
//                                     transition-all duration-200 hover:border-[var(--color-border-color-hover)] active:scale-95"
//                     >
//                         <span className="text-sm font-medium">{t('viewProject')}</span>
//                         <div className="rotate-225">
//                             <DownArrowIcon size={18} />
//                         </div>
//                     </a>
//                 </div>
//             </div>
//         </div>
//     )
// }