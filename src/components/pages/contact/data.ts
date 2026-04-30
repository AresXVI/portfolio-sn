import { IContactInformation } from "@//types/Contact";
import { LocationIcon } from "../../UI/svg/location";
import { TelephoneIcon } from "../../UI/svg/telephone";
import { MailRuIcon } from "../../UI/svg/mailRu";

export const CONTACT_INFORMATION: IContactInformation[] = [
    {
        id: 1,
        copy: "nuriksatymbaev7@gmail.com",
        icon: MailRuIcon,
        title: "email.title",
        desc: "email.desc",
        link: "mailto:nuriksatymbaev7@gmail.com",
    },
    {
        id: 2,
        copy: "+996779718902",
        icon: TelephoneIcon,
        title: "phone.title",
        desc: "phone.desc",
        link: "tel:+996779718902",
    },
    {
        id: 3,
        copy: null,
        icon: LocationIcon,
        title: "location.title",
        desc: "location.desc",
        link: "https://maps.app.goo.gl/9xghogEEukWjVeXu6",
    },
];
