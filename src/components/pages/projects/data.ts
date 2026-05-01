import { IMyProjects } from '@//types/MyProject'

export const MY_PROJECTS: IMyProjects[] = [
    {
        id: 1,
        img: '/img/idyikan.png',
        link: 'https://idyikan.agrosmart.gov.kg/',
        title: 'iDyikan.title',
        desc: 'iDyikan.desc',
        tasks: [
            { text: 'iDyikan.completedTasks.1' },
            { text: 'iDyikan.completedTasks.2' }
        ],
        technologies: [
            { text: 'React' },
            { text: 'TypeScript' },
            { text: 'Redux' },
            { text: 'Redux Toolkit' }
        ]
    },
    {
        id: 2,
        img: '/img/agrodialogg.png',
        link: 'https://agro-dialog.vercel.app/',
        title: 'agroDialog.title',
        desc: 'agroDialog.desc',
        tasks: [
            { text: 'agroDialog.completedTasks.1' },
            { text: 'agroDialog.completedTasks.2' },
            { text: 'agroDialog.completedTasks.3' },
            { text: 'agroDialog.completedTasks.4' }
        ],
        technologies: [
            { text: 'Next.js' },
            { text: 'TypeScript' }
        ]
    },
    {
        id: 3,
        img: '/img/seed-producers-cabinet.png',
        link: 'https://semhoz.agrosmart.gov.kg/',
        title: 'seedProducersCabinet.title',
        desc: 'seedProducersCabinet.desc',
        tasks: [
            { text: 'seedProducersCabinet.completedTasks.1' },
            { text: 'seedProducersCabinet.completedTasks.2' },
            { text: 'seedProducersCabinet.completedTasks.3' }
        ],
        technologies: [
            { text: 'React' },
            { text: 'Vite' },
            { text: 'TypeScript' },
            { text: 'Redux' },
            { text: 'Redux Toolkit' }
        ]
    },
    {
        id: 4,
        img: '/img/agroportal.png',
        link: 'https://portal.agrosmart.gov.kg/',
        title: 'agroPortal.title',
        desc: 'agroPortal.desc',
        tasks: [
            { text: 'agroPortal.completedTasks.1' },
            { text: 'agroPortal.completedTasks.2' },
            { text: 'agroPortal.completedTasks.3' }
        ],
        technologies: [
            { text: 'Next.js' },
            { text: 'TypeScript' }
        ]
    },
    {
        id: 5,
        img: '/img/seed-producers-admin-panel.png',
        link: 'https://portal.agrosmart.gov.kg/',
        title: 'seedProducersAdmin.title',
        desc: 'seedProducersAdmin.desc',
        tasks: [
            { text: 'seedProducersAdmin.completedTasks.1' },
            { text: 'seedProducersAdmin.completedTasks.2' }
        ],
        technologies: [
            { text: 'React' },
            { text: 'Vite' },
            { text: 'TypeScript' },
            { text: 'Redux' },
            { text: 'Redux Toolkit' }
        ]
    }
];