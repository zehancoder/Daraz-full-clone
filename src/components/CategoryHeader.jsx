import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { Container } from "./common/Container";
import myData from "../data/category.json"
import { useState } from "react";
import { Link } from "react-router-dom";
export const CategoryHeader = () => {
    const [overRun, setOverRun] = useState(false)
    const mouseHoverEffect = () => {
        setOverRun(true)
    }
    const hoverEffectLeave = () => {
        setOverRun(false)
    }
  return (
    <>
      <div className="w-full bg-white  pt-6 pb-2 ">
        <Container>
          <div className="max-w-56 relative">
            <div className="flex items-center gap-3 cursor-pointer transition hover:text-[#f36d00] font-[500] font-roboto text-[#0f136d] openEffect" onMouseOver={mouseHoverEffect} onMouseLeave={hoverEffectLeave}>
              <p className="text-[15px]   tracking-wide">Category</p>{" "}
              <span>
                <FaAngleDown />
              </span>
            </div>
            <div className={`absolute z-50 left-0 w-full  border border-gray-300 bg-white px-2 py-2 shadow ${overRun ? "block" : "hidden"}`} onMouseOver={mouseHoverEffect} onMouseLeave={hoverEffectLeave}>
                {
                    myData.map(({text, link})=> (
                        <Link to={link} className="flex items-center text-[13px] justify-between transition hover:text-[#f36d00] font-[400] font-roboto text-[#757575] cursor-pointer px-2 py-1" >
                            <p>{text}</p>
                            <FaAngleRight className={`text-lg`} />
                        </Link>
                    ))
                }
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
