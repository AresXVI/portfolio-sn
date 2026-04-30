// 'use client'

// import { useTranslations } from "next-intl";
// import { Logo } from "../../UI/Logo";

// export const Footer = () => {
//     const t = useTranslations('footer')
//     return (
//         <div className="w-full px-8 py-14 bg-(--color-second-background)">
//             <div className="max-w-[1280px] flex items-center mx-auto gap-4">
//                 {/* <div> */}
//                     <Logo />
//                     <div className="flex flex-1">
//                         <p className="mx-auto">© 2026 {t('text')}</p>
//                     </div>
//                     {/* <p className="max-w-[384px] mt-3">Frontend Developer passionate about creating innovative digital solutions</p> */}
//                 {/* </div> */}
//                 {/* <div className="h-[1px] w-full bg-(--color-border-color) mt-3"/> */}
//             </div>
//         </div>
//     );
// };

'use client'

import { useTranslations } from "next-intl";
import { Logo } from "../../UI/Logo";

export const Footer = () => {
    const t = useTranslations('footer')

    return (
        <footer className="w-full bg-[var(--color-second-background)] border-t border-[var(--color-border-color)]">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3">
                    
                    <Logo />
                    
                    <div className="flex-1">
                        <p className="text-[var(--color-desc)] text-sm sm:text-base text-center">
                            © 2026 {t('text')}
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    );
};