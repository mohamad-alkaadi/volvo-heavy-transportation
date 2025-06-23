import React from "react"
import WhyChooseUsBox from "./WhyChooseUsBox"

const WhyChooseUs = () => {
  return (
    <div
      id="why-choose-us"
      className="flex flex-col items-start px-40 max-[1400]:px-20 pb-[100px] max-[720px]:px-8 justify-start max-[820px]:justify-center"
    >
      <div className="">
        <div className="text-[50px] max-[820px]:text-[45px] max-[820px]:text-center max-[415px]:text-[40px] font-semibold mb-8 max-[820px]:mb-4 mt-15">
          Why Choose Us
        </div>
        <div className=" text-[18px] max-[820px]:text-center max-[820px]:text-[15px] max-[415px]:text-[14px] mb-[100px] ">
          In today's fast-paced world, choosing the right logistics partner can
          make all the difference in your business's success. At VOLVO HEAVY
          TRANSPORTATION, we understand the importance of delivering excellence
          at every step of the journey. Whether you are looking for secure and
          reliable transportation, top-quality service, or competitive pricing,
          we have you covered. Our team of experienced professionals is
          dedicated to ensuring that your needs are met with precision and care.
          Discover why so many clients trust us as their go-to logistics partner
          and experience the difference we bring to your operations.
        </div>
      </div>
      <div className="flex max-[1050px]:flex-col w-full space-x-3 max-[1050px]:space-x-0 max-[820px]:justify-center max-[820px]:items-center">
        <div className="flex max-[720px]:flex-col  max-[720px]:justify-center max-[720px]:items-center space-x-3 max-[720px]:space-x-0  max-[720px]:space-y-2  mb-2">
          <WhyChooseUsBox
            title="Security & Reliability"
            paragraph="We ensure safe transportation of your merchandise with advanced
            technology and skilled professionals."
            color="#f5f7fa"
          />

          <WhyChooseUsBox
            title="Quality & Satisfaction"
            paragraph="Our commitment to high-quality services results in satisfied, repeat
            clients."
            color="#e2e6ec"
          />
        </div>
        <div className="flex max-[720px]:flex-col  max-[720px]:justify-center max-[720px]:items-center space-x-3 max-[720px]:space-x-0  max-[720px]:space-y-2  mb-2">
          <WhyChooseUsBox
            title="Experienced Professionals"
            paragraph="Our experts efficiently handle complex logistics and heavy loads."
            color="#f5f7fa"
          />

          <WhyChooseUsBox
            title="Experienced Professionals"
            paragraph="Get premium services at affordable rates with no hidden fees."
            color="#e2e6ec"
          />
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
