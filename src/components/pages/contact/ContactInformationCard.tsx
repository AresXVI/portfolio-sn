'use client'

import { IContactInformation } from '@//types/Contact'
import { CopyOutlined } from '@ant-design/icons'
import { useTranslations } from 'next-intl'

interface IProps { 
    card: IContactInformation,
    copyFunc: (item: IContactInformation) => Promise<void>
}

// export const ContactInformationCard = ({card, copyFunc}: IProps) => {
//     const t = useTranslations('contactPage')
//     const Icon = card.icon
//     console.log('>>>>>>>', card.desc);
    
//     return  (
//         <div className='flex items-center'>
//             <a
//                 href={card.link}
//                 className="group w-full rounded-2xl pt-4 flex gap-3 items-center"
//                 target='_blank'
//             >
//                 <div className='flex justify-center items-center w-12 h-12 bg-[linear-gradient(to_right,var(--color-gradient-start),var(--color-gradient-end))] rounded-xl'>
//                     <Icon />
//                 </div>
//                 <div>
//                     <p className='text-lg font-medium text-(--color-desc)!'>{t(card.title)}</p>
//                     <span className='group-hover:text-(--primary) transition-colors'>{t(card.desc)}</span>
//                 </div>
//             </a>
//             {card.copy && (
//                 <div
//                     onClick={() => copyFunc(card)}
//                     className='w-8 flex justify-end cursor-pointer transition-all duration-300 hover:text-(--primary)/80 active:text-(--color-gradient-end)'
//                 >
//                     <CopyOutlined/>
//                 </div>
//             )}
//         </div>
//     )
// }

export const ContactInformationCard = ({ card, copyFunc }: IProps) => {
    const t = useTranslations('contactPage')
    const Icon = card.icon

    return (
        <div className="flex items-start gap-4 group">
            <a
                href={card.link}
                target="_blank"
                className="flex-1 flex gap-4 hover:bg-[var(--primary)]/5 p-2 -m-2 rounded-2xl transition-all"
            >
                <div className="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-[var(--color-gradient-start)] to-[var(--color-gradient-end)] rounded-2xl flex-shrink-0">
                    <Icon />
                </div>

                <div className="flex flex-col">
                    <p className="text-[var(--color-desc)] text-base">{t(card.title)}</p>
                    <span className="text-white group-hover:text-[var(--primary)] transition-colors">
                        {t(card.desc)}
                    </span>
                </div>
            </a>

            {card.copy && (
                <button
                    onClick={() => copyFunc(card)}
                    className="mt-2 text-gray-400 hover:text-[var(--primary)] transition-colors p-2"
                    aria-label="Copy"
                >
                    <CopyOutlined style={{ fontSize: 20 }} />
                </button>
            )}
        </div>
    )
}