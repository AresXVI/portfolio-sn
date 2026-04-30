'use client'

import { Footer } from './footer/Footer'
import { AboutMe } from './aboutMe/AboutMe'
import { Contact } from './contact/Contact'
import { Navbar } from '../UI/navbar/Navbar'
import { MyProjects } from './projects/MyProjects'
import { WelcomePage } from './welcome/WelcomePage'
import { useActiveSection } from '@//hooks/useActivateSection'

export const MainPage = () => {  
    const activeSection = useActiveSection({
        rootMargin: "-50% 0px -40% 0px",
        threshold: [0, 0.25, 0.5],
        selector: "section[id]",
    });
    return (
        <div>
            <Navbar activeSection={activeSection}/>
            <WelcomePage id='welcome'/>
            <AboutMe id='aboutMe'/>
            <MyProjects id='myProjects'/>
            <Contact id='contact'/>
            <Footer />
        </div>
    )
}
