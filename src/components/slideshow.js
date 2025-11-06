import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Marquee from "react-fast-marquee"

const query = graphql`
  query {
    contentfulSlideshow {
      images {
        id
        description
        height
        width
        url
      }
    }
  }
`

const SlideShow = () => {
  const data = useStaticQuery(query)
  
  function shuffleArray(array) {
    let curId = array.length
    // There remain elements to shuffle
    while (0 !== curId) {
      // Pick a remaining element
      let randId = Math.floor(Math.random() * curId)
      curId -= 1
      // Swap it with the current element.
      let tmp = array[curId]
      array[curId] = array[randId]
      array[randId] = tmp
    }
    return array
  }

  // Optimize image URL with Contentful's Image API
  const getOptimizedImageUrl = (url, width, height) => {
    if (!url) return url
    // Calculate target height (80vh ≈ 860px on most screens)
    const targetHeight = 860
    const targetWidth = Math.round((width * targetHeight) / height)
    
    // Add Contentful image transformation parameters - higher quality for crispness
    return `${url}?w=${targetWidth}&h=${targetHeight}&q=90&fm=webp&fit=fill`
  }

  const imageArray = shuffleArray(data.contentfulSlideshow.images)

  return (
    <Marquee gradient={false} className="image-marquee">
      {imageArray.map(image => {
        const imgWidth = (image.width * 80) / image.height
        const optimizedUrl = getOptimizedImageUrl(image.url, image.width, image.height)
        return (
          <div key={image.id} className="marquee-img-container">
            <img
              src={optimizedUrl}
              alt={image.description || ""}
              loading="lazy"
              decoding="async"
              style={{ height: "80vh", width: `${imgWidth}vh` }}
            />
          </div>
        )
      })}
    </Marquee>
  )
}

export default SlideShow
