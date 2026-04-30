type Example = {
    text: string
}

export interface IMyProjects { 
    id: number
    img: string
    link: string
    title: string
    desc: string
    tasks: Example[]
    technologies: Example[]
}