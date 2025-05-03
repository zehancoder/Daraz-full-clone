import { Container } from "./Container";
import FooterData from "../../data/CommonFotterData.json";
import { Link } from "react-router-dom";
export const CommonFooter = () => {
  return (
    <>
      <div className="pb-12">
        <Container className={"px-2 py-6"}>
          <div className="max-w-6xl  flex md:flex-row flex-col justify-between gap-4">
            <div className="flex gap-4">
              <div>
                <h1 className="font-normal mb-2 text-[16px]  font-noto text-[#0f136d]">
                  Customer Care
                </h1>
                {FooterData.CustomerCare.map((text) => (
                  <p className="text-noto font-[400] text-[12px] text-[#0f136d]">
                    {text}
                  </p>
                ))}
              </div>
              <div>
                <h1 className="font-normal mb-2 text-[16px]  font-noto text-[#0f136d]">
                  Customer Care
                </h1>
                {FooterData.Daraz.map((text) => (
                  <p className="text-noto font-[400] text-[12px] text-[#0f136d]">
                    {text}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex md:justify-start justify-between gap-3 md:gap-7 md:mt-0 mt-6"> 
              <div className="flex  gap-2">
                <div>
                <img
                  src="/images/daraz.png"
                  className="w-13"
                  alt=""
                />
                </div>
                <div>
                  <p className="text-[#f36f36] font-noto font-medium">Happy Shopping</p>
                  <p className="text-[#0f136d] font-medium font-noto text-[15px]">Download App</p>
                </div>
              </div>
              <div className="flex md:justify-start justify-end flex-wrap gap-4  w-32 md:w-72">
                <Link  to="//itunes.apple.com/app/id978058048?mt=8&scm=1003.4.icms-zebra-100022982-2874591.OTHER_5436817469_2538051"><img src="https://img.lazcdn.com/us/domino/e1486716-675d-495a-ba5f-0435b55ca3f4_BD-126-42.png" alt="" /></Link>
                <Link ><img src="https://img.lazcdn.com/us/domino/84b7eda1-c90a-4f39-b056-dbec1cc76c2f_BD-126-42.png" alt="" /></Link>
                <Link className="md:mb-48"><img src="https://img.lazcdn.com/us/domino/38759af8-163f-4d76-99d4-bc69cfe2e324_BD-126-42.png" alt="" /></Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
