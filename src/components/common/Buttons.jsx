import { cn } from "../../classReplaceing/replace"

export const ButtonOne = ({children, className}) => {
    return (
        <>
            <button className={cn("w-full bg-[#ff6c23] py-2 text-white font-noto font-medium uppercase text-[16px]  px-2 text-center rounded-md", className)}>
                {children}
            </button>  
        </>
    )
}