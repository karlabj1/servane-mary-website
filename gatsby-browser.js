require("./src/css/main.css")
require("slick-carousel/slick/slick.css")
require("slick-carousel/slick/slick-theme.css")

const scrollToElement = require("scroll-to-element")

// Scroll to top when navigating to a new page, accounting for fixed header
exports.onRouteUpdate = ({ location, prevLocation }) => {
  // Only scroll to top if navigating to a different page (not just hash change)
  if (prevLocation && prevLocation.pathname !== location.pathname) {
    // Small delay to ensure page has rendered
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      })
    }, 0)
  }
  
  // Handle hash links
  checkHash(location)
}

const checkHash = location => {
  let { hash } = location
  if (hash) {
    // Account for fixed header (70px) when scrolling to hash
    scrollToElement(hash, {
      offset: -70,
      duration: 1000,
    })
  }
}
