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
            { text: 'Redux Toolkit' },
            { text: 'RTK Query' }
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
            { text: 'TypeScript' },
            { text: 'Redux Toolkit' },
            { text: 'RTK Query' },
            { text: 'Next-Intl' }
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
            { text: 'Redux Toolkit' },
            { text: 'RTK Query' }
        ]
    },
    {
        id: 4,
        img: '/img/real-madrid.png',
        link: 'https://aresxvi.github.io/Real-Madrid',
        title: 'realMadrid.title',
        desc: 'realMadrid.desc',
        tasks: [
            { text: 'realMadrid.completedTasks.1' },
            { text: 'realMadrid.completedTasks.2' },
            { text: 'realMadrid.completedTasks.3' },
            { text: 'realMadrid.completedTasks.4' },
        ],
        technologies: [
            { text: 'HTML' },
            { text: 'CSS' },
            { text: 'JavaScript' }
        ]
    },
    {
        id: 5,
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
            { text: 'TypeScript' },
            { text: 'Redux Toolkit' },
            { text: 'RTK Query' },
            { text: 'Next-Intl' }
        ]
    },
    {
        id: 6,
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
            { text: 'TypeScript' },
            { text: 'Redux Toolkit' },
            { text: 'RTK Query' },
            { text: 'React PDF' },
            { text: 'XLSX' }
        ]
    }
];