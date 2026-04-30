import React from "react"

export interface IContactForm { 
    name: string
    email: string
    subject: string
    message: string
}

export interface IContactInformation {
    id: number 
    copy: string | null
    title: string
    desc: string
    link: string
    icon: React.ComponentType,
}