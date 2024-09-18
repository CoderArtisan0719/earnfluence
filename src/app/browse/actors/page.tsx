'use client'
import * as React from "react"
import Header from "@/components/ui/header"
import BottomSticky from "@/components/bottom-sticky"
import FooterSection from "@/components/ui/footer-section"
import RoundCardCarousel from "@/components/ui/RoundCardsCarousel"
import ExploreContainer from "@/components/ui/ExploreContainer"

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