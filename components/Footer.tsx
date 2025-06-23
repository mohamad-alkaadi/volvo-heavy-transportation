import React from "react"
import footerLogo from "@/assets/volvo.png"
import Image from "next/image"
const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <Image draggable={false} className="w-[300px]" src={footerLogo} alt="" />
    </div>
  )
}

export default Footer
