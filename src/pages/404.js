import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const NotFoundPage = () => {
  return (
    <main>
      <StaticImage src='../../static/HoldTML-logo.jpg'></StaticImage>
      <h1>Page not found</h1>
      <p >
        Perdon, no pudimos encontrar este sitio.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Volver</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
