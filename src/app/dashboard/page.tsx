import * as React from "react"
import Header from "@/components/ui/header"

const Page = () => {
  return (
    <React.Fragment>
      <div className="relative z-50 bg-black max-w-[1680px] m-auto">
        <div className="px-12">
          <Header className="bg-black" />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Page;