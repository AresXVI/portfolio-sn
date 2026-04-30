// 'use client'

// import { Form } from 'antd'
// import { ContactForm } from './ContactForm'
// import { CONTACT_INFORMATION } from './data'
// import { Title } from '../../UI/title/Title'
// import { BOT_TOKEN, CHAT_ID } from '@//constants'
// import { ContactInformationCard } from './ContactInformationCard'
// import { IContactForm, IContactInformation } from '@//types/Contact'
// import { MessagesSocialMedia } from '../../UI/messages/MessagesSocialMedia'
// import { useTranslations } from 'next-intl'

// export const Contact = ({id}: {id: string}) => {
//     const t = useTranslations('contactPage')
//     const [form] = Form.useForm()

//     const sendToTelegram = async (message: string) => {
//         try {
//             await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     chat_id: CHAT_ID,
//                     text: message,
//                 }),
//             });
//         } catch (error) {
//             console.log(`Error sending message: ${error}`);
            
//         }
//     };

//     const onFinish = (values: IContactForm) => {
//         sendToTelegram(
// `Новый отклик ❗️:

//   👤: ${values.name}
//   ✉️: ${values.email}
//   📂: ${values.subject}
//   💬: ${values.message}
//             `
//         )
//         form.resetFields()
//     }

//     const onReset = () => form.resetFields()

//     const copyFunc = async ({copy}: IContactInformation): Promise<void> => {
//         try {
//             if (typeof copy === 'string') await navigator.clipboard.writeText(copy);
//         } catch (e) {
//             console.error("Copy failed", e);
//         }
//     }

//     return (
//         <section id={id} className='bg-(--color-second-background) px-8 py-20 border-b-[0.5px] border-(--color-border-color)'>
//             <div className='w-full max-w-[1280px] mx-auto'>
//                 <Title defaultText={t('title.default')} gradientText={t('title.gradient')} decorateLine/>
//                 <div className='mt-15 flex gap-15 justify-center'>
//                     <div className='flex-1 flex flex-col gap-9'>
//                         <div className='p-8 border-[0.5px] border-(--color-border-color) rounded-2xl shadow-cyan-700/50 shadow-xl'>
//                             <h1 className='text-bold text-lg text-(--primary)'>{t('contactInformation')}</h1>
//                             {CONTACT_INFORMATION.map(card => 
//                                 <ContactInformationCard key={card.id} card={card} copyFunc={copyFunc}/>
//                             )}
//                         </div>
//                         <div className='flex flex-col gap-4 p-8 flex-1 border-[0.5px] border-(--color-border-color) rounded-2xl shadow-cyan-700/50 shadow-xl'>
//                             <h1 className='text-bold text-lg text-(--primary)'>{t('socialMedia')}</h1>
//                             <div>
//                                 <MessagesSocialMedia />
//                             </div>
//                         </div>
//                         {/* <div className='max-w-[544px] flex flex-col gap-4 p-8 flex-1 border-[0.5px] border-(--color-border-color) rounded-2xl shadow-cyan-700/50 shadow-xl'>
//                             <h1 className='text-bold text-lg text-(--primary)'>Availability</h1>
//                             <div className='flex flex-col gap-1'>
//                                 <div className='flex items-center gap-3'>
//                                     <div className='dot'/>
//                                     <p>Available for new projects</p>
//                                 </div>
//                                 <p>I usually respond within 24 hours</p>
//                             </div>
//                         </div> */}
//                     </div>

//                     <div className='p-8 flex-1 border-[0.5px] border-(--color-border-color) rounded-2xl shadow-cyan-700/50 shadow-xl'>
//                         <h1 className='text-bold text-lg text-(--primary) mb-4'>{t('contactForm.title')}</h1>
//                         <div>
//                             <ContactForm form={form} onFinish={onFinish} onReset={onReset}/>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

'use client'

import { Form } from 'antd'
import { ContactForm } from './ContactForm'
import { CONTACT_INFORMATION } from './data'
import { Title } from '../../UI/title/Title'
import { BOT_TOKEN, CHAT_ID } from '@//constants'
import { ContactInformationCard } from './ContactInformationCard'
import { IContactForm, IContactInformation } from '@//types/Contact'
import { MessagesSocialMedia } from '../../UI/messages/MessagesSocialMedia'
import { useTranslations } from 'next-intl'

export const Contact = ({ id }: { id: string }) => {
    const t = useTranslations('contactPage')
    const [form] = Form.useForm()

    const sendToTelegram = async (message: string) => {
        try {
            await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ chat_id: CHAT_ID, text: message }),
            });
        } catch (error) {
            console.log(`Error sending message: ${error}`);
        }
    };

    const onFinish = (values: IContactForm) => {
        sendToTelegram(
`Новый отклик ❗️:

👤 Имя: ${values.name}
✉️ Email: ${values.email}
📂 Тема: ${values.subject}
💬 Сообщение: ${values.message}
`
        )
        form.resetFields()
    }

    const onReset = () => form.resetFields()

    const copyFunc = async (card: IContactInformation): Promise<void> => {
        try {
            if (typeof card.copy === 'string') {
                await navigator.clipboard.writeText(card.copy)
            }
        } catch (e) {
            console.error("Copy failed", e)
        }
    }

    return (
        <section 
            id={id} 
            className="bg-[var(--color-second-background)] px-4 sm:px-6 lg:px-8 xl:px-12 py-16 md:py-20 lg:py-24 border-b-[0.5px] border-[var(--color-border-color)]"
        >
            <div className="max-w-[1280px] mx-auto">
                <div className="flex justify-center mb-12 md:mb-16">
                    <Title 
                        defaultText={t('title.default')} 
                        gradientText={t('title.gradient')} 
                        decorateLine 
                    />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12">
                    <div className="flex flex-col gap-8">
                        <div className="p-7 sm:p-8 lg:p-10 border border-[var(--color-border-color)] rounded-3xl shadow-xl shadow-cyan-700/30 flex-1">
                            <h1 className="text-xl font-semibold text-[var(--primary)] mb-6">
                                {t('contactInformation')}
                            </h1>
                            <div className="flex flex-col gap-6">
                                {CONTACT_INFORMATION.map(card => (
                                    <ContactInformationCard 
                                        key={card.id} 
                                        card={card} 
                                        copyFunc={copyFunc} 
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="p-7 sm:p-8 lg:p-10 border border-[var(--color-border-color)] rounded-3xl shadow-xl shadow-cyan-700/30">
                            <h1 className="text-xl font-semibold text-[var(--primary)] mb-6">
                                {t('socialMedia')}
                            </h1>
                            <MessagesSocialMedia />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="p-7 sm:p-8 lg:p-10 border border-[var(--color-border-color)] rounded-3xl shadow-xl shadow-cyan-700/30 flex-1">
                            <h1 className="text-xl font-semibold text-[var(--primary)] mb-6">
                                {t('contactForm.title')}
                            </h1>
                            <ContactForm 
                                form={form} 
                                onFinish={onFinish} 
                                onReset={onReset} 
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}