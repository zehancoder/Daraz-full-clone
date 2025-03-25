import { useState } from "react";
import { cn } from "../../../classReplaceing/replace"
import myData from "../../../data/products.json"
export const ForYouItem = ( {className, ItemTrack}) => {
   console.log(myData[ItemTrack])

    return (    
        <>
            <div className={cn("h-96 w-96", className)}>
                <p>{ItemTrack == false ? "" : myData[ItemTrack].text}</p>
            </div>
        </>
    )
}