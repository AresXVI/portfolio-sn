import { ConfigProvider, Drawer } from 'antd'
import { LocaleProvider } from '../providers/LocaleProvider'

export default function Providers({ children, initialMessages }: { children: React.ReactNode, initialMessages: Record<string, any> }) {
    const theme = {
        token: {
            colorPrimary: '#2191DD',
            fontFamily: 'var(--font-inter)'
        },
        components: {
            Button: {
                colorPrimary: '#2191DD',
                colorPrimaryHover: '#1B7EC2',
                colorPrimaryActive: '#1b7bbd',
                borderRadius: 8
            },
            Form: {
                labelColor: 'var(--color-desc)',
                itemMarginBottom: 16
            },
            Input: {
                colorBgContainer: 'rgba(34, 151, 221, 0.2)',
                colorText: 'var(--color-desc)',
                colorTextPlaceholder: 'var(--color-desc)',
                borderRadius: 16,
                paddingBlock: 8,
                paddingInline: 14 
            },
            Select: {
                colorBgContainer: 'transparent',
                colorBorder: 'var(--color-border-color)',
                hoverBorderColor: 'var(--primary)',
                activeBorderColor: 'var(--primary)',
                activeOutlineColor: 'transparent',
                colorTextPlaceholder: 'var(--color-desc)',
                optionSelectedBg: 'rgba(34, 151, 221, 0.2)',
            }
        },
    }
    return (
        <ConfigProvider theme={theme} >
            <LocaleProvider  initialMessages={initialMessages}>
                {children}
            </LocaleProvider>
        </ConfigProvider>
    )
}