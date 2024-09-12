import * as React from "react"
import AppleCardsCarouselDemo from "@/components/ui/AppleCardsCarouselDemo"
import { Separator } from "@/components/ui/separator"
import Header from "@/components/ui/header"
import FavoriteStars from "@/components/ui/favorite-stars"
import FeaturedPicks from "@/components/ui/featured-picks"
import GiftsForBudget from "@/components/ui/gifts-budget"
import Reviews from "@/components/ui/reviews"
import Categories from "@/components/ui/categories"
import CameoCards from "@/components/ui/cameo-card"
import Cameo from "@/components/ui/cameo"
import BottomSticky from "@/components/bottom-sticky"
import FooterSection from "@/components/ui/footer-section"

const Page = () => {
  return (
    <React.Fragment>
      <div className="relative z-50 bg-black">
        <div className="px-12">
          <Header className="bg-black" />
          <FavoriteStars />
          <FeaturedPicks />
          <AppleCardsCarouselDemo />
          <CameoCards />
          <GiftsForBudget />
          <Reviews />
          <Categories />    
          <Cameo />
        </div>
        <Separator className="my-4 border-white" />
        <FooterSection />
      </div>
      <BottomSticky />
    </React.Fragment>
  )
}

export default Page;

