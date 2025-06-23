import React from "react"

const WhyChooseUsBox = ({
  title,
  paragraph,
  color,
}: {
  title: string
  paragraph: string
  color: string
}) => {
  return (
    <div
      className={`py-4 px-6 min-h-[190px] rounded-lg bg-[${color}] flex flex-col justify-start items-center`}
    >
      <div className="text-[18px] max-[820px]:text-[17px] mb-8 font-semibold">
        {title}
      </div>
      <div className="text-center max-[820px]:text-[14px] text-[15px] mb-8 max-w-[350px]">
        {paragraph}
      </div>
    </div>
  )
}

export default WhyChooseUsBox
