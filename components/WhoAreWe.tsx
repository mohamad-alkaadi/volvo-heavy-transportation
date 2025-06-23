import Image from "next/image"
import React from "react"
import trucks from "@/assets/volvo-trucks.png"
const WhoAreWe = () => {
  return (
    <div id="who-are-we" className="flex flex-col items-center pb-15">
      <div className="text-[50px] max-[820px]:text-[45px] max-[415px]:text-[40px] font-semibold mb-8 max-[820px]:mb-4 mt-15">
        Who Are We
      </div>
      <div className="text-center px-40 max-[1390px]:px-8 text-[18px] max-[820px]:text-[15px] max-[415px]:text-[14px] mb-[90px]">
        At VOLVO HEAVY TRANSPORTATION, we redefine heavy truck transportation
        with a focus on safety, reliability, and efficiency. Our experienced
        team delivers exceptional service, using advanced technology and a
        state-of-the-art fleet to meet diverse client needs. We aim to provide
        seamless transportation solutions, promote sustainability, and build
        lasting customer relationships. At VOLVO HEAVY TRANSPORTATION, we don’t
        just move freight; we drive progress.
      </div>
      <Image className="w-[70%]" draggable={false} src={trucks} alt="" />
    </div>
  )
}

export default WhoAreWe
