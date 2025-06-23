import Image from "next/image"
import React from "react"
import truck from "@/assets/volvo-truck.png"
import { FaLocationDot } from "react-icons/fa6"
import { FaPhoneAlt } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"

const ContactUs = () => {
  return (
    <div
      id="contact-us"
      className="px-40 max-[1400]:px-20 py-10 max-[720px]:px-8 bg-[#f4f4f4] w-full flex justify-around max-[900px]:flex-col max-[900px]:justify-center items-center"
    >
      <div className="max-[900px]:w-full ">
        <div className="text-[#00bf63] max-[820px]:text-[13px] max-[900px]:text-center">
          How can we help you?
        </div>
        <div className="font-semibold text-[50px] max-[820px]:text-[45px] max-[415px]:text-[40px] mb-6 max-[900px]:text-center">
          Contact Us
        </div>
        <div className="max-[900px]:flex flex-col justify-center items-center">
          <div className="max-w-[400px] max-[900px]:text-center text-[18px] max-[820px]:text-[15px] max-[415px]:text-[14px] mb-6">
            we’re have to help and answer any questions you might have. We look
            forward to hearing from you!
          </div>
          <div className="flex justify-start items-center space-x-2 mb-4 text-[18px] max-[820px]:text-[15px] max-[415px]:text-[14px]">
            <IoMdMail className="text-[18px] text-[#00bf63]" />
            <div>ywsf02677@gmail.com</div>
          </div>
          <div className="flex justify-start items-center space-x-2 mb-4 text-[18px] max-[820px]:text-[15px] max-[415px]:text-[14px]">
            <FaLocationDot className="text-[18px] text-[#00bf63]" />
            <div>Dubai, UAE</div>
          </div>
          <div className="flex justify-start items-center space-x-2 mb-4 text-[18px] max-[820px]:text-[15px] max-[415px]:text-[14px]">
            <FaPhoneAlt className="text-[17px] text-[#00bf63]" />
            <div>+971 50 758 0549</div>
          </div>
        </div>
      </div>
      <Image src={truck} draggable={false} alt="" />
    </div>
  )
}

export default ContactUs
