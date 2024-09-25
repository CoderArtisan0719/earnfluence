import * as React from "react"
import Header from "@/components/ui/header"
import FooterSection from "@/components/ui/footer-section"
import RoundCardCarousel from "@/components/ui/RoundCardsCarousel"
import ExploreContainer from "@/components/ui/ExploreContainer";
import { navBarContents } from "@/data/navbar-contents"


export async function generateStaticParams() {
  return navBarContents.map((item) => ({ type: item.title }))
}

const Page = () => {

  return (
    <React.Fragment>
      <div className="relative z-50 bg-black">
        <div className="px-12">
          <Header className="bg-black" />
          <RoundCardCarousel />
          <ExploreContainer />
        </div>
        <FooterSection />
      </div>
    </React.Fragment>
  )
}

export default Page;