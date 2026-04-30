// 'use client'

// import { Button } from "antd";
// import { Title } from "../../UI/title/Title";
// import { MessagesMainPage } from "../../UI/messages/MessagesMainPage";
// import { DownArrowIcon } from "../../UI/svg/down-arrow";
// import { useTranslations } from "next-intl";

// export const WelcomePage = ({ id }: { id: string }) => {
//   const t = useTranslations('welcomePage')

//   const scrollToAboutMe = () => {
//     const AboutMeId = document.getElementById('aboutMe')
//     AboutMeId?.scrollIntoView({ behavior: 'smooth' })
//   }

//   return (
//     <section
//       id={id}
//       className="w-full relative h-screen min-h-150 bg-gradient-to-br from-cyan-700/20 to-cyan-700/20 border-b-[0.5px] border-(--color-border-color) px-4 sm:px-6 lg:px-8"
//     >
//       {/* Декорация */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-0 left-0 w-[100px] h-[100px] bg-cyan-500/70 rounded-full blur-3xl" />
//         <div className="absolute top-[40%] left-[30%] w-[50px] h-[50px] bg-cyan-500/80 rounded-full blur-2xl" />
//         <div className="absolute bottom-0 right-0 w-[80px] h-[80px] bg-cyan-500/70 rounded-full blur-3xl" />
//       </div>

//       {/* Контент */}
//       <div className="w-full h-full flex justify-center animate-[fade-in_0.6s_ease-out]">
//         <div className="max-w-[1280px] w-full h-full flex flex-col justify-center">
//           <Title defaultText={t('greetingDefault')} gradientText={t('greetingGradient')} />
//           <p className="sm:mx-auto text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground mb-4 sm:mb-6 lg:mb-8 font-light">
//             {t('title')}
//           </p>
//           <p className="text-sm sm:mx-auto sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-8 sm:mb-10 lg:mb-12 max-w-sm sm:max-w-xl md:max-w-2xl leading-relaxed">
//             {t('description')}
//           </p>
//           <MessagesMainPage />
//           <div 
//             onClick={scrollToAboutMe}
//             className="mt-8 sm:mt-10 lg:mt-12 text-gray-400 hover:text-[var(--color-gradient-start)] transition-all cursor-pointer active:scale-110"
//           >
//             <DownArrowIcon />
//           </div>
//           <div className="sm:mx-auto flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-[400px] w-full">
//             <Button
//               className=" w-full sm:flex-1 transition-all duration-200 hover:scale-105 font-medium!"
//               type="primary"
//               size="large"
//             >
//               {t('viewProjectButton')}
//             </Button>
//             <Button
//               className="w-full sm:flex-1 transition-all duration-200 hover:scale-105 bg-transparent! font-medium!"
//               color="primary"
//               variant="outlined"
//               size="large"
//             >
//               {t('getInTouchButton')}
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

'use client'

import { Button } from "antd";
import { Title } from "../../UI/title/Title";
import { MessagesMainPage } from "../../UI/messages/MessagesMainPage";
import { DownArrowIcon } from "../../UI/svg/down-arrow";
import { useTranslations } from "next-intl";

export const WelcomePage = ({ id }: { id: string }) => {
  const t = useTranslations('welcomePage')

  const scrollToAboutMe = () => {
    const AboutMeId = document.getElementById('aboutMe')
    AboutMeId?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id={id}
      className="w-full relative min-h-screen h-screen bg-gradient-to-br from-cyan-700/20 to-cyan-700/20 
                border-b-[0.5px] border-(--color-border-color) 
                px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16"
    >
      {/* Декорация */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] bg-cyan-500/70 rounded-full blur-3xl" />
        <div className="absolute top-[35%] left-[25%] sm:top-[40%] sm:left-[30%] w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] bg-cyan-500/80 rounded-full blur-2xl" />
        <div className="absolute bottom-0 right-0 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] bg-cyan-500/70 rounded-full blur-3xl" />
      </div>

      {/* Контент */}
      <div className="w-full h-full flex justify-center animate-[fade-in_0.6s_ease-out]">
        <div className="max-w-[1280px] w-full h-full flex flex-col justify-center items-center">
          
          <Title 
            defaultText={t('greetingDefault')} 
            gradientText={t('greetingGradient')} 
          />

          <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 
                        text-muted-foreground mb-6 mt-4 md:mt-6 font-light text-center px-2">
            {t('title')}
          </p>

          <p className="text-base sm:text-lg md:text-xl text-center text-muted-foreground 
                        mb-10 md:mb-12 lg:mb-14 sm:max-w-2xl mx-auto leading-relaxed px-4 max-w-[420px]">
            {t('description')}
          </p>

          <div className="mb-10 md:mb-12">
            <MessagesMainPage />
          </div>

          <div 
            onClick={scrollToAboutMe}
            className="text-gray-400 hover:text-[var(--color-gradient-start)] hover:cursor-pointer 
                        transition-all mt-8 sm:mt-10 md:mt-12 lg:mt-16 animate-float active:scale-110 hidden sm:block"
          >
            <DownArrowIcon />
          </div>

          {/* Кнопки */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[400px] sm:max-w-[420px] md:max-w-[460px] 
                          justify-center items-center px-4">
            <Button
              className="w-full sm:flex-1 max-w-[220px] sm:max-w-none h-11 md:h-12 
                          transition-all duration-200 ease-out hover:scale-105 
                          antd-primary-default-bg font-medium"
              type="primary"
              size="large"
            >
              {t('viewProjectButton')}
            </Button>

            <Button
              className="w-full sm:flex-1 max-w-[220px] sm:max-w-none h-11 md:h-12 
                        transition-all duration-200 ease-out hover:scale-105 
                        bg-transparent! font-medium"
              color="primary"
              variant="outlined"
              size="large"
            >
              {t('getInTouchButton')}
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

// 'use client'

// import { Button } from "antd";
// import { Title } from "../../UI/title/Title";
// import { MessagesMainPage } from "../../UI/messages/MessagesMainPage";
// import { DownArrowIcon } from "../../UI/svg/down-arrow";
// import { useTranslations } from "next-intl";

// export const WelcomePage = ({ id }: { id: string }) => {
//   const t = useTranslations('welcomePage')

//   const scrollToAboutMe = () => {
//     const AboutMeId = document.getElementById('aboutMe')
//     AboutMeId?.scrollIntoView({ behavior: 'smooth' })
//   }

//   return (
//     <section
//       id={id}
//       className="w-full relative h-screen min-h-150 bg-gradient-to-br from-cyan-700/20 to-cyan-700/20 border-b-[0.5px] border-(--color-border-color) px-4 sm:px-6 lg:px-8"
//     >
//       {/* Декорация */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-0 left-0 w-[100px] h-[100px] bg-cyan-500/70 rounded-full blur-3xl" />
//         <div className="absolute top-[40%] left-[30%] w-[50px] h-[50px] bg-cyan-500/80 rounded-full blur-2xl" />
//         <div className="absolute bottom-0 right-0 w-[80px] h-[80px] bg-cyan-500/70 rounded-full blur-3xl" />
//       </div>

//       {/* Контент */}
//       <div className="w-full h-full flex justify-center animate-[fade-in_0.6s_ease-out]">
//         <div className="max-w-[1280px] w-full h-full flex flex-col justify-center items-center">
//           <Title defaultText={t('greetingDefault')} gradientText={t('greetingGradient')} />
//           <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 mt-4 font-light">
//             {t('title')}
//           </p>
//           <p className="text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
//             {t('description')}
//           </p>
//           <MessagesMainPage />
//           <div 
//             onClick={scrollToAboutMe}
//             className="text-gray-400 hover:text-[var(--color-gradient-start)] hover:cursor-pointer transition-all mt-12 animate-float active:scale-110"
//           >
//             <DownArrowIcon />
//           </div>
//           <div className="flex max-w-[400px] w-full justify-between items-center">
//             <Button
//               className="flex-1 max-w-48 transition-all duration-200 ease-out hover:scale-105 antd-primary-default-bg font-medium!"
//               type="primary"
//               size="large"
//             >
//               {t('viewProjectButton')}
//             </Button>
//             <Button
//               className="flex-1 max-w-48 transition-all duration-200 ease-out hover:scale-105 bg-transparent! font-medium!"
//               color="primary"
//               variant="outlined"
//               size="large"
//             >
//               {t('getInTouchButton')}
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
