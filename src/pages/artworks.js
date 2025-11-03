import React from "react"
import Layout from "../components/layout"
import PasswordProtected from "../components/password-protected"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const Artworks = ({ data }) => {
  const { years } = data.contentfulHomePage
  const works = data.allContentfulWork.nodes
  
  const descYears = years
    .map(year => parseInt(year, 10))
    .sort(function (a, b) {
      return b - a
    })

  return (
    <Layout>
      <PasswordProtected>
        <div className="artworks-page">
          <article className="year-container">
            {descYears.map((year, index) => (
              <a key={index} href={`#year${year}`} className="year-link">
                {year}
              </a>
            ))}
          </article>
        {descYears.map((year, index) => (
          <section key={index} id={`year${year}`}>
            <h2>{year}</h2>
            <article className="works-container fade-in">
              {works.map(work => {
                const artworkYear = new Date(work.artworkDate).getFullYear()
                const imgWidth =
                  (work.artworkImages?.[0]?.gatsbyImageData.width * 23) /
                  work.artworkImages?.[0]?.gatsbyImageData.height
                if (artworkYear === year) {
                  return (
                    <Link
                      key={work.id}
                      to={`/works/${work.slug}`}
                      className="work-thumbnail-container"
                    >
                      {imgWidth && (
                        <GatsbyImage
                          image={work.artworkImages?.[0]?.gatsbyImageData}
                          alt={work.artworkImages?.[0]?.description}
                          style={{ width: `${imgWidth}vw` }}
                          className="work-thumbnail"
                        ></GatsbyImage>
                      )}
                    </Link>
                  )
                } else {
                  return null
                }
              })}
            </article>
          </section>
        ))}
        </div>
      </PasswordProtected>
    </Layout>
  )
}

export const query = graphql`
  query {
    contentfulHomePage {
      years
    }
    allContentfulWork(sort: { fields: artworkDate, order: DESC }) {
      nodes {
        id
        slug
        artworkDate
        artworkTitle
        artworkImages {
          description
          gatsbyImageData(placeholder: BLURRED)
          id
        }
      }
    }
  }
`

export const Head = () => <Seo title="Artworks" />

export default Artworks

