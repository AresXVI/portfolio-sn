import { IMyMessages } from "@//types/Messages";
import { GithubIcon } from "../svg/github";
import { MailRuIcon } from "../svg/mailRu";
import { TelegramIcon } from "../svg/tg";
import { InstagramIcon } from "../svg/ins";
import { WhatsappIcon } from "../svg/whatsapp";

export const MY_MESSAGES_MAIN_PAGE: IMyMessages [] = [
    {
        id: 1,
        link: 'https://github.com/AresXVI',
        icon: GithubIcon
    },
    {
        id: 2,
        link: 'mailto:nuriksatymbaev7@gmail.com',
        icon: MailRuIcon
    },
    {
        id: 3,
        link: 'https://t.me/AresXVI',
        icon: TelegramIcon
    }
]

export const MY_MESSAGES_CONTACT_PAGE: IMyMessages [] = [
    {
        id: 1,
        link: 'https://github.com/AresXVI',
        icon: GithubIcon
    },
    {
        id: 2,
        link: 'https://www.instagram.com/dx_1607',
        icon: InstagramIcon
    },
    {
        id: 3,
        link: 'https://wa.me/+996779718902',
        icon: WhatsappIcon
    },
    {
        id: 4,
        link: 'https://t.me/AresXVI',
        icon: TelegramIcon
    }
]