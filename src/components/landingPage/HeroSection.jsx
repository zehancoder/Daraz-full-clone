import { Container } from "../common/Container";
import Slider from "./Slider";
import { ImStarFull } from "react-icons/im";

export const HeroSec = () => {
  return (
    <>
      <div>
        <Container>
          <div className="w-full xl:grid grid-cols-12">
            <Slider className={"col-span-12 xl:col-span-10"} />
            <div className="customBg py-4 flex gap-4 md:block col-span-12  xl:col-span-2 w-full md:w-[220px] xl:mt-0 mt-3 xl:px-0 px-2">
              <div>
                <div className="flex items-center gap-3 xl:w-auto w-20">
                  <img
                    src="https://img.lazcdn.com/us/domino/1ee015d6a5c62fd0339c88c657c1c183.jpg_120x120q80.jpg"
                    alt=""
                    className="w-10 xl:w-8 xl:px-0 px-2"
                  />
                  <p className="font-noto text-[13px] md:text-base font-medium text-[#6c1d00]">
                    Download the App
                  </p>
                </div>
                <div className="relative bg-[url(https://img.lazcdn.com/g/tps/imgextra/i2/O1CN01tceZus1IewufOY1tZ_!!6000000000919-2-tps-364-316.png)] bg-contain bg-no-repeat md:w-auto w-44 h-44 mt-3">
                  <p className="absolute top-1 left-2 text-white flex items-center text-xs font-bold">
                    <span>
                      <ImStarFull />
                    </span>
                    4.8 Rated
                  </p>
                  <div className="py-7 text-white">
                    <p className="text-center font-medium font-noto text-[12px] md:text-[13px] ">
                      Download App
                    </p>
                    <div className="mt-2 md:mt-6 flex items-center justify-center gap-2 leading-4">
                      <img
                        className="w-8 md:w-9"
                        src="https://img.lazcdn.com/g/tps/imgextra/i2/O1CN01n3PMa828kJZVuCbPp_!!6000000007970-2-tps-72-72.png_150x150q80.png"
                        alt=""
                      />
                      <p className="font-noto font-medium text-[13px] md:text-[15px]">
                        Free <br /> Delivery
                      </p>
                    </div>
                    <div className="mt-2 flex items-center justify-center gap-2 leading-4">
                      <img
                        className="w-8 md:w-9"
                        src="https://img.lazcdn.com/g/tps/imgextra/i3/O1CN01J03SMW1lebTE7xkaN_!!6000000004844-2-tps-72-72.png_150x150q80.png"
                        alt=""
                      />
                      <p className="font-noto font-medium text-[13px] md:text-[15px]">
                        Limited <br /> Time
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-row flex-col items-center mt-4">
                <img
                  className="w-32 md:w-28"
                  src="https://img.drz.lazcdn.com/g/tps/imgextra/i1/O1CN01EJwZkh1TCWAEThhF0_!!6000000002346-0-tps-150-150.jpg_360x360q80.jpg"
                  alt=""
                />
                <div className="px-3 md:w-auto w-auto m-2">
                  <a href="https://apps.apple.com/bd/app/daraz-online-shopping-app/id978058048">
                    <img
                      className="w-26"
                      src="https://img.lazcdn.com/g/tps/imgextra/i4/O1CN01uAl8kB1wEv2DNjdhB_!!6000000006277-2-tps-125-36.png"
                      alt=""
                    />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.daraz.android">
                    <img
                      className="mt-2 w-26"
                      src="https://img.lazcdn.com/g/tps/imgextra/i1/O1CN01QJGFfc1S0mKngu4rQ_!!6000000002185-2-tps-125-36.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
