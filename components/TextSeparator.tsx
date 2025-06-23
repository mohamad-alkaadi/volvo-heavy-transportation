import React from "react"

const TextSeparator = ({ text }: { text: string }) => {
  return (
    <div className="flex justify-center items-center text-[50px] max-[970px]:text-[40px] max-[750px]:text-[30px] max-[660px]:text-[20px] max-[370px]:text-[17px] font-semibold h-[300px] bg-[#ebeaea]">
      {text}
    </div>
  )
}

export default TextSeparator
