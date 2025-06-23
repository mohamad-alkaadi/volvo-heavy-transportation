import React from "react"

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col justify-start items-center h-screen "
    >
      <div className="text-white flex flex-col justify-center items-center mt-[150px]">
        <p className="text-[25px] max-[1300px]:text-[20px] max-[950px]:text-[18px] max-[550px]:text-[15px] max-[400px]:text-[13px] text-[#d79f35]">
          YOUR TRUSTED PARTNER IN
        </p>
        <h1 className="flex flex-col justify-center items-center leading-[140px] max-[1300px]:leading-[100px] max-[950px]:leading-[80px] max-[750px]:leading-[60px] max-[550px]:leading-[40px] max-[400px]:leading-[30px]">
          <div className="text-[140px] max-[1300px]:text-[100px] max-[950px]:text-[80px] max-[750px]:text-[60px] max-[550px]:text-[40px] max-[400px]:text-[30px] font-bold">
            HEAVY TRUCK
          </div>
          <div className="text-[140px] max-[1300px]:text-[100px] max-[950px]:text-[80px] max-[750px]:text-[60px] max-[550px]:text-[40px] max-[400px]:text-[30px] font-bold">
            TRANSPORTATION
          </div>
        </h1>
      </div>
    </div>
  )
}

export default Hero
