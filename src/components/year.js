import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const query = graphql`
  {
    allContentfulExhibition(
      sort: { exhibitionStartDate: DESC }
    ) {
      nodes {
        id
        slug
        exhibitionTitle
        exhibitionLocation
        exhibitionOrganizer
        exhibitionStartDate
        exhibitionEndDate
        exhibitionImages {
          id
          gatsbyImageData(placeholder: BLURRED)
          description
        }
        worksInExhibition {
          artworkImages {
            id
            gatsbyImageData(placeholder: BLURRED)
            description
          }
        }
      }
    }
  }
`

const Year = ({ year }) => {
  const data = useStaticQuery(query)
  const exhibits = data.allContentfulExhibition.nodes
  return (
    <>
      <article className="exhibit-container fade-in">
        {exhibits.map(exhibit => {
          const exhibitYear = new Date(
            exhibit.exhibitionStartDate
          ).getFullYear()
          if (exhibitYear === year) {
            const slug = exhibit.slug
            return (
              <Link
                key={exhibit.id}
                to={`/exhibitions/${slug}`}
                className="exhibit-link"
              >
                <div className="exhibit-text">
                  <div className="exhibit-title">
                    {exhibit.exhibitionTitle}
                  </div>
                  <div className="exhibit-location">
                    {exhibit.exhibitionLocation}
                    {exhibit.exhibitionOrganizer && (
                      <span>, organized by {exhibit.exhibitionOrganizer}</span>
                    )}
                  </div>
                  <div className="exhibit-dates">
                    {new Date(exhibit.exhibitionStartDate).toLocaleString(
                      "default",
                      {
                        month: "long",
                        day: "numeric",
                      }
                    )}{" "}
                    -{" "}
                    {new Date(exhibit.exhibitionEndDate).toLocaleString(
                      "default",
                      {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      }
                    )}
                  </div>
                </div>
              </Link>
            )
          } else {
            return null
          }
        })}
      </article>
    </>
  )
}

export default Year
