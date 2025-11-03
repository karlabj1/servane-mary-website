import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Marquee from "react-fast-marquee"


const IndexPage = ({ data }) => {
  const { homeImage, homeImageTitle, years } = data.contentfulHomePage
  const { images: slideshowImages } = data.contentfulSlideshow
  const { nodes: allWorks } = data.allContentfulWork
  const homeWorkLink = homeImageTitle
  const descYears = years
    .map(year => parseInt(year, 10))
    .sort(function (a, b) {
      return b - a
    })

  // Function to find artwork by slideshow image ID
  const findArtworkByImageId = (slideshowImageId) => {
    for (const work of allWorks) {
      if (work.artworkImages) {
        for (const artworkImage of work.artworkImages) {
          if (artworkImage.id === slideshowImageId) {
            return work.slug
          }
        }
      }
    }
    return null
  }

  // Function to shuffle array (same as in slideshow component)
  function shuffleArray(array) {
    let curId = array.length
    while (0 !== curId) {
      let randId = Math.floor(Math.random() * curId)
      curId -= 1
      let tmp = array[curId]
      array[curId] = array[randId]
      array[randId] = tmp
    }
    return array
  }

  // Create shuffled image array for marquee with artwork links
  const imageArray = shuffleArray(slideshowImages).map(img => {
    const artworkSlug = findArtworkByImageId(img.id)
    return {
      ...img,
      linkTo: artworkSlug ? `/works/${artworkSlug}` : null
    }
  })

  return (
    <Layout>
      <Seo title="Home" />
      <section className="home-slideshow-container">
        <Marquee gradient={false} className="image-marquee">
          {imageArray.map(image => {
            const imgWidth = (image.width * 100) / image.height
            return (
              <div key={image.id} className="marquee-img-container">
                {image.linkTo ? (
                  <Link to={image.linkTo} className="marquee-img-link">
                    <img
                      src={image.url}
                      alt={image.description}
                      style={{ height: "100vh", width: `${imgWidth}vh` }}
                    />
                  </Link>
                ) : (
                  <img
                    src={image.url}
                    alt={image.description}
                    style={{ height: "100vh", width: `${imgWidth}vh` }}
                  />
                )}
              </div>
            )
          })}
        </Marquee>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export const query = graphql`
  query {
    contentfulHomePage {
      homeImageTitle
      years
      homeImage {
        gatsbyImageData(placeholder: BLURRED)
        id
        description
        title
      }
    }
    contentfulSlideshow {
      images {
        id
        description
        height
        width
        url
      }
    }
    allContentfulWork {
      nodes {
        id
        slug
        artworkImages {
          id
        }
      }
    }
  }
`

export default IndexPage
