import React from "react"
import { useState } from "react"
import Header from "./header"

const Layout = ({ children }) => {
  const [isExhibitionOpen, setIsExhibitionOpen] = useState(false)

  const toggleExhibitionMenu = () => {
    setIsExhibitionOpen(!isExhibitionOpen)
  }

  return (
    <>
      <Header 
        toggleExhibitionMenu={toggleExhibitionMenu}
        isExhibitionOpen={isExhibitionOpen}
      />
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout
