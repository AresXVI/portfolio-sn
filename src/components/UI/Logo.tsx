import { scrollTo } from "@//utils/scrollTo"

export const Logo = ({ onClick }: { onClick?: () => void }) => {
    return (
        <span onClick={() => scrollTo('welcome')} className="text-gradient font-poppins font-bold text-2xl cursor-pointer">SN</span>
    )
}