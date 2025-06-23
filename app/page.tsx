import ContactUs from "@/components/ContactUs"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import OurServices from "@/components/OurServices"
import TextSeparator from "@/components/TextSeparator"
import WhoAreWe from "@/components/WhoAreWe"
import WhyChooseUs from "@/components/WhyChooseUs"

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <TextSeparator text={"Driven by reliability, powered by trust"} />
      <WhoAreWe />
      <TextSeparator text={"Where cargo meets commitment"} />
      <OurServices />
      <TextSeparator text={"Your journey, our responsibility"} />
      <WhyChooseUs />
      <ContactUs />
      <Footer />
    </div>
  )
}
