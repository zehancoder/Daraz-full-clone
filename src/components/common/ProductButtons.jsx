import { cn } from "../../classReplaceing/replace"

export const BuyBTn = ({className}) => {
    return (
        <>

            <div className={cn(" text-white", className)}>
                <button className="bg-[#2abbe8] transition opacity-95 hover:opacity-100 py-2.5 cursor-pointer px-3 w-full font-noto font-[400] text-[16px]">Buy Now</button>
            </div>
        </>
    )
}
export const SellBTn = ({className}) => {
    return (
        <>

            <div className={cn(" text-white", className)}>
                <button className="bg-[#f57224] transition opacity-95 hover:opacity-100 py-2.5 cursor-pointer px-3 w-full font-noto font-[400] text-[16px]">Add to Cart</button>
            </div>
        </>
    )
}  