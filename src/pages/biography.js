import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Seo from "../components/seo"

const Biography = ({ data }) => {
  const bioRichText = data.contentfulBiographyPage.cv
  const cvPdf = data.contentfulBiographyPage.cvPdf.url

  const renderOptions = {
    renderText: text => {
      return text.split("\n").reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment]
      }, [])
    },
  }

  return (
    <Layout>
      <section className="bio-page">
        <div className="bio-page-inner">
          <div className="bio-page-toolbar">
            <a href={cvPdf} target="_blank" rel="noreferrer" className="cv-button">
              View as PDF
            </a>
          </div>
          <div className="bio-rich-text">{renderRichText(bioRichText, renderOptions)}</div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    contentfulBiographyPage {
      cv {
        raw
      }
      cvPdf {
        url
      }
    }
  }
`
export const Head = () => <Seo title="Biography" />

export default Biography
