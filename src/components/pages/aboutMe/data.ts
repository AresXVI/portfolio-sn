import { CodeIcon } from '../../UI/svg/code'
import { BulBIcon } from '../../UI/svg/bulb'
import { HumansIcon } from '../../UI/svg/humans'
import { HeartIcon } from '../../UI/svg/heart'
import { IMiniCardsAboutMe } from '@//types/AboutMe'

export const technologies = [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'RTK Query',
    'Git',
    'Rest API',
    'JIRA'
]

export const MINI_CARDS_ABOUT_ME: IMiniCardsAboutMe [] = [
    {
        id: 1,
        title: 'cards.cleanCode.title',
        desc:'cards.cleanCode.desc',
        icon: CodeIcon
    },
    {
        id: 2,
        title: 'cards.problemSolving.title',
        desc:'cards.problemSolving.desc',
        icon: BulBIcon
    },
    {
        id: 3,
        title: 'cards.communication.title',
        desc:'cards.communication.desc',
        icon: HumansIcon
    },
    {
        id: 4,
        title: 'cards.passionForDevelopment.title',
        desc:'cards.passionForDevelopment.desc',
        icon: HeartIcon
    }
]