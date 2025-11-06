/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

const React = require("react")

exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: `en` })
  
  // Add critical resource hints for faster page loading
  setHeadComponents([
    <link
      key="preconnect-contentful"
      rel="preconnect"
      href="https://images.ctfassets.net"
      crossOrigin="anonymous"
    />,
    <link
      key="dns-prefetch-contentful"
      rel="dns-prefetch"
      href="https://images.ctfassets.net"
    />,
  ])
}
