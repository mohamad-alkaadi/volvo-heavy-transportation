import React from "react"
import heavyMerchandiseTransportation from "@/assets/heavy-merchandise-transportation.png"
import vehicleRecovery from "@/assets/vehicle-recovery.png"
import CarTransportation from "@/assets/car-transportation.png"
import ServicesOffer from "./ServicesOffer"
const OurServices = () => {
  return (
    <div
      id="our-services"
      className="flex flex-col items-center mb-[100px] pb-15 max-[640px]:pb-0"
    >
      <div className="text-[50px] max-[820px]:text-[45px] max-[415px]:text-[40px] font-semibold mb-8 max-[820px]:mb-4 mt-15">
        Our Services
      </div>
      <div className="text-center px-40 max-[1390px]:px-8 text-[18px] max-[820px]:text-[15px] max-[415px]:text-[14px] mb-[90px]">
        At VOLVO HEAVY TRANSPORTATION, we pride ourselves on delivering reliable
        and efficient transportation solutions tailored to meet your unique
        needs. Our comprehensive services ensure that your goods and vehicles
        are handled with the utmost care and professionalism. Here’s what we
        offer:
      </div>
      <div className="flex max-[1068px]:flex-col justify-center items-center space-x-[50px] max-[1068px]:space-x-0 max-[1068px]:space-y-[50px]">
        <div className="flex max-[640px]:flex-col justify-center items-center space-x-[50px] max-[640px]:space-x-0  max-[640px]:space-y-[50px] ">
          <ServicesOffer
            title="Vehicle Recovery Services"
            paragraph="Stuck with a broken-down vehicle? Our team provides fast recovery
          services to get you moving again quickly and safely."
            img={vehicleRecovery}
          />
          <ServicesOffer
            title="Heavy Merchandise Transportation"
            paragraph="We ensure your heavy goods reach their destination safely and on
          time with our well- equipped fleet."
            img={heavyMerchandiseTransportation}
          />
        </div>

        <ServicesOffer
          title="Car Transportation"
          paragraph="We ensure your heavy goods reach their destination safely and on
            time with our well- equipped fleet."
          img={CarTransportation}
        />
      </div>
    </div>
  )
}

export default OurServices
