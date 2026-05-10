'use client'

import { useTranslations } from "next-intl"
import { Title } from "../../UI/title/Title"
import { MY_PROJECTS } from "./data"
import { MyProjectCard } from "./MyProjectCard"

export const MyProjects = ({ id }: { id: string }) => {
    const t = useTranslations('projectsPage')

    return (
        <section 
            id={id} 
            className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 md:py-20 lg:py-24 
                        bg-cyan-700/20 border-b-[0.5px] border-[var(--color-border-color)]"
        >
            <div className="max-w-[1280px] mx-auto">
                <div className="flex flex-col items-center text-center mb-12 md:mb-16">
                    <Title 
                        defaultText={t('title.default')} 
                        gradientText={t('title.gradient')} 
                        decorateLine 
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {MY_PROJECTS.map(project => (
                        <MyProjectCard 
                            key={project.id} 
                            project={project} 
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
