import React from 'react'
import { MY_MESSAGES_CONTACT_PAGE } from './data'

export const MessagesSocialMedia = () => {
    return (
        <div className="flex gap-4">
            {MY_MESSAGES_CONTACT_PAGE?.map( item => {
            const Icon = item.icon
            return (
                <a key={item.id} href={item.link} className='message-icons transition-all duration-200 ease-out hover:scale-110' target="_blank" rel="noopener noreferrer">
                <Icon />
                </a>
            )
            })}
        </div>
    )
}
