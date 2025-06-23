import Image, { StaticImageData } from "next/image"
import React from "react"

const ServicesOffer = ({
  title,
  paragraph,
  img,
}: {
  title: string
  paragraph: string
  img: StaticImageData
}) => {
  return (
    <div className="flex flex-col max-w-[300px] max-[1068px]:w-auto justify-center items-center">
      <Image
        className="w-[140px] h-[140px] mb-8 max-[1068px]:"
        draggable={false}
        src={img}
        alt={title}
      />
      <div className="w-full text-center mb-4 text-[#d79f35] text-[18px]">
        {title}
      </div>
      <div className="w-full text-center text-[14px]">{paragraph}</div>
    </div>
  )
}

export default ServicesOffer
