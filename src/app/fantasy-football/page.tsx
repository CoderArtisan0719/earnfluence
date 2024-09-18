'use client'
import * as React from "react"
import Header from "@/components/ui/header"
import FooterSection from "@/components/ui/footer-section"
import FantasyFootballBrand from "@/components/ui/fantasyFootballBrand"
import FantasyStars from "@/components/ui/fantasyStars"

const Page = () => {

  return (
    <React.Fragment>
      <div className="relative z-50 bg-black">
        <div className="px-12">
          <Header className="bg-black" />
          <FantasyFootballBrand />
          <FantasyStars />
        </div>
        <FooterSection />
      </div>
    </React.Fragment>
  )
}

export default Page;